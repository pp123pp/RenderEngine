define([
    "js/Webgl/Shader",
    "js/Webgl/CONSTANTS",
    "js/Webgl/UniformUtils"],
    function (
        Shader,
        CONSTANTS,
        UniformUtils) {
    /**
     * 创建着色器，并返回程序对象等
     * @param gl
     * @param vsSource
     * @param fsSource
     * @constructor
     */
    function Program(gl, vsSource, fsSource) {
        var i;

        var vShader, fShader;

        var ownVertexShader = false;
        var ownFragmentShader = false;
        if (typeof vsSource === "string") {
            vShader = new Shader(gl, gl.VERTEX_SHADER, vsSource);
            //顶点着色器状态
            ownVertexShader = true;
        } else {
            vShader = vsSource;
        }

        if (typeof fsSource === "string") {
            //生成片元着色器
            fShader = new Shader(gl, gl.FRAGMENT_SHADER, fsSource);
            //片元着色器状态
            ownFragmentShader = true;
        } else {
            fShader = fsSource;
        }

        //创建程序对象
        var program = gl.createProgram();
        //分配着色器
        gl.attachShader(program, vShader.shader);
        gl.attachShader(program, fShader.shader);

        //着色器连接
        gl.linkProgram(program);

        //连接检查
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error(gl.getProgramInfoLog(program));
        }

        //释放着色器
        if (ownVertexShader) {
            vShader.delete();
        }

        if (ownFragmentShader) {
            fShader.delete();
        }

        this.gl = gl;
        this.program = program;
        //储存Uniform变量
        this.uniforms = {};
        //储存uniform块
        this.uniformBlocks = {};
        this.uniformBlockBindings = {};

        //得到在该Program中激活的uniform变量的数量
        var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);

        for (i = 0; i < numUniforms; ++i) {
            /*
            getActiveUniform: 返回在该索引处的uniform变量的信息
            size, type, name
             */
            var uniformInfo = gl.getActiveUniform(program, i);

            //返回uniform变量的存储位置
            var uniformHandle = gl.getUniformLocation(program, uniformInfo.name);

            var UniformClass = null;

            //返回该uniform变量的类型
            var type = uniformInfo.type;

            var numElements = uniformInfo.size;

            //用于将GLSL类型转换为存储大小
            switch (type) {
                case CONSTANTS.INT:
                case CONSTANTS.SAMPLER_2D:
                case CONSTANTS.INT_SAMPLER_2D:
                case CONSTANTS.UNSIGNED_INT_SAMPLER_2D:
                case CONSTANTS.SAMPLER_2D_SHADOW:
                case CONSTANTS.SAMPLER_2D_ARRAY:
                case CONSTANTS.INT_SAMPLER_2D_ARRAY:
                case CONSTANTS.UNSIGNED_INT_SAMPLER_2D_ARRAY:
                case CONSTANTS.SAMPLER_2D_ARRAY_SHADOW:
                case CONSTANTS.SAMPLER_CUBE:
                case CONSTANTS.INT_SAMPLER_CUBE:
                case CONSTANTS.UNSIGNED_INT_SAMPLER_CUBE:
                case CONSTANTS.SAMPLER_CUBE_SHADOW:
                case CONSTANTS.SAMPLER_3D:
                case CONSTANTS.INT_SAMPLER_3D:
                case CONSTANTS.UNSIGNED_INT_SAMPLER_3D:
                case CONSTANTS.UNSIGNED_INT:
                case CONSTANTS.FLOAT:
                    UniformClass = numElements > 1 ? UniformUtils.MultiNumericUniform : UniformUtils.SingleComponentUniform;
                    break;
                case CONSTANTS.BOOL:
                    UniformClass = numElements > 1 ? UniformUtils.MultiBoolUniform : UniformUtils.SingleComponentUniform;
                    break;
                case CONSTANTS.FLOAT_VEC2:
                case CONSTANTS.INT_VEC2:
                case CONSTANTS.UNSIGNED_INT_VEC2:
                case CONSTANTS.FLOAT_VEC3:
                case CONSTANTS.INT_VEC3:
                case CONSTANTS.UNSIGNED_INT_VEC3:
                case CONSTANTS.FLOAT_VEC4:
                case CONSTANTS.INT_VEC4:
                case CONSTANTS.UNSIGNED_INT_VEC4:
                    UniformClass = UniformUtils.MultiNumericUniform;
                    break;
                case CONSTANTS.BOOL_VEC2:
                case CONSTANTS.BOOL_VEC3:
                case CONSTANTS.BOOL_VEC4:
                    UniformClass = UniformUtils.MultiBoolUniform;
                    break;
                case CONSTANTS.FLOAT_MAT2:
                case CONSTANTS.FLOAT_MAT3:
                case CONSTANTS.FLOAT_MAT4:
                case CONSTANTS.FLOAT_MAT2x3:
                case CONSTANTS.FLOAT_MAT2x4:
                case CONSTANTS.FLOAT_MAT3x2:
                case CONSTANTS.FLOAT_MAT3x4:
                case CONSTANTS.FLOAT_MAT4x2:
                case CONSTANTS.FLOAT_MAT4x3:
                    UniformClass = UniformUtils.MatrixUniform;
                    break;
                default:
                    console.error("Unrecognized type for uniform ", uniformInfo.name);
                    break;
            }

            this.uniforms[uniformInfo.name] = new UniformClass(gl, uniformHandle, type, numElements);
        }

        //得到Uniform块中激活的uniform变量的个数
        var numUniformBlocks = gl.getProgramParameter(program, gl.ACTIVE_UNIFORM_BLOCKS);

        for (i = 0; i < numUniformBlocks; ++i) {

            //得到Uniform块中指定索引的名字
            var blockName = gl.getActiveUniformBlockName(this.program, i);

            /*
            要对uniform块中的uniform变量进行初始化，那么就要找到块在着色器程序中的索引位置
            getUniformBlockIndex: 返回this.program中名称为blockName块的索引值
             */
            var blockIndex = gl.getUniformBlockIndex(this.program, blockName);

            //保存在uniformBlocks中
            this.uniformBlocks[blockName] = blockIndex;
        }
    }

        Object.assign( Program.prototype, {
            constructor: Program,

            //删除该程序对象
            delete: function () {
                if(this.program) {
                    this.gl.deleteProgram(this.program);
                    this.program = null;
                }
            },

            // Set the value of a uniform.
            uniform: function(name, value) {
                this.uniforms[name].set(value);
            },

            uniformBlock: function(name, base) {
                if (this.uniformBlockBindings[name] !== base) {
                    this.gl.uniformBlockBinding(this.program, this.uniformBlocks[name], base);
                    this.uniformBlockBindings[name] = base;
                }

            }
        });

    return Program;
});
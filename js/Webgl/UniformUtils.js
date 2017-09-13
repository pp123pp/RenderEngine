define(['js/Webgl/CONSTANTS'],function (CONSTANTS) {


    var UNIFORM_FUNC_NAME = {};
    UNIFORM_FUNC_NAME[CONSTANTS.BOOL] = "uniform1i";
    UNIFORM_FUNC_NAME[CONSTANTS.INT] = "uniform1i";
    UNIFORM_FUNC_NAME[CONSTANTS.SAMPLER_2D] = "uniform1i";
    UNIFORM_FUNC_NAME[CONSTANTS.INT_SAMPLER_2D] = "uniform1i";
    UNIFORM_FUNC_NAME[CONSTANTS.UNSIGNED_INT_SAMPLER_2D] = "uniform1i";
    UNIFORM_FUNC_NAME[CONSTANTS.SAMPLER_2D_SHADOW] = "uniform1i";
    UNIFORM_FUNC_NAME[CONSTANTS.SAMPLER_2D_ARRAY] = "uniform1i";
    UNIFORM_FUNC_NAME[CONSTANTS.INT_SAMPLER_2D_ARRAY] = "uniform1i";
    UNIFORM_FUNC_NAME[CONSTANTS.UNSIGNED_INT_SAMPLER_2D_ARRAY] = "uniform1i";
    UNIFORM_FUNC_NAME[CONSTANTS.SAMPLER_2D_ARRAY_SHADOW] = "uniform1i";
    UNIFORM_FUNC_NAME[CONSTANTS.SAMPLER_CUBE] = "uniform1i";
    UNIFORM_FUNC_NAME[CONSTANTS.INT_SAMPLER_CUBE] = "uniform1i";
    UNIFORM_FUNC_NAME[CONSTANTS.UNSIGNED_INT_SAMPLER_CUBE] = "uniform1i";
    UNIFORM_FUNC_NAME[CONSTANTS.SAMPLER_CUBE_SHADOW] = "uniform1i";
    UNIFORM_FUNC_NAME[CONSTANTS.SAMPLER_3D] = "uniform1i";
    UNIFORM_FUNC_NAME[CONSTANTS.INT_SAMPLER_3D] = "uniform1i";
    UNIFORM_FUNC_NAME[CONSTANTS.UNSIGNED_INT_SAMPLER_3D] = "uniform1i";
    UNIFORM_FUNC_NAME[CONSTANTS.UNSIGNED_INT] = "uniform1ui";
    UNIFORM_FUNC_NAME[CONSTANTS.FLOAT] = "uniform1f";
    UNIFORM_FUNC_NAME[CONSTANTS.FLOAT_VEC2] = "uniform2f";
    UNIFORM_FUNC_NAME[CONSTANTS.FLOAT_VEC3] = "uniform3f";
    UNIFORM_FUNC_NAME[CONSTANTS.FLOAT_VEC4] = "uniform4f";
    UNIFORM_FUNC_NAME[CONSTANTS.INT_VEC2] = "uniform2i";
    UNIFORM_FUNC_NAME[CONSTANTS.INT_VEC3] = "uniform3i";
    UNIFORM_FUNC_NAME[CONSTANTS.INT_VEC4] = "uniform4i";
    UNIFORM_FUNC_NAME[CONSTANTS.UNSIGNED_INT_VEC2] = "uniform2ui";
    UNIFORM_FUNC_NAME[CONSTANTS.UNSIGNED_INT_VEC3] = "uniform3ui";
    UNIFORM_FUNC_NAME[CONSTANTS.UNSIGNED_INT_VEC4] = "uniform4ui";
    UNIFORM_FUNC_NAME[CONSTANTS.BOOL_VEC2] = "uniform2i";
    UNIFORM_FUNC_NAME[CONSTANTS.BOOL_VEC3] = "uniform3i";
    UNIFORM_FUNC_NAME[CONSTANTS.BOOL_VEC4] = "uniform4i";
    UNIFORM_FUNC_NAME[CONSTANTS.FLOAT_MAT2] = "uniformMatrix2fv";
    UNIFORM_FUNC_NAME[CONSTANTS.FLOAT_MAT3] = "uniformMatrix3fv";
    UNIFORM_FUNC_NAME[CONSTANTS.FLOAT_MAT4] = "uniformMatrix4fv";
    UNIFORM_FUNC_NAME[CONSTANTS.FLOAT_MAT2x3] = "uniformMatrix2x3fv";
    UNIFORM_FUNC_NAME[CONSTANTS.FLOAT_MAT2x4] = "uniformMatrix2x4fv";
    UNIFORM_FUNC_NAME[CONSTANTS.FLOAT_MAT3x2] = "uniformMatrix3x2fv";
    UNIFORM_FUNC_NAME[CONSTANTS.FLOAT_MAT3x4] = "uniformMatrix3x4fv";
    UNIFORM_FUNC_NAME[CONSTANTS.FLOAT_MAT4x2] = "uniformMatrix4x2fv";
    UNIFORM_FUNC_NAME[CONSTANTS.FLOAT_MAT4x3] = "uniformMatrix4x3fv";

    var UNIFORM_COMPONENT_COUNT = {};
    UNIFORM_COMPONENT_COUNT[CONSTANTS.BOOL] = 1;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.INT] = 1;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.SAMPLER_2D] = 1;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.INT_SAMPLER_2D] = 1;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.UNSIGNED_INT_SAMPLER_2D] = 1;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.SAMPLER_2D_SHADOW] = 1;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.SAMPLER_2D_ARRAY] = 1;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.INT_SAMPLER_2D_ARRAY] = 1;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.UNSIGNED_INT_SAMPLER_2D_ARRAY] = 1;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.SAMPLER_2D_ARRAY_SHADOW] = 1;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.SAMPLER_CUBE] = 1;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.INT_SAMPLER_CUBE] = 1;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.UNSIGNED_INT_SAMPLER_CUBE] = 1;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.SAMPLER_CUBE_SHADOW] = 1;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.SAMPLER_3D] = 1;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.INT_SAMPLER_3D] = 1;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.UNSIGNED_INT_SAMPLER_3D] = 1;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.UNSIGNED_INT] = 1;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT] = 1;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT_VEC2] = 2;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT_VEC3] = 3;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT_VEC4] = 4;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.INT_VEC2] = 2;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.INT_VEC3] = 3;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.INT_VEC4] = 4;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.UNSIGNED_INT_VEC2] = 2;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.UNSIGNED_INT_VEC3] = 3;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.UNSIGNED_INT_VEC4] = 4;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.BOOL_VEC2] = 2;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.BOOL_VEC3] = 3;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.BOOL_VEC4] = 4;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT_MAT2] = 4;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT_MAT3] = 9;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT_MAT4] = 16;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT_MAT2x3] = 6;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT_MAT2x4] = 8;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT_MAT3x2] = 6;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT_MAT3x4] = 12;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT_MAT4x2] = 8;
    UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT_MAT4x3] = 12;

    var UNIFORM_CACHE_CLASS = {};
    UNIFORM_CACHE_CLASS[CONSTANTS.INT] = Int32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.SAMPLER_2D] = Int32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.INT_SAMPLER_2D] = Int32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.UNSIGNED_INT_SAMPLER_2D] = Int32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.SAMPLER_2D_SHADOW] = Int32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.SAMPLER_2D_ARRAY] = Int32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.INT_SAMPLER_2D_ARRAY] = Int32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.UNSIGNED_INT_SAMPLER_2D_ARRAY] = Int32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.SAMPLER_2D_ARRAY_SHADOW] = Int32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.SAMPLER_CUBE] = Int32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.INT_SAMPLER_CUBE] = Int32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.UNSIGNED_INT_SAMPLER_CUBE] = Int32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.SAMPLER_CUBE_SHADOW] = Int32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.SAMPLER_3D] = Int32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.INT_SAMPLER_3D] = Int32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.UNSIGNED_INT_SAMPLER_3D] = Int32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.UNSIGNED_INT] = Uint32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.FLOAT] = Float32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.FLOAT_VEC2] = Float32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.FLOAT_VEC3] = Float32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.FLOAT_VEC4] = Float32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.INT_VEC2] = Int32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.INT_VEC3] = Int32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.INT_VEC4] = Int32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.UNSIGNED_INT_VEC2] = Uint32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.UNSIGNED_INT_VEC3] = Uint32Array;
    UNIFORM_CACHE_CLASS[CONSTANTS.UNSIGNED_INT_VEC4] = Uint32Array;

    function SingleComponentUniform(gl, location, type) {
        this.gl = gl;

        //该uniform变量的存储位置
        this.location = location;

        //该uniform变量的数据类型,依据这个类型,最终将数据写入uniform变量中
        this.glFuncName = UNIFORM_FUNC_NAME[type];
        this.cache = type === CONSTANTS.BOOL ? false : 0;
    }

    //将数据写入uniform变量中
    SingleComponentUniform.prototype.set = function(value) {
        if (this.cache !== value) {
            this.gl[this.glFuncName](this.location, value);
            this.cache = value;
        }
    };

    function MultiNumericUniform(gl, location, type, count) {
        this.gl = gl;
        this.location = location;
        this.glFuncName = UNIFORM_FUNC_NAME[type] + "v";
        this.count = count;
        this.cache = new UNIFORM_CACHE_CLASS[type](UNIFORM_COMPONENT_COUNT[type] * count);
    }

    MultiNumericUniform.prototype.set = function(value) {
        for (var i = 0, len = value.length; i < len; ++i) {
            if (this.cache[i] !== value[i]) {
                this.gl[this.glFuncName](this.location, value);
                this.cache.set(value);
                return;
            }
        }
    };

    function MultiBoolUniform(gl, location, type, count) {
        this.gl = gl;
        this.location = location;
        this.glFuncName = UNIFORM_FUNC_NAME[type] + "v";
        this.count = count;
        this.cache = new Array(UNIFORM_COMPONENT_COUNT[type] * count).fill(false);
    }

    MultiBoolUniform.prototype.set = function(value) {
        for (var i = 0, len = value.length; i < len; ++i) {
            if (this.cache[i] !== value[i]) {
                this.gl[this.glFuncName](this.location, value);
                for (var j = i; j < len; j++) {
                    this.cache[j] = value[j];
                }
                return;
            }
        }
    };

    function MatrixUniform(gl, location, type, count) {
        this.gl = gl;
        //该uniform变量的存储位置
        this.location = location;

        this.glFuncName = UNIFORM_FUNC_NAME[type];
        this.count = count;
        this.cache = new Float32Array(UNIFORM_COMPONENT_COUNT[type] * count);
    }

    MatrixUniform.prototype.set = function(value) {
        for (var i = 0, len = value.length; i < len; ++i) {
            if (this.cache[i] !== value[i]) {
                this.gl[this.glFuncName](this.location, false, value);
                this.cache.set(value);
                return;
            }
        }
    };



    var UniformUtils= {
        SingleComponentUniform: SingleComponentUniform,

        MultiNumericUniform: MultiNumericUniform,

        MultiBoolUniform: MultiBoolUniform,

        MatrixUniform: MatrixUniform

    };


    return UniformUtils
});
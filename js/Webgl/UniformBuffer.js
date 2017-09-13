define([
    'js/Webgl/CONSTANTS'
    ],
    function (CONSTANTS) {

    //将
    function UniformBuffer(gl, layout, usage) {
        this.gl = gl;

        //创建缓冲区
        this.buffer = gl.createBuffer();
        this.dataViews = {};

        //在读取UBO中每个uniform变量时的偏移量
        this.offsets = new Array(layout.length);

        //用于保存UBO中,每个uniform变量的长度
        this.sizes = new Array(layout.length);
        //用于保存UBO中,每个uniform变量的数据类型
        this.types = new Array(layout.length);
        this.size = 0;
        this.usage = usage || gl.DYNAMIC_DRAW;

        //计算所有传入数据的长度，数据类型
        for (var i = 0, len = layout.length; i < len; ++i) {
            var type = layout[i];
            switch(type) {
                case CONSTANTS.FLOAT:
                case CONSTANTS.INT:
                case CONSTANTS.UNSIGNED_INT:
                case CONSTANTS.BOOL:
                    this.offsets[i] = this.size;
                    this.sizes[i] = 1;

                    if (type === CONSTANTS.INT) {
                        this.types[i] = CONSTANTS.INT;
                    } else if (this.type === CONSTANTS.UNSIGNED_INT) {
                        this.types[i] = CONSTANTS.UNSIGNED_INT;
                    } else {
                        this.types[i] = CONSTANTS.FLOAT;
                    }

                    this.size++;
                    break;
                case CONSTANTS.FLOAT_VEC2:
                case CONSTANTS.INT_VEC2:
                case CONSTANTS.UNSIGNED_INT_VEC2:
                case CONSTANTS.BOOL_VEC2:
                    this.size += this.size % 2;
                    this.offsets[i] = this.size;
                    this.sizes[i] = 2;

                    if (type === CONSTANTS.INT_VEC2) {
                        this.types[i] = CONSTANTS.INT;
                    } else if (this.type === CONSTANTS.UNSIGNED_INT_VEC2) {
                        this.types[i] = CONSTANTS.UNSIGNED_INT;
                    } else {
                        this.types[i] = CONSTANTS.FLOAT;
                    }

                    this.size += 2;
                    break;
                case CONSTANTS.FLOAT_VEC3:
                case CONSTANTS.INT_VEC3:
                case CONSTANTS.UNSIGNED_INT_VEC3:
                case CONSTANTS.BOOL_VEC3:
                case CONSTANTS.FLOAT_VEC4:
                case CONSTANTS.INT_VEC4:
                case CONSTANTS.UNSIGNED_INT_VEC4:
                case CONSTANTS.BOOL_VEC4:
                    this.size += (4 - this.size % 4) % 4;
                    this.offsets[i] = this.size;
                    this.sizes[i] = 4;

                    if (type === CONSTANTS.INT_VEC4 || type === CONSTANTS.INT_VEC3) {
                        this.types[i] = CONSTANTS.INT;
                    } else if (this.type === CONSTANTS.UNSIGNED_INT_VEC4 || this.type === CONSTANTS.UNSIGNED_INT_VEC3) {
                        this.types[i] = CONSTANTS.UNSIGNED_INT;
                    } else {
                        this.types[i] = CONSTANTS.FLOAT;
                    }

                    this.size += 4;
                    break;
                case CONSTANTS.FLOAT_MAT2:
                case CONSTANTS.FLOAT_MAT2x3:
                case CONSTANTS.FLOAT_MAT2x4:
                    this.size += (4 - this.size % 4) % 4;
                    this.offsets[i] = this.size;
                    this.sizes[i] = 8;
                    this.types[i] = CONSTANTS.FLOAT;

                    this.size += 8;
                    break;
                case CONSTANTS.FLOAT_MAT3:
                case CONSTANTS.FLOAT_MAT3x2:
                case CONSTANTS.FLOAT_MAT3x4:
                    this.size += (4 - this.size % 4) % 4;
                    this.offsets[i] = this.size;
                    this.sizes[i] = 12;
                    this.types[i] = CONSTANTS.FLOAT;

                    this.size += 12;
                    break;
                case CONSTANTS.FLOAT_MAT4:
                case CONSTANTS.FLOAT_MAT4x2:
                case CONSTANTS.FLOAT_MAT4x3:
                    //如果传入的数据为MAT4
                    this.size += (4 - this.size % 4) % 4;
                    this.offsets[i] = this.size;
                    //如果该数据类型为4*4矩阵
                    this.sizes[i] = 16;

                    //内部的数据类型
                    this.types[i] = CONSTANTS.FLOAT;

                    //向前偏移16个步长
                    this.size += 16;
                    break;
                default:
                    console.error("Unsupported type for uniform buffer.");
            }
        }

        this.data = new Float32Array(this.size);
        this.dataViews[CONSTANTS.FLOAT] = this.data;
        this.dataViews[CONSTANTS.INT] = new Int32Array(this.data.buffer);
        this.dataViews[CONSTANTS.UNSIGNED_INT] = new Uint32Array(this.data.buffer);

        /*
        如果uniform块是全部使用缓存来存储，那么可以使用gl.bindBufferBase(target, index, buffer)
        将缓存对象与这个uniform块相关联
        gl.bindBufferBase(target, index, buffer): 将缓存对象buffer,与索引名为index的命名uniform块关联起来
        target可以是gl.UNIFORM_BUFFER(对于uniform块)或者gl.TRANSFORM_FEEDBACK_BUFFER(用于transform feedback)
         */
        this.gl.bindBufferBase(this.gl.UNIFORM_BUFFER, 0, this.buffer);
        //将数据写入缓冲区
        this.gl.bufferData(this.gl.UNIFORM_BUFFER, this.size * 4, this.usage);
        this.gl.bindBufferBase(this.gl.UNIFORM_BUFFER, 0, null);


    }

        Object.assign(UniformBuffer.prototype, {
            constructor: UniformBuffer,

            set: function (index, value) {
                var view = this.dataViews[this.types[index]];

                if (this.sizes[index] === 1)  {
                    view[this.offsets[index]] = value;
                } else {
                    view.set(value, this.offsets[index]);
                }

                return this;
            },

            /**
             * 将uniform Block中的数据发送到GPU中
             * @returns {update}
             */
            update: function() {
                //uniform块是全部使用缓存来存储,因此可以调用gl.bindBufferBase()
                this.gl.bindBufferBase(this.gl.UNIFORM_BUFFER, 0, this.buffer);

                //bufferSubData: 会使用之前已经分配过的内存来存放数据。
                this.gl.bufferSubData(this.gl.UNIFORM_BUFFER, 0, this.data);
                this.gl.bindBufferBase(this.gl.UNIFORM_BUFFER, 0, null);

                return this;
            },

            /*
            删除uniform buffer
             */
            delete: function() {
                if (this.buffer) {
                    this.gl.deleteBuffer(this.buffer);
                    this.buffer = null;
                }
            },

            bind: function (base) {
                this.gl.bindBufferBase(this.gl.UNIFORM_BUFFER, base, this.buffer);

                return this;
            }
        });











        return UniformBuffer;
});
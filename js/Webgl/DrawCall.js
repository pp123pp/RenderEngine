define([
    'js/Webgl/CONSTANTS'
],
    function (CONSTANTS) {
    function DrawCall(gl, appState, program, vertexArray, primitive) {
        this.gl = gl;
        this.currentProgram = program;
        this.currentVertexArray = vertexArray;
        this.appState = appState;

        //保存uniform变量的索引
        this.uniformIndices = {};

        //保存uniform变量的名称
        this.uniformNames = new Array(CONSTANTS.WEBGL_INFO.MAX_UNIFORMS);

        //保存uniform变量的值
        this.uniformValues = new Array(CONSTANTS.WEBGL_INFO.MAX_UNIFORMS);

        //uniform变量的数量:初始值为0
        this.uniformCount = 0;

        //保存uniformBlock
        this.uniformBuffers = new Array(CONSTANTS.WEBGL_INFO.MAX_UNIFORM_BUFFERS);

        //uniformBlock的名字
        this.uniformBlockNames = new Array(CONSTANTS.WEBGL_INFO.MAX_UNIFORM_BUFFERS);

        //uniformBlock的存储索引
        this.uniformBlockBases = {};

        //uniformBlock的数量
        this.uniformBlockCount = 0;

        this.primitive = primitive !== undefined ? primitive : CONSTANTS.TRIANGLES;
    }

    Object.assign(DrawCall.prototype, {

        constructor: DrawCall,

        /**
         *uniform变量赋值
         * @param name    uniform变量的名称
         * @param value   uniform变量的值
         * @returns {uniform}
         */
        uniform: function (name, value) {

            var index = this.uniformIndices[name];

            if (index === undefined) {

                index = this.uniformCount++;

                this.uniformIndices[name] = index;

                this.uniformNames[index] = name;

            }

            this.uniformValues[index] = value;

            return this;
        },

        uniformBlock: function (name, buffer) {

            var base = this.uniformBlockBases[name];

            if (base === undefined) {

                base = this.uniformBlockCount++;

                this.uniformBlockBases[name] = base;

                this.uniformBlockNames[base] = name;
            }

            this.uniformBuffers[base] = buffer;

            return this;
        },

        draw: function () {

            var state = this.appState;

            var uniformNames = this.uniformNames;

            var uniformValues = this.uniformValues;

            var uniformBuffers = this.uniformBuffers;

            var uniformBlockNames = this.uniformBlockNames;

            if (state.program !== this.currentProgram) {

                this.gl.useProgram(this.currentProgram.program);

                state.program = this.currentProgram;
            }


            for (var uIndex = 0; uIndex < this.uniformCount; ++uIndex) {

                this.currentProgram.uniform(uniformNames[uIndex], uniformValues[uIndex]);

            }

            for (var base = 0; base < this.uniformBlockCount; ++base) {

                this.currentProgram.uniformBlock(uniformBlockNames[base], base);

                uniformBuffers[base].bind(base);

            }

            if (state.vertexArray !== this.currentVertexArray) {

                this.currentVertexArray.bind();

                state.vertexArray = this.currentVertexArray;

            }

            if (this.currentVertexArray.instanced) {

                if (this.currentVertexArray.indexed) {

                    this.gl.drawElementsInstanced(this.primitive, this.currentVertexArray.numElements, this.currentVertexArray.indexType, 0, this.currentVertexArray.numInstances);

                } else {

                    this.gl.drawArraysInstanced(this.primitive, 0, this.currentVertexArray.numElements, this.currentVertexArray.numInstances);

                }

            } else if (this.currentVertexArray.indexed) {

                this.gl.drawElements(this.primitive, this.currentVertexArray.numElements, this.currentVertexArray.indexType, 0);

            } else {

                this.gl.drawArrays(this.primitive, 0, this.currentVertexArray.numElements);

            }

        }
    });

    return DrawCall;

})
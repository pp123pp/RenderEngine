define(function () {
    //创建一个VAO对象
    function VertexArray(gl) {
        this.gl = gl;

        //创建VAO对象
        this.vertexArray = gl.createVertexArray();

        this.numElements = 0;
        this.indexType = null;
        this.instancedBuffers = 0;
        this.indexed = false;
        this.numInstances = 0;
    }

    Object.assign(VertexArray.prototype, {
        constructor: VertexArray,

        delete: function () {
            if(this.vertexArray){
                this.gl.deleteVertexArray(this.vertexArray);
                this.vertexArray = null;
            }
            this.bindVertexArray(null);

            return this;
        },

        bind: function () {
            this.gl.bindVertexArray(this.vertexArray);

            return this;
        },

        //加入索引数据
        indexBuffer: function (vertexBuffer) {
            //设置当前工作VAO
            this.gl.bindVertexArray(this.vertexArray);
            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, vertexBuffer.buffer);

            this.numElements = vertexBuffer.numItems * 3;
            this.indexType = vertexBuffer.type;
            this.indexed = true;

            this.gl.bindVertexArray(null);
            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);

            return this;

        },


        //将attribute buffer存入VAO中进行统一管理
        attributeBuffer: function (attributeIndex, vertexBuffer, instanced) {

            //设置当前工作VAO
            this.gl.bindVertexArray(this.vertexArray);

            //由于我们在VertexBuffer函数的最后进行的解除绑定，
            //因此，在这里需要重新进行绑定,才能进行数据写入操作
            this.gl.bindBuffer(vertexBuffer.binding, vertexBuffer.buffer);


            this.gl.vertexAttribPointer(
                attributeIndex,
                vertexBuffer.itemSize,
                vertexBuffer.type,
                false,
                0,
                0);

            this.gl.enableVertexAttribArray(attributeIndex);

            this.instanced = undefined;

            this.numElements = this.numElements || vertexBuffer.numItems;

            //解除绑定
            this.gl.bindVertexArray(null);
            this.gl.bindBuffer(vertexBuffer.binding, null);

            return this;
        }

    });

    return VertexArray;
});
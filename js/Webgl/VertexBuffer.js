define([
    "js/webgl/CONSTANTS"
],
    function (CONSTANTS) {

    function VertexBuffer(gl, type, itemSize, data, indexArray) {
        /*
        比如传入的是4个顶点的坐标数据,type为FLOAT,由于webgl为列主序,
        则这些数据为1列,因此
        numColumns = 1;
        数据的总长度dataLength = data.length = 12;
        这个数据所代表的项目数(即传入的顶点数,或者UV,或者法线数)为
        总长度 / (偏移量 * 列数)
         */

        var dataLength = data.length;

        this.gl = gl;

        //创建缓冲区
        this.buffer = gl.createBuffer();

        //保存其数据类型
        this.type = type;

        //数据的偏移量
        this.itemSize = itemSize;

        //保存传入数据所代表的个数(比如顶点个数,法线个数,uv个数)
        this.numItems = dataLength / itemSize;

        this.indexArray = !!indexArray;

        //绑定目标,默认通过顶点顺序进行绘制
        this.binding = this.indexArray ? gl.ELEMENT_ARRAY_BUFFER : gl.ARRAY_BUFFER;

        //绑定缓冲区
        gl.bindBuffer(this.binding, this.buffer);

        //写入缓冲区
        gl.bufferData(this.binding, data, this.gl.STATIC_DRAW);

        //解除绑定
        gl.bindBuffer(this.binding, null);

    }

        Object.assign(VertexBuffer.prototype, {
            constructor: function () {
                if (this.buffer) {
                    this.gl.deleteBuffer(this.buffer);
                    this.buffer = null;
                }
            }
        });




    return VertexBuffer
});
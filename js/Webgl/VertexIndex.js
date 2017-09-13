define([], function () {
    function VertexIndex(gl, data) {

        this.gl = gl;

        this.buffer = gl.createBuffer();

        this.binding = gl.ELEMENT_ARRAY_BUFFER;

        this.gl.bindBuffer(this.binding, this.buffer);
        this.gl.bufferData(this.binding, data, this.gl.STATIC_DRAW);

        //this.gl.bindBuffer(this.binding, null);
    }

    return VertexIndex
});
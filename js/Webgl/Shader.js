define(function () {
    function Shader(gl, type, source) {
        this.gl = gl;

        //创建着色器对象
        this.shader = gl.createShader(type);

        //载入着色器源码
        gl.shaderSource(this.shader, source);

        //编译着色器
        gl.compileShader(this.shader);

        //编译检查
        if (!gl.getShaderParameter(this.shader, gl.COMPILE_STATUS)) {
            var i, lines;

            console.error(gl.getShaderInfoLog(this.shader));
            lines = source.split("\n");
            for (i = 0; i < lines.length; ++i) {
                console.error((i + 1) + ":", lines[i]);
            }
        }
    }

    Object.assign( Shader.prototype, {
        constructor: Shader,

        delete: function () {
            if(this.shader){
                this.gl.deleteShader(this.shader);
                this.shader = null;
            }
        }
    });
    return Shader;
});
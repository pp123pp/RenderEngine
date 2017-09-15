define([
    'js/Webgl/CONSTANTS',
    'js/Webgl/Program'
],function (
    CONSTANTS,
    Program
) {
    function WebGL2Renderer( canvas, contextAttributes ) {

        this.canvas = canvas;
        this.gl = canvas.getContext("webgl2", contextAttributes);

        //实际的绘图缓冲区的宽高
        this.width = this.gl.drawingBufferWidth;
        this.height = this.gl.drawingBufferHeight;

        this.state = {
            program: null,
            vertexArray: null,
            activeTexture: -1,
            textureCount: 0,
            freeTextureUnits: [],
            // TODO(Tarek): UBO state currently not tracked, due bug
            // with UBO state becoming corrupted between frames in Chrome
            // https://bugs.chromium.org/p/chromium/issues/detail?id=722060
            // Enable UBO state tracking when that's fixed.
            uniformBuffers: new Array(CONSTANTS.WEBGL_INFO.MAX_UNIFORM_BUFFERS),
            uniformBufferCount: 0,
            freeUniformBufferBases: []
        };

        this.clearBits = this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT| this.gl.STENCIL_BUFFER_BIT;

        this.setViewport(0, 0, this.width, this.height)
        
    }
    
    Object.assign( WebGL2Renderer.prototype, {
        constructor: WebGL2Renderer,

        render: function (scene, camera) {
            this.clear();

            renderObject(scene.children);
            
            function renderObject(objectArr) {
                var i, len;

                for(i=0, len=objectArr.length; i<len; i++){



                }
            }
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            


        },
        
        setViewport: function ( x, y, width, height ) {

            if (this.viewportWidth !== width || this.viewportHeight !== height ||
                this.viewportX !== x || this.viewportY !== y) {
                this.viewportX = x;
                this.viewportY = y;
                this.viewportWidth = width;
                this.viewportHeight = height;
                this.gl.viewport(x, y, this.viewportWidth, this.viewportHeight);
            }

            return this;
        },

        //设置清空缓冲区的颜色
        setClearColor: function ( r, g, b, a ) {
            this.gl.clearColor(r, g, b, a);
            return this;
        },

        //执行清空命令
        clear: function () {
            this.gl.clear(this.clearBits);
            return this;
        },

        //开启深度测试
        depthTest: function () {
            this.gl.enable(this.gl.DEPTH_TEST);
            return this;
        },

        //开启隐藏面裁剪
        cullBackfaces: function () {
            this.gl.enable(this.gl.CULL_FACE);
            return this;
        }
    });

    return WebGL2Renderer
});
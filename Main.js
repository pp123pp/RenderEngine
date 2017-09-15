require.config({
});

require([
        'js/Webgl/CONSTANTS',
        'js/Webgl/Program',
        'js/Webgl/WebGL2Renderer',
        'js/Webgl/VertexBuffer',
        'js/Webgl/VertexArray',
        'js/Webgl/UniformBuffer',
        'js/Webgl/DrawCall',
        'js/Geometry/BoxBufferGeometry',
        'js/Cameras/PerspectiveCamera',
        'js/Math/Matrix4',
        'js/Math/Vector3',
        'js/Secnes/Scene',
        'js/Materials/Material',
        'js/Materials/MeshPhongMaterial',
        'js/Objects/Mesh'],
    function(
        CONSTANTS,
        Program,
        WebGL2Renderer,
        VertexBuffer,
        VertexArray,
        UniformBuffer,
        DrawCall,
        BoxBufferGeometry,
        PerspectiveCamera,
        Matrix4,
        Vector3,
        Scene,
        Material,
        MeshPhongMaterial,
        Mesh
    ){

    App();
    function App() {
        var canvas = document.getElementById("gl-canvas");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        var scene = new Scene();



        var renderer = new WebGL2Renderer(canvas);
        renderer.setClearColor(0.0, 0.0, 0.0, 1.0);
        renderer.depthTest();

        var vertexShaderSource = document.getElementById('vertex').text.trim();
        var fragmentShaderSource = document.getElementById('fragment').text.trim();

        var program = new Program(renderer.gl, vertexShaderSource, fragmentShaderSource);

        var material = new MeshPhongMaterial();
        var boxGeometry = new BoxBufferGeometry(1, 1, 1);
        var box = new Mesh(boxGeometry, material);

        scene.add(box);

        //创建存储attribute变量的缓冲区，并向缓冲区中写入数据

        //存储坐标的缓冲区
        var positions = new VertexBuffer(
            renderer.gl,
            CONSTANTS.FLOAT,
            3,
            boxGeometry.attributes.position.array
        );

        var uv = new VertexBuffer(
            renderer.gl,
            CONSTANTS.FLOAT,
            2,
            boxGeometry.attributes.uv.array
        );

        var normals = new VertexBuffer(
            renderer.gl,
            CONSTANTS.FLOAT,
            3,
            boxGeometry.attributes.normal.array
        );

        var indices = new VertexBuffer(
            renderer.gl,
            CONSTANTS.UNSIGNED_SHORT,
            3,
            boxGeometry.index.array,
            true
        );


        //将存储attribute变量的缓冲区放入VAO中进行统一管理
        var boxArray = new VertexArray(renderer.gl)
            .attributeBuffer(0, positions)
            .attributeBuffer(1, uv)
            .attributeBuffer(2, normals)
            .indexBuffer(indices);

        //创建视图投影矩阵
        var aspect = window.innerWidth / window.innerHeight;

        var camera = new PerspectiveCamera(60, aspect, 1, 2000);

        camera.position = new Vector3(3, 3, 3);

        camera.lookAt(new Vector3(0, 0, 0));

        var projectionMatrix = camera.projectionMatrix;

        var cameraMatrix = camera.matrixWorldInverse;

        cameraMatrix.setPosition(new Vector3(3, 3, 3));

        var viewMatrix = new Matrix4().getInverse(cameraMatrix);

        var viewProjMatrix = new Matrix4().multiplyMatrices(projectionMatrix, viewMatrix);

        var modelMatrix = new Matrix4();

        modelMatrix.setPosition(new Vector3(0, 0, 0));

        modelMatrix = new Float32Array(modelMatrix.elements);

        var eyePosition = new Float32Array(camera.position.toArray());

        var lightPosition = new Float32Array([1, 1, 0.5]);

        var sceneUniformBuffer = new UniformBuffer(
            renderer.gl,[
            CONSTANTS.FLOAT_MAT4,
            CONSTANTS.FLOAT_VEC4,
            CONSTANTS.FLOAT_VEC4
        ])
            .set(0, new Float32Array(viewProjMatrix.elements))
            .set(1, eyePosition)
            .set(2, lightPosition)
            .update();


        var drawCall = new DrawCall(renderer.gl, renderer.state, program, boxArray)
            .uniformBlock("SceneUniforms", sceneUniformBuffer)
            .uniform("uModel", modelMatrix);


        function draw() {
            renderer.clear();
            drawCall.draw();

            requestAnimationFrame(draw);
        }

        requestAnimationFrame(draw);








    }





});
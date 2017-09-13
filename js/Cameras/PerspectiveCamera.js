define([
    "js/Math/_Math",
    "js/Math/Matrix4",
    "js/Cameras/Camera",
    "js/Core/Object3D"
], function (_Math, Matrix4, Camera, Object3D) {
    function PerspectiveCamera(fov, aspect, near, far) {

        Camera.call(this);

        this.type = 'PerspectiveCamera';

        this.fov = fov !== undefined ? fov : 50;
        this.zoom = 1;

        this.near = near !== undefined ? near : 0.1;
        this.far = far !== undefined ? far : 2000;

        this.aspect = aspect !== undefined ? aspect : 1;

        this.updateProjectionMatrix();

    }

    PerspectiveCamera.prototype = Object.assign( Object.create( Camera.prototype ), {

        constructor: PerspectiveCamera,

        isPerspectiveCamera: true,

        updateProjectionMatrix: function () {
            var near = this.near,
                top = near * Math.tan(
                    _Math.DEG2RAD * 0.5 * this.fov ) / this.zoom,
                height = 2 * top,
                width = this.aspect * height,
                left = - 0.5 * width;


            this.projectionMatrix.makePerspective( left, left + width, top, top - height, near, this.far );

        },

        lookAt: function () {

            var m1 = new Matrix4();


            return function lookAt(vector) {

                m1.lookAt(this.position, vector, this.up);

                this.matrixWorldInverse.copy(m1)


            }
        }(),
    });

    return PerspectiveCamera
});
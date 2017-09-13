define([
    'js/Math/Vector3',
    'js/Math/Matrix4',
    'js/Core/Object3D'
],function (Vector3, Matrix4, Object3D) {
    function Camera() {

        Object3D.call(this);

        this.type = 'Camera';

        this.matrixWorldInverse = new Matrix4();

        this.projectionMatrix = new Matrix4();

    }

    Camera.prototype = Object.assign( Object.create( Object3D.prototype ), {

        constructor: Camera,

        isCamera: true


    });

    return Camera;
});
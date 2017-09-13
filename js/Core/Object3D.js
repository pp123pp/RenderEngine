define([
    'js/Math/Matrix4',
    'js/Math/Vector3',
    'js/Math/Quaternion',
    "js/Core/EventDispatcher"
], function (
    Matrix4,
    Vector3,
    Quaternion,
    EventDispatcher) {

    function Object3D() {
        this.type = "Object3D";

        this.target = new Vector3(0, 0, 0);

        this.up = new Vector3(0, 1, 0);

        this.position = new Vector3(0, 0, 0);

        this.quaternion = new Quaternion();
    }

    Object.assign(Object3D.prototype, EventDispatcher.prototype, {
        constructor: Object3D,




    });

    return Object3D;

});
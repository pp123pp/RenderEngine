define([
    'js/Math/Matrix4',
    'js/Math/Vector3'
], function (
    Matrix4,
    Vector3) {

    function Geometry() {
        this.type = "Geometry";

        this.position = new Vector3(0, 0, 0);
        this.scale = new Vector3(1, 1, 1);
    }

});
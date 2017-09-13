define(function () {

    var _Math = {
        DEG2RAD: Math.PI / 180,
        RAD2DEG: 180 / Math.PI,

        //角度转弧度
        degToRad: function ( degrees ) {

            return degrees * _Math.DEG2RAD;

        },

        //弧度转角度
        radToDeg: function ( radians ) {

            return radians * _Math.RAD2DEG;

        },
    };



    return _Math;
});
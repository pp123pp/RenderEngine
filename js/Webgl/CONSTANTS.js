define(function () {
    //CONSTANTS
    var CONSTANTS = {};
    var canvas = document.createElement("canvas");
    var gl = canvas.getContext("webgl2");

    if (gl) {
        for (var enumName in gl) {
            if (enumName.match(/^[A-Z0-9_x]+$/) && typeof(gl[enumName]) === "number") {
                CONSTANTS[enumName] = gl[enumName];
            }
        }
    }

    CONSTANTS.TYPE_SIZE = {};
    CONSTANTS.TYPE_SIZE[gl.BYTE]              = 1;
    CONSTANTS.TYPE_SIZE[gl.UNSIGNED_BYTE]     = 1;
    CONSTANTS.TYPE_SIZE[gl.SHORT]             = 2;
    CONSTANTS.TYPE_SIZE[gl.UNSIGNED_SHORT]    = 2;
    CONSTANTS.TYPE_SIZE[gl.INT]               = 4;
    CONSTANTS.TYPE_SIZE[gl.UNSIGNED_INT]      = 4;
    CONSTANTS.TYPE_SIZE[gl.FLOAT]             = 4;

    CONSTANTS.WEBGL_INFO = {};
    CONSTANTS.WEBGL_INFO.MAX_TEXTURE_UNITS = gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    CONSTANTS.WEBGL_INFO.MAX_UNIFORM_BUFFERS = gl.getParameter(gl.MAX_UNIFORM_BUFFER_BINDINGS);

    CONSTANTS.DUMMY_OBJECT = {};

    return CONSTANTS;

});
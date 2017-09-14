define([
    'js/Materials/MaterialConstans',
    'js/Core/EventDispatcher'
], function (
    {NoColors, FrontSide, FlatShading, NormalBlending, LessEqualDepth, AddEquation, OneMinusSrcAlphaFactor, SrcAlphaFactor},
    EventDispatcher
) {

    function Material() {

        //console.log(FrontSide)
        this.side = FrontSide

    }

    Object.assign( Material.prototype, EventDispatcher.prototype, {
        isMaterial: true,
    });

    return Material

});
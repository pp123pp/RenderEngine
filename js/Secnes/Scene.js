define([
    'js/Core/Object3D'
], function (Object3D) {

    /*
    总算明白一点scene的概念了,好兴奋！！
     */

    function Scene() {
        Object3D.call( this );

        this.type = 'Scene';

        this.fog = null;

    }

    Scene.prototype = Object.assign( Object.create( Object3D.prototype), {

        constructor: Scene,



    });

    return Scene;


});
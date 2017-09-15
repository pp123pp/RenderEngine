define([
    'js/Core/Object3D'
], function (Object3D) {
    
    function Mesh(geometry, material) {

        if(!geometry || ! material) return;

        Object3D.call(this);

        this.type = 'Mesh';


        this.geometry = geometry;
        this.material = material;



    }

    Mesh.prototype = Object.assign( Object.create( Object3D.prototype ), {

        constructor: Mesh,

        isMesh: true,

        updateParameter: function () {

        }

    });

    return Mesh
    
});
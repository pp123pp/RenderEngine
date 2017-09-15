define([
    'js/Materials/Material',
    'js/Math/Color'
],function (
    Material,
    Color) {
    
    function MeshPhongMaterial(parameters) {

        Material.call(this);

        this.type = "MeshPhoneMaterial";

        this.color = new Color( 0xffffff );

        this.map = null;

        this.wireframe = false;

        this.vertexSource = document.getElementById('vertex').text.trim();
        this.fragmentSource = document.getElementById('fragment').text.trim();

    }

    MeshPhongMaterial.prototype = Object.create( Material.prototype );
    MeshPhongMaterial.prototype.constructor = MeshPhongMaterial;

    MeshPhongMaterial.prototype.isMeshPhongMaterial = true;


    return MeshPhongMaterial
});
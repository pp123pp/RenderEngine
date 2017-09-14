define([
    'js/Math/Matrix4',
    'js/Math/Vector3',
    'js/Core/EventDispatcher',
    'js/Core/BufferAttribute',
    'js/Utils'
], function (
    Matrix4,
    Vector3,
    EventDispatcher,
    {Uint32BufferAttribute, Uint16BufferAttribute},
    {arrayMax}) {

    function BufferGeometry() {

        this.type = "BufferGeometry";

        //保存顶点信息坐标,法线,UV,索引,最终在render函数中绘制出来
        this.attributes = {};

        //包围球,包围盒
        this.boundingBox = null;
        this.boundingSphere = null;

    }

    Object.assign( BufferGeometry.prototype, EventDispatcher.prototype, {
        
        isBufferGeometry: true,
        
        addAttribute: function ( name, attribute) {

            this.attributes[name] = attribute;

            return this;

        },
        
        setIndex: function (index) {

            if ( Array.isArray( index ) ) {

                this.index = new ( arrayMax( index ) > 65535 ? Uint32BufferAttribute : Uint16BufferAttribute )( index, 1 );

            } else {

                this.index = index;

            }

        }
        
    });


    return BufferGeometry






















});
define([
    'js/Math/Matrix4',
    'js/Math/Vector3',
    'js/Math/Euler',
    'js/Math/Quaternion',
    "js/Core/EventDispatcher"
], function (
    Matrix4,
    Vector3,
    Euler,
    Quaternion,
    EventDispatcher) {

    function Object3D() {

        this.type = "Object3D";

        this.parent = null;
        this.children = [];

        //构造模型矩阵的各项参数
        this.up = new Vector3(0, 1, 0);

        this.position = new Vector3(0, 0, 0);

        this.quaternion = new Quaternion();

        this.rotation = new Euler()
    }

    Object.assign(Object3D.prototype, EventDispatcher.prototype, {

        constructor: Object3D,

        //将Object加入Children数组中
        add: function ( object ) {

            /*if ( arguments.length > 1 ) {

                for ( var i = 0; i < arguments.length; i ++ ) {

                    this.add( arguments[ i ] );

                }

                return this;

            }

            if ( object === this ) {

                console.error( "Object3D.add: object can't be added as a child of itself.", object );
                return this;

            }

            if ( ( object && object.isObject3D ) ) {

                if ( object.parent !== null ) {

                    object.parent.remove( object );

                }

                object.parent = this;
                object.dispatchEvent( { type: 'added' } );

                this.children.push( object );

            } else {

                console.error( "Object3D.add: object not an instance of Object3D.", object );

            }*/

            this.children.push( object );

            return this;

        },

    });

    return Object3D;

});
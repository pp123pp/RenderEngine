define([], function () {

    /**
     * 用于将普通数组转换为类型化数组
     * @param array
     * @param itemSize
     * @param normalized
     * @constructor
     */
    function BufferAttribute( array, itemSize, normalized) {

        this.array = array;

        //表明多少个元素代表一个数据,例如:顶点坐标数据需要3个,UV数据需要2个
        this.itemSize = itemSize;

        /*
        用于保存这个数组中所代表的数据的个数,例如:如果传入的为顶点坐标数据,数组长度的15,
        则顶点个数(即count) = array.length / itemSize
         */
        this.count = array !== undefined ? array.length / itemSize : 0;

        //是否将数组内的元素归一化到[-1, 1]之间
        this.normalized = normalized === true;

    }


    Object.assign( BufferAttribute.prototype, {

        isBufferAttribute: true


    });


    function Uint16BufferAttribute( array, itemSize ) {

        BufferAttribute.call( this, new Uint16Array( array ), itemSize );

    }

    Uint16BufferAttribute.prototype = Object.create( BufferAttribute.prototype);
    Uint16BufferAttribute.prototype.constructor = Uint16BufferAttribute;


    function Uint32BufferAttribute( array, itemSize ) {

        BufferAttribute.call( this, new Uint32Array( array ), itemSize );

    }

    Uint32BufferAttribute.prototype = Object.create( BufferAttribute.prototype );
    Uint32BufferAttribute.prototype.constructor = Uint32BufferAttribute;




    function Float32BufferAttribute( array, itemSize ) {

        BufferAttribute.call( this, new Float32Array(array), itemSize );

    }

    Float32BufferAttribute.prototype = Object.create( BufferAttribute.prototype );
    Float32BufferAttribute.prototype.constructor = Float32BufferAttribute;

    return {
        BufferAttribute,
        Uint16BufferAttribute,
        Uint32BufferAttribute,
        Float32BufferAttribute
    }


});
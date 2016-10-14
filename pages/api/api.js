var imgList = []

var ar = new Array( 's', 'ss', 'sss' )

var x
var i = 1, j = 2


Page( {
    data: {
        imgs: imgList
    },
    onLoad( options ) {
        // 页面初始化 options为页面跳转所带来的参数

        var a = { a: 1 }
        var b = { b: 1 }


        console.log( Object.assign( { c: 1 }, a, b ) )


        console.log( x )
        console.log( 'i=' + i + ",j=" + j )

        var profile = 'I am "zhijie"'
        console.log( profile )
        //字符串转为大写
        console.log( profile.toUpperCase() )

        console.log( ar )

        //map遍历数组中每个元素,回调中，第一个参数是元素，第二个参数是下标
        //map的返回值是按照return组成新的数组
        var newAr = ar.map( function( item, index ) {
            console.log( item )
            console.log( index )
            return item + 'ppp'
        })
        console.log( newAr )

        //如果把数字与字符串相加，结果将成为字符串。
        var x = 5 + "5"
        console.log( x )

        //循环遍历对象
        var ob = { name: 'zhijie', age: 24, job: 'Android' }
        var text = ""
        for( x in ob ) {
            text = text + ob[ x ]
        }
        console.log( text )

        var f = 0.2 + 0.1
        console.log( f )

        //Date对象
        console.log( "今天是星期" + new Date().getDay() )

        var patt1 = new RegExp( "e" );
        //test() 方法检索字符串中的指定值。返回值是 true 或 false。
        console.log( patt1.test( "The best things in life are free" ) );

        //exec() 方法检索字符串中的指定值。返回值是被找到的值。如果没有发现匹配，则返回 null。
        console.log( patt1.exec( "The best things in life are free" ) );

        //在使用 "g" 参数时，exec() 的工作原理如下：
        //找到第一个 "e"，并存储其位置
        //如果再次运行 exec()，则从存储的位置开始检索，并找到下一个 "e"，并存储其位置
        var patt1 = new RegExp( "e", "g" );
        var result
        do {
            result = patt1.exec( "The best things in life are free" );
            console.log( result );
        }
        while( result != null )

        var that=this
        setTimeout(function(){
            that.show()
        },5000)

    },

    show(){
       console.log('show')
    },

    onReady() {
        // 页面渲染完成
    },
    onShow() {
        // 页面显示
    },
    onHide() {
        // 页面隐藏
    },
    onUnload() {
        // 页面关闭
    },

    httpRequest() {
        this.show()
        var promise = new Promise(( resolve, reject ) => {
            resolve( '可以' )
            // reject(new Error('粗了'))
        })

        promise.then( msg => {
            console.log( msg )
        }).catch( e => {
            console.error( '出错了', e );
        })


        wx.request( {
            url: 'http://aq.cdagri.gov.cn/srv/UserController/login',
            data: {
                account: 'government',
                password: 'government'
            },
            method: 'GET',
            success: function( res ) {

                console.log( res.data )

                console.log( "email=" + res.data.data.email )

            }
        })

    },

    chooseImage() {

        var that = this

        wx.chooseImage( {
            count: 9, // 默认9
            sizeType: [ 'original', 'compressed' ], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: [ 'album', 'camera' ], // 可以指定来源是相册还是相机，默认二者都有
            success: function( res ) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                // 数组形式返回
                var tempFilePaths = res.tempFilePaths
                console.log( tempFilePaths )

                console.log( typeof tempFilePaths )

                // //使用map遍历tempFilePaths数组
                // tempFilePaths.map((item)=>{
                //         imgList.push(item)
                //         
                // })
                // console.log( imgList )

                //显示选择的图片
                that.setData( {
                    //使用concat连接两个数组，返回新的连接后的数组
                    imgs: imgList.concat( tempFilePaths )
                })
            }
        })
    },

    previewImage( e ) {
        var that = this

        wx.previewImage( {
            current: imgList[ e.target.dataset.index ], // 当前显示图片的http链接
            urls: that.data.imgs // 需要预览的图片http链接列表
        })
    }
})
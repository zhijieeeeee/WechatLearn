var imgList = []
Page( {
    data: {
        imgs: imgList
    },
    onLoad( options ) {
        // 页面初始化 options为页面跳转所带来的参数

        var a={a:1}
        var b={b:1}

        
        console.log(Object.assign({c:1},a,b))

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

        var promise=new Promise((resolve, reject)=>{
            resolve('可以')
            // reject(new Error('粗了'))
        })

        promise.then(msg=>{
            console.log( msg )
        }).catch(e=>{
            console.error('出错了',e);
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

                console.log( typeof  tempFilePaths)

                // //使用map遍历tempFilePaths数组
                // tempFilePaths.map((item)=>{
                //         imgList.push(item)
                //         
                // })
                // console.log( imgList )

                //显示选择的图片
                that.setData( {
                    //使用concat连接两个数组，返回新的连接后的数组
                    imgs: imgList.concat(tempFilePaths)
                })
            }
        })
    },

    previewImage(e) {
        var that = this

        wx.previewImage( {
            current: imgList[e.target.dataset.index], // 当前显示图片的http链接
            urls: that.data.imgs // 需要预览的图片http链接列表
        })
    }
})
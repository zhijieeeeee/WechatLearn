var initData = "I am InitData \n I am another data"
var dataArray = []
Page( {
    data: {
        content: initData
    },
    onLoad: function( options ) {
        // 页面初始化 options为页面跳转所带来的参数
    },
    onReady: function() {
        // 页面渲染完成
    },
    onShow: function() {
        // 页面显示
    },
    onHide: function() {
        // 页面隐藏
    },
    onUnload: function() {
        // 页面关闭
    },


    add: function() {
        //数组中添加一项
        dataArray.push( "add one row" )
        this.setData( {
            // join() 方法将数组的所有元素组成一个字符串，join中的参数会添加到每个元素之间
            content: initData + "\n" + dataArray.join( "\n" )
        })
    },

    remove: function() {
        if( dataArray.length > 0 ) {
            //数组中删除一项
            dataArray.pop()
            this.setData( {
                // join() 方法将数组的所有元素组成一个字符串，join中的参数会添加到每个元素之间
                content: initData + "\n" + dataArray.join( "\n" )
            })
        }
    }

})
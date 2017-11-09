var app = getApp()
var order = [ "one", "two", "three", "four", "five", "six", "seven", "eight" ]
Page( {
    data: {
      toView: 'tetete',
        top: 0
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

    //滑动到顶部监听
    scrollToUpper: function() {
        console.log( "滚动到了顶部" )
    },
    //滑动到底部监听
    scrollToLower: function() {
        console.log( "滚动到了底部" )
    },
    //滑动监听
    scroll: function( event ) {
        console.log( event )
    },
    //滑动到指定view
    scrollToPosition: function() {
        this.setData( {
            toView: order[ 6 ]
        })
    },
    //滑动指定距离
    scrollMove: function() {
        this.setData( {
            top: this.data.top + 10
        })
    }


})
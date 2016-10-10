var app = getApp()
Page( {
    data: {
        list: [ 'view', 'scroll-view' ]
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

    click: function( event ) {

        console.log( event.target.dataset.index )

        if( event.target.dataset.index == 0 ) {
            wx.navigateTo( {
                url: '../view/view'
            })
        } else if( event.target.dataset.index == 1 ) {
            wx.navigateTo( {
                url: '../scrollview/scrollview'
            })
        }

        // switch( event.target.dataset.index ) {
        //     case 0:
        //         console.log( 'view' )

        //         break;
        //     case 1:
        //         console.log( 'scrollview' )
        //         wx.navigateTo( {
        //             url: '../../scrollview/scrollview'
        //         })
        //         break;
        // }
    }

})
Page( {
    data: {
        inputValue: ''
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

    getInput: function( e ) {
        this.setData( {
            inputValue: e.detail.value
        })
    }
    //收起键盘
    //wx.hideKeyboard()

})
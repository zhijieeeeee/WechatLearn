Page( {
    data: {
        // text:"这是一个页面"
        list: [ '北京', '上海', '广州', '成都' ],
        index: 0,
        time:'15:10',
        date:'2016-10-11'
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

    chooseNormalPicker: function(e) {
        this.setData({
            index:e.detail.value
        })
    },

    chooseTimePicker:function(e){
        this.setData({
            time:e.detail.value
        })
    },

    chooseDatePicker:function(e){
        this.setData({
            date:e.detail.value
        })
    }

})
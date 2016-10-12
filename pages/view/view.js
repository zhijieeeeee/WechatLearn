Page( {
    data: {
        sliderValue:20,
        switchChecked:true
    },
    onLoad: function( options ) {
        // 页面初始化 options为页面跳转所带来的参数

        console.log(options.id)
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


    changeSlider:function(e){
        this.setData({
            sliderValue:e.detail.value
        })

        console.log(this.data.sliderValue)
    },

    changeSwitch:function(e){
        this.setData({
            switchChecked:e.detail.value
        })

        console.log(this.data.switchChecked)
    }

})
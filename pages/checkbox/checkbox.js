Page( {
    data: {
        // text:"这是一个页面"
        data: [
            { name: 'USA', value: '美国' },
            { name: 'CHN', value: '中国', checked: 'true' },
            { name: 'BRA', value: '巴西' },
            { name: 'JPN', value: '日本' },
            { name: 'ENG', value: '英国', checked: 'true' },
            { name: 'TUR', value: '法国' },
        ]
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

    changeChioce: function( event ) {

        //detail = {value:[选中的checkbox的value的数组]}

        console.log( 'checkbox发生change事件，携带value值为：', event.detail.value )

        var chooseData = event.detail.value;

        for( var i = 0;i < chooseData.length;i++ ) {
            console.log( chooseData[ i ] )
        }
    }

})
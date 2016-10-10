//获取app实例
var app = getApp()
//获取工具类
var testutil = require( '../../utils/testutil.js' )
Page( {
    data: {
        //页面初始值
        name: "The raw sewage drains into the river",
        array: [ { name: "Tom Cruise" }, { name: "Michael Phelps" }],
        object: {
            name: "Usain Bolt"
        },
        list: [ 1, 2, 3 ],
        view: "second",
        index: 100,
        templateData: {
            i: 1,
            j: 2,
            k: 3
        }
    },
    onLoad: function( options ) {
        // 页面初始化 options为页面跳转所带来的参数
        console.log( "onLoad" )
        console.log( "app.globalData.id=" + app.globalData.id )

        //使用外部工具类
        testutil.toast( '方法一' )
        testutil.toast2( '方法二' )
    },
    onReady: function() {
        // 页面渲染完成
        console.log( "onReady" )
    },
    onShow: function() {
        // 页面显示
        console.log( "onShow" )
    },
    onHide: function() {
        // 页面隐藏
        console.log( "onHide" )
    },
    onUnload: function() {
        // 页面关闭
        console.log( "onUnload" )
    },

    onPullDownRefresh: function() {
        //监听用户下拉刷新事件
        //需要在config的window选项中开启enablePullDownRefresh
        //当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。
    },


    //自定义函数，改变name的值
    changeName: function() {
        this.setData( {
            name: "Instant Coffee is soluble in hot water"
        })
    },
    //改变data中数组的值
    changeNameInArray: function() {
        this.setData( {
            "array[0].name": "Roger Federer"
        })
    },
    //改变对象中的值
    changeNameInObject: function() {
        this.setData( {
            "object.name": "prosperous"
        })
    },
    //添加新的值
    addNewFiled: function() {
        this.setData( {
            newField: "I am a new field"
        })
    },
    //使用navigate跳转路由
    jumpTo: function() {
        wx.navigateTo( {
            url: '../index/index'
        })
    },
    longpress: function( event ) {
        console.log( event )
    }
})
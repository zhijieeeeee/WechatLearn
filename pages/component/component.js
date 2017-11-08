var app = getApp()
Page( {
    data: {
        list: [
            'view',
            'scroll-view',
            'swiper',
            'icon',
            'text',
            'progress',
            'button',
            'checkbox',
            'input',
            'picker',
            'radio',
            'actionsheet+modal+toast+loading',
            'audio+video',
            'image'
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

    click( event ) {
        console.log( event )
        var index = event.target.dataset.index;

        //parseInt转化为int型
        console.log( parseInt( event.target.dataset.index ))

        switch( index ) {
            case 0:
                wx.navigateTo( {
                    url: '../view/view?id=1111111'
                })
                break;
            case 1:
                wx.navigateTo( {
                    url: '../scrollview/scrollview'
                })
                break;
            case 2:
                wx.navigateTo( {
                    url: '../swiper/swiper'
                })
                break;
            case 3:
                wx.navigateTo( {
                    url: '../icon/icon'
                })
                break;
            case 4:
                wx.navigateTo( {
                    url: '../text/text'
                })
                break;
            case 5:
                wx.navigateTo( {
                    url: '../progress/progress'
                })
                break;
            case 6:
                wx.navigateTo( {
                    url: '../button/button'
                })
                break;
            case 7:
                wx.navigateTo( {
                    url: '../checkbox/checkbox'
                })
                break;
            case 8:
                wx.navigateTo( {
                    url: '../input/input'
                })
                break;
            case 9:
                wx.navigateTo( {
                    url: '../picker/picker'
                })
                break;
            case 10:
                wx.navigateTo( {
                    url: '../radio/radio'
                })
                break;
            case 11:
                wx.navigateTo( {
                    url: '../actionsheet/actionsheet'
                })
                break;
            case 12:
                wx.navigateTo( {
                    url: '../audio/audio'
                })
                break;
            case 13:
                wx.navigateTo( {
                    url: '../image/image'
                })
                break;
        }

    }

})
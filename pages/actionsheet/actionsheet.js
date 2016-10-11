Page( {
    data: {
        list: [
            'item1',
            'item2',
            'item3',
            'item4',
            'item5'
        ],
        actionSheetHidden: true,

        hideModal1: true,
        hideModal2: true,

        hideToast: true,

        hideLoading: true
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

    showActionSheet: function() {
        this.setData( {
            actionSheetHidden: !this.data.actionSheetHidden
        })
    },

    bindItemTap: function( e ) {
        console.log( e.target.dataset.name )
    },

    showModal: function() {
        this.setData( {
            hideModal1: false
        })
    },

    showModal2: function() {
        this.setData( {
            hideModal2: false
        })
    },

    modal1Confirm: function() {
        this.setData( {
            hideModal1: true
        })
    },

    modal2Confirm: function() {
        this.setData( {
            hideModal2: true
        })
    },

    modal2Cancel: function() {
        this.setData( {
            hideModal2: true
        })
    },

    showToast: function() {
        this.setData( {
            hideToast: !this.data.hideToast
        })
    },

    loadingChange: function() {

        //为了在setTimeout中调用this
        var that=this

        this.setData( {
            hideLoading: false
        })

        setTimeout( function() {
            that.setData( {
                hideLoading: true
            })
        }, 2000 )
    }

})
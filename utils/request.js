const SUCCESS_CODE = 200
const NOOP = function () {
}
const requestFail = function(msg) {
    msg = msg || {}
    wx.hideToast()
    wx.showToast({
        title: msg.msg || '服务器正忙，请稍后重试',
        icon: 'loading',
        duration: 2000
    })
}

const request = function(options) {
    const method = options.method || 'GET'
    const url = options.url
    const requestData = options.data
    const successCallback = options.success || NOOP
    const errorCallback = options.error
    const completeCallback = options.complete || NOOP
    const header = options.header || {}
    const dataType = options.dataType || 'json'

    wx.request({
        url,
        method,
        header,
        dataType,
        data: requestData,        
        success: function(res) {
            console.log(res)
            let {statusCode, data = {}} = res
            console.log(statusCode, data)
            if (+statusCode === SUCCESS_CODE) {
                let { resultcode, reason, result } = data
                if (+resultcode === SUCCESS_CODE) {
                    successCallback(result)
                } else {
                    requestFail({
                        msg: reason
                    })
                }
            } else {
                if (errorCallback) {
                    errorCallback()
                } else {
                    requestFail()
                }
            }
        },
        fail: function() {
            requestFail()
        },
        complete: function() {
            completeCallback()
        }
    })
}

const juheRequest = function(options) {
    options.url = 'https://apis.juhe.cn' + options.url
    request(options)
}

module.exports = {
    request,
    juheRequest,
}
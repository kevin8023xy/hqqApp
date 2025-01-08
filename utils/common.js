
export function compareTimestamp (timetamp)  {
	const currentTime = new Date().getTime()
	const timeDiff = currentTime - timetamp;
	
	if(timeDiff < 60000) {
		return '一分钟内'
	} else if(timeDiff < 3600000) {
		return Math.floor(timeDiff / 60000) + '分钟'
	} else if(timeDiff < 86400000) {
		return Math.floor(timeDiff / 3600000) + '小时'
	} else if(timeDiff < 2592000000) {
		return Math.floor(timeDiff / 86400000) + '天'
	} else if(timeDiff < 7766000000) {
		return Math.floor(timeDiff / 2592000000) + '月'
	} else {
		return null;
	}
	
}

export function gotoHome(){
	uni.showModal({
		title:"提示",
		content:"页面有误将返回首页",
		showCancel:false,
		success: (res) => {
			if(res.confirm){
				uni.reLaunch({
					url:"/pages/index/index"
				})
			}
		}
	})
}


/**
* 显示消息提示框
* @param content 提示的标题
*/
export function toast(content) {
  uni.showToast({
    icon: 'none',
    title: content
  })
}
 
/**
* 显示模态弹窗
* @param content 提示的标题
*/
export function showConfirm(content) {
  return new Promise((resolve, reject) => {
    uni.showModal({
      title: '提示',
      content: content,
      cancelText: '取消',
      confirmText: '确定',
      success: function(res) {
        resolve(res)
      }
    })
  })
}
 
/**
* 参数处理
* @param params 参数
*/
export function tansParams(params) {
  let result = ''
  for (const propName of Object.keys(params)) {
    const value = params[propName]
    var part = encodeURIComponent(propName) + "="
    if (value !== null && value !== "" && typeof (value) !== "undefined") {
      if (typeof value === 'object') {
        for (const key of Object.keys(value)) {
          if (value[key] !== null && value[key] !== "" && typeof (value[key]) !== 'undefined') {
            let params = propName + '[' + key + ']'
            var subPart = encodeURIComponent(params) + "="
            result += subPart + encodeURIComponent(value[key]) + "&"
          }
        }
      } else {
        result += part + encodeURIComponent(value) + "&"
      }
    }
  }
  return result
}
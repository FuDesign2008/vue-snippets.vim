/**
 *
 * @author fuyg
 * @date  `date +%Y-%m-%d`
 */

import wepy from 'wepy'

class ComponentName extends wepy.app {
  constructor() {
    super()
    this.use('requestfix')
    this.use('promisify')
  }

  // 对应原生 app.json 文件
  config = {
    // 具体配置见 https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html
    //
    pages: ['pages/index/index'],
    window: {
      // backgroundTextStyle: 'light',
      // navigationBarBackgroundColor: '#fff',
      // navigationBarTitleText: 'WeChat',
      // navigationBarTextStyle: 'black',
    },
    usingComponents: {
      // 全局自定义组件配置
    },
    // debug: true
  }

  globalData = {}

  /**
   * life cycle/event
   */
  // onLaunch() {}

  // onShow() {}

  // onHide() {}

  // onError() {}

  // onPageNotFound() {}
}

export default ComponentName

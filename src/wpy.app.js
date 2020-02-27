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
    pages: ['pages/index/index'],
    window: {
      // backgroundTextStyle: 'light',
      // navigationBarBackgroundColor: '#fff',
      // navigationBarTitleText: 'WeChat',
      // navigationBarTextStyle: 'black',
    },
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

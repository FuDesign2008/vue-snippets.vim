/**
 *
 * @author fuyg
 * @date  `date +%Y-%m-%d`
 */

import wepy from 'wepy'

class ComponentName extends wepy.page {
  config = {
    // Page实例中存在的配置数据，对应于原生的page.json文件
    // 具体配置见 https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html#%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE
    //
    navigationBarTitleText: '导航栏标题',
    usingComponents: {
      // id(小写-_): 组件
    },
  }

  // 声明页面中所引用的组件，或声明组件中所引用的子组件
  // id(小写-_): 组件
  // components = { }

  // props = { }

  mixins = [
    // 声明页面所引用的Mixin实例
  ]

  data = {
    // 页面所需数据均需在这里声明，可用于模板数据绑定
    propInData: 'value',
  }

  computed = {
    // 声明计算属性
  }

  watch = {
    propInData(newValue, oldValue) {
      // TODO
    },
  }

  methods = {
    // 声明页面wxml中标签的事件处理函数。
    // 此处只用于声明页面wxml中标签的bind、catch事件
    // 自定义方法需以自定义方法的方式声明
  }

  events = {
    // 声明组件之间的事件监听
  }

  /**
   * life cycle/event
   */
  // onLoad() {}

  // onUnload() {}

  // onReady() {}

  // onShow() {}

  // onHide() {}

  // onPullDownRefresh() {}

  // onReachBottom() {}

  // onShareAppMessage() {}

  // onPageScroll() {}

  // onTabItemTap() {}

  // 自定义数据
  // customData = {}

  //自定义方法
  // customFunction() {}
}

export default ComponentName

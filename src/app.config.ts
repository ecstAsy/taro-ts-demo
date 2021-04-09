export default {
  pages: [
    'pages/home/index',
    'pages/tripInfo/index',
    'pages/noteCard/index',
    'pages/user/index'
  ],
  tabBar: {
    list: [{
      pagePath: 'pages/home/index',
      text: '游记',
      iconPath: "./assets/tab/note_b.png",
      selectedIconPath: "./assets/tab/note_a.png",
    }, {
      pagePath: 'pages/user/index',
      text: '我的',
      iconPath: "./assets/tab/mine_b.png",
      selectedIconPath: "./assets/tab/mine_a.png",
    }],
    color: '#cdcdcd',
    selectedColor: '#f16b7d',
    borderStyle: 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}

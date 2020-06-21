function scrollIntoView () {
  window.scrollTo(0, 0)
}

// 阻止微信拖动
// document.body.addEventListener('touchmove', function (e) {
//   e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
// }, {passive: false})

var bgMusic = null 

// 微信加载完毕自动播放音乐
document.addEventListener("WeixinJSBridgeReady", function () {
  // ../resource/bg.mp3 ../resource/bg2.mp3
  bgMusic = new Audio("./static/resource/bg.mp3")
  bgMusic.loop = true
  bgMusic.volume = 0.1
  bgMusic.play()
}, false)
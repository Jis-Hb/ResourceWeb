const text = ['xxx~', '我喜欢你~', '我爱你~', '哎呀呀~', 'mua~', '大美女', '想你', '咦~']
var
  click_cnt = 0
var $html = document.getElementsByTagName('html')[0]
var $body =
  document.getElementsByTagName('body')[0]
$html.onclick = function (e) {
  var $elem =
    document.createElement('b')
  let $text = document.createElement('b')
  $text.onselectstart = new
    Function('event.returnValue=false;')
  $elem.onselectstart = new Function('event.returnValue=false;')
  $text.style.color = 'rgb(' + parseInt(Math.random() * 255) + ',' + parseInt(Math.random() * 255) +
    ',' + parseInt(Math.random() * 255) + ')'
  $elem.style.color = 'rgb(' + parseInt(Math.random() * 255)
    + ',' + parseInt(Math.random() * 255) + ',' + parseInt(Math.random() * 255) + ')'
  $text.style.zIndex
    = 9999
  $elem.style.zIndex = 9999
  $text.style.position = 'absolute'
  $elem.style.position = 'absolute'
  $text.style.select = 'none'
  $elem.style.select = 'none'
  var x = e.pageX
  var y = e.pageY

  $text.style.left = x + 10 + 'px'
  $text.style.top = y - 10 + 'px'
  $elem.style.left = x - 10 + 'px'
  $elem.style.top = y - 20 + 'px'
  clearInterval(anim)
  switch (++click_cnt) {
    default: $text.innerText
      = text[Math.ceil(Math.random() * text.length - 1)]
      $elem.innerText = '❤'
      break
  }
  $text.style.fontSize = Math.random() * 10 + 8 + 'px'
  $elem.style.fontSize = Math.random() * 10 + 12
    + 'px'

  var increase = 0
  let anim
  new Promise((resolve, reject) => {
    anim = setTimeout(function () {
      anim = setInterval(function () {
        if
          (++increase == 150) {
          clearInterval(anim)
          $body.removeChild($elem)
        } $text.style.top = y - 10 -
          increase + 'px'
        $text.style.opacity = (150 - increase) / 120
        $elem.style.top = y - 20 - increase +
          'px'
        $elem.style.opacity = (150 - increase) / 120
        resolve(anim)
      }, 8)

    }, 70)

  }).then(() => {
    setTimeout(() => {
      clearInterval(anim)
      $body.removeChild($text)
      $body.removeChild($elem)
    }, 1000);

  })
  $body.appendChild($elem)
  $body.appendChild($text)
}

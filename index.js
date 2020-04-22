//設定所有變數
const convert = document.getElementById('convert')
const redInput = document.getElementById('red')
const greenInput = document.getElementById('green')
const blueInput = document.getElementById('blue')
const dataPanel = document.getElementById('data-panel')

//rgb轉hex
function rgbToHex(rgb) {
  let hex = Number(rgb).toString(16)//將rgb轉換成16位元
  if (hex.length < 2) {
    hex = "0" + hex
  }
  return hex
}

//組合色碼
function fullColorHex(r, g, b) {
  let red = rgbToHex(r)
  let green = rgbToHex(g)
  let blue = rgbToHex(b)
  return red + green + blue
}

//submit 事件
convert.addEventListener('click', function (event) {
  if (Number(redInput.value) > 255 || Number(greenInput.value) > 255 || Number(blueInput.value) > 255) {
    dataPanel.innerHTML =
      `<div class="text-danger"> 請確認輸入介於0~255之間的數字</div>`
  } else {
    const redHex = rgbToHex(redInput.value)
    const greenHex = rgbToHex(greenInput.value)
    const blueHex = rgbToHex(blueInput.value)
    dataPanel.innerHTML =
      `<div class="border text-danger"> ${redHex}${greenHex}${blueHex}</div>
    <div class = "show-box mt-2" style="background-color:#${redHex}${greenHex}${blueHex};">`
  }
})
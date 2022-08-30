// https://digimon-api.vercel.app/api/digimon
import digiBice from "./digimonAPI.js"
import slide from "./slide.js"
const root = document.getElementById("root");
const div = document.createElement("div");
root.style.display = "flex"
root.style.alignItems = "center"
div.style.display = "flex"
div.style.width = "400px"
div.style.height = "200px"
div.style.overflow = "hidden"
div.style.alignItems = "center"
let count = 0

const digimonArr = [];
const digimonImg = [];
const leftButton = document.createElement("div");
const rightButton = document.createElement("div");

root.appendChild(leftButton)

slide(leftButton, rightButton ,div, digimonImg, count);
root.appendChild(div)
root.appendChild(rightButton)


digiBice(digimonArr, digimonImg).then(()=>{
  for(let i = 0; i < digimonArr.length; i++){
    div.innerHTML += `<div style="display : flex; justify-content: center; align-items : center; flex-direction : column;">
      <img style="width : 100px; height : 100px" src="${digimonImg[i]}">
      <div>${digimonArr[i]}</div>
    </div>`
  }
})
// 동욱이형 작업 : css 스타일링 하는 함수를 모듈화하기, 필요한 태그들 작업
// 주완이 작업: frontEnd에서 슬라이더 구현하기
const digimonURL = "https://digimon-api.vercel.app/api/digimon"

export default async function digimonOpenApi(arr, imgArr){
  await fetch(digimonURL).then((datas)=>{
    return datas.json()
  }).then((data)=>{
    data.forEach((item)=>{
      arr.push(item.name)
      imgArr.push(item.img)
    })
  })

}
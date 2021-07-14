import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"

function _draw() {
  let template = ''
  ProxyState.houses.forEach(house => {
    template += house.Template
  })
  document.getElementById('houses').innerHTML = template
}

export default class HousesController {
  constructor() {
    ProxyState.on('houses', _draw)
    _draw()
  }

  createHouse() {
    event.preventDefault()
    let form = event.target
    let rawHouse = {
      // @ts-ignore
      bed: form.bed.value,
      // @ts-ignore
      bath: form.bath.value,
      // @ts-ignore
      sqft: form.sqft.value,
      // @ts-ignore
      year: form.year.value,
      // @ts-ignore
      price: form.price.value,
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      imgUrl: form.imgUrl.value
    }
    housesService.createHouse(rawHouse)
    // @ts-ignore
    form.reset()
  }
}
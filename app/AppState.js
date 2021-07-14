import Car from "./Models/Car.js"
import House from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  /** @type {Car[]} */
  cars = [
    new Car({
      make: 'Ford',
      model: 'Pinto',
      year: 1987,
      price: 1200,
      description: 'This Car is HOT!',
      imgUrl: 'https://blog.automedicsafrica.com/wp-content/uploads/2015/08/Impala-vs-Pinto-750x547.jpg'
    }),
    new Car({
      make: 'VW',
      model: 'Gremlin',
      year: 1988,
      price: 3400,
      description: 'Lime Green! You gonna love it',
      imgUrl: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/07/Gremlin-X.jpg'
    })
  ]
  /** @type {House[]} */
  houses = [
    new House({
      bed: 3,
      bath: 2,
      sqft: 1000,
      year: 2006,
      price: 375000,
      description: 'Cozy home! Great for first time home buyers.',
      imgUrl: 'https://i.pinimg.com/originals/3b/52/63/3b526324aad6c560b4a93cb6d5dd77a4.jpg'
    }),
    new House({
      bed: 5,
      bath: 4,
      sqft: 2500,
      year: 2015,
      price: 650000,
      description: 'Large home! Perfect for you and your family.',
      imgUrl: 'https://www.thehousedesigners.com/images/plans/UDC/bulk/7539/Oleksandr-Meresi_View02.jpg'
    })
  ]

}

// Don't touch this!
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

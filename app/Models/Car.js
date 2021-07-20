export default class Car {
  constructor({ make, model, year, price, description, imgUrl, id }) {
    this.id = id
    this.make = make
    this.model = model
    this.year = year
    this.price = price
    this.description = description || "no car description"
    this.imgUrl = imgUrl
  }

  get Template() {
    return `
    <div class="col-md-4 my-3">
      <div class="bg-light shadow">
          <img src="${this.imgUrl}" class="w-100" alt="${this.make} ${this.model} car image">
          <div class="p-3">
              <div class="text-center">
                  <p><b>${this.year} - ${this.make} - ${this.model}</b></p>
              </div>
              <p>${this.description}</p>
              <p><em>$${this.price}</em></p>
              <button class="btn btn-info btn-block" onclick="app.carsController.bidCar('${this.id}')"> bid </button>
              <button class="btn btn-warning btn-block" onclick="app.carsController.deleteCar('${this.id}')"> delete </button>
          </div>
      </div>
    </div>
    `
  }

}
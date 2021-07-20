export default class House {
  constructor({ bedrooms, bathrooms, levels, year, price, description, imgUrl, id }) {
    this.id = id
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.levels = levels
    this.year = year
    this.price = price
    this.description = description
    this.imgUrl = imgUrl
  }
  get Template() {
    return `
    <div class="col-md-4 my-3">
      <div class="bg-light shadow">
          <img src="${this.imgUrl}" class="w-100" alt="${this.bedrooms} ${this.bathrooms} house image">
          <div class="p-3">
              <div class="text-center">
                  <p><b>${this.bedrooms} bed - ${this.bathrooms} bath - ${this.levels} level</b></p>
              </div>
              <p>Built in ${this.year}</p>
              <p>${this.description}</p>
              <p><em>$${this.price}</em></p>
              <button class="btn btn-success btn-block" onclick="app.housesController.bidHouse('${this.id}')"> Bid </button>
              <button class="btn btn-danger btn-block" onclick="app.housesController.deleteHouse('${this.id}')"> Delete </button>
          </div>
      </div>
    </div>
    `
  }
}
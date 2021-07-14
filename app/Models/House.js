export default class House {
  constructor({ bed, bath, sqft, year, price, description, imgUrl }) {
    this.bed = bed
    this.bath = bath
    this.sqft = sqft
    this.year = year
    this.price = price
    this.description = description
    this.imgUrl = imgUrl
  }
  get Template() {
    return `
    <div class="col-md-3 col-sm-2 my-3">
      <div class="bg-light shadow">
          <img src="${this.imgUrl}" class="w-100" alt="${this.bed} ${this.bath} house image">
          <div class="p-3">
              <div class="text-center">
                  <p><b>${this.bed}b - ${this.bath}ba - ${this.sqft}sqft</b></p>
              </div>
              <p>Built in ${this.year}</p>
              <p>${this.description}</p>
              <p><em>$${this.price}</em></p>
          </div>
      </div>
    </div>
    `
  }
}
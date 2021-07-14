export default class House {

  constructor({ bed, bath, sqft, year, price, description, imgURL }) {
    this.bed = bed
    this.bath = bath
    this.sqft = sqft
    this.year = year
    this.price = price
    this.description = description
    this.imgURL = imgURL
  }
}
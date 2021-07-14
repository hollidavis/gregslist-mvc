export default class Job {
  constructor({ title, pay, company, description }) {
    this.title = title
    this.pay = pay
    this.company = company
    this.description = description
  }
  get Template() {
    return `
    <div class="col-md-4 my-3">
      <div class="bg-light shadow">
          <div class="p-3">
              <div class="text-center">
                  <p><b>${this.title} - $${this.pay} - ${this.company}</b></p>
              </div>
              <p class="text-center">${this.description}</p>
          </div>
      </div>
    </div>
    `
  }
}
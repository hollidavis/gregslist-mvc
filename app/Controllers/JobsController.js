import { ProxyState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"

function _draw() {
  let template = ''
  ProxyState.jobs.forEach(job => {
    template += job.Template
  })
  document.getElementById('jobs').innerHTML = template
}

export default class JobsController {
  constructor() {
    ProxyState.on('jobs', _draw)
    _draw()
  }

  createJob() {
    event.preventDefault()
    let form = event.target
    let rawJob = {
      // @ts-ignore
      title: form.title.value,
      // @ts-ignore
      pay: form.pay.value,
      // @ts-ignore
      company: form.company.value,
      // @ts-ignore
      description: form.description.value,
    }
    jobsService.createJob(rawJob)
    // @ts-ignore
    form.reset()
  }
}
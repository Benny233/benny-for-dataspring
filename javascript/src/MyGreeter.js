const regISO8601 = /(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2})/

class Client {
  #date = undefined
  constructor({ time } = {}) {
    if (!time) { // 没有设置, 取当前时间
      this.#date = new Date() 
      return
    } 
    if (!regISO8601.test(time)) throw new TypeError('time format wrong') // 时间格式不正确 抛错
    this.#date = new Date(time)
  }
  getGreeting() {
    const hoursNow = this.#date.getHours()
    if (hoursNow >= 6 && hoursNow < 12) return 'Good morning'
    if (hoursNow >= 12 && hoursNow < 18) return 'Good afternoon'
    return 'Good evening'
  }
}

const MyGreeter = {
  Client
}

module.exports = MyGreeter
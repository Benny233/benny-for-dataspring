class Client {
  #date = undefined
  constructor({time}={}) {
    if (time) { // 有值
      if (/(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2})/.test(time)) { // 并且格式正确
        this.#date = new Date(time)
      } else { // 格式不正确抛错
        throw new TypeError('time format wrong')
      }
    } else { // 没有则取初始时的值
      this.#date = new Date()
    }
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
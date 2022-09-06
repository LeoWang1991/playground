class Notifier {
  constructor() {
    this.observerList = []
  }
  add(observer) {
    this.observerList.push(observer)
  } 
  remove(observer) {
    const index = this.observerList.findIndex(v => {
      console.log(v, observer, typeof v)
    })
    if (index >= 0) {
      this.observerList.splice(index, 1)
    }
  }
  notify() {
    for(let fn of this.observerList) {
      fn.update()
    }
  }
}

class Observer {
  constructor(name) {
    this.name = name
  }
  update(val) {
    console.log('收到通知', this.name, val)
  }
}

const notifier = new Notifier()
const ob1 = new Observer('张三')
const ob2 = new Observer('李四')

notifier.add(ob1)
notifier.add(ob2)

// console.log(ob1, ob1.update)

notifier.notify('kkk')
notifier.remove(ob1)
notifier.notify('sss')
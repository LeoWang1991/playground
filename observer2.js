/**
 * 苹果商店订阅是否产品到货了，如果到货了 邮件或者电话通知给订阅者
 * 1. 什么人订阅
 * 2. 订阅什么产品 有什么订阅发什么通知
 * 3. 取消订阅
 */

const AppleStore = {
  listenList: [],
  subscribe(fn) {
    this.listenList.push(fn)
  },
  publish(name) {
    for(let fn of this.listenList) {
      console.log('current arguments', name, arguments)
      fn.apply(this, arguments)
    }
  }
}

AppleStore.subscribe(function(val) {
  console.log(111, val)
  console.log(`嘿，张三，有货了`, val)
})

AppleStore.subscribe(function(val) {
  console.log(`嘿，李四，有货了`, val)
})

// AppleStore.publish('iphone 14')

// 姓名+需要订阅的产品
function Appler2(name, product) {
  this.name = name
  this.product = product
}

class Appler {
  constructor(name) {
    this.name = name
    // this.product = product
  },

  // 订阅xxx产品 
  subscribe(product, fn) {
    
  }
}



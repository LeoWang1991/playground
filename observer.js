const shop = {
  listenList: [],
  addListen(fn) {
    this.listenList.push(fn)
  },
  trigger() {
    for(let fn of this.listenList) {
      fn.apply(this, arguments)
    }
    // for(var i=0,fn;fn=this.listenList[i++];){
    //   fn.apply(this,arguments);
    // }
  }
}

shop.addListen(function(val) {
  console.log('小明订阅', val);
})
shop.addListen(function(val) {
  console.log('夏红订阅', val);
})

shop.trigger('星巴克')

function MyShop() {
  this.list = []
}
MyShop.prototype.addListen = function(fn) {
  this.list.push(fn)
}
MyShop.prototype.trigger = function() {
  for(let fn of this.list) {
    fn.apply(this, arguments)
  }
}

const shop1 = new MyShop()
shop1.addListen(function(val) { console.log('小明11', val) })
shop1.addListen(function(val) { console.log('小明11', val) })

shop1.trigger('测试111')
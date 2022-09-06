const data = {
  name: 'xiaofei'
}

Object.keys(data).map(key => {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    // get() {
    //   console.log('getter')
    // },
    // set() {
    //   console.log('setter');
    // }
  })
})

console.log(data.name);
data.name = 'ddd'
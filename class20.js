async function just () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject('I am error')
    }, 3000)
  })
}

(async function init () {
  try {
    let data = await just()
    console.log(data)
  } catch (err) {
    console.log(err)
  }
})()

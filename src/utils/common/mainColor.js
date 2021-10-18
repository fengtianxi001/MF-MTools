const { createCanvas, Image } = require('canvas')

const most = arr => {
    if (arr.length === 1) return arr[0]
    let res = {}
    let maxName = ""
    let maxNum = 0
    arr.forEach(item => {
        res[item] ? (res[item] += 1) : (res[item] = 1)
        if (res[item] > maxNum) {
            maxName = item
            maxNum = res[item]
        }
    })
    return maxName
}
const mainColor = url => {
    return new Promise((resolve, reject) => {
        const canvas = createCanvas(200, 200)
        const ctx = canvas.getContext('2d')
        const img = new Image()
        img.onload = () => {
            ctx.drawImage(img, 0, 0)
            let imgData = ctx.getImageData(0, 0, img.width / 100, img.height / 100).data
            const arr = []
            for (let i = 0; i < imgData.length; i = i + 4) {
                const obj = `rgba(${imgData[i]},${imgData[i + 1]},${imgData[i + 2]},${imgData[i + 3]})`
                arr.push(obj)
            }
            resolve(most(arr))
        }
        img.onerror = error => reject(error)
        img.src = url
    })

}

export default mainColor


const { shell } = require('electron')
const { extname, join } = require("path")
const { spawn } = require("child_process")
import rgbaster from "ac-rgbaster"

export function target(src) {
    const ext = extname(src)
    return ext === ".lnk"
        ? shell.readShortcutLink(src)["target"]
        : src
}

export async function create(target) {
    const ico = await fetchIco(target)
    const mainColor = await fetchIcoMainColor(ico)
    return new Promise(resolve => {
        const canvas = document.createElement('canvas')
        canvas.width = canvas.height = 64
        const ctx = canvas.getContext('2d')
        const img = new Image()
        img.onload = () => {
            ctx.fillStyle = mainColor
            ctx.fillRect(0, 0, 64, 64);
            ctx.drawImage(img, 11, 11, 42, 42)
            const dataURL = canvas.toDataURL("image/png");
            resolve(dataURL)
        }
        img.src = ico
    })

}

function fetchIco(target) {
    const folder = process.env.NODE_ENV === 'development'
        ? "/bin"
        : "/resource"
    const iconCMD = join(process.cwd(), folder, 'IconExtractor.exe')
    return new Promise((resolve) => {
        const ls = spawn(iconCMD, ["-x"])
        const command = JSON.stringify({ context: "context", path: target }) + "\n";
        ls.stdin.write(command);
        ls.stdout.on("data", (data) => {
            var str = (new Buffer(data, 'utf8')).toString('utf8');
            ls.kill('SIGINT');
            resolve("data:image/png;base64," + JSON.parse(str).Base64ImageData)
        })
        ls.on("error", () => { resolve(false) })
    })
}

async function fetchIcoMainColor(target) {
    const { dominant, secondary } = await rgbaster.getBaseImageColor(target)
    return dominant === "rgb()" ? secondary : dominant
}


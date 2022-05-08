
const { resolve } = require("path")
var { spawn } = require('child_process');

const IconExtractor = resolve("./bin/IconExtractor.exe")


function fetchIcon(src) {
    src = resolve(src)
    return new Promise((resove) => {
        const json = JSON.stringify({ context: "demo", path: src }) + "\n";
        console.log(json);
        const ls = spawn(IconExtractor, ["-x"])
        ls.stdin.write(json);
        let iconDataBuffer = "";
        ls.stdout.on("data", (data) => {
            var str = (new Buffer(data, 'utf8')).toString('utf8');
            ls.kill('SIGINT');
            resove("data:image/png;base64," + JSON.parse(str).Base64ImageData)
        })
        ls.on("close", () => { resove(iconDataBuffer) })
    })
}


// fetchIcon("../HBuilderX.lnk").then(res => {
//     console.log(res);
// })

module.exports = fetchIcon
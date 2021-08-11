var electronInstaller = require('electron-winstaller');
var path = require("path");

resultPromise = electronInstaller.createWindowsInstaller({
	appDirectory: path.join('./out/HelloWorld-win32-x64'), //刚才生成打包文件的路径
	outputDirectory: path.join('./install'), //输出路径
	authors: 'fengtianxi001', // 作者名称
	exe: 'HelloWorld.exe', //在appDirectory寻找exe的名字
	noMsi: true, //不需要mis![这里写图片描述](https://img-blog.csdn.net/20180712225817503?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI2NjI2MTEz/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
})

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));

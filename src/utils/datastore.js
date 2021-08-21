/*eslint-disable*/
import DataStore from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import path from 'path'

const database = FileName => {
	//  将 mydb 这个方法挂载在Vue的原型上,FileName是json文件的名字
	const NamePath = path.join(__static, `/json/${FileName}.json`) // 拿到传入的json的存储路径;该json文件存在public文件夹下的json文件夹下。
	const adpets = new FileSync(NamePath) // 初始化lowdb读写的json文件名以及存储路径
	const data = DataStore(adpets) // lowdb接管该文件
	return data
}
export default database

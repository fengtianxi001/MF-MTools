import Database from "@/controllers/database/index"
const database = new Database()


export default store => {
    // console.log(store);
    // //初始化,从json中读取数据
    store.replaceState(database.fetch())
    // store.state = database.fetch()
    // const { projects, apps, files, webs } = database.fetch()
    // store.commit("setProjects", projects)
    // store.commit("setApps", apps)
    // store.commit("setFiles", files)
    // store.commit("setWebs", webs)

    // console.log("database.fetch()", database.fetch());
    store.subscribe((mutation, state) => {
        // console.log(state);
        database.update(state)
    })
}
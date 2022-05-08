const fs = require("fs");
import { DATABASE_DATA_URL, PROJECTS_URL, FILES_URL } from "configs/database";
import { mkdirsSync } from "@/utils/index";
class Database {
  constructor() {
    this.initialize();
  }
  initialize() {
    const default_values = {
      projects: [],
      files: [],
      apps: [],
      webs: [],
    };
    // if (!fs.existsSync(DATABASE_FOLDER_URL)) {
    //   mkdirsSync(DATABASE_FOLDER_URL);
    // }
    if (!fs.existsSync(PROJECTS_URL)) {
      mkdirsSync(PROJECTS_URL);
    }
    if (!fs.existsSync(FILES_URL)) {
      mkdirsSync(FILES_URL);
    }
    if (!fs.existsSync(DATABASE_DATA_URL)) {
      fs.writeFileSync(
        DATABASE_DATA_URL,
        JSON.stringify(default_values, null, 2)
      );
    }
  }
  update(data) {
    fs.writeFileSync(DATABASE_DATA_URL, JSON.stringify(data, null, 2));
  }
  fetch() {
    const encoding = { encoding: "utf-8" };
    const store = JSON.parse(fs.readFileSync(DATABASE_DATA_URL, encoding));
    //缺少有效检验
    // store = projectVaild(store);
    // return fileVaild(store);
    return store;
  }
}
export default Database;

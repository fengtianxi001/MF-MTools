import { database } from "@/controllers/database/index";
export default (store) => {
  store.replaceState(database.fetch());
  store.subscribe((mutation, state) => {
    console.log("store",state);
    database.update(state)
  })
};

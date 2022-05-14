import { database } from "@/controllers/database/index";
export default (store) => {
  store.replaceState(database.fetch());
  store.subscribe((mutation, state) => {
    database.update(state)
  })
};

import Database from "@/controllers/database/index";
new Database()
export default (store) => {
  store.replaceState({});
  store.subscribe((mutation, state) => {
    console.log("state", state);
  });
};

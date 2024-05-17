import { createStore } from "vuex";
import getters from './getters'
import mutations from './mutations'
import state from "./state";
import actions from "./actions";

const store = createStore({
  state,
  getters,
  mutations,
  actions,
});

export default store;

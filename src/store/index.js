import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {
      hr: "",
      weight: "",
      height: "",
      lvot_diam: "",
      lvot_vti: "",
      rvot_diam: "",
      rvot_vti: ""
    },
    isLoading: true
  },
  Q: {
    mutations: {
      SET_DATA(state, payload) {
        state.data = payload;
      },
      IS_LOADING(state, payload) {
        state.isLoading = payload;
      }
    },
    actions: {
      GET_DATA(state, payload) {
        state.commit("get", payload);
      },
      getters: {
        Q(state) {
          let SVs = (
            Math.PI *
            Math.pow(state.lvot_diam / 2, 2) *
            state.lvot_vti
          ).toFixed(2);
          let QS = (state.hr * SVs).toFixed(2);
          let BSA = (Math.sqrt(state.weight * state.height) / 60).toFixed(2);
          let CI = (state.QS * state.BSA).toFixed(2);
          let SVp = (
            Math.PI *
            Math.pow(state.rvot_diam / 2, 2) *
            state.rvot_vti
          ).toFixed(2);
          let QP = (state.hr * SVp).toFixed(2);
          let QpQs = (QP / QS).toFixed(2);
          return {
            SVs,
            QS,
            BSA,
            CI,
            SVp,
            QP,
            QpQs
          };
        }
      }
    }
  }
});

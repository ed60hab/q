import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Q: {
      props: {
        hr: Number,
        weight: Number,
        height: Number,
        lvot_diam: Number,
        lvot_vti: Number,
        rvot_diam: Number,
        rvot_vti: Number,
        SVs: Function,
        QS: Function,
        BSA: Function,
        CI: Function,
        SVp: Function,
        QP: Function,
        QpQs: Function
      }
    },
    mutations: {},
    actions: {
      calc(context) {
        context.commit("calc");
      }
    },
    modules: {},
    getters: {
      calc(state) {
        let SVs = (
          Math.PI *
          Math.pow(state.lvot_diam / 2, 2) *
          state.lvot_vti
        ).toFixed(2);
        let QS = (state.hr * SVs).toFixed(2);
        let BSA = (Math.sqrt(state.weight * state.height) / 60).toFixed(2);
        let CI = QS * BSA;
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
});

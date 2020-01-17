<template>
  <div class="home">
    <!-- <img alt="Vue logo" align="center" src="../assets/logo.png" /> -->
    <Q />
  </div>
</template>
<script>
// @ is an alias to /src
import Q from "@/components/Q.vue";
import { mapState, mapGetters } from "vuex";
import store from "../store";

export default {
  name: "home",
  components: {
    Q
  },
  data: function() {
    return {
      hr: "",
      weight: "",
      height: "",
      lvot_diam: "",
      lvot_vti: "",
      rvot_diam: "",
      rvot_vti: ""
    };
  },
  computed: {
    ...mapState(["data", "isLoading"]),
    ...mapGetters([]),
    Q() {
      return Q();
    }
  },
  created() {
    store.dispatch("GET_DATA");
  }
};
</script>

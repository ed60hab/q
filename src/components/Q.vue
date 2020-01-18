<template>
  <div class="patient-data">
    <div id="app">
      <div class="sqr">
        <p><strong>Patient's Data</strong></p>
        <p>
          <input
            type="number"
            class="heighttext"
            v-model="hr"
            placeholder="HR. bpm"
            size="5"
          />
          |
          <input
            type="number"
            class="heighttext"
            v-model="weight"
            placeholder="Weight. kg"
            size="5"
          />
          |
          <input
            type="number"
            class="heighttext"
            v-model="height"
            placeholder="Height. cm"
            size="5"
          />
        </p>
        <hr size="5" />
        <p>
          <strong>LVOT dmt: </strong>
          <input
            type="number"
            class="heighttext"
            v-model="lvot_diam"
            placeholder="PLAX"
            size="11"
          />
          cm
        </p>
        <p>
          <strong>LVOT VTI: </strong>
          <input
            type="number"
            class="heighttext"
            v-model="lvot_vti"
            placeholder="A4C"
            size="11"
          />
          cm
        </p>
        <hr size="5" />
        <p>
          <strong>RVOT dmt: </strong>
          <input
            type="number"
            class="heighttext"
            v-model="rvot_diam"
            placeholder="PSAX"
            size="11"
          />
          cm
        </p>
        <p>
          <strong>RVOT VTI: </strong>
          <input
            type="number"
            class="heighttext"
            v-model="rvot_vti"
            placeholder="PSAX"
            size="11"
          />
          cm
        </p>
        <hr size="5" />
        <p class="blueshadow">
          <strong>Systemic SV: {{ SVs }}</strong> ml |
          <strong>Qs: {{ QS }}</strong> L/min.
        </p>
        <hr size="5" />
        <p>
          <strong>BSA: {{ BSA }}</strong> m<sup>2</sup>
          |
          <strong class="blueshadow"><strong>CI:</strong> {{ CI }}</strong>
          L/min/m<sup>2</sup>
        </p>
        <hr size="5" />
        <p>
          <strong>Pulmonary SV:</strong> {{ SVp }} ml
          <strong>QP: {{ QP }}</strong> L/min.
        </p>
        <hr size="5" />
        <p>
          <strong>QP/QS Ratio: {{ QpQs }}</strong>
        </p>
      </div>
      <p class="mini">Made with love in Salamanca, MMXX</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hr: "",
      weight: "",
      height: "",
      rvot_diam: "",
      rvot_vti: "",
      lvot_diam: "",
      lvot_vti: ""
    };
  },
  computed: {
    SVp: function() {
      return (
        Math.PI *
        Math.pow(this.rvot_diam / 2, 2) *
        this.rvot_vti
      ).toFixed(2);
    },
    QP: function() {
      return ((this.hr * this.SVp) / 1000).toFixed(2);
    },
    SVs: function() {
      return (
        Math.PI *
        Math.pow(this.lvot_diam / 2, 2) *
        this.lvot_vti
      ).toFixed(2);
    },
    QS: function() {
      return ((this.hr * this.SVs) / 1000).toFixed(2);
    },
    QpQs: function() {
      return (this.QP / this.QS).toFixed(2);
    },
    BSA: function() {
      return (Math.sqrt(this.weight * this.height) / 60).toFixed(2);
    },
    CI: function() {
      return (this.QS / this.BSA).toFixed(2);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>

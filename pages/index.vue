<template>
  <div>
    <h2>Persegi Panjang Area Calculator</h2>
    <div>
      <label for="width">Lebar:</label>
      <input type="string" id="width" v-model="width" />
    </div>
    <div>
      <label for="length">Panjang:</label>
      <input type="string" id="length" v-model="length" />
    </div>
    <button @click="calculate">Hitung Luas</button>
    <div v-if="calculated">
      <div v-if="errorMessage">{{ errorMessage }}</div>
      <div v-else>Luas Persegi Panjang: {{ area }}</div>
    </div>
  </div>
</template>

<script>
const {calculateArea, inputValidation} = require("../functions/rectangle");

export default {
  data() {
    return {
      width: null,
      length: null,
      area: null,
      calculated: false,
      errorMessage: ''
    };
  },
  methods: {
    calculate() {
      this.calculated = true;
      this.errorMessage = inputValidation(this.width, this.length);
      this.area = calculateArea(this.width, this.length);
    }
  }
}
</script>

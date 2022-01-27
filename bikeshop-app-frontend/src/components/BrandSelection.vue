<template>
  <div class="col-12 col-md-3 my-3">
    <select
      class="form-select"
      aria-label="Brands"
      @change="getBrandSelection($event.target.value)"
    >
      <option selected :value="0">Seleccione una Marca</option>
      <option v-for="brand in brands" :value="brand.brand_id">
        {{ brand.brand_name }}
      </option>
    </select>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BrandSelection",

  data() {
    return {
      apiUrl: "http://localhost:3000/api/brands",
      brands: [],
    };
  },
  methods: {
    async getBrands() {
      const { data } = await axios.get(this.apiUrl);
      const brandsOrdered = data.sort((a, b) => {
        if (a.brand_name < b.brand_name) {
          return -1;
        }
        if (a.brand_name > b.brand_name) {
          return 1;
        }
        return 0;
      });
      return brandsOrdered;
    },
    getBrandSelection(brand_id) {
      this.$emit("getBrandId", brand_id);
    },
  },
  async created() {
    this.brands = await this.getBrands();
  },
};
</script>

<style></style>

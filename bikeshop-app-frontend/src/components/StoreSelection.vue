<template>
  <div class="col-12 col-md-3 my-3">
    <select
      class="form-select"
      aria-label="Stores"
      @change="getStoreSelection($event.target.value)"
    >
      <option selected :value="0">Seleccione una Tienda</option>
      <option v-for="store in stores" :value="store.store_id">
        {{ store.store_name }}
      </option>
    </select>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "StoreSelection",
  data() {
    return {
      apiUrl: "http://localhost:3000/api/stores",
      stores: [],
    };
  },
  methods: {
    async getStores() {
      const { data } = await axios.get(this.apiUrl);
      const storesOrdered = data.sort((a, b) => {
        if (a.store_name < b.store_name) {
          return -1;
        }
        if (a.store_name > b.store_name) {
          return 1;
        }
        return 0;
      });
      return storesOrdered;
    },
    getStoreSelection(store_id) {
      this.$emit("getStoreId", store_id);
    },
  },
  async created() {
    this.stores = await this.getStores();
  },
};
</script>

<style></style>

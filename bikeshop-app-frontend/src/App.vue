<template>
  <Navbar></Navbar>
  <div class="container my-3">
    <div class="row">
      <StoreSelection
        @getStoreId="getStoreIdFromStoreComponent"
      ></StoreSelection>
      <CategorySelection
        @getCategoryId="getCategoryIdFromCategoryComponent"
      ></CategorySelection>
      <BrandSelection
        @getBrandId="getBrandIdFromBrandComponent"
      ></BrandSelection>
      <div class="col-12 col-md-3 text-center align-self-center">
        <button
          @click="updateTable(this.store_id, this.category_id, this.brand_id)"
          type="button"
          class="btn btn-primary"
        >
          Buscar
        </button>
      </div>
    </div>
  </div>
  <div class="container my-3">
    <div class="row">
      <div class="col-12">
        <DataTable
          ref="dataTableComponent"
          :store_id="this.store_id"
          :category_id="this.category_id"
          :brand_id="this.brand_id"
        ></DataTable>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import StoreSelection from "./components/StoreSelection";
import CategorySelection from "./components/CategorySelection";
import BrandSelection from "./components/BrandSelection";
import DataTable from "./components/DataTable";

export default {
  components: {
    Navbar,
    StoreSelection,
    CategorySelection,
    BrandSelection,
    DataTable,
  },
  data() {
    return {
      store_id: 0,
      category_id: 0,
      brand_id: 0,
    };
  },
  methods: {
    getStoreIdFromStoreComponent(value) {
      this.store_id = parseInt(value);
    },
    getCategoryIdFromCategoryComponent(value) {
      this.category_id = parseInt(value);
    },
    getBrandIdFromBrandComponent(value) {
      this.brand_id = parseInt(value);
    },
    updateTable(store_id, category_id, brand_id) {
      this.$refs.dataTableComponent.filterProducts(
        store_id,
        category_id,
        brand_id
      );
    },
  },
};
</script>

<style></style>

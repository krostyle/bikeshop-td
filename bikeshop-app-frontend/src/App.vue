<template>
  <Navbar></Navbar>
  <div class="container my-3">
    <div class="row">
      <StoreSelection></StoreSelection>
      <CategorySelection></CategorySelection>
      <BrandSelection></BrandSelection>
      <div class="col-12 col-md-3 text-center align-self-center">
        <button v-on="click" type="button" class="btn btn-primary">
          Buscar
        </button>
      </div>
    </div>
  </div>
  <div class="container my-3">
    <div class="row">
      <DataTable></DataTable>
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
};
</script>

<style></style>

<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Tienda</th>
        <th scope="col">ID Producto</th>
        <th scope="col">Nombre Producto</th>
        <th scope="col">Inventario</th>
        <th scope="col">Acción</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products">
        <td>-</td>
        <td>{{ product.product_id }}</td>
        <td>{{ product.product_name }}</td>
        <td>-</td>
        <td><button class="btn btn-primary">Ver</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
export default {
  props: {
    store: {
      type: Object,
      required: true,
    },
    category: {
      type: Object,
      required: true,
    },
    brand: {
      type: Object,
      required: true,
    },
    stock: {
      type: Object,
      required: true,
    },
  },
  name: "DataTable",
  data() {
    return {
      apiUrl: "http://localhost:3000/api/products",
      products: [],
    };
  },
  methods: {
    async getProducts() {
      const { data } = await axios.get(this.apiUrl);
      const productsOrdered = data.sort((a, b) => {
        if (a.product_name < b.product_name) {
          return -1;
        }
        if (a.product_name > b.product_name) {
          return 1;
        }
        return 0;
      });
      return productsOrdered;
    },
  },
  async created() {
    this.products = await this.getProducts();
  },
};
</script>

<style></style>

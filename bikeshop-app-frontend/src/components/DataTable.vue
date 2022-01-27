<template>
  <div class="table-responsive">
    <table class="table table-sm">
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
          <td>{{ product.store_name }}</td>
          <td>{{ product.product_id }}</td>
          <td>{{ product.product_name }}</td>
          <td>{{ product.stock }}</td>
          <td><button class="btn btn-primary">Ver</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    store_id: {
      type: Number,
      required: true,
    },
    brand_id: {
      type: Number,
      required: true,
    },
    category_id: {
      type: Number,
      required: true,
    },
  },
  name: "DataTable",
  data() {
    return {
      apiUrl: "http://localhost:3000/api/products",
      staticProducts: [],
      products: [],
    };
  },
  methods: {
    async getProducts() {
      const { data } = await axios.get(this.apiUrl);
      const productTableOrdered = data
        .map((product) => {
          return {
            store_name: product.stock.store.store_name,
            store_id: product.stock.store.store_id,
            category_id: product.category.category_id,
            product_id: product.product_id,
            brand_id: product.brand.brand_id,
            product_name: product.product_name,
            stock: product.stock.quantity,
          };
        })
        .sort((a, b) => {
          if (a.product_name < b.product_name) {
            return -1;
          }
          if (a.product_name > b.product_name) {
            return 1;
          }
          return 0;
        });
      return productTableOrdered;
    },
    //Este metodo se puede optimizar para obtener solo los productos que se necesitan segun el store_id, category_id y brand_id
    filterProducts(parameters_quantity) {
      switch (parameters_quantity) {
        case 1:
          break;
        case 2:
          break;
        case 3:
          break;
        default:
          this.products = this.staticProducts;
          break;
      }
    },
    updateTableOneParmeters() {},
    updateTableTwoParmeters() {},
    updateTableThreeParmeters() {},
  },

  async created() {
    this.staticProducts = await this.getProducts();
    this.products = await this.getProducts();
  },
};
</script>

<style></style>

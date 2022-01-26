<template>
  <div class="col-12 col-md-3 my-3">
    <select class="form-select" aria-label="Categories">
      <option selected>Seleccione una Categoria</option>
      <option v-for="category in categories" :value="category.category_id">
        {{ category.category_name }}
      </option>
    </select>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CategorySelection",
  data() {
    return {
      apiUrl: "http://localhost:3000/api/categories",
      categories: [],
    };
  },
  methods: {
    async getCategories() {
      const { data } = await axios.get(this.apiUrl);
      const categoriesOrdered = data.sort((a, b) => {
        if (a.category_name < b.category_name) {
          return -1;
        }
        if (a.category_name > b.category_name) {
          return 1;
        }
        return 0;
      });
      return categoriesOrdered;
    },
  },
  async created() {
    this.categories = await this.getCategories();
  },
};
</script>

<style></style>

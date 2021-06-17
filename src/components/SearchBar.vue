<template>
  <div class="searchBar">
    <v-text-field
      v-model="filter"
      clearable
      autofocus
      id="filterInput"
      placeholder="Search..."
      style="width: 280px;"
      color="#F9AA33"
      class="ml-5 mt-7" 
    ></v-text-field>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filter: "",
    };
  },
};
</script>
<style lang="scss">
.searchBar{
  .v-input__slot::before {
    border-style: none !important;
  }
  .mdi-close::before{
      padding-bottom: 5px;
  }
}
</style>

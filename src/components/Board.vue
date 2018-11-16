<template>
  <div class="w-100 h-100 bg-white rounded shadow-lg flex flex-wrap p-2">
    <div v-for="(y, k) in dimensions.h" :key="k">
      <div v-for="(x, i) in dimensions.w" :key="i" class="square bg-grey hover:bg-teal"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dimensions: Object
  }
};
</script>

<style>
.square {
  width: 10px;
  height: 10px;
  margin: 2px;
}
.w-100 {
  min-width: 600px;
}
.h-100 {
  min-width: 600px;
}
</style>

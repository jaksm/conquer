<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-black text-white">
    <Board :dimensions="{w: 50, h:50}"/>
  </div>
</template>

.w-100 {
  width: 1000px;
}
<script>
import Board from "@/components/Board";
export default {
  components: {
    Board
  }
};
</script>

<style>
</style>

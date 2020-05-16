<template>
  <div class="hoge">
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { useRouter } from "vue-router";

export default defineComponent({
  name: "Home",
  setup() {
    // const router = useRouter();
  }
});
</script>

<style lang="scss" scoped>
.hoge {
  display: flex;
}
</style>

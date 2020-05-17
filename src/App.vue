<template>
  <article>
    <Header />
    <router-view />
    <footer></footer>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "normalize.css"; //reset css
import Header from "@/components/Header.vue";

export default defineComponent({
  name: "App",
  components: {
    Header
  }
  // setup() {}
});
</script>

<style lang="scss">
/* FIXME: normalizeではulのスタイルがリセットしきれていない */

ol,
ul {
  list-style: none;
}
</style>

<template>
  <footer class="footer">
    <ul class="footer__links">
      <li>Home</li>
      <li>Portfolio</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    <small class="footer__copyright"
      >© 2020 · Takehiro Tada · ALL RIGHTS RESERVED
    </small>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer"
});
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background: #001f34;
  /* background: red; */
}
.footer__links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 480px;
  height: 200px;

  li {
    color: #e5e5e5;
    font-weight: bold;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: 0.08em;
  }
}
.footer__copyright {
  color: #c4c4c4;
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.08em;
}
</style>

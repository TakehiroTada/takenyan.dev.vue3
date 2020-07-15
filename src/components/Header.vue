<template>
  <header class="header">
    <nav class="header__nav">
      <ul class="header__nav__ul">
        <li class="header__nav__link">
          <span class="header__nav__link__font">Home</span>
          <figure class="right-arrow" />
        </li>
        <li class="header__nav__link">
          <span class="header__nav__link__font">Portfolio</span>
          <figure class="right-arrow" />
        </li>
        <li class="header__nav__link">
          <span class="header__nav__link__font">About</span>
          <figure class="right-arrow" />
        </li>
        <li class="header__nav__link">
          <span class="header__nav__link__font">Contact</span>
          <figure class="right-arrow" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header"
});
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 282px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c2e3f;
}

.header__nav {
  width: 918px;
  height: 206px;
  display: flex;
  flex-direction: column;
}

.header__nav__ul {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}

.header__nav__link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  border-bottom: 0.5px dashed #c4c4c4;
  padding-bottom: 4px;
}

.header__nav__link__font {
  font-size: 24px;
  font-weight: normal;
  color: #c4c4c4;
}

.right-arrow {
  margin: 0;
  padding: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 9px 0 9px 15.6px;
  border-color: transparent transparent transparent #c4c4c4;
}
</style>

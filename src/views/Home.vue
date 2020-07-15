<template>
  <section class="main-frame">
    <TheHamburgerIcon />
    <div class="main-frame__title">
      <h1 class="main-frame__title__name">Takehiro Tada</h1>
      <h2 class="main-frame__title__business">Frontend-Engineer</h2>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHamburgerIcon from "../components/TheHamburgerIcon.vue";
// import { useRouter } from "vue-router";

export default defineComponent({
  name: "Home",
  components: {
    TheHamburgerIcon
  },
  setup() {
    // const router = useRouter();
  }
});
</script>

<style lang="scss" scoped>
.main-frame {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 675px;
  // background-color: #001f34;
  background: url("../assets/main-image.png") no-repeat center center;
  background-size: cover;
}

.main-frame__title {
  width: 730px;
  height: 202px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.main-frame__title__name {
  color: #e5e5e5;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 12px;
}

.main-frame__title__business {
  color: #e5e5e5;
  font-size: 24px;
  font-weight: bold;
}
</style>

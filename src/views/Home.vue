<template>
  <div class="container">
    <section class="main-frame">
      <TheHamburgerIcon />
      <div class="main-frame__title">
        <h1 class="main-frame__title__name">Takehiro Tada</h1>
        <h2 class="main-frame__title__business">Frontend-Engineer</h2>
      </div>
    </section>
    <section class="work-frame">
      <figure class="work-frame__image-wrapper">
        <img
          v-for="n in 6"
          :key="n"
          src="../assets/content.png"
          alt="work-image"
        />
      </figure>
    </section>
  </div>
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-frame {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 675px;
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

.work-frame {
  position: relative;
  width: 100%;
  height: 482px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: #001f34;
}

.work-frame__image-wrapper {
  width: 1164px;
  height: 100%;
  position: absolute;
  top: -80px;
  img {
    margin: 4px;
  }
}
</style>

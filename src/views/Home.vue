<template>
  <div class="container">
    <section class="main-frame">
      <TheHamburgerIcon />
      <div class="main-frame__title effect-fade">
        <h1 class="main-frame__title__name">Takehiro Tada</h1>
        <h2 class="main-frame__title__business">Frontend-Engineer</h2>
      </div>
    </section>
    <section class="work-frame">
      <div class="work-frame__image-wrapper">
        <WorkCard
          v-for="n in 6"
          :key="n"
          title="Inverness McKenzie"
          content="The only skills I have the patience to learn are those that have no real application in life."
          image-url="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample108.jpg"
          link="/"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHamburgerIcon from "../components/TheHamburgerIcon.vue";
import WorkCard from "@/components/WorkCard.vue";

// import { useRouter } from "vue-router";

export default defineComponent({
  name: "Home",
  components: {
    TheHamburgerIcon,
    WorkCard
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
  display: flex;
  flex-wrap: wrap;

  figure {
    margin: 8px;
  }
}

.effect-fade {
  font-size: 20px;
  font-weight: bold;
  animation-name: fadein;
  animation-duration: 1s;
  //animation-iteration-count: infinite;
}

@keyframes fadein {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

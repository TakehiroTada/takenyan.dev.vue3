<template>
  <figure class="snip1543 effect-fade">
    <img :src="imageUrl" :alt="title" />
    <figcaption>
      <h3>{{ title }}</h3>
      <p>{{ content }}</p>
    </figcaption>
    <a :href="link"></a>
  </figure>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// type IProps = {
//   title: string;
//   content: string;
//   imageUrl: string;
//   link: string;
// }

export default defineComponent({
  name: "WorkCard",
  props: {
    title: {
      type: String,
      require: true,
      default: ""
    },
    content: {
      type: String,
      require: true,
      default: ""
    },
    imageUrl: {
      type: String,
      require: true,
      default: ""
    },
    link: {
      type: String,
      require: true,
      default: ""
    }
  }
  // setup(props: IProps) {
  //   // const router = useRouter();
  // }
});
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro);
@import url(https://fonts.googleapis.com/css?family=Teko:700);

.snip1543 {
  background-color: #fff;
  color: #ffffff;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  margin: 10px;
  max-width: 360px;
  min-width: 230px;
  overflow: hidden;
  position: relative;
  text-align: left;
  width: 100%;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.snip1543 *,
.snip1543 *:before,
.snip1543 *:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.45s ease;
  transition: all 0.45s ease;
}

.snip1543 img {
  backface-visibility: hidden;
  max-width: 100%;
  vertical-align: top;
}

.snip1543:before,
.snip1543:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: "";
  background-color: #1273b8;
  opacity: 0.3;
  -webkit-transition: all 0.45s ease;
  transition: all 0.45s ease;
}

.snip1543:before {
  -webkit-transform: skew(30deg) translateX(-80%);
  transform: skew(30deg) translateX(-80%);
}

.snip1543:after {
  -webkit-transform: skew(-30deg) translateX(-70%);
  transform: skew(-30deg) translateX(-70%);
}

.snip1543 figcaption {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  padding: 25px 40% 25px 20px;
}

.snip1543 h3,
.snip1543 p {
  margin: 0;
  opacity: 0;
  letter-spacing: 1px;
}

.snip1543 h3 {
  font-family: "Teko", sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 1em;
  text-transform: uppercase;
}

.snip1543 p {
  font-size: 0.9em;
}

.snip1543 a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.snip1543:hover h3,
.snip1543.hover h3,
.snip1543:hover p,
.snip1543.hover p {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 0.9;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

.snip1543:hover:before,
.snip1543.hover:before {
  -webkit-transform: skew(30deg) translateX(-20%);
  transform: skew(30deg) translateX(-20%);
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
}

.snip1543:hover:after,
.snip1543.hover:after {
  -webkit-transform: skew(-30deg) translateX(-10%);
  transform: skew(-30deg) translateX(-10%);
}

.snip1543:hover figcaption:before,
.snip1543.hover figcaption:before {
  -webkit-transform: skew(30deg) translateX(-40%);
  transform: skew(30deg) translateX(-40%);
  -webkit-transition-delay: 0.15s;
  transition-delay: 0.15s;
}

.snip1543:hover figcaption:after,
.snip1543.hover figcaption:after {
  -webkit-transform: skew(-30deg) translateX(-30%);
  transform: skew(-30deg) translateX(-30%);
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}
</style>

<template>
  <!-- <input id="my-parts-checkbox" class="my-parts-hidden" type="checkbox" /> -->
  <!-- <button @click="pushed" type="button" id="my-parts-icon">
      <span></span>
  </button>-->
  <div class="container">
    <button type="button" class="before" @click="pushed">
      <transition name="mid">
        <span v-if="state.checked" class="line"></span>
      </transition>
    </button>
  </div>
</template>

<script lang="ts">
// import Vue from "vue";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "TheHumburgerIcon",
  setup() {
    const state = reactive({
      checked: false
    });

    return {
      state,
      pushed() {
        state.checked = !state.checked;
        console.log(state.checked);
      }
    };
  }
});
</script>

<style lang="scss" scoped>
.container {
  width: 50px;
  height: 50px;
}
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}

.line {
  background: #e5e5e5;
  border-radius: 4px;
  display: block;
  height: 16%;
  left: 50%;
  margin: -8% 0 0 -42%;
  position: absolute;
  top: 50%;
  // transition: all 0.3s ease-in-out;
  width: 84%;
}

.mid-enter-active {
  transition: all 0.3s ease-in-out;
}

.mid-enter,
.mid-leave-to {
  transform: rotate(-45deg);
}

// .line::before,
// .line::after {
//   -webkit-transform: rotate(0);
//   background: #e5e5e5;
//   border-radius: 4px;
//   content: "";
//   display: block;
//   height: 100%;
//   left: 50%;
//   margin: -8% 0 0 -50%;
//   position: absolute;
//   top: 50%;
//   transform: rotate(0);
//   transition: all 0.3s ease-in-out;
//   width: 100%;
// }

.line::before {
  margin-top: -38%;
}

.line::after {
  margin-top: 19%;
}

.before {
  cursor: pointer;
  display: inline-block;
  height: 50px;
  position: relative;
  width: 50px;
}

// #my-parts-icon-enter-active,
// #my-parts-icon-leave-active {
//   transition: all 0.3s ease-in-out;
// }

// #my-parts-icon-enter-active {
//   span::before {
//     -webkit-transform: rotate(-45deg);
//     transform: rotate(-45deg);
//   }

//   span::after {
//     -webkit-transform: rotate(45deg);
//     transform: rotate(45deg);
//   }
// }

// #my-parts-icon span {
//   background: rgba(51, 51, 51, 0);
// }
// #my-parts-icon span::before,
// #my-parts-icon span::after {
//   content: "";
//   display: block;
//   height: 100%;
//   left: 50%;
//   margin: -8% 0 0 -42%;
//   position: absolute;
//   top: 50%;
//   width: 100%;
// }
</style>

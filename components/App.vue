<template>
  <div class="app">
    <Header :currentSection="currenSection"></Header>
    <Main></Main>
  </div>
</template>
<script>

import { gsap} from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

import {mapState, mapActions} from "pinia";

import { useConfigStore } from "../stores/ConfigStore";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
export default {
  data() {
    return {
      hello: -1,
    };
  },
  mounted() {
    // Set up event listeners for window resize
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  unmounted() {
    // Clean up event listeners when the component is destroyed
    window.removeEventListener('resize', this.handleResize);
  },
  methods:{
    ...mapActions(useConfigStore, {
      setInnerHeight: "updateInnerHeight",
      setInnerWidth: "updateInnerWidth"
    }),
    handleResize(){
      this.setInnerHeight(window.innerHeight);
      this.setInnerWidth(window.innerWidth);
    },
  },
  computed: {
    ...mapState(useConfigStore, {
        currenSection: "currenSection",
    }),
 
  },
};
</script>

<style lang="scss" scoped>
.boxes {
  display: flex;
}

</style>

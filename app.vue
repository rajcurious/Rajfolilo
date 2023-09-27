<template>
  <App> </App>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css'
import { mapActions, mapState} from "pinia";
import { useConfigStore } from "./stores/ConfigStore";
export default {
  mounted() {
    AOS.init();
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        const headerOffset = 80; // Adjust this value based on your header height
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollBy({
          top: offsetPosition,
          behavior: "smooth",
        });
      });
    });
    document.documentElement.dataset.theme = this.theme;
  },
  watch:{
   theme(theme){
    document.documentElement.dataset.theme = theme;
   }
  },
  unmounted() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.removeEventListener("click");
    });
  },
  computed: {
    ...mapState(useConfigStore, {
      theme : "theme"
    })
  },
  methods:{
  }
};
</script>

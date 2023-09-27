<template>
  <section id="experience">
    <div class="experience-wrapper grid-container grid-container-2 gap-2">
      <div class="company">
        <Icon name="mdi:amazon" class="" size="100"/>
        <div class="title">Software development Engineer I , Amazon (Internship + F.T.E)</div>
        <div class="tenure">
          Feb 2022 - March 2023
      </div>
      </div>
      <div class="company-info">
        My journey at Amazon commenced as an intern in a Data Platform Team and smoothly transitioned into a full-time Software Engineer role. Throughout my time in this team, I contributed significantly to the design, implementation, and operations of crucial components of the data platform.
      </div>

      <!-- 2/22 - 3/22  (Internship + F.T.E) -->
    </div>
   

  </section>
</template>

<script>
import { gsap } from "gsap";
import { mapActions, mapState } from "pinia";
import { useConfigStore } from "../stores/ConfigStore";
export default {
  data(){
    return {

    };
  },
  mounted(){
    this.experienceGsap();
  },
  methods: {
    stopElement(index) {
      this.elements[index].stop = true;
    },
    restartElement(index) {
      this.elements[index].stop = false;
    },
    ...mapActions(useConfigStore, {
      updateSection: "updateCurrentSection",
    }),
    experienceGsap() {
      const experienceTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#experience",
          scrub: true,
          // pin: true,
          start: "top 90%",
          end: "bottom top",

        },
      });
      experienceTl
        .fromTo("#experience", {
          filter: "brightness(0)",
          duration: 1,
          // backgroundColor: "rgba(25, 126, 160, 0)",
          ease: "linear",
        },
        {
          filter: "brightness(1)"
        },"<0")
        .fromTo("#experience", {
          filter: "brightness(1)",
          duration: 1,
          // backgroundColor: "rgba(25, 126, 160, 0)",
          ease: "linear",
        },
        {
          filter: "brightness(0)"
        },"<+=1")
    },
  },
};
</script>
<style lang='scss'>
#experience {
  // color:black;
  background-color: rgb(255, 153, 0);
  filter: brightness(1);

  .experience-wrapper{
    width: 80%;
    color:black;
    font-size:max(16px, 1.5vw);
      .company{

        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
        
        .title{
          font-size:max(16px, 1.5vw);
          font-weight: 600;
          text-align: center;
          padding: 10px;
        }
      }

      .company-info{
          text-align: justify;
          text-justify: newspaper;
        }
  }
}


</style>

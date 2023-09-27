<template>
  <main>
     <About></About>
     <Products></Products>
     <Project1></Project1>
     <Project2></Project2>
     <Skills></Skills>
     <Experience></Experience>
     <Contacts></Contacts>
  </main>
</template>

<script>
import { gsap } from "gsap";

// import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  mounted() {

    //device specs: 3626, 2720
    //screen specs: 2750, 1768
    this.deviceWidth = window.innerWidth;
    this.deviceHeight = this.deviceWidth * 0.750137893;
    this.screenWidth = this.deviceWidth * 0.7584114727 + 5;
    this.screenHeight = this.deviceHeight * 0.65 + 5;
  },
  data() {
    return {
      sections: [
        "about",
        "products",
        "projects",
        "experience",
        "skills",
        "contacts",
      ],
    };
  },
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  top:0px;
  left:0px;
  width: 100vw;
  z-index: 100;

  .slides{
    position: relative;
    width: 100vw;
    height: 100%;

  .slide {
    position: absolute;
    top:0px;
    left:0px;
    right:0px;
    bottom: 0px;
    background-color: blue;

    .title {
      font-size: 3rem;
      font-weight: 600;
      color: white;
      margin-bottom: 20px;
      //   line-height: 5rem;
      * {
        height: 1em;
      }
    }
  }
  }

}

.main{
  width: 100%;
  height: 100vh;
}


#about,
#project-1,
#project-2,
#experience,
#contacts,
#skills {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#contacts {
}



</style>

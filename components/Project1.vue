<template>
  <section id="project-1" class="project project-1">
    <div class="static-overlay"></div>
    <div class="layer-bg layer parallax" data-depth="0.1">
      <div class="hollow-text hollow-text-with-stroke">1</div>
    </div>
    <div class="layer-1 layer parallax" data-depth="0.1"></div>
    <div class="layer-2 layer parallax" data-depth="0.2"></div>
    <div class="layer-3 layer parallax" data-depth="0.80"></div>
    <div class="layer-4 layer parallax" data-depth="1"></div>
    <div class="layer-overlay layer parallax" data-depth="1"></div>

    <div class="app-demo layer parallax" data-depth="-1.8">
      <img src="@/assets/images/iphone.png" class="iphone-frame" />
      <video autoplay loop class="app-screen">
        <source src="@/assets/images/project-1-edited.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div class="info">
      <h1 class="title">
       Disease detection   <br /> in apple leaves
      </h1>
      <div class="about">
        <Icon name="vscode-icons:file-type-flutter" size="1.5em"/> (Flutter) app featuring a <Icon name="logos:tensorflow" size="24"/> (TensorFlow Lite) model designed to identify
        common diseases in apple leaves. The model was trained on a dataset
        from a Kaggle competition where I achieved a rank under 20 on the leaderboard.
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { mapActions } from "pinia";
import { useConfigStore } from "../stores/ConfigStore";

export default {
  mounted() {
    this.projectGsap();
  },
  unmounted() {
    // const video = document.querySelector(".app-screen");
    // video.removeEventListener("ended");
  },
  methods: {
    ...mapActions(useConfigStore, {
      updateSection: "updateCurrentSection",
    }),
    pauseNplay() {
      const video = document.querySelector(".app-screen");

      video.addEventListener("ended", function () {
        // Pause the video
        video.pause();

        // Delay for 5 seconds (5000 milliseconds)
        setTimeout(function () {
          // Reset the video currentTime to 0
          video.currentTime = 0;
          // Play the video
          video.play();
        }, 5000);
      });
    },

    // onEnterBack() {
    //   this.updateSection("projects");
    // },
    projectGsap() {
      gsap.from("#project-1", {
        scrollTrigger: {
          trigger: "#project-1",
          scrub: true,
          start: "top 90%",
          end: "top 0%",
        },
        filter: "brightness(0)",
        ease: "none",
      });

      const projectTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#project-1",
          scrub: 1,
          start: "top 0%",
          end: "+=100%",
        },
      });
      projectTl.to(
        ".info",
        {
          y: "50vh",
          duration: 0.1,
          autoAlpha:0
        },
        "<"
      ).fromTo(
        ".app-demo",{
          y: "40vh",
          duration: 0.1,
          autoAlpha:0
        },{
          // y: "10vh",
          y: "10vh",
          autoAlpha:1
        },
        "<0.1"
      );
      
      gsap.utils.toArray(".parallax").forEach((layer) => {
        const depth = layer.dataset.depth;
        const movement = -(layer.offsetHeight * depth);
        projectTl.to(layer, { y: movement, ease: "none", duration: 2 }, "0.5");
      });
      projectTl.to(".app-demo", {
        opacity:0
      }, "2")
    },
  },
};
</script>

<style lang="scss">
.project-1 {
  position: relative;
  width: 100vw;
  filter: brightness(1);
  background-image: url("@/assets/images/project1/water.avif");
  height: 100vh;

  .app-demo {
    z-index: 4;
    .app-screen {
      position: absolute;
      width: calc((447 / 906) * 60vh - (447 / 906)*10vh);
      top: 2vh;
      height: 59vh;
      // left: calc(20vw + 1vw);
      left: 50%;
      transform: translate(-50%);
      z-index: 1;
      // border-radius: 5vw;
    }

    .iphone-frame {
      // height: 60vh;
      width: calc((447 / 906) * 60vh - (447 / 906)*6vh);
      top: 5vh;
      left: 50%;
      transform: translate(-50%);
      position: absolute;
    }
  }
}
.info {
  position: absolute;
  left: 20%;
  top: 30%;
  transform: translateY(-50%);
  z-index: 2;
  display: flex;
  flex-flow: column;
  width: 50vw;

  .title {
    color: rgb(0, 0, 0);
    font-size: max(calc((5 / 3) * 16px)  , 2.5vw);
    font-weight: 700;
  }

  .about {
    color: rgb(0, 0, 0);
    word-spacing:0.475vw;
    font-size: max(16px, 1.5vw);
    text-justify: newspaper;
    text-align: justify;
    font-weight: 500;
  }
}

.layer {
  background-position: bottom center;
  background-size: auto;
  background-repeat: no-repeat;
  width: 100%;
  margin: auto;
  height: 100%;
  position: fixed;
  // z-index: -1;
  overflow-x: hidden;
}


.layer {
  min-height: 800px;
}

.static-overlay{
  background-color: #4db3e2e3;
  backdrop-filter: blur(2px);
  // background-color: red;
  // background-position: bottom bottom;
  height: 25%;
  margin: auto;
  bottom: 0;
  width: 100%;
  z-index:5;
  position: fixed;
  overflow-x: hidden;
}

.layer-bg {
  background-image: url("@/assets/images/project1/back.png");

  z-index: 1;
  position: relative;
}
.layer-1 {
  background-image: url("@/assets/images/project1/il1.png");
  background-position: left bottom;
  z-index: 2;
  .hollow-text {
    position: absolute;
    top: 30%;
    left: 2rem;
    transform: translateY(-50%);
    // background-color: red;
  }
}
.layer-2 {
  background-image: url("@/assets/images/project1/il2.png");
  z-index: 3;
}
.layer-3 {
  background-image: url("@/assets/images/project1/il3.png");
  z-index: 5;
}
.layer-4 {
  background-image: url("@/assets/images/project1/il4.png");
  z-index: 6;
}
.layer-overlay {
  background-image: url("@/assets/images/project1/il5.png");
  z-index: 7;
}

@media only screen and (max-width: 768px) {
  .layer-1 {
    background-position: 26% bottom;
  }
  .layer-3 {
    background-position: 35% bottom;
  }
}
</style>

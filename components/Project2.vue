<template>
  <section
    id="project-2"
    class="project project-2"
    @mousemove="this.moveEyeball"
  >
    <div class="eye-vision"></div>
    <div class="hollow-text hollow-text-with-stroke">2</div>
    <div class="project-wrapper grid-container grid-container-2">
      <div class="ufo">
        <div class="monster" style="color: #7cb342">
          <div class="body">
            <div class="ear"></div>
            <div class="ear"></div>
            <div class="vampi-mouth">
              <div class="vampi-tooth"></div>
            </div>
          </div>
          <div class="eye-lid">
            <div class="eyes">
              <div class="eye"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="title">Eye tracking using camera feed</div>
          <div class="p-info">
            Research on low cost solution to estimate eye
            gaze from web camera input.
            Also created a tile breaking game where in you can break tile by focus of
            your eye.  <a target="_blank" href="https://docs.google.com/document/d/1SEctv_68f2mUJySrL_fj45YA887yLa6zvNhfuT70qT0/edit?usp=sharing">more.</a>
          </div>
         
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { mapActions, mapState } from "pinia";
import { useConfigStore } from "../stores/ConfigStore";

export default {
  mounted() {
    this.projectGsap();
  },
  unmounted() {
    const container = document.querySelector(".ufo");
    container.removeEventListener("mousemove");
  },
  data() {
    return {};
  },
  watch: {},
  computed: {
    ...mapState(useConfigStore, {
      innerHeight: "innerHeight",
      innerWidth: "innerWidth",
    }),
  },
  methods: {
    ...mapActions(useConfigStore, {
      updateSection: "updateCurrentSection",
    }),
    moveEyeball(e) {
      const eyeball = document.querySelector(".eyes");
      const eyeVision = document.querySelector(".eye-vision");
      const x_cursor = e.clientX;
      const y_cursor = e.clientY;
      const rect = eyeball.getBoundingClientRect();
      const x_eyeball = rect.left + rect.width / 2;
      const y_eyeball = rect.top + rect.height / 2;

      const angle =
        Math.atan2(y_eyeball - y_cursor, x_eyeball - x_cursor) *
          (180 / Math.PI) -
        90;

      eyeball.style.transform = `rotateZ(${angle}deg)`;
      eyeVision.style.left = `${(x_cursor / this.innerWidth) * 100 - 10}vw`;
      eyeVision.style.top = `${(y_cursor / this.innerHeight) * 100 - 10}vh`;
    },
    onLeave() {
      this.updateSection("skills");
    },
    onEnterBack() {
      this.updateSection("projects");
    },
    projectGsap() {
      gsap.from("#project-2", {
        scrollTrigger: {
          trigger: "#project-2",
          scrub: true,
          start: "top top",
          end: "bottom top",
          markers: true,
          onEnterBack: this.onEnterBack,
          onLeave: this.onLeave,
        },
        ease: "none",
      });
    },
  },
};
</script>

<style lang="scss">
.project-2 {
  color: var(--color-text-default);
  position: relative;
  filter: brightness(1);
  backdrop-filter: blur(2px);
  background: linear-gradient(
    180deg,
    #4db3e2 0%,
    rgba(22, 22, 243, 0.536) 75%,
    rgb(0, 0, 0) 100%
  );
  z-index: 5;

  .hollow-text {
    position: absolute;
    top: 2rem;
    left: 2rem;
  }

  .eye-vision {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 20vw;
    height: 20vh;
    background-color: rgb(255, 0, 191);
    filter: blur(15vmin);
    z-index: 1;
  }

  .project-wrapper{
    width: 80vw;
  }

  .content {
    display: flex;
    align-items: center;
    flex-flow: column;
    color: white;

    @media (min-width: 768px)  { 
    html{
        font-size: large;

     
       
    }
} 
    .title {
      font-size: max(35px, 3.5vw);
      font-weight: 600;
      margin-bottom: 2rem;
    }

    .p-info {
      font-size: max(20px, 1.6vw);
      z-index: 2;
      text-align: justify;
      text-justify: newspaper;

      a{
        user-select: none;
        text-decoration: none;
        color:rgba(0, 255, 242, 0.64);
      }
    }
  }

  .ufo {
    font-size: 25vmin;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .monster {
    font-size: 0.7em;
    margin: 0 auto;
    width: 1em;
    height: 1.3em;
    border-radius: 0.5em 0.5em 0em 0em / 0.6em 0.6em 0em 0em;
    box-sizing: content-box;
    border: 0.07em solid transparent;
    position: relative;
    // top: 2em;
    user-select: none;
    cursor: grab;
  }

  .monster.small {
    font-size: 4rem;
  }

  .body {
    width: 100%;
    height: 100%;
    background-color: #4db2e2;
    border-radius: inherit;
    position: relative;
    transform-origin: bottom center;
    animation: bouncebody alternate infinite 400ms 40ms ease-in-out;
  }
  .eyes,
  .eye-lid {
    text-align: center;
    display: flex;
    font-size: 0.65em;
    width: 1em;
    height: 1em;
    position: absolute;
    left: 0.25em;
    top: 0.3em;
  }

  .eye {
    position: relative;
    display: inline-block;
    border-radius: 50%;
    width: 75%;
    height: 75%;
    background-color: black;
    border-radius: 50%;
  }
  .eye-lid {
    background-color: white;
    border-radius: 0.5em 0.5em 0.5em 0.5em / 0.6em 0.6em 0.4em 0.4em;
    box-shadow: 0.03em 0.14em rgba(0, 0, 0, 0.1);
    animation: blink_eyes 7s infinite;
  }

  .eye:after {
    /*pupil*/
    --pupil-size: 0.2em;
    position: absolute;
    top: 0.05em;
    left: 0.3em;
    width: var(--pupil-size);
    height: var(--pupil-size);
    background: white;
    border-radius: 50%;
    content: " ";
  }

  .mouth {
    font-size: 0.2em;
    width: 1em;
    height: 0.3em;
    background: black;
    border-radius: 1.5em 1.5em 0.5em 0.5em;
    position: absolute;
    bottom: 0.8em;
    left: 50%;
    transform: translateX(-50%);
  }

  .mouth::before {
    width: 50%;
    height: 30%;
    display: block;
    content: " ";
    background-color: #ff8800;
    border-radius: 50% / 100% 100% 50% 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-10%) translateX(-50%);
  }

  .vampi-mouth {
    position: absolute;
    background: black;
    overflow: hidden;
    font-size: 0.3em;
    width: 1em;
    height: 0.7em;
    left: 50%;
    bottom: 0.3em;
    transform: translateX(-50%);
    border-radius: 0.7em 0.7em 1.2em 1.2em;
  }

  .vampi-mouth::before {
    content: "";
    display: block;
    background: #ff8800;
    width: 100%;
    height: 0.2em;
    position: absolute;
    bottom: 0;
    border-radius: 50% 50% 0 0;
  }

  .vampi-tooth::before,
  .vampi-tooth::after,
  .vampi-tooth {
    --teeth-size: 0.25em;
    display: block;
    width: 0;
    height: 0;
    font-size: inherit;
    border-left: calc(var(--teeth-size) / 2) solid transparent;
    border-right: calc(var(--teeth-size) / 2) solid transparent;
    border-top: var(--teeth-size) solid #fff;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .vampi-tooth:before {
    content: "";
    transform: translateX(-150%) translateY(-100%);
  }

  .vampi-tooth:after {
    content: "";
    transform: translateX(50%) translateY(-100%);
  }

  .ear {
    position: absolute;
    top: -1.2em;
    transform-origin: bottom center;
    font-size: 0.3em;
    width: 0.8em;
    height: 1.5em;
    left: 18%;
    transform: rotate(-10deg);
    animation: antena_e 5s infinite;
  }

  .ear + .ear {
    left: auto;
    right: 18%;
    transform: rotate(10deg);
    animation: antena_d 5s infinite;
  }

  .ear:before {
    content: "";
    display: block;
    width: 0.8em;
    height: 0.8em;
    position: absolute;
    z-index: 2;
    left: 0;
    border-radius: 50%;
    background: #0b84bc;
    box-shadow: inset -0.1em -0.08em rgba(0, 0, 0, 0.1);
  }

  .ear:after {
    content: "";
    display: block;
    width: 0.3em;
    height: 100%;
    position: absolute;
    top: 0.2em;
    left: 0.3em;
    background: #0b84bc;
  }

  @keyframes blink_eyes {
    0%,
    2%,
    50%,
    52%,
    100% {
      transform: scalex(1) scaleY(1);
    }
    1%,
    51% {
      transform: scalex(1.1) scaleY(0.3);
    }
  }

  @keyframes bounce {
    to {
      transform: translateY(4%);
    }
  }

  @keyframes bouncebody {
    to {
      transform: scaleX(1.03) scaleY(0.97);
    }
  }

  @keyframes antena_d {
    50% {
      transform: rotate(20deg);
    }
  }
  @keyframes antena_e {
    50% {
      transform: rotate(-20deg);
    }
  }
}
</style>

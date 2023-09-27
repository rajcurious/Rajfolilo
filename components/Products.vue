<template>
  <section id="products">
    <div class="trading-platform product">
      <div class="demo"  id ="product-1">
        <div class="laptop-top">
          <img src="@/assets/images/laptop-top.png" class="frame" />
          <img
            src="@/assets/images/20230728_035548.gif"
            class="screen k-content"
          />
        </div>
        <div class="laptop-bottom">
          <img src="@/assets/images/laptop-bottom.png" />
        </div>
      </div>
      <Teleport to="body">
        <div class="trading-platform modal" v-show="isModalVisble">
          <div class="slides">
            <div class="slide one">
              <div class="slide-content grid-container grid-container-2">
                <div class="line logo">
                  <img
                    src="@/assets/svgs/apptrademark.svg"
                    alt=""
                  />
                </div>
                <div class="line title">
                  Trading <br>
                  on co-pilot
                </div>
              </div>
            </div>
          </div>
        </div>
      </Teleport>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { mapActions, mapState } from "pinia";
import { useConfigStore } from "../stores/ConfigStore";
export default {
  mounted() {
    this.productTimeLine();
  },
  data() {
    return {
      //horizontal padding for laptop frame
      screenWidth: null,
      screenHeight: null,
      isModalVisble: false,
      tl: null,
    };
  },
  methods: {
    ...mapActions(useConfigStore, {
      updateSection: "updateCurrentSection",
    }),
    onEnter() {
      this.isModalVisble = true;
      this.updateSection("product");
    },
    onEnterback() {
      this.isModalVisble = true;
      this.updateSection("product");
    },
    onLeave() {
      this.isModalVisble = false;
      this.updateSection("projects");
    },
    onLeaveBack() {
      this.isModalVisble = false;
      this.updateSection("about");
    },
    // product timeline
    productTimeLine() {
      const timeline = gsap.timeline({
        scrollTrigger: {
          id: "productTrigger",
          trigger: "#products",
          scrub: true,
          pin: true,
          start: "top top",
          // snap:true, Test this with suitable deaply b/w the different timeslines.
          end: "+=300%", // General rule: shoudl be choosen on weighted duration of slides or transitions you want to show,  Here: {1* 2 slides + 2 * 1latop }
          onEnter: this.onEnter,
          onEnterBack: this.onEnterback,
          onLeave: this.onLeave,
          onLeaveBack: this.onLeaveBack,
        },
      });
      timeline
        .fromTo(
          "#products .trading-platform",
          {
            filter: "brightness(0)",
            duration: 1,
          },
          {
            filter: "brightness(1)",
          }
        )
        .from(
          "#products .laptop-top",
          {
            rotationX: 75,
            transformOrigin: "bottom center",
            ease: "none",
            duration: 1
          },
          "<"
        )
        .fromTo(
          ".trading-platform .demo",
          {
            y: "-50px",
            ease: "none",
            duration: 1,
            rotationX: -10,
          },
          {
            y: "0px",
            ease: "none",
            duration: 1,
            rotationX: 0,
          },
          "<"
        )
        .from(
          "#products .laptop-top .screen",
          {
            filter: "brightness(0)",
            transformOrigin: "bottom center",
            ease: "none",
          },
          "<"
        )
        .fromTo(
          "#products .trading-platform",
          {
            filter: "brightness(1)",
            duration: 0.2,
            ease: "none",
          },
          {
            filter: "brightness(0.3)",
          }
        )
        .fromTo(
          "body .trading-platform.modal .slide.one .slide-content",
          {
            y: "80vh",
            autoAlpha: 0,
            duration: 0.2,
            ease: "none",
          },
          {
            y: "30vh",
            autoAlpha: 1,
          },
          "<"
        )
        .fromTo(
          "#products .trading-platform",
          {
            filter: "brightness(0.3)",
            duration: 0.2,
            ease: "none",
          },
          {
            filter: "brightness(1)",
          }
        )
        .fromTo(
          "body .trading-platform.modal .slide.one .slide-content",
          {
            y: "30vh",
            duration: 0.2,
            autoAlpha: 1,
            ease: "none",
          },
          {
            y: "-20vh",
            autoAlpha: 0,
          },
          "<"
        );
      this.tl = timeline;
    },
  },
  computed: {
    ...mapState(useConfigStore, {
      theme: "theme",
    }),
  },
};
</script>

<style lang="scss">
.products {
  .description {
    .product-title {
      margin: auto 0px auto -80px;
    }
  }
}

#products {
  .trading-platform {
    position: relative;
    height: 100vh;
    width: 100vw;


    .demo {
      position: absolute;
      padding: 0px
        calc((100vw - ((100vh - 5%) / (0.5417939461 + 0.03502482074))) / 2);
      bottom: 1%;
      .laptop-top {
        display: flex;
        width: 100%;
        position: relative;
        .frame {
          // position: absolute;
          box-sizing: content-box;
          width: 100%;
          z-index: 1;
        }
        .screen {
          width: 76%;
          max-width: 76%;
          position: absolute;
          margin: auto;
          left: 50%;
          top: 4%;
          transform: translateX(-50%);
          filter: brightness(1);
          z-index: -1;
        }
      }
      .laptop-bottom {
        img {
          width: 100%;
        }
      }
    }
  }
}

.trading-platform.modal {
  color: var(--color-text-default);

  ul {
    li {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: left;

      .play-button {
        width: 3rem;
        height: 3rem;
      }
    }
  }
  .slides {
    .slide.one {
      .slide-content {
      
        .logo{
          width: 100%;
          display: flex;
          img {
             width: 50%;
             margin:auto;

         }
        }

        .title{
          text-align: center;

        }
      
        .line {
          margin: auto;
        }
      }
    }
  }
}
</style>

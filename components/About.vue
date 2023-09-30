<template>
  <section id="about" class="about">
    <div class="about-wrapper grid-container grid-container-2 gap-4">
      <div class="my-img">
        <img src="../assets/images/raj.png" alt="" width="300px" />
      </div>
      <div class="intro">
        <div class="title">
          Hello
          <div class="hi-emoji animation-swing">👋</div>
          i am <br />
        </div>
        <div class="name text-gradient">
          Raj
          <div class="dot"></div>
        </div>
        <div class="about-me">
          <p>An enthusiastic software developer<br /></p>
        </div>
      </div>
   
    </div>
  </section>
</template>
s
<script>
import { mapActions, mapState } from "pinia";
import { useConfigStore } from "../stores/ConfigStore";

export default {
  mounted() {
    // Start the typing animation when the component is mounted
    // this.typeAvtar();
  },

  data() {
    return {};
  },
  methods: {
    ...mapActions(useConfigStore, {
      updateSection: "updateCurrentSection",
    }),
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  height: 100vh;
  padding-top: var(--app-header-height);
  flex-direction: column;
  position: relative;

  .grid-container {
    height: 100vh - var(--app-header-height);
  }

  .about-wrapper {
    margin: auto;
    width: 90%;
    height: 100vh - var(--app-header-height);
  }

  .intro {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-flow: column;
    font-size: max(35px, 3.5vw);

    .title {
      letter-spacing: 2px;
      word-spacing: 3px;
      font-weight: 400;
      font-size: 0.6em;
      .hi-emoji {
        display: inline flex;
        color: #000;
      }
    }
    .name {
      font-size: 1.5em;
      font-weight: 600;
    }
    .dot {
      display: inline-block;
      width: 0.3em;
      height: 0.3em;
      // background: linear_gradient(180deg, blue, green);
      background-color: rgb(0, 255, 0);
      border-radius: 50%;
      margin-left: -0.2em;
    }

    .about-me {
      font-size: 0.4em;
      display: flex;
      letter-spacing: 3px;
      word-spacing: 3px;
      font-weight: 500;
      // color: rgba(255, 255, 255, 0.4);
    }
  }
  .my-img {
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: rgb(51, 255, 0);
    width: 100%;
   
  
    img{
      width:max(150px, 16vw);
    }
  }
}
</style>

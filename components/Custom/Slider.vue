<template>
  <div class="slider">
    <div
      class="slide-track animation"
      :class="{ paused: paused }"
      :style="`--n-slides:${n}`"
      @mouseenter="paused = true"
      @mouseleave="paused = false"
    >
      <slot name="slides"></slot>
    </div>
    <div class="left guard"></div>
    <div class="right guard"></div>
  </div>
</template>

<script>
export default {
  props: {
    n: Number,
  },
  data() {
    return {
      paused: false,
    };
  },
};
</script>

<style lang="scss">
.slider {
  height: 100px;
  margin: 10px auto;
  position: relative;
  overflow: hidden;
  width: calc(min(1000px, 100vw));

  .left {
    position: absolute;

    z-index: 2;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 70px;
    background: linear-gradient(
      -90deg,
      rgba(var(--color-bg-default--rgb), 0.1) 0%,
      rgba(var(--color-bg-default--rgb), 1) 95%,
      rgba(var(--color-bg-default--rgb), 1)
    );
  }
  .right {
    z-index: 2;

    top: 0px;
    right: 0px;
    height: 100%;
    position: absolute;
    width: 70px;
    background: linear-gradient(
      90deg,
      rgba(var(--color-bg-default--rgb), 0.1) 0%,
      rgba(var(--color-bg-default--rgb), 1) 95%,
      rgba(var(--color-bg-default--rgb), 1)
    );
  }

  .slide-track {
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    width: calc(300px * (var(--n-slides) * 2));

    .slide {
      height: 100px;
      width: 300px;
    }
  }

  &.reverse {
    .animation {
      animation: scroll 30s linear infinite reverse;
      &.paused {
        animation-play-state: paused;
      }
    }
  }
  .animation {
    animation: scroll 30s linear infinite;

    &.paused {
      animation-play-state: paused;
    }
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(calc(-300px * var(--n-slides)));
  }
}
</style>

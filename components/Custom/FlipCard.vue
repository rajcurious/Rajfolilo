<template>
  <div class="container">
    <div class="front">
      <slot name="front"></slot>
    </div>
    <div class="back">
      <slot name="back"></slot>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  position: relative;
  width: 100%;
  height: 100%;

  .front {
    position: absolute;
    width: 100px;
    height: 100px;
    top: 0;
    left: 0;
    background-color: green;
    overflow: hidden;
    transform: perspective(2000px) rotateY(0deg);

    &:hover{
        transform: perspective(1000px) rotateY(180deg);
    }
  }

  .back {
    position: absolute;
    width: 100px;
    height: 100px;
    top: 0;
    left: 0;
    background-color: blue;
    overflow: hidden;
    transform: perspective(1000px) rotateY(-180deg);

    &:hover{
        transform: perspective(1000px) rotateY(0deg);
    }
  }
}
</style>

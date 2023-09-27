<template>
  <div class="hexagon-wrapper">
    <div class="hexagon-bg" :style="`--stroke:${levelToColor(level)}`">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <path
          d="M25.2887 92.8013L0.57735 50L25.2887 7.19873L74.7113 7.19873L99.4226 50L74.7113 92.8013L25.2887 92.8013Z"
          id="hexagon"
        />
      </svg>
    </div>
    <div class="hexagon-body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props:{level:Number},
  methods:{
    levelToColor(level){
      if(level >=9 ){
        return 'gold';
      }
      else if(level == 8){
        return 'silver';
      }
      return '#CD7F32';

    }
  }
};
</script>

<style lang="scss">
.hexagon-wrapper {
  position: relative;
  width: 300px;
  height: 100px;

  .hexagon-bg{
    position: absolute;
    left:0px;
    top: 0px;
    width: 100px;
    height: 100px;

  }
  .hexagon-bg svg{
      fill:  var(--color-bg-1); // TODO : This should vary on dark as well as light more.
      z-index: -1;
      transition: fill 10 ease;
      stroke: var(--stroke);
      stroke-width: 1px;
  }


  .hexagon-body {
    display: flex;
    position: absolute;
    z-index: 1;
    left: 0px;
    top: 0px; 
    width: 100px;
    height: 100px;
    align-items: center;
    justify-content: center;
  }
}
</style>

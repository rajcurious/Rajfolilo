<template>
        <svg
        width="120"
        height="100"
        viewBox="0 0 120 100"
        fill="none"
        class="play-button"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="traiangles">
          <g id="lightGroup">
            <path
              id="light1"
              opacity="0.7"
              d="M41.5 49.634C42.1667 50.0189 42.1667 50.9811 41.5 51.366L12.25 68.2535C11.5833 68.6384 10.75 68.1573 10.75 67.3875L10.75 33.6125C10.75 32.8427 11.5833 32.3616 12.25 32.7465L41.5 49.634Z"
            />
          </g>
          <g id="darkGroup">
            <path
              id="dark1"
              opacity="0.7"
              d="M58.5 49.634C59.1667 50.0189 59.1667 50.9811 58.5 51.366L29.25 68.2535C28.5833 68.6384 27.75 68.1573 27.75 67.3875L27.75 33.6125C27.75 32.8427 28.5833 32.3616 29.25 32.7465L58.5 49.634Z"
            />
            <path
              id="dark2"
              opacity="0.7"
              d="M41.5 49.634C42.1667 50.0189 42.1667 50.9811 41.5 51.366L12.25 68.2535C11.5833 68.6384 10.75 68.1573 10.75 67.3875L10.75 33.6125C10.75 32.8427 11.5833 32.3616 12.25 32.7465L41.5 49.634Z"
            />
          </g>
        </g>
      </svg>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
#darkGroup{
    fill:var(--dark-color);
 }
 #lightGroup{
    fill: var(--light-color);
 }

 #dark1, #dark2, #light1 {
    transition: all 1s ease;    
 } 


 #dark2{
    transform: translateX(-100%);
 }

 svg{
    cursor: pointer;
    margin-left: 100px;
 }

 svg:hover #light1{ 
     transform: translateX(20%);
 }

 svg:hover #dark1{ 
    transform: translateX(40%);
    opacity: 0;
}
svg:hover #dark2{ 
    transform: translateX(0%);
    opacity: 0.7;
}

</style>
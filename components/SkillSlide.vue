<template>
  <div class="slide">
    <div class="content-wrapper">
      <div class="content skill" :style="`--level-color--rgb:${levelToColor(skill.level)}`">
        <Hexagon :level="skill.level" class="skill-hexagon">
          <Icon
            v-if="skill"
            :name="skill.icon"
            :style="`color:${skill.color}`"
            :size="'size' in skill ? skill.size : '40px'"
            @click="onClick"
          />

        </Hexagon>
        <div class="skill-info">
          <span class="text text-bold" :class="`text-${levelToType(skill.level)}`">
            {{skill.name }}
          </span>
          <span class="text mt-10 text-bold" :class="`text-${levelToType(skill.level)}`">
            {{skill.level }} / 10
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skill: Object,
  },
  mounted() {

  },
  data() {
    return {
    };
  },
  methods: {

    levelToType(level){
      if(level >=9 ){
        return 'gold';
      }
      else if(level == 8){
        return 'silver';
      }
      return 'bronze';

    },
    levelToColor(level){
      if(level >=9 ){
        return '255, 215, 0';
      }
      else if(level === 8){
        return '192, 192, 192';
      }
      return '205, 127, 50';

    }
  },
};
</script>

<style lang="scss">
.slider {
  .slide {
    .content-wrapper {
      width: 100px;
      height: 100px;

      .content {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        position: relative;
        cursor: pointer;
        opacity: 0.7;

        .skill-hexagon{
          z-index: 1;
        }

        .skill-info{
          position: absolute;
          flex-flow: column;
          top: 0px;
          left: 0px;
          width:  250px;
          height: 100px;
          padding-left: 100px;
          // border: 1px solid rgb(var(--level-color--rgb));  
          z-index: -1;
          align-items: center;
          display: flex;
          justify-content: center;
          background: linear-gradient(90deg, var(--color-bg-default) 10%, rgba(var(--level-color--rgb), 0.2) 100%);
          box-sizing: border-box;
          visibility: hidden;

          span{
            font-size:max(16px, 1vw);
          }

        }

        &:hover .skill-info{
          visibility: visible;
          }
        }
      }
    }
  }
</style>

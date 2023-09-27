<template>
  <section id="skills" class="skills">
    <div class="skills-info">
      <div class="typing-text text-gradient drop-shadow">
        <h1 class="text-big">{{ animatedText }}</h1>
      </div>
    </div>
    <div class="skills-slider">
        <Slider :n="skillGroup1.length">
            <template #slides>
                <SkillSlide :skill="skill" v-for="(skill, index) in skillGroup1" :key="index"></SkillSlide>
                <SkillSlide  :skill="skill" v-for="(skill, index) in skillGroup1" :key="5 + index"></SkillSlide>
            </template>
         </Slider>
         <Slider :n="skillGroup2.length" class="slider reverse">
            <template #slides>
                <SkillSlide :skill="skill" v-for="(skill, index) in skillGroup2" :key="index"></SkillSlide>
                <SkillSlide :skill="skill" v-for="(skill, index) in skillGroup2" :key="index"></SkillSlide>
            </template>
         </Slider>
         <Slider :n="skillGroup3.length">
            <template #slides>
                <SkillSlide :skill="skill" v-for="(skill, index) in skillGroup3" :key="index"></SkillSlide>
                <SkillSlide :skill="skill" v-for="(skill, index) in skillGroup3" :key="index"></SkillSlide>
            </template>
         </Slider>
    </div>
    
  </section>
</template>

<script>
import { gsap } from "gsap";
import { mapActions, mapState } from "pinia";
import { useConfigStore } from "../stores/ConfigStore";
export default {
  mounted() {
    // Start the typing animation when the component is mounted
    this.skillsGsap();
    this.typeAvtar();
  
  },

  data() {
    return {
      skills: [
        {
          id: 0,
          name: "C++",
          level: 7,
          icon: "skill-icons:cpp",
          type: ["SE", "Problem solving"], //SE:software engineer.
        },
        {
          id: 1,
          name: "Spring boot",
          level: 7,
          icon: "skill-icons:spring-dark",
          type: ["SE", "Backend"], //SE:software engineer.
        },
        {
          id: 2,
          name: "AWS",
          level: 9,
          icon: "skill-icons:aws-dark",
          type: ["SE", "Cloud"],
        },
        {
          id: 3,
          name: "Flutter",
          level: 6,
          icon: "vscode-icons:file-type-flutter",
          type: ["SE", "Cloud", "Mobile App development"],
        },
        {
          id: 4,
          name: "Vue",
          level: 9,
          icon: "logos:vue",
          type: ["SE", "Full stack development", "Front end"],
        },
        {
          id: 5,
          name: "Nuxt",
          level: 7,
          icon: "vscode-icons:file-type-nuxt",
          type: ["SE", "Full stack development", "Front end"],
        },
        {
          id: 6,
          name: "HTML",
          level: 9,
          icon: "logos:html-5",
          type: ["SE", "Problem solving"], //SE:software engineer.
        },
        {
          id: 7,
          name: "CSS",
          level: 9,
          icon: "skill-icons:css",
          type: ["SE", "Full stack development", "Front end"],
        },
        {
          id: 8,
          name: "Javascript",
          level: 8,
          icon: "vscode-icons:file-type-js",
          type: ["SE", "Full stack development", "Front end"],
        },
        {
          id: 9,
          name: "SCSS",
          level: 9,
          icon: "vscode-icons:file-type-scss",
          type: ["SE", "Full stack development", "Front end"],
        },
        {
          id: 10,
          name: "Java",
          level: 9,
          icon: "logos:java",
          type: ["SE", "Programming language"],
        },
        {
          id: 11,
          name: "Apache Spark",
          level: 7,
          icon:"devicon:apachespark",
          type: ["SE", "Data Enginerring"],
        },
        {
          id: 12,
          name: "Tensorflow",
          level: 9,
          icon: "logos:tensorflow",
          type: ["SE", "AI", "Deep learning"],
        },
        {
          id: 13,
          name: "Github",
          level: 9,
          icon: "skill-icons:github-dark",
          type: ["SE", "Version control"],
        },
        {
          id: 14,
          name :"python",
          level: 9,
          icon: "logos:python",
          type:["SE", "Python"]
        },
        {
          id: 15,
          name :"Postgres",
          level: 9,
          icon: "logos:postgresql",
          type:["SE", "Database"]
        },
        {
          id: 16,
          name :"LeetCode",
          level: 9,
          icon: "simple-icons:leetcode",
          color: "orange",
          type:["SE", "LeetCode"]
        }
      ],

      skillGrps:{
        one: [0, 1, 2, 3, 4,],
        two: [ 5, 6, 7, 8, 9, 10, 16],
        three: [11, 12, 13, 14, 15 ]
      },
      skillInfo: [
        "I am full stack developer   ",
        "with experience in cloud & Data engineering   ",
        "also good at Leetcode , DSA     ",
        "and currently diving deep into AI       ",
      ],
      animatedText: "",
      currentSkillInfoIndex: 0,
      charIndex: 0,
      typingSpeed: 110,
      unTypingSpeed: 40,
      
    };
  },
  methods: {
    ...mapActions(useConfigStore, {
      updateSection: "updateCurrentSection",
    }),
    onLeave() {
      this.updateSection("experience");
    },
    onEnterBack() {
      this.updateSection("skills");
    },
    skillsGsap() {
      gsap.from("#skills", {
        scrollTrigger: {
          trigger: "#skills",

          start: "top top",
          end: "+=100%",
          onEnterBack: this.onEnterBack,
          onLeave: this.onLeave,
        },
        ease: "none",
      });

      const contactTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#contact",
          scrub: true,
          // pin: true,
          start: "top 90%",
          end: "+=100%",

        },
      });
      contactTl
        .fromTo("#contact", {
          filter: "brightness(0)",
          duration: 1,
          // backgroundColor: "rgba(25, 126, 160, 0)",
          ease: "linear",
        },
        {
          filter: "brightness(1)"
        },"<0")
    },
    hexagonClass(i) {
      const row = Math.floor(i / 5);
      return `hexagon-grid-row-${row}`;
    },
    typeAvtar() {
      this.animatedText = this.currentSkillInfo.slice(0, this.charIndex);
      this.charIndex++;
      if (this.charIndex <= this.currentSkillInfo.length) {
        setTimeout(this.typeAvtar, this.typingSpeed);
      } else {

        setTimeout(this.untypeSkillInfo, this.typingSpeed);
      }
    },
    untypeSkillInfo() {
      this.animatedText = this.currentSkillInfo.slice(0, this.charIndex);
      this.charIndex--;
      if (this.charIndex >= 0) {
        setTimeout(this.untypeSkillInfo, this.unTypingSpeed);
      } else {
        this.currentSkillInfoIndex =
          (this.currentSkillInfoIndex + 1) % this.skillInfo.length;
        this.charIndex++;
        setTimeout(this.typeAvtar, this.typingSpeed);
      }
    },
  },
  computed: {
    currentSkillInfo() {
      return this.skillInfo[this.currentSkillInfoIndex];
    },
    skillGroup1(){
      return this.skillGrps.one.map((id)=> this.skills[id]);
    },
    skillGroup2(){
      return this.skillGrps.two.map((id)=> this.skills[id]);
    },
    skillGroup3(){
      return this.skillGrps.three.map((id)=> this.skills[id]);
    }
  },
};
</script>

<style lang="scss">
.skills {
  width: 100vw;
  display: flex;
  height: calc(100vh - var(--app-header-height));
  padding-top: var(--app-header-height);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2rem;

  .skills-info {
    height: 30%;
    width: 100%;
    justify-content: center;
    display: flex;

    .typing-text{
      width: 50%;
    }

  }
  .skills-slider {

  }
}
</style>

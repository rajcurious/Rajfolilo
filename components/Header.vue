<template>
  <header class="app-bar" v-if="!phoneMode">
    <nav>
      <ul>
        <li
          :class="{ current: this.currentSection == section }"
          v-for="section in sections"
          :key="section"
          @click="this.scrollGsap(section)"
        >
          <a :href="`#${section}`" ></a> {{ capitalizeFirstCharacter(section) }}
        </li>
      </ul>
    </nav>
  </header>
  <header class="app-bar phone" :class="{ 'open': isDrawerOpen }" v-else>
    <div class="menu-button" @click="toggleDrawer">
      <Icon name="material-symbols:close" v-if="isDrawerOpen"/>
      <div  class = "menu-closed" v-else >
        <Icon name="fluent:navigation-16-regular" class="icon" />
        <span class="current-section">{{capitalizeFirstCharacter(this.currentSection)}}</span>
      </div>
    </div>
    <nav v-if="isDrawerOpen">
      <ul>
        <li
          :class="{ current: this.currentSection == section }"
          v-for="section in sections"
          :key="section"
          @click="isDrawerOpen=false & this.scrollGsap(section)"
        >
          <a :href="`#${section}`"></a> {{ capitalizeFirstCharacter(section) }}
          
        </li>
      </ul>
    </nav>


  </header>

</template>

<script>
import { gsap } from "gsap";
import { mapActions, mapState } from "pinia";
import { useConfigStore } from "../stores/ConfigStore";
export default {
  props: {
    currentSection: String,
  },
  data() {
    return {
      sections: [
        "about",
        "product",
        "projects",
        "skills",
        "experience",
        "contact",
      ],
      sectionIdMap:
       {
        "about" : "about",
        "product" : "product-1",
        "projects" : "project-1",
        "skills" : "skills",
        "experience" : "experience",
        "contact" : "contacts",
       },
      phoneMode: false,
      isDrawerOpen: false,
    };
  },
  computed: {
    ...mapState(useConfigStore, {
      theme: "theme",
      innerHeight: "innerHeight",
      innerWidth: "innerWidth",
    }),
  },
  watch: {
    innerWidth(width) {
      if (width <= 1020) {
        this.phoneMode = true;
      } else {
        this.phoneMode = false;
      }
    },
  },

  methods: {
    ...mapActions(useConfigStore, {
      toggleTheme: "toggleTheme",
    }),
    scrollGsap(section){
      const sectionToScrollTo = document.getElementById(this.sectionIdMap[section]);
      let scrollY =  sectionToScrollTo.offsetTop;
      if(section == 'product'){
        scrollY = 2*window.innerHeight;
      }
      gsap.to(window, { 
        duration: 3, // Duration of the scroll animation (in seconds)
         scrollTo: { 
          y: scrollY, // Scroll to the top of the target section
         autoKill: true, // Automatically kill the animation when it's done
      },
    });
    },
    capitalizeFirstCharacter(str) {
      if (!str) return str;
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
      document.body.style.overflow = this.isDrawerOpen ? 'hidden': 'auto';
    }
  },
};
</script>

<style lang="scss" scoped>


header {
  //   padding: 20px 20px;
  height: var(--app-header-height);
  background: rgba(0, 0, 0, 0.302);
  position: fixed;
  backdrop-filter: blur(5px);
  top: 0;
  width: 100vw;
  z-index: 100;

  nav {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      li {
        padding: 0 1rem;
        backdrop-filter: blur;
        color: rgba(255, 255, 255, 0.56);
        font-size: 18px;

        &:hover {
          color: #ffffff;
          transform: translateY(2px);
          cursor: pointer;
        }

        &.current {
          color:#ffffff;
        }

        a {
          text-decoration: none;
          transition: color 0.3s;
          padding: 1rem;
        }
      }
    }
  }
}

header.phone {
  
  .menu-button {
    position: absolute;
    z-index: 100;
    flex-direction: column;
    cursor: pointer;
    // backdrop-filter: blur(5px);
    padding: 0 1rem;
  }

  &.open{
    height: 100vh;
    overflow: hidden;
    nav{
      visibility: visible;
      ul{
        display: flex;
        flex-flow: column;
        padding: 10rem;
        li{
          padding: 20px;
          font-size: 2rem;
        }
      }
    }
  }

  nav{
    // height: calc(100vh - var(--app-header-height));
    width: 100vw;
    visibility: hidden;
    backdrop-filter: blur(5px);
  }

  .menu-button{
    display: flex;
    justify-content: space-between;
    height: var(--app-header-height);
    padding: 0px 20px;
    font-size: 18px;
    color:white;
    display: flex;
    justify-content: center;
   
    

    .menu-closed{
      .current-section{
        margin-left:10px;
      }
    }
  }

}
</style>

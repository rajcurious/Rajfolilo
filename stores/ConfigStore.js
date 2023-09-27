import { defineStore } from "pinia";

export const useConfigStore = defineStore("Config", {
  //state
  state: () => {
    return {
      theme: "dark", //dark or default.
      currenSection: 'about',
      innerHeight: null,
      innerWidth: null
    };
  },
  //actions
  actions: {
    toggleTheme(){
      if(this.theme == 'dark'){
        this.theme = 'default';
      }
      else{
        this.theme = 'dark';
      }
    },
    updateCurrentSection(section){
      this.currenSection = section;
    },
    updateInnerHeight(innerHeight){
      this.innerHeight = innerHeight;
    },
    updateInnerWidth(innerWidth){
      this.innerWidth = innerWidth;
    },
  },

  //getters
  //
});

<template>
    <section id="contacts">
      
      <div class="contact-wrapper grid-container grid-container-2">
        <section class="social">
        <div class="social-wrapper">
          <!-- <Hexagon :level="10" class=""> -->
          <a :href="social.linkedin">
            <Icon
            name="skill-icons:linkedin"
            class="icon"
          />
          </a>
          <a :href="social.leetcode">
          <Icon
            name="simple-icons:leetcode"
            :style="`color:orange`"
            class="icon"

          />
          </a>
          <a :href="social.github">
          <Icon
          :style="`color:white`"
            name="mdi:github-box"
            class="icon"

          />
          </a>
          <!-- <br> -->


        
        </div>
        <div class="contact-detail">
          <span >10raj10r1999patel@gmail.com</span>
          <span>(+91)7490053814</span>

        </div>
       
      </section>
        <section class="contact-form">
            <h2>Contact Form</h2>
            <form :action="formspreeEndpoint"  method="POST">
              
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                
                <label for="email">Your email:</label>
                <input type="email" id="email" name="email" required>
                
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
                
                <button type="submit">Submit</button>
            </form>
        </section>

      </div>
  
     </section>
</template>
<script>
import { gsap } from "gsap";
import { mapActions} from "pinia";
import { useConfigStore } from "../stores/ConfigStore";

 export default {
  mounted(){
    this.contactGsap();
  },
  data(){
    return {
      formspreeEndpoint : "https://formspree.io/f/mgejpwod",
      social:{
        linkedin:"https://www.linkedin.com/in/raj-patel-954b7a165/",
        leetcode:"https://leetcode.com/raj_curious/",
        github: "https://github.com/rajcurious",
      }
    };
  },
  methods:{
    ...mapActions(useConfigStore, {
      updateSection: "updateCurrentSection",
    }),
    onEnter() {
      this.updateSection("contact");
    },
    onLeaveBack() {
      this.updateSection("experience");
    },
    contactGsap(){
      gsap.from("#contacts", {
        scrollTrigger: {
          trigger: "#contacts",
          scrub: true,
          start: "top top",
          end: "+=100%",
          onEnter: this.onEnter,
          onLeaveBack: this.onLeaveBack
        },
        ease: "none",
      });

      const contactTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#contacts",
          scrub: true,
          start: "top 50%",
          end: "bottom bottom",

        },
      });
      contactTl
        .fromTo("#contacts", {
          filter: "brightness(0)",
          duration: 1,
          ease: "linear",
        },
        {  
          //  backgroundColor: "rgba(25, 126, 160, 0)",
          filter: "brightness(1)",
        },"<0")
    }
  }
 }
</script>
<style lang="scss">

.contact-wrapper{
  width: 80%;
}


.social{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  // width: 90%;
  
  .social-wrapper{
    display: flex;

    .icon{
      padding: 20px;
      font-size:max(32px, 4vw);
      cursor: pointer;

    }
  }

  .contact-detail{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    padding: 10px;

    span{
     margin-bottom: 10px;
      width: 100%;
     text-align: center;
     font-size: max(16px, 1vw);
    }

  }

}
.contact-form {

    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
    font-size: max(30px, 3vw);
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
}

input[type="text"],
input[type="email"],
textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 1rem;
}

button[type="submit"] {
    background-color: #333;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.2s;
}

button[type="submit"]:hover {
    background-color: #555;
}

.contact-info {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
}

.contact-info h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

</style>
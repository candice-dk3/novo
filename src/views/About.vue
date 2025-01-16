<template>
<section>
    <div class="text-overlay">
        <h1>About Novo</h1>
        <div class="typewriter">
            <span>{{ displayedText }}</span>
            <span class="cursor"></span>
        </div>
    </div>
    <div class="first-section">
        <div class="content">
            <h1>Who Are We?</h1>
            <p>
                Nulla tempor, eros et aliquam aliquam, turpis elit laoreet mauris, eget tempus arcu tortor ut mi. Sed suscipit nulla neque sodales neque 
            </p>
            <p>
                Nulla tempor, eros et aliquam aliquam, turpis elit laoreet mauris, eget tempus arcu tortor ut mi. Sed suscipit nulla neque sodales neque 
            </p>
            <p>
                Nulla tempor, eros et aliquam aliquam, turpis elit laoreet mauris, eget tempus arcu tortor ut mi. Sed suscipit nulla neque sodales neque 
            </p>
            <p>
                Nulla tempor, eros et aliquam aliquam, turpis elit laoreet mauris, eget tempus arcu tortor ut mi. Sed suscipit nulla neque sodales neque 
            </p>
        </div>
        <div class="images"></div>
    </div>
    <div class="middle-section">
        <div class="container"></div>
    </div>
    <div class="last-section">
        <h2>The Minds Behind the Mission: Meet the Team That Brigns Novo to Life</h2>
    </div>

</section>
</template>
<script>
export default {
    data() {
    return {
      sentences: [
        "Welcome to Novo, where design meets comfort.",
        "Your dream space starts with Novo.",
        "Innovative furniture for every lifestyle.",
        "Crafted for living, designed to last.",
        "Redefining Comfort, One Piece At A Time."
      ],
      currentSentence: "",
      displayedText: "",
      charIndex: 0,
      typingSpeed: 100 ,
      pauseTime: 1000, 
    };
  },
  mounted() {
    this.startTypewriter();
  },
  methods: {
    startTypewriter() {
      this.pickRandomSentence();
    },
    pickRandomSentence() {
      const randomIndex = Math.floor(Math.random() * this.sentences.length);
      this.currentSentence = this.sentences[randomIndex];
      this.displayedText = "";
      this.charIndex = 0;
      this.typeSentence();
    },
    typeSentence() {
      if (this.charIndex < this.currentSentence.length) {
        this.displayedText += this.currentSentence[this.charIndex];
        this.charIndex++;
        setTimeout(this.typeSentence, this.typingSpeed); 
      } else {
        setTimeout(this.pickRandomSentence, this.pauseTime);
      }
    }
  } 
}
</script>
<style scoped>
    .text-overlay{
        height: 600px;
        width: 100%;
        background-color: #0c264e7e;
    }
    .text-overlay h1{
        color: #CBB26A;
        font-weight: 500;
        font-size: 120px;
        text-align: center;
        position: relative;
        top: 30%;
    }
    .text-overlay h5{
        color: white;
        font-weight: 400;
        font-size: 22px;
        position: relative;
        top: 30%;
    }
    .typewriter {
        color: white;
        font-weight: 400;
        font-size: 22px;
        position: relative;
        top: 30%;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        width: 80%; 
        /* margin: 0 auto; */
        text-align: center;
    }
    .cursor {
        border-right: 20px solid black;
        display: inline-block;
        animation: blink 0.5s step-end infinite;
    }
    @keyframes blink {
    50% {
        border-color: transparent;
    }
    }
    .first-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        color: white;
        /* margin: 80px 0 0 0 ; */
    }
    .first-section, .content{
        padding: 0 80px;
    }
    .first-section, .content h1{
        font-weight: 400;
        font-size: 40px;
        text-align: left;
        margin: 140px 0 40px 0;
    }
    .first-section, .content p{
        font-weight: 300;
        font-size: 28px;
        margin: 0 0 20px 0;
    }
    .container{
        height: 291px;
        background-color: #CBB26A;
        margin: 80px 160px 100px 160px;
    }
    .last-section h2{
        color: white;
        font-weight: 350;
        font-size: 28px;
        text-align: left;
        margin: 0 160px 50px ;
    }
  
</style>
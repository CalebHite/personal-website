<script lang="ts">
  import { collection } from "firebase/firestore";
  import { db } from "./firebase";
  import { collectionStore } from "sveltefire";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import FaBrandsGithubAlt from "svelte-icons-pack/fa/FaBrandsGithubAlt";
  import RiLogoLinkedinFill from "svelte-icons-pack/ri/RiLogoLinkedinFill";
  import AiOutlineMail from "svelte-icons-pack/ai/AiOutlineMail";
  const data = collectionStore(db, "pages");

  const rand = Math.random() * 4;
</script>

<!-- Navbar -->
<div id="navbar">
  {#if $data[0]?.text != undefined}
  <h2 id="nav-text">What I'm Working On: <span id="nav-span">{$data[0]?.text}</span></h2>
  {/if}
  <a id="nav-github" href="https://github.com/CalebHite"
    ><Icon color="#d3e7f0" src={FaBrandsGithubAlt} /></a
  >
  <a id="nav-linkedin" href="https://www.linkedin.com/in/caleb-hite-463214176/"
    ><Icon color="#d3e7f0" src={RiLogoLinkedinFill} /></a
  >
</div>

<!-- Hook Page -->
<img id="hook_bg" src={$data[0]?.imageID} alt="Background" />
<div id="hook">
  <h1 id="hook_name">Caleb Hite</h1>
  {#if $data[0]?.text != undefined}
    {#if rand < 1}
      <h3 id="hook_desc">{$data[3]?.text1}</h3>
    {:else if rand < 2}
      <h3 id="hook_desc">{$data[3]?.text2}</h3>
    {:else if rand < 3}
      <h3 id="hook_desc">{$data[3]?.text3}</h3>
    {:else}
      <h3 id="hook_desc">{$data[3]?.text4}</h3>
    {/if}
  {/if}
</div>

<!-- Bio Page -->
<div id="about">
  <h1 id="about-text">About Me</h1>
  <p id="about-desc">{$data[1]?.text}</p>
</div>

<!-- Gallery Page -->
<div id="gallery">
  <img class="gal-image" id="gal-1" src="src\lib\me.jpg" alt="Me" />
  <img class="gal-image" id="gal-2" src="src\lib\munich.jpg" alt="Munich" />
  <img class="gal-image" id="gal-3" src="src\lib\prom.jpg" alt="Me and My Parents" />
</div>

<!-- Statement Page -->
<div id="statement">
  {#if $data[2] != undefined}
    <h1 id="statement-text">{$data[2]?.text}</h1>
    <p id="statement-subtext">{$data[2]?.subtext}</p>
  {/if}
</div>

<!-- Contact Page -->
<div id="contact">
  <div id="contact-items">
    <a id="contact-email" href="mailto: chite2457@gmail.com"><Icon color="#d3e7f0" src={AiOutlineMail} /></a>
  </div>
  <a href="/" id="contact-arrow">Back to Top</a>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Lora:wght@700&display=swap");
  :root {
    overflow-x: hidden;
    background-color: #111117;
  }
  * {
    font-family: "Inter", sans-serif;
    font-weight: 300;
    margin: 0;
    padding: 0;
    border: 0;
    color: #111117;
  }
  div {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
  }
  h1 {
    font-family: "Lora", serif;
    font-weight: 700;
  }
  img {
    width: 30%;
  }
  #navbar {
    width: 100%;
    height: 10%;
    background: #111117;
    position: absolute;
    top: 0;
  }
  #nav-text {
    color: #d3e7f0;
    position: absolute;
    top: 25%;
    left: 20%;
  }
  #nav-span{
    color: #7be8b3;
  }
  #nav-github {
    position: absolute;
    right: 5%;
    top: 20%;
    font-size: 3rem;
    z-index: 5;
  }
  #nav-linkedin {
    position: absolute;
    right: 1.5%;
    top: 19%;
    font-size: 3rem;
    z-index: 5;
  }
  #hook_bg {
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    z-index: -1;
  }
  #hook_name {
    font-size: 5rem;
    position: absolute;
    top: 20%;
    left: 20%;
  }
  #hook_desc {
    position: absolute;
    top: 31%;
    margin-top: 1%;
    margin-left: 21%;
  }
  #about {
    background-color: #111117;
    background-image: url("../lib/cartographer.png");
    top: 100%;
  }
  #about-text{
    color: #7be8b3;
    font-size: 4rem;
    position: absolute;
    margin-left: 21%;
    top: 10%;
  }
  #about-desc{
    color: #d3e7f0;
    position: absolute;
    margin-left: 21%;
    top: 20%;
    width: 50%;
  }
  #gallery {
    top: 200%;
    background: #d3e7f0;
  }
  .gal-image{
    position: float;
    float: left;
    margin-left: 2.5rem;
    margin-top: 1%;
  }
  #gal-2{
    margin-top: 3%;
  }
  #statement {
    top: 300%;
    background-color: #111117;
    background-image: url("../lib/asphalt.png");
    font-size: 3rem;
    text-align: center;
  }
  #statement-text{
    margin-left: 10%;
    width: 75%;
    color: #7be8b3;
    margin-top: 10%;
  }
  #statement-subtext{
    color: #d3e7f0;
    font-size: 2rem;
  }
  #contact {
    top: 400%;
    background: #111117;
  }
  #contact-items{
    position: absolute;
    top: 10%;
    align-items: center;
    text-align: center;
  }
  #contact-email{
    color: #d3e7f0;
    position:absolute;
    top: 20%;
    left: 47%;
    font-size: 5rem;
  }
  #contact-arrow{
    color: #d3e7f0;
    font-size: 1rem;
    position: absolute;
    bottom: 10%;
    margin-left: 21%;
    text-decoration: none;
  }
  #contact-arrow:hover{
    color: #7be8b3;
  }
</style>

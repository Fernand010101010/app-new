<script setup>
import { ref } from 'vue';
import Listitem from './component/listitem.vue'; //importando componente listitem.vue a app.vue
import videoFile from '../images/Red Bull Gives You Wings — World of Red Bull Commercial.mp4';

import footer from '../js/component/footer.vue'


//Informacioón
let database= ref([
    {
        date:"16-06-2024",
        time: "10:30 am",
        location: "BEC Arena, Manchester"

    }
])

//Ejemplo
const name = ref('Fest');
const videoUrl = ref(videoFile);

const foot = ref(footer);

</script>

<!-- <script>
export default {
  data() {
    return {
      videoUrl: videoFile
    };
  }
}
</script> -->



<template>
    <div class="first-container">
       <!--Título--> 
        <div class="title">
            <h1>First {{ name }}</h1>

            <p>We are delighted to invite you to join us for First Fest, celebrating Day of Sport. This exciting event will be held at Manchester</p>
    
            </div>


    

     <!--Información-->
        <div class="inf">

            <Listitem 
            :date = "database[0].date" 
            :time = "database[0].time" 
            :location = "database[0].location"/>

        </div>

    <!--Video-->
        <div class="video">
            <video controls >
            <source :src="videoUrl" type="video/mp4">
            Tu navegador no soporta la etiqueta de video.
            </video>
        </div>

        <!--Imagen-->

        <dIv class="imagen">
            <img src="../images/image.3.avif" alt="Background">
        </dIv>

       <!--footer-->
       <div class="footer">
        <foot/>
       </div>
         

   </div>
   


</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

*{
   background-color: rgb(3, 0, 0); 
    
    
}

.first-container{
    margin: 25px;
    position: relative;
    
}

.title {
    position: absolute;
    color:rgb(171, 190, 190);
    align-items: center;
    /* height: 40vh; */
    background: transparent;/* */
    width: 600px;
    margin-left:40px ;
    
}

h1 {
    font-size: 20vh;
    width: 600px;
    margin-top: 40px;
    background: transparent;
    color:rgb(171, 190, 190);

    font-family: "Lato", sans-serif;
    font-weight: 600;
    font-style: italic;

   
}

h1:hover{
    transition: 2s;
    color:rgb(70, 132, 187);
}

p{
    width: 500px;
    font-size: 20px;
    background-color: transparent;
    margin-left: 10px;

    font-family: "Lato", sans-serif;
    font-weight: 600;
    font-style: normal;

}

p:hover{
    color: rgb(70, 132, 187);
    transition: 1s;
}

.inf{
    position: absolute;
    top: 420px;
    margin-left: 30px;
    background-color: transparent;

    /* font-family: "Lato", sans-serif;
    font-weight: 500;
    font-style: normal; */
}

.video{
    position: absolute;
    left: 45%;
    width: 50%;
    top: 155px;
    margin: 10px;
    background:.1;
    
}

.imagen {
  position: absolute;
  /* top: 0;
  left: 0; */
  width: 100%;
  height: 15%;
  bottom: 90%;
  opacity: .5;
  background-size: cover;
  background-position: center; 
  background-repeat: no-repeat;
  z-index: -10; /* Mueve el fondo detrás del contenido */
  
   
  /* min-block-size: 80vh; */
  
}

.footer {
    position: absolute;
    top: 305px;
    width: 100%;    
}
</style>


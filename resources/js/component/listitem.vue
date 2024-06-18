<script setup>
defineProps({
    date:String,
    time:String,
    location:String
})
</script>


<template>
    <div class="container">
        <h4>Date : {{ date }}</h4>
        <h4>Time : {{ time }}</h4>
        <h4>Location : {{ location }}</h4>
    </div>

</template>


<style scoped>
h2{
    padding: 0;
    margin: 0;

}

.container{
    /* border: 1px solid rgb(124, 191, 202); */
    /* width: 300px; */
    margin: 1em auto 1em auto;
    padding: 1em;
    /* border-radius: 5px; */
    font-size: 1.3em;
    color: #999595;
    background: transparent;
   
}
</style>
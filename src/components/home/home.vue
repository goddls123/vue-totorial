<script src="./home.script.js"></script>
<style scoped src="./home.css"></style>

<template>
    <div class="container">
    <div class="home">
        <div class="title" v-on:click="pageMove('/')">Mi-flow</div>
        <div class="login" v-on:click="pageMove('/login')">Login</div>
        <div class="join" v-on:click="pageMove('/join')">Join</div>
    </div>
    </div>
</template>

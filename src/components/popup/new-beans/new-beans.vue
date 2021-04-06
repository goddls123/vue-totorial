<script src="./new-beans.script.js"></script>
<style scoped src="./new-beans.css"></style>

<template>
    <div class="new-beans">
        <section class="header">
            <i class="btn-close-popup" v-on:click="popClose()"></i>
        </section>
        <section class="body">
            <div class="container">
                <div class="text">
                    <div class="title">Node Name</div>
                </div>
                
                <div class="input-box disabled" >
                    <input type="text" disabled v-model="beans.node">
                </div>
            </div>
            <div class="container">
                <div class="text">
                    <div class="title">Beans Name</div>
                    <div class="error-text" v-if="beansError">{{beansError}}</div>
                </div>
                <div class="input-box">
                    <input type="text" v-model="beans.name">
                </div>
            </div>

        </section>
        <section class="footer">
                <button class="delete" v-if="beans.id">Delete</button>
                <button class="save" v-on:click="registerBeans">{{beans.id ? 'Save' : 'Register'}}</button>
        </section>

    </div>
</template>

<script src="./new-node.script.js"></script>
<style scoped src="./new-node.css"></style>

<template>
    <div class="new-node">
        <section class="header">
            <i class="btn-close-popup" v-on:click="popClose()"></i>
        </section>
        <section class="body">
            <div class="container">
                <div class="text">
                    <div class="title">Node Name</div>
                    <div class="error-text" v-if="nameError">{{nameError}}</div>
                </div>
                
                <div class="input-box">
                    <input type="text" v-model="node.name">
                </div>
            </div>
            <div class="container">
                <div class="text">
                    <div class="title">Host Name</div>
                    <div class="error-text" v-if="hostError">{{hostError}}</div>
                </div>
                <div class="input-box">
                    <input type="text" v-model="node.hostname">
                </div>
            </div>

        </section>
        <section class="footer">
                <button class="delete" v-if="node.id" v-on:click="deleteNode">Delete</button>
                <button class="save" v-on:click="registerNode">{{node.id ? 'Save' : 'Register'}}</button>
        </section>

    </div>
</template>


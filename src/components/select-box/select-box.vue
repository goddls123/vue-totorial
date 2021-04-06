<script src="./select-box.script.js"></script>
<style scoped src="./select-box.css"></style>


<template>
    <div class="select-box" @focusout="listObjects=null" v-on:click="openListObject()" tabindex="0">
        <div class="title" >{{selectedObject? selectedObject.name:'Add Node'}}</div>
        <i class="btn-open-dropbox-color"></i>
        <ul class="select-list" v-if="listObjects">
            <li class="add-node" v-on:click="createNode($event)" :class="{select: !selectedObject}">Add Node
                <i class="btn-checked" v-if="addNode"></i>
            </li>
            <li class="node" v-for="object of listObjects" v-on:click="selectNode($event,object)" v-bind:key="object" :class="{select:object===selectedObject}">{{object.name}}
                <i class="btn-checked" v-if="object===selectedObject"></i>
            </li>
        </ul>
    </div>
</template>

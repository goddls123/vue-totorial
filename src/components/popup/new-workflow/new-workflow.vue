<script src="./new-workflow.script.js"></script>
<style scoped src="./new-workflow.css"></style>

<template>
    <div class="new-workflow">
        <section class="header">
            <i class="btn-close-popup" v-on:click="popClose()"></i>
        </section>
        <section class="body">
            <div class="container">
                <div class="text">
                    <div class="title">Node Name</div>
                </div>
                
                <div class="input-box disabled" >
                    <input type="text" disabled v-model="workflow.node">
                </div>
            </div>
            <div class="container">
                <div class="text">
                    <div class="title">Workflow Name</div>
                    <div class="error-text" v-if="workflowError">{{workflowError}}</div>
                </div>
                <div class="input-box">
                    <input type="text" v-model="workflow.name">
                </div>
            </div>

        </section>
        <section class="footer">
                <button class="delete" v-if="workflow.id" v-on:click="deleteWorkflow">Delete</button>
                <button class="save" v-on:click="registerWorkflow">{{workflow.id ? 'Save' : 'Register'}}</button>
        </section>

    </div>
</template>



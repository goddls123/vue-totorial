<script src="./navigator.script.js"></script>
<style scoped src="./navigator.css"></style>


<template>
    <div class="navigator" :class="{hide:navHide}">
        <div class="close-open" v-on:click="navHide=!navHide">
            <i :class="'btn-' + (navHide? 'open':'close') + '-left-menu'"></i>
        </div>
        <div class="node-list"  @mouseenter="editMode=true"  @mouseleave="editMode=false" >
            <select-box 
                :selectObjects=nodes 
                :selectedObject=selectedObject 
                @createNode=createNode
                @selectObject="selectNode"
                ></select-box>
            <span class="edit" :class="{on:editMode}" v-on:click="editNode"><i class="btn-edit-item"></i></span>
        </div>
        <ul class="services">
            <li class="workflows-wrap">
                
                <div class="workflow-list" v-on:click="showWorkflows()">
                    <div class="node-name">{{selectedObject? selectedObject.name:'Add Node'}}</div>
                    <div class="title">Workflows
                        <div class="button">
                            <div class="add-list" v-if="workflowExpanded" v-on:click="createWorkflow($event)"><i class="btn-add-list"></i></div>
                            <div class="list-toggle"><i :class="'btn-' + (!workflowExpanded? 'open':'close') +'-list'"></i></div>
                        </div>
                    </div>
                </div>
                <ul class="workflow-list-wrap" v-if="workflowExpanded">
                    <li class="workflow" v-for="workflow of workflows" v-bind:key="workflow" >· {{workflow.name}}
                        <span class="edit-item" v-on:click="editWorkflow(workflow)"><i class="btn-edit-item"></i></span>
                    </li>
                </ul>
            </li>
            <li class="beans-wrap">
                
                <div class="beans-list" v-on:click="beansExpanded=!beansExpanded">
                    <div class="node-name">{{selectedObject? selectedObject.name:'Add Node'}}</div>
                    <div class="title">Beans
                        <div class="button">
                            <div class="add-list" v-if="beansExpanded" v-on:click="createBeans($event)"><i class="btn-add-list"></i></div>
                            <div class="list-toggle"><i :class="'btn-' + (!beansExpanded? 'open':'close') +'-list'"></i></div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

        <div class="popup" :class="{hide:navHide}">
            <new-node v-if="newNode" :node=newNode @close="refreshNode" ></new-node>
            <new-workflow v-if="newWorkflow" :workflow=newWorkflow @close="newWorkflow=null;refreshWorkflow()"></new-workflow>
            <new-beans v-if="newBeans" :beans=newBeans @close="newBeans=null"></new-beans>
        </div>
    </div>
</template>
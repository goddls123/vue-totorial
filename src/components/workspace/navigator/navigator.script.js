import SelectBox from '../../select-box/select-box'
import NewNode from '../../popup/new-node/new-node'
import { Node,Workflow, BeanService } from '@/models/workflow'
import NewWorkFlow from '../../popup/new-workflow/new-workflow'
import NewBeanss from '../../popup/new-beans/new-beans'
import apiService from '../../../services/api.service'



export default{
    name: 'navigator',
    components:{
        'select-box' : SelectBox,
        'new-node': NewNode,
        'new-workflow': NewWorkFlow,
        'new-beans': NewBeanss
    },
    methods:{
        selectNode: function(obj){
            this.refresh();
            this.selectedObject = obj;
            
        },
        createNode: function(){
            this.refresh();
            this.newNode = new Node();
            this.selectedObject = null; 
        },
        editNode: function(){
            this.refresh();
            this.newNode = this.selectedObject;
        },
        editWorkflow(workflow){
            this.newWorkflow = workflow;
        },
        refreshNode(refresh){
            this.newNode = null;
            if(refresh){
                this.apiService.getNodeData()
                .then((resp)=>{ 
                    this.nodes = resp;
                    this.refresh();
                    
                    if(this.selectedObject){
                        let select = this.selectedObject;
                        this.selectedObject = null;

                        for(let node of this.nodes){
                            if(node.id == select.id){
                                this.selectedObject = select;
                                break;
                            }
                        }
                    }
                })
                .catch((err)=>{console.log(err);})
            }
            
        },
        refreshWorkflow(){

            this.apiService.getWorkflowData(this.selectedObject.id)
            .then((resp)=>{
                this.workflows = resp;
                this.workflows.map((workflow)=>{ workflow.node = this.selectedObject.name});
            })
            .catch((err)=>{
                console.log(err);
            })
        },
        refresh(){
            this.workflowExpanded = null;
            this.newWorkflow = null;
            this.editMode = null;
        },
        createWorkflow(ev){
            ev.stopPropagation();
            this.newWorkflow = new Workflow();
            this.newWorkflow.node = this.selectedObject.name;
            this.newWorkflow.nodeId = this.selectedObject.id
        },
        createBeans(ev){
            ev.stopPropagation();
            this.newBeans = new BeanService();
            this.newBeans.node = this.selectedObject;
        },
        showWorkflows(){
            this.workflowExpanded=!this.workflowExpanded;
            if(this.workflowExpanded){
                this.refreshWorkflow();
            }
            else{
                this.workflows = null;
            }
        }   
    },
    mounted(){  
        this.apiService.getNodeData()
        .then((resp)=>{
            this.nodes = resp;
        })
        .catch((err)=>{
            console.log(err);
        })
    },
    data(){
        return{
            nodes:null,
            selectedObject:null,
            editMode:null,
            newNode:null,
            workflowExpanded:null,
            workflows:null,
            newWorkflow:null,
            navHide:null,
            beansExpanded:null,
            newBeans:null,
            apiService: apiService

        }
    }
}
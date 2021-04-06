import apiService from "../../../services/api.service";

export default {
    name: 'new-workflow',
    props: ['workflow'],
    data(){
        return{
            nameError: null,
            workflowError: null,
            apiService: apiService 
        }
    },
    methods:{
        clearError(){
            this.workflowError = null;
        },
        popClose(){
            this.$emit('close');
        },
        deleteWorkflow(){
            this.apiService.removeWorkflowData(this.workflow.id)
            .then(()=>{this.popClose();})
            .catch((err)=>{console.log(err);})
        },
        registerWorkflow: function(){
            this.clearError();
            if(!this.workflow.name){
                this.workflowError = 'Please enter a workflow name.'
            }
            else if(!this.workflow.id){
                this.apiService.createWorkflowData(this.workflow) 
                .then(()=>{ this.popClose();})
                .catch((err)=>{console.log(err);})
            }
            else{
                this.apiService.setWorkflowData(this.workflow)
                .then((resp)=>{this.popClose();})
                .catch((err)=>{console.log(err);})
            }
        }
    },
    mounted(){
    }

}
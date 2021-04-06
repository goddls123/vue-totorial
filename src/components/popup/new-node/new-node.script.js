import apiService from "../../../services/api.service";


export default {
    name: 'new-node',
    props: ['node'],
    data(){
        return{
            nameError: null,
            hostError: null,
            apiService: apiService
        }
    },
    methods:{
        clearError(){
            this.nameError = null;
            this.hostError = null;
        },
        popClose(refresh){
            this.$emit('close',refresh);
        },
        deleteNode(){
            this.apiService.removeNodeData(this.node.id)
            .then(()=>{this.popClose(true);})
            .catch((err)=>{console.log(err);})
        },
        registerNode(){
            this.clearError();
            if(!this.node.name){ 
                this.nameError = 'Please enter a node name.'
            }
            else if(!this.node.hostname){
                this.hostError = 'Please enter a host name.'
            }
            else if(!this.node.id){
                this.apiService.createNodeData(this.node) 
                .then(()=>{ this.popClose(true);})
                .catch((err)=>{console.log(err);})
            }
            else{
                this.apiService.setNodeData(this.node)
                .then((resp)=>{this.popClose(true);})
                .catch((err)=>{console.log(err);})
            }
        }
    }
}


export default {
    name: 'select-box',
    props:['selectObjects','selectedObject','addNode'],
    methods:{
        createNode(ev){
            ev.stopPropagation();
            this.$emit('createNode');
            this.listObjects = null;
        },
        openListObject(){
            this.listObjects = this.selectObjects;
        },
        selectNode(ev,object){
            ev.stopPropagation();
            this.$emit("selectObject",object);
            this.listObjects = null;
        }
    },
    mounted(){ 
    },
    data(){
        return{
            listObjects: null
        }
    }

}
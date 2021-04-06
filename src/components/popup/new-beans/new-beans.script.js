export default {
    name: 'new-beans',
    props: ['beans'],
    data(){
        return{
            beansError: null
        }
    },
    methods:{
        clearError(){
            this.beansError = null;
        },
        popClose(){
            this.$emit('close');
        },
        registerBeans: function(){
            this.clearError();
            if(!this.beans.name){
                this.beansError = 'Please enter a beans name.'
            }
        }
    }
}
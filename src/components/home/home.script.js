export default {
    name: 'home',
    methods: {
        pageMove:function(url){
            this.$router.push(url);
        },
    },
    computed:{
        counted:()=>{
            console.log("counted");
        }
    },
    data() {
        return {
            login: 'Login'
        }
    }
}

import { User } from '@/models/organization'
import apiService from '../../services/api.service'


export default {
    name : 'login',
    methods:{
        submit(){
            this.clearError();
            if(!this.user.id){
                this.idError = 'ID-is-required';
            }
            else if(!this.user.password){
                this.passwordError = 'password-is-required';
            }
            else{
                this.apiService.getUserData(this.user.id,this.user.password)
                .then((resp)=>{ 
                    if(resp.data.status){
                        this.movePage('/workspace')
                    }
                    else if(resp.data.result =='id'){
                        this.idError= resp.data.errorMessage;
                    }
                    else{
                        this.passwordError = resp.data.errorMessage;
                    }
                })
                .catch((err)=>{console.log(err);})
            }
        },
        movePage(url){
            this.$router.push(url);
        },
        clearError(){
            this.idError = null;
            this.passwordError = null;
        }
    },
    data(){
        return{
            user: new User(),
            idError: null,
            passwordError: null,
            apiService:apiService
        }
    }

}
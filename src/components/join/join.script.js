import { User } from '@/models/organization'
import apiService from '../../services/api.service';

export default {
    name : 'join',
    methods:{
        submit(){

            this.clearError();
            if(!this.user.id){
                this.idError = 'ID-is-required';
            }
            else if(!this.user.name){
                this.nameError = "name-is-required";
            }
            else if(!this.user.password){
                this.passwordError = 'password-is-required';
            }
            else if(this.user.password!=this.passwordConfirm){
                this.passwordConfirmError = 'password-is-different'
            }
            else{
                this.apiService.createUserData(this.user)
                .then((resp)=>{
                    if(resp.data.result){
                        this.movePage('/')
                    }
                    else{
                        this.idError=resp.data.errorMessage;
                    }
                })
                .catch((error)=>{
                    console.log(error)
                })
            }
        },
        movePage(url){
            this.$router.push(url);
        },
        clearError(){
            this.nameError = null;
            this.idError = null;
            this.passwordError = null;
            this.passwordConfirmError = null;
        }
    },
    data(){
        return{
            user: new User(),
            idError: null,
            nameError:null,
            passwordError: null,
            passwordConfirm: null,
            passwordConfirmError: null,
            apiService:apiService
        }
    }

}
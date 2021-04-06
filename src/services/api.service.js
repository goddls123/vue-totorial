
import axios from 'axios';

const REST_SERVICE_URL = 'http://localhost:8060';
// const LOGIN_URL = REST_SERVICE_URL + '/login';

class ApiService{

    callApi(url, method, params, data) {

        const headers = {'Content-Type': 'application/json; charset = utf-8'}
        
        
        if(method ==='get'){
            return axios.get(url);
        }
        else{
            return axios.post(url,JSON.stringify(data),{headers:headers});
        }
    }

    createNodeData(data){
        return new Promise((resolve, reject) => {
            this.callApi(REST_SERVICE_URL +'/createNodeData', 'post', null, data).then( (val) => { resolve(val); }).catch( (err) => {reject(err);})
        }); 
    }
    getNodeData(){
        return new Promise((resolve, reject) => {
            this.callApi(REST_SERVICE_URL +'/getNodeData' , 'get', null, null).then( (val) => { resolve(val.data.result); }).catch( (err) => {reject(err);})
        }); 
    }
    setNodeData(data){
        return new Promise((resolve, reject) => {
            this.callApi(REST_SERVICE_URL +'/setNodeData', 'post', null, data).then( (val) => { resolve(val); }).catch( (err) => {reject(err);})
        }); 
    }
    removeNodeData(id){
        return new Promise((resolve, reject) => {
            this.callApi(REST_SERVICE_URL +'/removeNodeData', 'post', null, {id:id}).then( (val) => { resolve(val); }).catch( (err) => {reject(err);})
        }); 
    }
    createWorkflowData(data){
        return new Promise((resolve, reject) => {
            this.callApi(REST_SERVICE_URL +'/createWorkflowData', 'post', null, data).then( (val) => { resolve(val); }).catch( (err) => {reject(err);})
        }); 
    }
    getWorkflowData(nodeId){
        return new Promise((resolve, reject) => {
            this.callApi(REST_SERVICE_URL +'/getWorkflowData/' + nodeId , 'get', null, null).then( (val) => { resolve(val.data.result); }).catch( (err) => {reject(err);})
        }); 
    }
    setWorkflowData(data){
        return new Promise((resolve, reject) => {
            this.callApi(REST_SERVICE_URL +'/setWorkflowData', 'post', null, data).then( (val) => { resolve(val); }).catch( (err) => {reject(err);})
        }); 
    }
    removeWorkflowData(id){
        return new Promise((resolve, reject) => {
            this.callApi(REST_SERVICE_URL +'/removeWorkflowData', 'post', null, {id:id}).then( (val) => { resolve(val); }).catch( (err) => {reject(err);})
        }); 
    }

    createUserData(user){
        return new Promise((resolve, reject) => {
            this.callApi(REST_SERVICE_URL +'/createUserData', 'post', null, user).then( (val) => { resolve(val); }).catch( (err) => {reject(err);})
        }); 
    }
    getUserData(id,password){
        return new Promise((resolve, reject) => {
            this.callApi(REST_SERVICE_URL +'/getUserData/'+id +'/'+password , 'post', null, null).then( (val) => { resolve(val); }).catch( (err) => {reject(err);})
        }); 
    }
    setUserData(user){
        return new Promise((resolve, reject) => {
            this.callApi(REST_SERVICE_URL +'/setUserData', 'post', null, user).then( (val) => { resolve(val); }).catch( (err) => {reject(err);})
        }); 
    }
    removeUserData(id){
        return new Promise((resolve, reject) => {
            this.callApi(REST_SERVICE_URL +'/removeUserData', 'post', null, {id:id}).then( (val) => { resolve(val); }).catch( (err) => {reject(err);})
        }); 
    }
}
export default new ApiService();

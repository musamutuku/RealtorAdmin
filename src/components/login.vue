<script setup>
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'vue-router';
import { ref } from 'vue'
const emit = defineEmits(['login'])

const username = ref("")
const password = ref("")
const router = useRouter()
const loginerror = ref("incorrect username or password")
const hide = ref('hidden')

function login() {
    const authStore = useAuthStore();
    const user = username.value;
    const pswd = password.value;

    if (authStore.login(user,pswd)){
        router.push({path: '/admin'})
        const admin = authStore.username;
        localStorage.setItem('admin', JSON.stringify(admin));
        username.value = "";
        password.value = "";
        emit('showLogin')
    }
    else{
        hide.value = 'visible'
    }
}
function hideError(){
    hide.value = 'hidden'
}
</script>

<template>
    <div class="loginPage" v-show="isVisible">
        <div class="login-form">
            <div class="login-title">REALTOR ADMIN LOGIN</div>
            <form @submit.prevent="login">
                <input type="text" v-model="username" id="username" placeholder="Enter your username" @focus="hideError" required/><br />
                <input type="password" v-model="password" id="password" placeholder="Enter your password" @focus="hideError" required /><br />
                <span :style="{visibility: hide}">{{loginerror}}</span>
                <button>Login</button>
            </form>
        </div>
        
    </div>
</template>
<style scoped>
.loginPage{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: white;
    top: 0%;
    z-index: 10;
    height: 100vh;
    width: 100vw;
}
.login-form{
    width: 380px;
    height: 360px; 
    border: 1px solid rgb(214, 208, 208);
    background-color: rgb(244, 244, 248);
    text-align: center;
    border-radius: 5px;
}
.login-form input{
    width: 350px;
    height: 45px; 
    font-size: 18px;
    font-family: Quicksand;
    border-radius: 5px;
    outline: none;
    border: 1px solid rgb(214, 208, 208);
    padding-left: 10px;
}
#username{
    margin-bottom: 30px;
}
.login-form span{
    font-size: 14px;
    color: brown;
    float: left;
    margin-left: 10px;
}
.login-title{
    color: #FFF;
    text-align: center;
    font-family: Quicksand;
    font-size: 30px;
    font-weight: 700; 
    background-color: #84D696;
    padding: 6px;
    padding-top: 10px;
    margin-bottom: 30px;
    height: 50px;
}
.login-form button{
    border: 1px solid rgb(214, 208, 208);
    text-align: center;
    width: 350px;
    height: 45px; 
    margin-top: 17%;
    border-radius: 5px;
    outline: none;
    color: #FDFCFC;
    font-family: Quicksand;
    font-size: 25px;
    font-weight: 600;
    background: #6b6ba3;

}
.login-form button:hover{
    cursor: pointer;
    background-color: #3D3DB1;
}
</style>
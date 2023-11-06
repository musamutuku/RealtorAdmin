<script setup>
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'vue-router';
import { ref } from 'vue'
const emit = defineEmits(['login'])

const username = ref("")
const password = ref("")
const router = useRouter()

function login() {
    const authStore = useAuthStore();
    const user = username.value;
    const pswd = password.value;

    if (authStore.login(user,pswd)){
        router.push({path: '/admin'})
        const admin = authStore.username;
        localStorage.setItem('admin', JSON.stringify(admin));
        emit('showLogin')
    }
    else{
        alert('nooo')
    }
}
</script>

<template>
    <div class="mylogin" v-show="isVisible">
        <form @submit.prevent="login">
            <label for="username">Username:</label>
            <input type="text" v-model="username" id="username" required/><br />
            <label for="password">Password:</label>
            <input type="password" v-model="password" id="password" required /><br />
            <button>Login</button>
        </form>
        
    </div>
</template>
<style scoped>
    .mylogin{
        background-color: blue;
        position: absolute;
        top: 0%;
        z-index: 10;
        height: 90vh;
        width: 99vw;
    }
</style>
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Navigation from './components/Navigation.vue';
import Login from './components/login.vue';
import Logout from './views/logout.vue';    
const isVisible = ref()
const storedState = JSON.parse(localStorage.getItem('admin'));
const router = useRouter()
const showlogout = ref(false)


onMounted(() => {
    if (storedState){
        isVisible.value = false;
    }else 
    {
        router.push({path: '/admin/login'})
        isVisible.value = true;
    }
});
function goToDash(){
    isVisible.value = false;
}
function goToLogin(){
    isVisible.value = true;
    showlogout.value = false;

}
</script>

<template>
    <div>
        <div>
            <teleport to='body' >
                <Login v-show="isVisible" @showLogin="goToDash"/>
            </teleport>
        </div>
        <Navigation  @loggingOut="showlogout=true"/>
        <Logout v-show="showlogout" @closelogout="showlogout=false" @showlog="goToLogin"/>
    </div>
</template>

  
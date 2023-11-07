<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Navigation from './components/Navigation.vue';
import Login from './components/login.vue';
const isVisible = ref()
const storedState = JSON.parse(localStorage.getItem('admin'));
const router = useRouter()

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

</script>

<template>
    <div>
        <div>
            <teleport to='body' >
                    <Login v-show="isVisible" @showLogin="goToDash"/>
                </teleport>
        </div>
        <Navigation/>
    </div>
</template>

  
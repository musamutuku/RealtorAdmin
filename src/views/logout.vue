<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

function remove(){
    localStorage.removeItem('admin');
    router.push({path: '/admin/login'})
    location.reload()
}

</script>
<template>
    <div>
        <button @click="remove">log out?</button>
    </div>
</template>
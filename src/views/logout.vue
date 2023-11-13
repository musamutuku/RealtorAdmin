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
    <div class="logoutModal">
        <div class="logout-div">
            <img src="@/assets/images/close1.png" alt="" @click="$emit('closelogout')" title="close">
            <p>Are you sure you want to logout?</p>
            <button @click="remove">OK</button>
        </div>
    </div>
</template>

<style scoped>
.logoutModal{
    position: absolute;
    top: 0%;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}
.logout-div img{
    cursor: pointer;
    width: 20px;
    height: 20px;
    float: right;
    margin-right: 5px;
    margin-top: 5px;
}
.logout-div{
    width: 400px;
    height: 200px;
    background-color: white;
}
.logout-div button{
    cursor: pointer;
    width: 80px;
    height: 30px;
    font-size: 20px;
    margin-left: 40%;
    margin-top: 3%;
}
.logout-div p{
    color: #892727;
    text-align: center;
    font-family: Quicksand;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    margin-top: 80px;
}
</style>
<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
    <div class="nav-div">
        <div class="category-div">
            <div class="bar">
                <h1 id="header">REALTOR</h1>
                <div class="house-category">
                    <span><img src="@/assets/images/dashboard.png" alt="">
                        <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                    </span>  
                    <span><img src="@/assets/images/users.png" alt="">
                        <router-link :to="{ name: 'users' }">Users</router-link>
                    </span>
                    <span><img src="@/assets/images/houses.png" alt="">
                        <router-link :to="{ name: 'houses' }">Houses</router-link>
                    </span>    
                    <span><img src="@/assets/images/logout.png" alt="">
                        <router-link :to="{ name: 'logout' }">Logout</router-link>
                    </span>
                </div>
            </div>
            <RouterView />
        </div>
    </div>
</template>         
<style scoped>
.nav-div{
    height: 98vh;
}
.bar{
    background-color: rgb(242, 242, 243);
}
#header {
    font-family: quicksand;
    font-size: 40px;
    font-weight: bolder;
    color: rgb(35, 47, 95);
    text-shadow: 3px 3px rgb(163, 104, 81);
    margin-left: 2%;
}

.house-category {
    font-family: quicksand;
    font-size: 22px;
    background-color: rgb(242, 242, 243);
    width: 200px;
    min-width: 200px;
    padding-left: 50px;
    padding-top: 50px;
    border-radius: 4px;
    line-height: 24px;
    margin-top: 10.9%;
    height: 77vh;
}
.house-category span{
    display: flex; 
    gap: 10px;
    margin-bottom: 30px;

}
.house-category span img{
    width: 30px;
    height: 30px;
    margin-top: 1%;
}

a {
    color: rgb(49, 110, 49);
    text-decoration: none;
    font-weight: 510;
    display: flex;
    flex-direction: column;
    margin-top: 0.2em;
}

a.router-link-active {
    color: rgb(194, 71, 77);
    border-radius: 2px;
}

.category-div {
    display: flex;
}

.list-category {
    display: none;

}
</style>
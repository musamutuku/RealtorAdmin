<script setup>
const emit = defineEmits(['goBack1'])
const prop = defineProps({
    backpage: String
})

function checkGoBack(){
    emit('goBack1', prop.backpage)
}

fetch('http://127.0.0.1:3000/api/data4').then(response => response.json())
.then(data => localStorage.setItem('ranchhouses', JSON.stringify(data)));

const ranchhouses = JSON.parse(localStorage.getItem('ranchhouses'))


</script>

<template>
    <div class="main-div">
        <div class="top-div">
            <span class="nav-title">Ranchhouses</span>
            <div class="admin-profile">
                <img src="@/assets/images/profile.jpg">
                <span>Admin <img src="@/assets/images/down_arrow.png"></span>
            </div>
        </div>
        <div class="center-div">
            <div class="allusers">
                <table>
                    <thead>
                        <tr>
                            <th>HouseID</th>
                            <th>HouseName</th>
                            <th>Photo</th>
                            <th>Price</th>
                            <th>Remove</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="house in ranchhouses" :key="house.id">
                            <td>{{ house.id }}</td>
                            <td>{{ house.housename }}</td>
                            <td><img :src ="'/'+house.imagesrc"></td>
                            <td>{{ house.price }}</td>
                            <td><button>DELETE</button></td>
                            <td><img src="@/assets/images/view.png" alt=""></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div @click="checkGoBack" class="goBack">Go Back</div>
    </div>
</template>

<style scoped>
.goBack{
    position: relative;
    bottom: 12%;
    text-decoration: underline;
    cursor: pointer;
    color: rgb(4, 4, 87);
    font-size: 18px;
    font-family: quicksand;
    font-weight: 500;
    left: 20px;
}
.main-div {
    width: 83.5vw;
}

.top-div {
    display: flex;
    height: 14vh;
    background-color: rgba(205, 205, 205, 0.41);
    justify-content: center;
    align-items: flex-end;
    padding-right: 1%;
}

.nav-title {
    font-family: quicksand;
    font-size: 30px;
    color: #605AA1;
    font-weight: 600;
    margin-left: 42%;
}

.admin-profile {
    width: 75px;
    height: 75px;
    margin-left: auto;
    margin-bottom: 1.8%;
}

.admin-profile img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
}

.admin-profile span {
    display: flex;
    gap: 1px;
    margin-left: 2px;
    font-family: quicksand;
    font-size: 18px;
    font-weight: 500;
}

.admin-profile span img {
    width: 15px;
    height: 15px;
    margin-top: 5px;
}

.center-div {
    display: flex;
    justify-content: center;
    background-color: #FBFBFB;
    padding-top: 1%;
    height: 80vh;
    border-radius: 10px;
    font-family: quicksand;
}
table{
    table-layout: fixed;
    height: 500px;
}

table,th,td {
    border: 1px solid rgb(145, 137, 137);
    border-collapse: collapse;

}
th{
    font-size: 20px;
    font-weight: 700;
}
td{
    max-width: 300px;
    width: 250px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

}
td img{
    width: 38px;
    height: 31px;
    cursor: pointer;
}
td:first-child{
    width: 30px;
    text-align: center;
}
td:last-child{
    width: 100px;
}
td:last-child{
    text-align: center;
}
td:nth-child(3){
    text-align: center;
}
td:nth-child(3) img{
    width: 90px;
    height: 50px;
}
td:nth-child(4){
    width: 120px;
    text-align: center;
}
td:nth-child(5){
    width: 170px;
    text-align: center;
}
td:nth-child(6){
    width: 120px;
}
td button{
    color: #D21515;
    width: 90px;
    height: 26px;
    font-weight: 500;
    font-family: quicksand; 
    cursor: pointer;
}
th:first-child{
    padding-bottom: 10px;
}
.allusers{
    display: flex;
    overflow: scroll;
    justify-content: center;
    width: 1300px;
    height: 590px; 
    background: #F3EEEE; 
    padding: 5px;
}
</style>
<script setup>
// import { ref } from 'vue';

// const users = ref([])

fetch('http://127.0.0.1:3000/api/users').then(response => response.json())
    .then(data => localStorage.setItem('users', JSON.stringify(data)));

const users = JSON.parse(localStorage.getItem('users'))


</script>

<template>
    <div class="main-div">
        <div class="top-div">
            <span class="nav-title">Users</span>
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
                            <th>List</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Message</th>
                            <th>HouseID</th>
                            <th>Remove</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in users" :key="item.id">
                            <td>{{ item.id }}</td>
                            <td>{{ item.username }}</td>
                            <td>{{ item.email }}</td>
                            <td>{{ item.phone }}</td>
                            <td>{{ item.message }}</td>
                            <td>{{ item.houseid }}</td>
                            <td><button>DELETE</button></td>
                            <td><img src="@/assets/images/view.png" alt=""></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-div {
    width: 83.5vw;
    /* height: 80vh; */
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
    height: 84vh;
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
    width: 200px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding: 10px;

}
td img{
    width: 38px;
    height: 31px;
    cursor: pointer; 
}
td:first-child{
    width: 30px;
}
td:last-child{
    width: 140px;
}
td:last-child{
    text-align: center;
}
td:nth-child(7){
    text-align: center;
}
td:nth-child(6){
    width: 150px;
    text-align: center;
}
td button{
    color: #D21515;
    width: 80px;
    height: 24px;
    font-weight: 500;
    font-family: quicksand; 
    cursor: pointer;
}
.allusers{
    display: flex;
    overflow: scroll;
    justify-content: center;
    width: 1300px;
    height: 600px; 
    background: #F3EEEE; 
    padding: 5px;
}
</style>
<script setup>
import { ref, reactive, computed, toDisplayString } from 'vue';
import addNewHouse from '@/components/addNewHouse.vue'
import Apartments from '@/components/apartments.vue';
const showHouses = ref(true)
const showAdd = ref(false)
const isvisible = ref(false)

function showHouse() {
    showHouses.value = false
    showAdd.value = true
}
function returnBack(){
    showAdd.value = false
    showHouses.value = true
}
function returnBack1(){
    isvisible.value = false
    showHouses.value = true
}
function showApartments(){
    isvisible.value = true
    showHouses.value = false
}
</script>

<template>
    <div class="main-div" v-show="showHouses">
        <div class="top-div">
            <span class="nav-title">Houses</span>
            <div class="admin-profile">
                <img src="@/assets/images/profile.jpg"> 
                <span>Admin <img src="@/assets/images/down_arrow.png"></span>
            </div>
        </div>
        <div class="center-div">
            <ul>
                <li @click="showApartments">Apartments</li>
                <li>Townhouses</li>
                <li>Farmhomes</li>
                <li>Mobilehomes</li>
                <li>Ranchhouses</li>
            </ul>
            <span @click="showHouse">Add new <br>House</span>
        </div>
    </div>
    <addNewHouse v-show="showAdd" @goBack="returnBack"/>
    <Apartments v-show="isvisible" @goBack1="returnBack1"/>
   
</template>

<style scoped>
ul{
    color: #0A4E03;
    font-family: Quicksand;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    list-style-type: square;
}
li{
    margin-bottom: 20px;

}
li:hover{
    color: #4D0707;
    text-decoration: underline;
    cursor: pointer;
}
.newHouse {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}
.main-div {
    width: 83.5vw;
    height: 90vh;
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
    gap: 10rem;
    background-color: #FBFBFB;
    padding-left: 15%;
    padding-top: 5%;
    height: 70vh;
    border-radius: 10px;
    font-family: quicksand;
}
.center-div span{
    color: #3A2B77;
    font-family: Quicksand;
    font-size: 25px;
    font-weight: 600;
    margin-top: 10%;
    text-align: center;
    height: 61px;
}
.center-div span:hover{
    cursor: pointer;
    text-decoration: underline;
    color: rgb(5, 26, 73);
}
</style>
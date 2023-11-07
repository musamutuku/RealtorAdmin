<script setup>
import { ref, reactive, computed } from 'vue';
import addNewHouse from '@/components/addNewHouse.vue'
const showHouses = ref(true)
const showAdd = ref(false)

function showHouse() {
    showHouses.value = false
    showAdd.value = true
}
function returnBack(){
    showAdd.value = false
    showHouses.value = true
}
</script>

<template>
    <div>
        <div v-show="showHouses">
            <h1>Houses</h1>
            <h2>Apartments</h2>
            <h2>Townhouses</h2>
            <h2>Farmhomes</h2>
            <h2>Mobilehomes</h2>
            <h2>Ranchhouses</h2>
            <h2 class="newHouse" @click="showHouse">New House</h2>
        </div>
        <addNewHouse v-show="showAdd" @goBack="returnBack"/>
    </div>
</template>

<style scoped>
.newHouse {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}</style>
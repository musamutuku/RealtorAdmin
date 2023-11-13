<script setup>

fetch('http://127.0.0.1:3000/api/apartments').then(response => response.json())
.then(data => localStorage.setItem('apartments', JSON.stringify(data)));

const apartments = JSON.parse(localStorage.getItem('apartments'))

// fetch('http://127.0.0.1:3000/api/townhouses').then(response => response.json())
// .then(data => users.value = data);

// fetch('http://127.0.0.1:3000/api/mobilehomes').then(response => response.json())
// .then(data => users.value = data);

// fetch('http://127.0.0.1:3000/api/farmhomes').then(response => response.json())
// .then(data => users.value = data);

// fetch('http://127.0.0.1:3000/api/ranchhouses').then(response => response.json())
// .then(data => users.value = data);


</script>

<template>
        <div class="cards">
            <div>
                <h3>Apartments</h3>
                <table>
                    <thead>
                        <tr>
                            <td>HouseID</td>
                            <td>HouseName</td>
                            <td>src</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="house in apartments" :key="house.id">
                            <td>{{ house.id }}</td>
                            <td>{{ house.housename }}</td>
                            <td><img :src ="house.imagesrc"></td>
                            <td>{{ house.price }}</td>
                        </tr>
                    </tbody>
                </table>
            
            </div>
            <div><h3>Townhouses</h3></div>
            <div><h3>Mobilehomes</h3></div>
            <div><h3>Farmhomes</h3></div>
            <div><h3>Ranchhouses</h3></div>
        </div>
</template>

<style scoped>
table, td{
    border: 1px solid black;
    border-collapse: collapse;

}
td img{
    width: 100px;
    height: 100px;
}

</style>
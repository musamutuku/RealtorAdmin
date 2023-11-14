<script setup>
import { ref, computed } from 'vue';

const houseCategory = ref("")
const houseName = ref("")
const housePrice = ref("")
const houseDescription = ref("")
const fileInput = ref(null)
const selectedFile = ref({ name: 'No file selected.' })
const successMsg = ref()
const successModal = ref()
const successModal1 = ref()
const isdisabled = ref(true)


const bgcolor = computed(() => {
    if(houseName.value != "" &&        
       houseCategory.value != "" &&
       housePrice.value != "" &&
       houseDescription.value != "" && fileInput.value.files.length != 0)
       {
        isdisabled.value = false
        const color = {backgroundColor: '#47963F'}
        return color
    }
    isdisabled.value = true
})


const editedFileName = computed(() =>{
    if(selectedFile.value.name != 'No file selected.'){
        const newfileName = selectedFile.value.name.split(".")
        const fileNameWithoutExtension = newfileName.slice(0, -1).join('');
        const fileExtension = newfileName[newfileName.length - 1];
        const modifiedFileName = fileNameWithoutExtension.slice(0,6) + "...";
        const modifiedFileName1 = fileNameWithoutExtension.slice(-3)
        const selectedFileName = modifiedFileName + modifiedFileName1 + '.' + fileExtension
        return selectedFileName
    }
    else{
        return selectedFile.value.name
    }
}
)

function getHouseData(event) {
    successModal.value = true
    let category = houseCategory.value + "s";
        const formData = new FormData();
        formData.append("houseName", houseName.value);
        formData.append("image", selectedFile.value);
        formData.append("description", houseDescription.value);
        formData.append("price", housePrice.value);

    fetch(`http://127.0.0.1:3000/api/addNew/${category}`, {
        method: 'POST', 
        body: formData
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.json();
            }
        })
        .then(data => showSuccess(data.Msg))
        .catch(error => {
            console.error('Error:', error);
            setTimeout(() => {
                showSuccess(error)
            }, 10000);
        })
}
function showSuccess(success){
    houseName.value = "";
    houseCategory.value = "";
    housePrice.value = "";
    houseDescription.value = "";
    selectedFile.value = { name: 'No file selected.' }
    successMsg.value = success;
    successModal1.value = true;
    successModal.value = false;
    setTimeout(() => {
        successModal1.value = false;
    }, 5000);

}


function handleFileChange(event) {
    selectedFile.value = event.target.files[0];
    
}

function openFileInput() {
    fileInput.value.click();
}

</script>

<template>
    <div class="main-div">
        <div class="top-div">
            <h2 class="nav-title">Houses</h2>
            <div class="admin-profile"><img src="@/assets/images/profile.jpg">
                <span>Admin <img src="@/assets/images/down_arrow.png"></span>
            </div>
        </div>
        <div class="center-div">
            <div class="success-msg" v-show="successModal">
                <img src="@/assets/images/loader.png" alt="">
            </div>
              <div class="success-msg" v-show="successModal1">
                <p>{{ successMsg }}</p>
            </div>
            <h3>Add a new House</h3>
            <label for="category">Category</label>
            <select name="" id="category" v-model="houseCategory">
                <option value="" disabled>Select a category</option>
                <option value="Apartment">Apartment</option>
                <option value="Townhouse">Townhouse</option>
                <option value="Mobilehome">Mobilehome</option>
                <option value="Farmhome">Farmhome</option>
                <option value="Ranchhouse">Ranchhouse</option>
            </select>
            <label for="location">Location</label>
            <button id="location"><span>Add</span>&nbsp;<img src="@/assets/images/location.png" alt=""></button><br>
            <label for="houseName">Name</label>
            <input type="text" id="houseName" v-model="houseName"><br>
            <label for="image">Image</label>
            <input ref="fileInput" type="file" id="image" @change="handleFileChange" style="display: none;">
            <button id="upload-btn" @click="openFileInput">Upload<span id="upload-img"><img
                        src="@/assets/images/upload.png"></span></button><span id="upload-text">{{ editedFileName }}</span>
            <label for="price">Price</label>
            <input type="text" id="price" v-model="housePrice"><br>
            <div class="description-div">
                <label for="description" id="description-label">Description<br id="break"><span>switch to use a page<br>for
                        typing <img src="@/assets/images/arrow.png"></span></label>
                <textarea name="" id="description" cols="44" rows="5" v-model="houseDescription"
                    placeholder="Type house description here..."></textarea>
            </div>
            <br>
            <button @click="getHouseData" class="addbtn" :style="bgcolor" :disabled="isdisabled"><img src="@/assets/images/addhouse.png"><span>ADD</span></button>
        </div>
        <div @click="$emit('goBack')" class="goBack">Go Back</div>
    </div>
</template>

<style scoped>
.goBack{
    position: relative;
    bottom: 10%;
    text-decoration: underline;
    cursor: pointer;
    color: rgb(4, 4, 87);
    font-size: 18px;
    font-family: quicksand;
    font-weight: 500;
    width: 90px;
}
.success-msg{
    width: 100%;
    height: 85%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    left: 0%;
    z-index: 10;
    text-align: center;
    display: flex;
    justify-content: center;
}
.success-msg p{
     background-color: #c8ddc5;
     width: 30%;
     height: 8%;
     margin-top: 0px;
     display: flex;
     align-items: center;
     padding-left: 1%;
     box-sizing: border-box;
     font-size: 15px;
}
.success-msg img{
    align-self: center;
    width: 50px;
    height: 50px;
    animation: rotate 2s linear infinite;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
.main-div {
    width: 83.5vw;
    height: 100%;
}

.top-div {
    display: flex;
    height: 15.5%;
    background-color: rgba(205, 205, 205, 0.41);
    padding-left: 40%;
}

.nav-title {
    font-family: quicksand;
    margin-right: 73%;
    margin-top: 8%;
    font-size: 30px;
    color: #605AA1;
}

.admin-profile {
    width: 75px;
    height: 75px;
    margin-top: 1%;
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
    margin-top: -4px;
}

.admin-profile span img {
    width: 15px;
    height: 15px;
    margin-top: 5px;
}

.center-div {
    background-color: #FBFBFB;
    height: 86%;
    border-radius: 10px;
    margin-top: -28px;
    font-family: quicksand;
    padding-left: 20%;
}

.center-div h3 {
    font-size: 30px;
    margin-left: 20%;
    margin-bottom: 5%;
}

.center-div label {
    font-family: quicksand;
    font-weight: bold;
    font-size: 20px;
    margin-right: 20px;
}

.center-div input {
    font-size: 20px;
    font-size: 20px;
    height: 30px;
    outline: none;
    margin-right: 20px;
    width: 280px;
    font-family: quicksand;
    margin-bottom: 40px;
}

select {
    font-family: quicksand;
    width: 280px;
    margin-right: 20px;
}

#category{
    margin-bottom: 40px;
    height: 37px;
    font-size: 20px;
}
#location img{
    width: 24px;
    height: 22px;
    margin-left: 3px;
   
}
#location {
    width: 160px;
    padding-top: 5px;
    height: 37px;
    font-size: 20px;
    box-sizing: border-box;
}
#location span{
    display: inline-block;
    margin-bottom: 2px
}

#upload-btn {
    font-family: quicksand;
    font-weight: 502;
    width: 115px;
    height: 35px;
    font-size: 20px;
    text-align: left;
    margin-left: 2%;
    margin-right: 0.5%;
    cursor: pointer;
}

#upload-text {
    position: relative;
    display: inline-block;
    top: 5px;
    font-size: 20px;
    margin-right: 4.2%;
    width: 150px;
    height: 25px;
    overflow: hidden;
}

#upload-img {
    position: relative;
    top: 3px;
    left: 5px;
}

#upload-img img {
    width: 24px;
    height: 20px;
}

#houseName {
    width: 450px;
    margin-left: 25px;
}

#image {
    margin-left: 25px;
}

#price {
    width: 190px;
}

textarea {
    font-family: quicksand;
    font-size: 20px;
}

#description-label {
    margin-right: 5px;
    line-height: 5px;
}

#description-label span {
    color: blue;
    font-size: 13px;
    text-decoration: underline;
    line-height: 15px;
    cursor: pointer;
}

#description-label span img {
    width: 18px;
    height: 16px;
    margin-bottom: -4.6px;
    text-decoration: none;
}

.description-div {
    display: flex;
}

#break {
    margin-bottom: 20px;
}

.addbtn {
    background-color: rgb(206, 200, 200);
    color: white;   ;
    border: none;
    width: 120px;
    height: 40px;
    margin-left: 30%;
    border-radius: 5px;
    font-family: quicksand;
    font-weight: bold;
    padding-right: 10px;
    cursor: pointer;
}

.addbtn img {
    position: relative;
    top: 3px;
    width: 35px;
    height: 28px;
}

.addbtn span {
    font-size: 27px;
}</style>
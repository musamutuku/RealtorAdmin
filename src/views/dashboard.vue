<script setup>

</script>

<template>
    <div class="main-div">
        <div class="top-div">
            <span class="nav-title">Dashboard</span>
            <div class="admin-profile">
                <img src="@/assets/images/profile.jpg"> 
                <span>Admin <img src="@/assets/images/down_arrow.png"></span>
            </div>
        </div>
        <div class="center-div">
            <div class="card one">
                <h3>Recent Houses</h3>
                <span>15 - (Last 1 month)</span>
            </div>
            <div class="card two">
                <div class="new-users">2</div>
                <h3>New Users</h3>
                <span>3 - (Last 2 weeks)</span>
            </div>
            <div class="card three">
                <h3>Recent<br> Transactions</h3>
            </div>
            <div class="card four">
                <h3>Adverts</h3>
                <span>0 -  adverts</span>
            </div>
        </div>
        <div class="activity-div">
            <div class="activity">Activity</div>
            <div class="calendar">view by date <br><span><img src="@/assets/images/calendar.png" alt=""></span></div>
            <div class="last-view">Last viewed<br> <span>10 Oct 2023</span>&nbsp;<span id="last-view">4</span></div>
        </div>
    </div>
        
</template>

<style scoped>
.main-div {
    width: 83.5vw;
    height: 110vh;
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    background-color: #FBFBFB;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 1.5%;
    height: 70vh;
    border-radius: 10px;
    font-family: quicksand;
}
.card{
    width: 450px;
    height: 220px;
    text-align: center;
    padding-top: 1%;
    border-radius: 10px;
}
.activity-div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10em;
    width: 1050px;
    height: 85px; 
    background: #D9D9D9; 
    margin-left: 10.6%;
}
h3{
    font-size: 35px;
}
.card span{
    font-size: 20px;
    font-weight: 700;
}
.one{
    background-color: #92CA8C;
}
.one h3{
    color: #C23D03;
}
.two{
    background-color: #8CB4CA;
}
.two h3{
    color: #CC1658;
}
.new-users{
    margin-right: 5%;
    float: right;
    display: flex;
    width: 35px;
    height: 35px; 
    background-color: #325045;
    color: white;
    border-radius: 100%;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
}
.three{
    background-color: #B68CCA;
}
.three h3{
    color: #8F1212;
    text-align: center;
}
.four{
    background-color: #CAC08C;
}
.four h3{
    color: #1A16CC;
    text-align: center;
}
.activity{
    width: 130px;
    height: 35px; 
    font-family: Quicksand;
    font-size: 25px; 
    font-weight: 600;
}
.calendar{
    font-family: Quicksand;
    font-size: 15px;
    font-weight: 700; 
}
.calendar span{
    margin-left: 25%;
}
.last-view{
    font-family: Quicksand;
    font-size: 21px;
    font-style: normal;
    font-weight: 400; 
}
.last-view span{
    font-size: 15px;
}
#last-view{
    text-align: center;
    display: inline-block;  
    margin-bottom: 2px;
    width: 20px;
    height: 20px;
    background-color: #6B8767;
    color: white;
    font-weight: 600;
    border-radius: 100%;
}
</style>
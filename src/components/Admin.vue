<template>
    <div>

        <div class = "headbar">
            <h1>ADMIN HOMEPAGE</h1>
            <div>
                <b-button @click="Logout" size="sm" class="mb-2">
                    <b-icon icon="key" aria-hidden="true"></b-icon> LOG-OUT
                </b-button>
            </div>
        </div>

        <div class="list_option">
            <div class="option">
                <img  src='../assets/coin.jpg' >
                <button type="button" class="btn btn-outline-secondary">LEADERBOARD</button>
            </div>

            <div class="option">
                <img  src='../assets/prize.jpg' >
                <button type="button" class="btn btn-outline-success">PRIZE</button>
            </div>
        </div>

     </div>
</template>

<script>
export default {
    methods: {
      Logout() {
        this.$router.push('/')
      }
    }
}
</script>

<style>
    .headbar{
    overflow: hidden;
    background-color: rgb(3, 3, 3);
    }

    .headbar h1 {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    position: relative;
    top: 4px;
    left: 10px;
    }

    .headbar button {
    float: left;
    display: block;
    color: rgb(255, 255, 255);
    background: none;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    border: black;
    position: relative;
    left: 1700px;
    }

    .headbar button:hover {
    background-color: rgb(248, 248, 248);
    color: rgb(0, 0, 0);
    } 
    
    .list_option{
        display: grid;
        grid-template-columns:1fr 1fr;
        position: relative;
        top: 230px;
    }

    .option img{
        width: 300px;
        height: 300px;
    }

    .list_option .btn-outline-success{
        position: relative;
        top: 190px;
        right: 180px;
    }

    .list_option .btn-outline-secondary{
        position: relative;
        top: 180px;
        right: 217px;
    }
    
</style>
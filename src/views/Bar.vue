<template>
    <div class="bar">
        <Itembar/>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>

import Itembar from '../components/Itembar.vue'
export default {
    name: 'home',
    components: {
        Itembar
    }
}
</script>

<style>
/* .bar {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: teal;
    height: 100vh;
    width: 100vw;
}
.content {
    background-color: white;
    border-radius: 10px;
    margin: 6px 6px 6px 0px;
} */
</style>
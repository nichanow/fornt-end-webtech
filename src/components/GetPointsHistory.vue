<template>
<div>
    <div class="totalPoint"> point</div>
    <div class="table1">
        <h1>Receive Point</h1>
        <table>
            <thead>
                <tr>
                <th>No.</th>
                <th>Type</th>
                <th>Prize</th>
                <th>Point</th>
                <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr v-for="(income, index) in income" :key="index" class="income"> -->
                <tr class="reward">
                    <td>1</td>
                    <td>Shopping</td>
                    <td>400</td>
                    <td>+20</td>
                    <td>7/8/2564</td>
                    
                    
                </tr>
                <!-- <tr v-for="(expense, index) in expense" :key="index" class = "expense"> -->
            
            </tbody>
        </table>

    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.totalPoint{
    font-family: 'Fira Code', 'Fira Sans', sans-serif;
    background-color: #388edd;
    color: #FFF;
    font-size: 20px;
    font-weight: 900;
    padding: 5px 10px;
    width: 8%;
    text-align: center;
    border-radius: 8px;
    box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.25);
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
}
table{
    margin-left: auto;
    margin-right: auto;
}
</style>
<template>
<div>
    <div class="table1">
        <table>
            <thead>
                <tr>
                <th>No.</th>
                <th>Item</th>
                <th>Name Item</th>
                <th>Point</th>
                <th>Exchange</th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr v-for="(income, index) in income" :key="index" class="income"> -->
                <tr class="rankUser">
                    <td>1</td>
                    <td>รูปของ</td>
                    <td>IphoneX</td>
                    <td>500</td>
                    <td><button>Exchange</button></td>                    
                    
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
table{
  margin-left: auto;
  margin-right: auto;
}
</style>
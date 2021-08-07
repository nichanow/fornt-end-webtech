<template>
  <div>
    <h1>Select Period</h1>
    <div class="time">
      
      <div class="start">
        <label for="startDate">Start Date</label>
        <input type="date">
      </div>

      <div class="end">
        <label for="endDate">End Date</label>
        <input type="date">
      </div>
    </div>
    
    <div class="table1">
        <table>
            <thead>
                <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Total Point</th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr v-for="(income, index) in income" :key="index" class="income"> -->
                <tr class="rankUser">
                    <td>1</td>
                    <td>Tim</td>
                    <td>1600</td>
                    
                    
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
.time{
  display: grid;
  grid-template-columns:1fr 1fr;
}
table{
  margin-left: auto;
  margin-right: auto;
}
</style>
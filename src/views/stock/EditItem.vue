<template>
  <div>
      <head-bar-admin-page></head-bar-admin-page>
      <h1>Edit</h1>
      <!-- <div>
            <label for="item">Item </label>
            <input type="text" v-model="form.item">
        </div> -->
        <div>
            <label for="nameItem">Name Item </label>
            <input type="text" v-model="form.item">
        </div>
        <div>
            <label for="points">Points </label>
            <input type="text" v-model="form.points">
        </div>
        <div>
            <label for="amounts">Amounts </label>
            <input type="text" v-model="form.amounts">
        </div>
        <button @click="editData">Edit</button>
        <button @click="back">back</button>
    
  </div>
</template>

<script>
import HeadBarAdminPage from '@/components/headbar/HeadBarAdminPage'
import StockItemsApi from '@/store/StockItemsApi'
import StockService from '@/services/StockService'
import AuthUser from "@/store/AuthUser"
export default {
    data(){
        return{
            form:{}
        }
    },
    async created(){
        this.id = this.$route.params.id 
        let item = await StockService.getItemInStockById(this.id)
        this.form = item
    },
    components:{
        HeadBarAdminPage
    },
    methods:{
        async editData(){
            let payload = {
                id:this.form.id,
                item: this.form.item,
                points: this.form.points,
                amounts: this.form.amounts*1+1
            }
            await StockItemsApi.dispatch('editDataInStock',payload)
                this.$swal("Edit Success", "success")
                this.$router.push('/admin/stock-prize')
        },
        back(){
            this.form = {}
            this.$router.push('/admin/stock-prize')
        }
    }
}
</script>

<style>

</style>
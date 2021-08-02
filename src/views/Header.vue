<template>
  <div class="Header">
    <sidebar-View></sidebar-View>
    <head-View></head-View>
  </div>
</template>

<script>
import HeadView from '@/components/Body.vue'
import SidebarView from '@/components/Itembar.vue'   
export default {
  name: 'Header',
  components: {
    HeadView,
    SidebarView,
  }

}
</script>

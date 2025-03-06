<template>
   <div class="card">
       <div class="card-header">
           <slot name="cardHeader"></slot>
       </div>
        <div class="card-body">
            <slot name="cardBody"></slot>
        </div>
   </div>
</template>
<script>
export default {
    name:'Card'
}
</script>
<style scoped>
    .card{
        width: 278px;
        height: 332px;
        background-color: #0c264e7e;
        padding: 10px;
    }
</style>
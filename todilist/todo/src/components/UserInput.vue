<template>
    <div class="user-input">
        
        <input type="text" placeholder="" v-model="userInputValue" @keyup.enter="getUserInputValue">
    </div>
</template>
<script>
export default {
    data() {
        return {
            userInputValue: ''
        }
    },
    methods: {
        getUserInputValue: function () {
            // console.log('xxx', this.userInputValue);
            this.$emit('translate-value', this.userInputValue)
        }
    },

}
</script>
<style>
    
</style>
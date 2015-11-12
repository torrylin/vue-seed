<template>
    <ul class="nav">
        <li><a v-link="{ path: '/home' }">Home</a></li>
        <li><a v-link="{ path: '/list' }">List</a></li>
        <li><a v-link="{ path: '/about' }">About</a></li>
    </ul>
    <div class="page">
        <router-view></router-view>
    </div>
</template>
<script>
    module.exports = {
        data : function () {
            return {
                msg: 'Hello World!!'
            }
        },
        components: {

        }
    };
</script>
<style>
    .nav {
        margin: 10px;
    }
    .nav li {
        display: inline-block;
        font-size: 25px;
    }
    .page {
        margin: 10px;
        background-color: #ccc;
        height: 800px;
        width: 1200px;
    }
</style>

<script>
    module.exports = {
        data: function () {
            var links = [
                { link: '11', text: 'Default' },
                { link: 'abc', text: 'ABC' },
                { link: '123', text: '123' },
                { link: '999', text: '999' },
                { link: 'Torry', text: 'Torry' }
            ]; 
            return {
                links: links,
            };
        },
        methods: {
            addLink: function () {
                var link = {
                    link: this.newLink,
                    text: this.newLink
                }
                this.links.push(link);
            }
        }
    }
</script>

<template>
    <p>This is List Page!!!</p>
    <input type="text" v-model="newLink"><button v-on:click="addLink">Get Data!</button>
    <ul>
        <li v-for="link in links">
            <a v-link="'/list/user/' + link.link">{{link.text}}</a>
        </li>
    </ul>
    <router-view></router-view>
</template>
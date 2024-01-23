<script>
export default {
    name: 'CompoOpt',
    data() {
        return {
            count: 2
        }
        
    },
    props: {
        msg: {
            type: String,
            required: false,
            default: "Hello"
        },
    },
    methods: {
        plus() {
            this.count = (this.count*5)%4532
        }
    }
}
</script>
<template>
    <h2>{{ count }}</h2>
    <button @click="plus">More</button>
    <p v-if="count>3500">Nique !</p>
    <p v-else>Panique !!!</p>
</template>
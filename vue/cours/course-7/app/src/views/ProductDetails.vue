<script>
import { mapState } from 'pinia'
import { useProductsStore } from '@/stores'


export default {
    name: 'ProductDetails',
    mounted() {
        console.log(this.getProductById(this.$route.params.id))
    },
    computed: {
    ...mapState(useProductsStore, [
    "getProductById"
    ]),
    getProduct(){
    }
    }
}
</script>

<template>
    <article v-if="getProduct != null">
        <header>
            <h2>getProduct().name</h2>
        </header>
        <div>
            <h2>{{ product.name }}</h2>
        </div>
        <footer>
            <p> {{ product.description }}</p>
        </footer>
    </article>
    <h2 v-else>
        Ce produit n'existe pas
    </h2>
</template>
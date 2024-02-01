<script>
import ProductForm from "@/components/Form/ProductForm.vue"
import ProductsTable from "@/components/Product/ProductsTable.vue"

    export default {
        name: 'ProductAdmin',
        components: {
        ProductForm,
        ProductsTable
        },
        data() {
            return {
            }
        },
        methods : {

        }
    }
    
</script>

<template>
    <div class="d-flex wrap">
        <product-form
        class="col-6"
        />
        <products-table
        class="col-6"
        />
    </div>
</template>
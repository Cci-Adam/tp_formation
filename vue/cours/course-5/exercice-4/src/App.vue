<script >
import MainLayout from './components/Layout/MainLayout.vue'
import MainNav from './components/Layout/MainNav.vue'
import ProductForm from "./components/Form/ProductForm.vue"
import ProductsTable from "./components/Product/ProductsTable.vue"
import products from  "./data/productList.json"
/* Importation des données depuis un fichier json - La conversion est automatique */


export default {
  name: 'App',
  components: {
    MainLayout,
    MainNav,
    ProductForm,
    ProductsTable
  },
  data() {
    return {
      edit : false,
      idEdit : 0,
      produit : {},
      userNavItemsArray : [
        {
          name: "Settings",
          link: "#",
          target: "_self"
        },
        {
          name: "Profile",
          link: "#",
          target: "_self"
        }
      ],
      navItemsArray : [
        {
          name: "Edit",
          link: "#",
          target: "_self",
          emit: [
            { event: "updatePage", value: {"EditPage": true}}
          ],
          class: "link-body-emphasis"
        },
        {
          name: "Preview",
          link: "#",
          emit: [
            { event: "updatePage", value: {"PreviewPage": true}}
          ],
          target: "_self",
          class: "link-body-emphasis"
        },
        {
          name: "Settings",
          link: "#",
          emit: [
            { event: "updatePage", value: {"settingsPage": true}}
          ],
          target: "_self",
          class: "link-body-emphasis"
        }
      ],
      /* On lie les données importées depuis le fichier JSON */
      products: products
    }
  },
  methods: {
    /* payload représente les données envoyées par l'événement */
    addProduct(payload) {
      if (this.edit) {
        this.products = this.products.map(element => {
          if (element.id == this.idEdit) {
            console.log(payload)
            return payload
          }
          else {
            return element
          }
        })
      }
      else {
        this.products.push(payload)
      }
      this.idEdit = -1;
      this.edit = false;
      return this.products
    },
    deleteProduct(product) {
      /* Ici on va parcourir le tableau products et supprimer le produit transmis */
      this.products = this.products.filter(element => element.id != product.id)

    },
    editProduct(product) {
      this.idEdit = product.id
      this.edit = !this.edit
      this.produit = product
    }
  }
}
</script>

<template>
  <!-- Monter les composants ici -->
  <main-layout>
    <template #header>
      <main-nav
        :navItems="navItemsArray"
        :userNavItems="userNavItemsArray"
        :showUserNav="true"
      />
    </template>

    <section class="d-flex wrap">
      <!-- insérer un écouter d'évènement personnalisé qui appel la focntion addProduct -->
      <product-form v-if="!edit"
        @addProduct="addProduct"
        class="col-6"
        :edit="edit"
      />
      <product-form v-if="edit"
        @addProduct="addProduct"
        class="col-6"
        :edit="edit"
        :produit="produit"
      />
      <!-- 
        Ici, nous allons écouter un événement qui stipule
        de supprimer un produit de la liste et appeler
        la fonction de suppression deleteProduct
      -->
      <products-table
        @deleteProduct="deleteProduct"
        @editProduct="editProduct"
        class="col-6"
        :products="products"  
      />
    </section>
  
  </main-layout>
</template>

<style scoped>
</style>

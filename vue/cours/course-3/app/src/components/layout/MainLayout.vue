<script>
export default{
    name: "MainLayout",
}
</script>

<template>
    <div class="container">
        <header v-if="$slots.header">
            <slot name="header"></slot>
        </header>
        <main v-if="$slots.default">
        </main>
        <footer v-if="$slots.footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
}

header,main,footer {
    width: 100%;
    min-height: 4rem;
}
</style>
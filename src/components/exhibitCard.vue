<script setup lang="ts">
const props = defineProps<{
  title?: string
  image?: string
  description?: string
}>()

</script>

<template>
    <article>
        <h1>{{ props.title }}</h1>
        <section>
            <div></div>
            <p>{{ props.description }}</p>
        </section>
    </article>
</template>

<style scoped>
    article {
        background-color: white;
        border-top: 2px solid black;
        padding: 0.5rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
    }
    h1 {
        color: blue;
    }
    article section {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-evenly;
        div {
            width: 20rem;
            height: 20rem;
            background-color: black;
        }
        p {
            width: 40rem;
        }
    }

</style>
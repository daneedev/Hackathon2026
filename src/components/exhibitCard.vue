<script setup lang="ts">
import Model from './Model.vue';
const props = defineProps<{
  title?: string
  image?: string
  description?: string
  modelSrc?: string
        rotation?: number
        scale?: number

}>()

</script>

<template>
    <article>
        <h1>{{ props.title }}</h1>
        <section>
            <Model v-if="props.modelSrc" :modelSrc="props.modelSrc" :rotation="props.rotation" :scale="props.scale"/>
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
        align-items: flex-start;
        gap: 1rem;
        div {
            width: min(20rem, 100%);
            height: 20rem;
            flex-shrink: 0;
            background-color: rgb(245, 245, 245);
            border: 2px solid black;
        }
        p {
            width: min(40rem, 100%);
            overflow-wrap: anywhere;
        }
    }

    article section :deep(.viewer) {
        height: 100%;
    }

    @media (max-width: 900px) {
        article section {
            flex-direction: column;
            align-items: stretch;
        }
        article section p {
            width: 100%;
        }

        article section div {
            height: 16rem;
        }
    }

    @media (max-width: 320px) {
        article {
            padding: 0.4rem;
        }

        h1 {
            font-size: 1.1rem;
        }

        article section {
            gap: 0.7rem;
        }

        article section div {
            height: 13rem;
        }

        article section p {
            font-size: 0.9rem;
            line-height: 1.3;
        }
    }
    @media (max-width: 900px) and (min-width: 480px) {
        section div {
            width: 15rem;
        }
}

</style>
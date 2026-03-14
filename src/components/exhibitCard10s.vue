<script setup lang="ts">
import Model from "./Model.vue";

const props = defineProps<{
    title?: string;
    description?: string;
    modelSrc?: string;
    imageSrc?: string;
    rotation?: number;
    scale?: number;
}>();
</script>

<template>
    <article class="exhibit-card">
        <section class="exhibit-card__content">
            <div class="exhibit-card__model-box">
                <img
                    v-if="props.imageSrc"
                    class="exhibit-card__image"
                    :src="props.imageSrc"
                    :alt="props.title || 'Exhibit image'"
                />
                <Model
                    v-else-if="props.modelSrc"
                    :modelSrc="props.modelSrc"
                    :rotation="props.rotation"
                    :scale="props.scale"
                />
            </div>

            <div class="exhibit-card__text">
                <h2>{{ props.title }}</h2>
                <p>{{ props.description }}</p>
            </div>
        </section>
    </article>
</template>

<style scoped>
.exhibit-card {
    width: 70%;
    border: none;
    border-radius: 4px;
    box-shadow: none;
    padding: 1.5rem 1.5rem;
    background-color: #2C3E50;
    color: #FFFFFF;
}

.exhibit-card__content {
    display: flex;
    align-items: flex-start;
    gap: 1.25rem;
    width: 100%;
}

.exhibit-card__model-box {
    width: min(20rem, 100%);
    height: 20rem;
    flex-shrink: 0;
    background-color: #658bb1;
    border-radius: 5px;
}

.exhibit-card__model-box :deep(.viewer) {
    height: 100%;
}

.exhibit-card__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    padding: 0.8rem;
}

.exhibit-card__text {
    width: 100%;
}

.exhibit-card__text h2 {
    margin: 0 0 0.65rem;
    color: #FFFFFF;
    font-size: 1.5rem;
}

.exhibit-card__text p {
    margin: 0;
    color: #FFFFFF;
    line-height: 1.55;
    white-space: pre-line;
}

@media (max-width: 900px) {
    .exhibit-card__content {
        flex-direction: column;
        align-items: stretch;
    }

    .exhibit-card__model-box {
        width: 100%;
        height: 16rem;
    }
}
</style>
<script setup>
import { RouterLink } from "vue-router";
import ExhibitCard from "./components/exhibitCard.vue";
</script>

<template>
    <nav>
        <header>
            <p>Web 2010. léta</p>
            <p>Interaktivní modely a exponáty</p>
            <section>
                <RouterLink to="/">Domov</RouterLink>
                <RouterLink to="/web90">90. léta</RouterLink>
                <RouterLink to="/web2000">2000. léta</RouterLink>
                <RouterLink to="/web2020">Současnost</RouterLink>
            </section>
        </header>
    </nav>
    <main>
        <article>
            <section class="heroSection">
                <h1>Vítejte na webu 2010. let</h1>
            </section>
            <section>
                
            </section>
        </article>
    </main>
</template>

<style scoped>
    :root {
        --page-bg: #F5F6F7;
        --primary-color: #3498DB;
        --text-color: #7F8C8D;
        --primary-dark: #2980B9;
        --header-text: #FFFFFF;

    }

    main {
        background-color: var(--page-bg);
    }
    nav {
        background-color: #2C3E50;
        color: #FFFFFF;
    }


</style>
<script setup>
import { nextTick, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";
import exhibitCard10s from "../components/exhibitCard10s.vue";

const { t } = useI18n();

onMounted(async () => {
    await nextTick();
    requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
});

const goToFirstExhibit = () => {
    document.getElementById("first-exhibit")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
};
</script>

<template>
    <nav>
        <header>
            <section>
                <RouterLink to="/">{{ t("web10s.nav.home") }}</RouterLink>
                <RouterLink to="/web90">{{ t("web10s.nav.web90") }}</RouterLink>
                <RouterLink to="/web2000">{{ t("web10s.nav.web2000") }}</RouterLink>
                <RouterLink to="/web2020">{{ t("web10s.nav.present") }}</RouterLink>
            </section>
        </header>
    </nav>
    <main>
        <article>
            <section class="heroSection">
                <h1>{{ t("web10s.hero.title") }}</h1>
                <p>{{ t("web10s.hero.subtitle") }}</p>
                <div @click="goToFirstExhibit">{{ t("web10s.hero.cta") }}</div>
            </section>
            <section class="exhibitsSection">
                <h1 id="first-exhibit">{{ t("web10s.exhibitionTitle") }}</h1>
                <article class="exhibitsList">
                    <exhibitCard10s
                        :title="t('web10s.exhibits.smartphones.title')"
                        :description="t('web10s.exhibits.smartphones.description')"
                        modelSrc="/Phone2.glb"
                        :rotation="Math.PI"
                        :scale="1"
                    />
                    <exhibitCard10s
                        :title="t('web10s.exhibits.socialMedia.title')"
                        :description="t('web10s.exhibits.socialMedia.description')"
                        imageSrc="/socials.png"
                    />
                    <exhibitCard10s
                        :title="t('web10s.exhibits.cloud.title')"
                        :description="t('web10s.exhibits.cloud.description')"
                        modelSrc="/server.glb"
                        :rotation="Math.PI + 1"
                        :scale="0.16"
                    />

                </article>
            </section>
        </article>
    </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
    :root {
        --page-bg: #F5F6F7;
        --primary-color: #3498DB;
        --text-color: #7F8C8D;
        --primary-dark: #2980B9;
        --header-text: #FFFFFF;

    }
    a {
        text-decoration: none;
        font-weight: 600;
        letter-spacing: 0.02em;
    }
    main {
        background-color: var(--page-bg);
        font-family: 'Open Sans', sans-serif;
    }
    nav {
        background-color: #2C3E50;
        color: #FFFFFF;
        font-family: 'Open Sans', sans-serif;
        header {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-left: 4rem;
            padding-right: 4rem;
            padding-bottom: 1rem;
            padding-top: 1rem;
            section {
                position: relative;
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                width: 35rem;
                align-items: center;
                gap: 0.5rem;
                padding-bottom: 0.35rem;

                a {
                    text-align: center;
                    padding: 0.2rem 0.25rem;
                }

                &::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: calc((100% - 1.5rem) / 4);
                    height: 2px;
                    background-color: #ffffff;
                    transform: translateX(0);
                    transition: transform 280ms ease;
                }

                &:has(a:nth-child(1):hover)::after,
                &:has(a:nth-child(1):focus-visible)::after {
                    transform: translateX(0);
                }

                &:has(a:nth-child(2):hover)::after,
                &:has(a:nth-child(2):focus-visible)::after {
                    transform: translateX(calc(100% + 0.5rem));
                }

                &:has(a:nth-child(3):hover)::after,
                &:has(a:nth-child(3):focus-visible)::after {
                    transform: translateX(calc((100% + 0.5rem) * 2));
                }

                &:has(a:nth-child(4):hover)::after,
                &:has(a:nth-child(4):focus-visible)::after {
                    transform: translateX(calc((100% + 0.5rem) * 3));
                }
            }
        }
    }
    
    .heroSection {
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100vh;
        width: 100%;

        &::before {
            content: "";
            position: absolute;
            inset: -12px;
            background-image: url("/hero-bg.jpg");
            background-size: cover;
            background-position: center;
            filter: blur(5px);
            transform: scale(1.05);
            z-index: 0;
        }

        &::after {
            content: "";
            position: absolute;
            inset: 0;
            background: rgba(245, 246, 247, 0.38);
            z-index: 1;
        }

        h1,
        p,
        div {
            position: relative;
            z-index: 2;
        }

        h1 {
            font-size: 2.5rem;
        }
        p {
            font-size: 1.25rem;
            max-width: 600px;
        }
        div {
            background-color: #2C3E50;
            color: #FFFFFF;
            border: 1px solid #3f5872;
            padding: 0.75rem 1.5rem;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease, border-color 0.3s ease;
            &:hover {
                background-color: #354b63;
                border-color: #4e6987;
            }
        }
    }

    .exhibitsList {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0 2rem;
    }

    .exhibitsSection {
        padding: 2rem;
    }

    #first-exhibit {
        text-align: center;
    }
</style>

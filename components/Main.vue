<template>
    <main class="px-3" :class="{ 'collapsed': !sidebarOpen }">
        <div class="home-hero-section d-flex mt-3">
            <AppHeroSlider />
            <div class="deposit-photos-banner">
                <img src="@/assets/double-the-deposit-banner.png" />
            </div>
        </div>
        <GameCategories />
        <LatestBets />
        <AppFooter />
    </main>
</template>

<script>
    import AppHeroSlider from './Home/HeroSlider.vue'
    import GameCategories from './Home/GameCategories.vue'
    import LatestBets from './Home/LatestBets.vue'
    import AppFooter from './Footer/footer.vue'

    export default {
        name: 'AppMainArea',
        components: {
            AppHeroSlider,
            GameCategories,
            LatestBets,
            AppFooter
        },
        props: {
            sidebarOpen: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style>
main {
    margin-left: 20%;
    width: calc(100% - 20%);
    min-height: 100vh;

    background: linear-gradient(
        135deg,
        #272727 0%,
        #272727 30%,
        #c706fd 100%
    );

    transition: margin-left 0.3s ease, width 0.3s ease;
}

main.collapsed {
    margin-left: 5%;
    width: calc(100% - 5%);
}

.home-hero-section {
    height: 470px;
}
@media screen and (min-width: 1440px) {
    .home-hero-section {
    max-height: 600px;
    align-items: stretch;
}
    .deposit-photos-banner {
        width: 600px;
    }
}

    .deposit-photos-banner {
        width: 400px;
    }
    .deposit-photos-banner img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
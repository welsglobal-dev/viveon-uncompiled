<template>
    <!-- Categories tabs -->
    <section class="mt-5">
        <div class="game-categories-tabs-wrapper d-flex align-items-center justify-content-between">
            <div class="game-categories-tabs d-flex align-items-center justify-content-start gap-1">
                <div class="game-category-tab text-capitalize font-urbanist font-urbanist-bold text-white">
                    <img src="@/assets/btc-round.svg" />
                    All Games
                </div>
                <div class="game-category-tab text-capitalize font-urbanist font-urbanist-bold text-white">
                    <img src="@/assets/spades-stroke-rounded.svg" />
                    Live Casino
                </div>
                <div class="game-category-tab text-capitalize font-urbanist font-urbanist-bold text-white">
                    <img src="@/assets/cherry-stroke-rounded.svg" />
                    Slots
                </div>
                <div class="game-category-tab text-capitalize font-urbanist font-urbanist-bold text-white">
                    <img src="@/assets/block-game-stroke-rounded.svg" />
                    Crash
                </div>
                <div class="game-category-tab text-capitalize font-urbanist font-urbanist-bold text-white">
                    <img src="@/assets/cards-02.svg" />
                    Table Games
                </div>
                <div class="game-category-tab text-capitalize font-urbanist font-urbanist-bold text-white">
                    <img src="@/assets/tennis-ball-stroke-rounded.svg" />
                    Sports
                </div>
                <div class="game-category-tab text-capitalize font-urbanist font-urbanist-bold text-white">
                    <img src="@/assets/orbit-01-stroke-rounded.svg" />
                    Roulette
                </div>
                <div class="game-category-tab text-capitalize font-urbanist font-urbanist-bold text-white">
                    <img src="@/assets/ticket-02-stroke-rounded.svg" />
                    Lottery
                </div>
            </div>
            <div class="game-categories-sort-filter">
                <BDropdown
                    variant="outline-secondary"
                    :text="`Sort by: ${selected}`"
                >
                    <BDropdownItem
                    v-for="option in options"
                    :key="option"
                    @click="selectOption(option)"
                    >
                    {{ option }}
                    </BDropdownItem>
                </BDropdown>
            </div>
        </div>
        <div class="game-cards-section mt-4">
            <!-- Section Heading -->
            <div class="d-flex align-items-center justify-content-between mb-2">
                <div class="d-flex align-items-center gap-2">
                    <img src="@/assets/heart-rounded.svg" />
                    <span class="text-white font-urbanist font-urbanist-bold text-capitalize">Favorites</span>
                </div>
                <a href="#" class="text-white text-decoration-none text-capitalize font-urbanist font-urbanist-bold">View All</a>
            </div>
            <!-- Games Cards -->
            <div class="game-cards-wrapper game-cards-wrapper-favorites d-flex gap-2">
                <img src="@/assets/games-card.webp" />
                <img src="@/assets/games-card.webp" />
                <img src="@/assets/games-card.webp" />
                <img src="@/assets/games-card.webp" />
                <img src="@/assets/games-card.webp" />
                <img src="@/assets/games-card.webp" />
            </div>
        </div>

        <!-- Other Games -->
         <div class="game-cards-section mt-4">
            <!-- Section Heading -->
            <div class="d-flex align-items-center justify-content-between mb-2">
                <div class="d-flex align-items-center gap-2">
                    <img src="@/assets/heart-rounded.svg" />
                    <span class="text-white font-urbanist font-urbanist-bold text-capitalize">Other Games</span>
                </div>
                <a href="#" class="text-white text-decoration-none text-capitalize font-urbanist font-urbanist-bold">View All</a>
            </div>
            <!-- Games Cards -->
            <div class="game-cards-wrapper game-cards-wrapper-favorites d-flex gap-2">
                <img src="@/assets/games-card.webp" />
                <img src="@/assets/games-card.webp" />
                <img src="@/assets/games-card.webp" />
                <img src="@/assets/games-card.webp" />
                <img src="@/assets/games-card.webp" />
                <img src="@/assets/games-card.webp" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
    import { BDropdown, BDropdownItem } from 'bootstrap-vue-3'

    const options = ['Popular', 'Best', 'Top Rated']
    const selected = ref('Popular')

    const selectOption = (option) => {
    selected.value = option
    }
</script>
<script scoped>
    export default {
        name: 'GameCategories'
    }
</script>

<style>
    .game-category-tab {
        border-radius: 8px;
        background-color: #CCCCCC33;
        padding: 4px 8px;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: start;
        gap: .4rem;
        cursor: pointer;
    }
    .game-category-tab img {
        width: 20px;
        height: 20px;
    }
    .game-cards-wrapper {
        flex-wrap: wrap;
    }
    .game-cards-wrapper > img {
        /* width: 16.667%; */
        width: calc((100% - 40px) / 6);
        height: 200px;
        object-fit: cover;
        border-radius: 8px;
    }
</style>
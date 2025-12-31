<template>
    <!-- Categories tabs -->
    <section class="mt-5">
        <div class="game-categories-tabs-wrapper d-flex align-items-center justify-content-between">
            <div class="game-categories-tabs d-flex align-items-center justify-content-start gap-1">
                <div class="game-category-tab text-capitalize font-urbanist font-urbanist-bold text-white hover-green">
                    <img src="@/assets/btc-round.svg" />
                    All Games
                </div>
                <div class="game-category-tab text-capitalize font-urbanist font-urbanist-bold text-white hover-green">
                    <img src="@/assets/spades-stroke-rounded.svg" />
                    Live Casino
                </div>
                <div class="game-category-tab text-capitalize font-urbanist font-urbanist-bold text-white hover-green">
                    <img src="@/assets/cherry-stroke-rounded.svg" />
                    Slots
                </div>
                <div class="game-category-tab text-capitalize font-urbanist font-urbanist-bold text-white hover-green">
                    <img src="@/assets/block-game-stroke-rounded.svg" />
                    Crash
                </div>
                <div class="game-category-tab text-capitalize font-urbanist font-urbanist-bold text-white hover-green">
                    <img src="@/assets/cards-02.svg" />
                    Table Games
                </div>
                <div class="game-category-tab text-capitalize font-urbanist font-urbanist-bold text-white hover-green">
                    <img src="@/assets/tennis-ball-stroke-rounded.svg" />
                    Sports
                </div>
                <div class="game-category-tab text-capitalize font-urbanist font-urbanist-bold text-white hover-green">
                    <img src="@/assets/orbit-01-stroke-rounded.svg" />
                    Roulette
                </div>
                <div class="game-category-tab text-capitalize font-urbanist font-urbanist-bold text-white hover-green">
                    <img src="@/assets/ticket-02-stroke-rounded.svg" />
                    Lottery
                </div>
            </div>
            <div class="game-categories-sort-filter">
                <BDropdown
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
    .game-category-tab.hover-green:hover {
        background-color: #273d41;
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
    .game-categories-sort-filter .btn-secondary{
    border: none;
    outline: none !important;
    filter: drop-shadow(0 0 61px rgba(0,0,0,0.42));
    background-color: rgba(237, 0, 126, 0.612);
    border-radius: 8px;
    color: white;
    padding-right: 7rem;
    font-family: "Urbanist", sans-serif;

    }
    .game-categories-sort-filter .btn-secondary:hover,
    .game-categories-sort-filter .btn-secondary:focus, .btn-check:checked + .btn, :not(.btn-check) + .btn:active, .btn:first-child:active, .btn.active, .btn.show {
        background-color: rgba(237, 0, 126, 0.612) !important;
        color: white !important;
        border: none !important;
        outline: none !important;
        filter: drop-shadow(0 0 61px rgba(0,0,0,0.42)) !important;
    }
    .dropdown-menu.show {
        background-color: rgba(237, 0, 126, 0.612);
        border: none;
        width: 172px;
    }
    .dropdown-menu.show li .dropdown-item:hover {
        background-color: rgba(237, 0, 126, 0.612) !important;
        color: white !important;
    }
    .dropdown-menu.show li .dropdown-item{
        color: white !important;
        font-family: "Urbanist", sans-serif;
        font-size: 1rem;
        text-transform: capitalize;
    }
    .dropdown-toggle::after {
        content: url('@/assets/chevron.svg') !important;
        position: absolute;
        right: 0.25rem;
        top: 3%;
        pointer-events: none;
        border: none !important;
    }
</style>

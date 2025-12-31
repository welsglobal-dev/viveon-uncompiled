<template>
    <aside :class="{ 'collapsed': !isOpen }">
        <div class="sidebar-ctas d-flex align-items-center justify-content-end mb-4">
            <img v-if="isOpen" src="@/assets/sidebar-cancel.svg" @click="$emit('close')" />
            <img v-else src="@/assets/sidebar-bars.svg" @click="$emit('open')" />
        </div>
        <div v-if="isOpen" class="sidebar-top-banner mb-3">
            <img src="@/assets/refer-a-friend.png" width="300" loading="lazy"
            class="w-100 object-fit-contain" />
        </div>
        <!-- Navigation Bar -->
        <nav class="primary-navigation">
            <ul class="nav-menu">
                <li class="menu-item active hover-green">
                    <a href="#">
                        <img src="@/assets/btc-round.svg" />
                        <span v-if="isOpen">Casino</span>
                        <img v-if="isOpen" src="@/assets/arrow-down.svg" class="menu-arrow-down"/>
                    </a>
                    <ul class="sub-menu">
                        <li class="menu-item hover-green">
                            <a href="#">
                                <img src="@/assets/spades-stroke-rounded.svg" />
                                <span v-if="isOpen">Live Casino</span>
                            </a>
                        </li>
                        <li class="menu-item hover-green">
                            <a href="#">
                                <img src="@/assets/cherry-stroke-rounded.svg" />
                                <span v-if="isOpen">Slots</span>
                            </a>
                        </li>
                        <li class="menu-item hover-green">
                            <a href="#">
                                <img src="@/assets/block-game-stroke-rounded.svg" />
                                <span v-if="isOpen">Crash</span>
                            </a>
                        </li>
                        <li class="menu-item hover-green">
                            <a href="#">
                                <img src="@/assets/cards-02.svg" />
                                <span v-if="isOpen">Table Games</span>
                            </a>
                        </li>
                        <li class="menu-item hover-green">
                            <a href="#">
                                <img src="@/assets/tennis-ball-stroke-rounded.svg" />
                                <span v-if="isOpen">Sports</span>
                            </a>
                        </li>
                        <li class="menu-item hover-purple">
                            <a href="#">
                                <img src="@/assets/orbit-01-stroke-rounded.svg" />
                                <span v-if="isOpen">Roulette</span>
                            </a>
                        </li>
                        <li class="menu-item hover-purple">
                            <a href="#">
                                <img src="@/assets/ticket-02-stroke-rounded.svg" />
                                <span v-if="isOpen">Lottery</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="menu-item hover-purple">
                    <a href="#">
                        <img src="@/assets/gift-stroke-rounded.svg" />
                        <span v-if="isOpen">Promotions</span>
                    </a>
                </li>
                <li class="menu-item hover-purple">
                    <a href="#">
                        <img src="@/assets/crown-03-stroke-rounded.svg" />
                        <span v-if="isOpen">VIP Club</span>
                    </a>
                </li>
                <li class="menu-item hover-purple">
                    <a href="#">
                        <img src="@/assets/user-group-stroke-rounded.svg" />
                        <span v-if="isOpen">Affiliate Program</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div v-if="isOpen" class="sidebar-bottom-image mt-5">
            <img src="@/assets/Countdown.png" class="w-100" />
        </div>
    </aside>
</template>

<script>
export default {
  name: 'AppSidebar',
  props: {
    isOpen: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
aside {
    position: fixed;
    top: var(--app-header-height, 64px); /* header safe */
    left: 0;

    width: 20%;
    height: calc(100vh - var(--app-header-height, 64px));

    background: #131313;
    padding: 1rem;

    transition: width 0.3s ease;
    z-index: 900;

    display: flex;
    flex-direction: column;
    overflow: scroll;
}

aside.collapsed {
    width: 5%;
}
/* ❌ Disable scroll when collapsed */
aside.collapsed {
    overflow: hidden;
}

/* ONLY menu scrolls */
.primary-navigation {
    flex: 1;
    /* overflow-y: auto; */
}

/* Prevent sidebar content from pushing layout */
.sidebar-top-banner,
.sidebar-bottom-image,
.sidebar-ctas {
    flex-shrink: 0;
}

    .sidebar-ctas img {
        filter: invert(1);
        cursor: pointer;
        width: 28px;
        height: 28px;
    }
    .nav-menu,
    .nav-menu .sub-menu {
        padding-left: 0;
    }
    .nav-menu .menu-item {
        list-style: none;
    }
    .nav-menu .menu-item > a {
        padding: 8px 1rem;
        border-radius: 8px;
        display: inline-block;
        width: 100%;
        border-radius: 10px !important;
        color: white;
        text-decoration: unset;
        font-weight: bold;
        font-family: "Urbanist", sans-serif;
        text-transform: capitalize;
        font-size: 1.125rem;
    }

    aside.collapsed .nav-menu .menu-item > a {
        text-align: center;
        padding: 8px;
    }

    .nav-menu .menu-item.hover-green:hover > a {
        background-color: #5cf9ec33;
    }

    .nav-menu .menu-item.hover-purple:hover > a {
        background-color: #c706fd33;
    }

    .nav-menu .menu-item > a img {
        width: 26px;
        height: 26px;
        display: inline-block;
        margin-right: .5rem;
    }

    aside.collapsed .nav-menu .menu-item > a img {
        margin-right: 0;
    }

    .nav-menu .menu-item:not(:last-child) {
        margin-bottom: 6px;
    }
    .nav-menu ul.sub-menu {
        margin-top: 6px;
    }
    .nav-menu .menu-item.active > a{
        background-image: linear-gradient(140deg, #5bf9ed 0%, #f975e5 99%, #f975e5 100%);
        color: #0e0e0e;
        position: relative;
    }
    .menu-arrow-down {
        filter: invert(1);
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        width: 25px;
        height: 25px;
    }
</style>
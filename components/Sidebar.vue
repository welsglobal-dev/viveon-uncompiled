<template>
  <aside :class="{ collapsed: !isOpen }">
    <div class="sidebar-ctas d-flex align-items-center justify-content-end mb-4">
      <img v-if="isOpen" src="@/assets/sidebar-cancel.svg" @click="$emit('close')" />
      <img v-else src="@/assets/sidebar-bars.svg" @click="$emit('open')" />
    </div>

    <div v-if="isOpen" class="sidebar-top-banner mb-3">
      <img
        src="@/assets/refer-a-friend.png"
        width="300"
        loading="lazy"
        class="w-100 object-fit-contain"
      />
    </div>

    <!-- Navigation Bar -->
    <nav class="primary-navigation">
      <ul class="nav-menu">

        <!-- CASINO (Collapsible) -->
        <li class="menu-item hover-green">
          <a href="#" @click.prevent="toggleSubmenu('casino')">
            <img src="@/assets/btc-round.svg" />
            <span v-if="isOpen">Casino</span>

            <img
              v-if="isOpen"
              src="@/assets/arrow-down.svg"
              class="menu-arrow-down"
              :class="{ open: openSubmenus.casino }"
            />
          </a>

          <!-- <ul class="sub-menu" v-show="isOpen && openSubmenus.casino"> -->
          <ul class="sub-menu" v-show="openSubmenus.casino">
            <li class="menu-item hover-green">
              <a href="#">
                <img src="@/assets/spades-stroke-rounded.svg" />
                <span>Live Casino</span>
              </a>
            </li>
            <li class="menu-item hover-green">
              <a href="#">
                <img src="@/assets/cherry-stroke-rounded.svg" />
                <span>Slots</span>
              </a>
            </li>
            <li class="menu-item hover-green">
              <a href="#">
                <img src="@/assets/block-game-stroke-rounded.svg" />
                <span>Crash</span>
              </a>
            </li>
            <li class="menu-item hover-green">
              <a href="#">
                <img src="@/assets/cards-02.svg" />
                <span>Table Games</span>
              </a>
            </li>
            <li class="menu-item hover-green">
              <a href="#">
                <img src="@/assets/tennis-ball-stroke-rounded.svg" />
                <span>Sports</span>
              </a>
            </li>
            <li class="menu-item hover-purple">
              <a href="#">
                <img src="@/assets/orbit-01-stroke-rounded.svg" />
                <span>Roulette</span>
              </a>
            </li>
            <li class="menu-item hover-purple">
              <a href="#">
                <img src="@/assets/ticket-02-stroke-rounded.svg" />
                <span>Lottery</span>
              </a>
            </li>
          </ul>
        </li>

        <!-- NORMAL ITEMS -->
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
  },
  data() {
    return {
      openSubmenus: {} // scalable submenu state
    }
  },
  watch: {
    // Reset submenus when sidebar collapses
    // isOpen(val) {
    //   if (!val) {
    //     this.openSubmenus = {}
    //   }
    // }
  },
  methods: {
  toggleSubmenu(key) {
    this.openSubmenus[key] = !this.openSubmenus[key]
  }
}
}
</script>

<style scoped>
aside {
  position: fixed;
  top: var(--app-header-height, 64px);
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
  overflow-x: hidden;
}

aside.collapsed::-webkit-scrollbar {
    display: none;
}


.primary-navigation {
  flex: 1;
}

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
  border-radius: 10px;
  display: inline-block;
  width: 100%;
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-family: "Urbanist", sans-serif;
  text-transform: capitalize;
  font-size: 1.125rem;
  position: relative;
}

aside.collapsed .nav-menu .menu-item > a {
  text-align: center;
  padding: 8px;
}

aside.collapsed .sub-menu {
  display: flex;         /* keep icons visible */
  flex-direction: column; /* stack vertically if needed */
}

aside.collapsed .sub-menu li a span {
  display: none;         /* hide submenu text */
}


.nav-menu .menu-item.hover-green:hover > a {
  background-color: #5cf9ec33;
}

.nav-menu .menu-item.hover-purple:hover > a {
  background-color: #c706fd33;
}

/* Disable hover effects when sidebar is collapsed */
aside.collapsed .menu-item.hover-green:hover > a,
aside.collapsed .menu-item.hover-purple:hover > a {
  background-color: transparent !important;
}

.nav-menu .menu-item > a img {
  width: 26px;
  height: 26px;
  margin-right: 0.5rem;
}

aside.collapsed .nav-menu .menu-item > a img {
  margin-right: 0;
}

.nav-menu .menu-item:not(:last-child) {
  margin-bottom: 6px;
}

.sub-menu {
  margin-top: 6px;
  padding-left: 1.5rem;
}

.menu-arrow-down {
  filter: invert(1);
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;
  transition: transform 0.25s ease;
}

.menu-arrow-down.open {
  transform: translateY(-50%) rotate(180deg);
}
</style>

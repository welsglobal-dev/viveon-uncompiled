<template>
  <LoggedInHeader />
  <div class="page-content-area d-flex flex-wrap">
    <AppSidebar :isOpen="isSidebarOpen" @close="closeSidebar" @open="openSidebar" />
    <div class="main-content" :class="{ 'collapsed': !isSidebarOpen }">
      <div class="casino-body">
        <div class="casino-header">
          <div class="d-flex">
          <button class="back-btn" @click="$router.go(-1)">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" fill="#ffffff" viewBox="0 0 512 512" version="1.1" xml:space="preserve"> <g id="Layer_1"/> <g id="Layer_2"> <g> <path class="st0" d="M217,129.88c-6.25-6.25-16.38-6.25-22.63,0L79.61,244.64c-0.39,0.39-0.76,0.8-1.11,1.23    c-0.11,0.13-0.2,0.27-0.31,0.41c-0.21,0.28-0.42,0.55-0.62,0.84c-0.14,0.21-0.26,0.43-0.39,0.64c-0.14,0.23-0.28,0.46-0.41,0.7    c-0.13,0.24-0.24,0.48-0.35,0.73c-0.11,0.23-0.22,0.45-0.32,0.68c-0.11,0.26-0.19,0.52-0.28,0.78c-0.08,0.23-0.17,0.46-0.24,0.69    c-0.09,0.29-0.15,0.58-0.22,0.86c-0.05,0.22-0.11,0.43-0.16,0.65c-0.08,0.38-0.13,0.76-0.17,1.14c-0.02,0.14-0.04,0.27-0.06,0.41    c-0.11,1.07-0.11,2.15,0,3.22c0.01,0.06,0.02,0.12,0.03,0.18c0.05,0.46,0.12,0.92,0.21,1.37c0.03,0.13,0.07,0.26,0.1,0.39    c0.09,0.38,0.18,0.76,0.29,1.13c0.04,0.13,0.09,0.26,0.14,0.4c0.12,0.36,0.25,0.73,0.4,1.09c0.05,0.11,0.1,0.21,0.15,0.32    c0.17,0.37,0.34,0.74,0.53,1.1c0.04,0.07,0.09,0.14,0.13,0.21c0.21,0.38,0.44,0.76,0.68,1.13c0.02,0.03,0.04,0.06,0.06,0.09    c0.55,0.81,1.18,1.58,1.89,2.29l114.81,114.81c3.12,3.12,7.22,4.69,11.31,4.69s8.19-1.56,11.31-4.69c6.25-6.25,6.25-16.38,0-22.63    l-87.5-87.5h291.62c8.84,0,16-7.16,16-16s-7.16-16-16-16H129.51L217,152.5C223.25,146.26,223.25,136.13,217,129.88z"/> </g> </g> </svg>
          </button>
          <h1 class="casino-title">Live Casino</h1>
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
        <!-- Games Cards -->
        <div class="game-cards-wrapper game-cards-wrapper-favorites">
            <div class="game-card">
                <img src="@/assets/games-card.webp" alt="Game 1" />
                <div class="game-overlay">
                    <div class="overlay-content">
                        <p>spin 2 wheel</p>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- Outer Circle -->
                            <circle
                                cx="24"
                                cy="24"
                                r="22"
                                stroke="white"
                                stroke-width="2"
                                fill="none"
                            />

                            <!-- Play Triangle -->
                            <polygon
                                points="20,16 20,32 32,24"
                                fill="white"
                            />
                        </svg>
                        <p>TVBET</p>
                    </div>
                </div>
            </div>
            <div class="game-card">
                <img src="@/assets/games-card.webp" alt="Game 2" />
                <div class="game-overlay">
                    <div class="overlay-content">
                        <p>spin 2 wheel</p>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- Outer Circle -->
                            <circle
                                cx="24"
                                cy="24"
                                r="22"
                                stroke="white"
                                stroke-width="2"
                                fill="none"
                            />

                            <!-- Play Triangle -->
                            <polygon
                                points="20,16 20,32 32,24"
                                fill="white"
                            />
                        </svg>
                        <p>TVBET</p>
                    </div>
                </div>
            </div>
            <div class="game-card">
                <img src="@/assets/games-card.webp" alt="Game 3" />
                <div class="game-overlay">
                    <div class="overlay-content">
                        <p>spin 2 wheel</p>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- Outer Circle -->
                            <circle
                                cx="24"
                                cy="24"
                                r="22"
                                stroke="white"
                                stroke-width="2"
                                fill="none"
                            />

                            <!-- Play Triangle -->
                            <polygon
                                points="20,16 20,32 32,24"
                                fill="white"
                            />
                        </svg>
                        <p>TVBET</p>
                    </div>
                </div>
            </div>
            <div class="game-card">
                <img src="@/assets/games-card.webp" alt="Game 4" />
                <div class="game-overlay">
                    <div class="overlay-content">
                        <p>spin 2 wheel</p>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- Outer Circle -->
                            <circle
                                cx="24"
                                cy="24"
                                r="22"
                                stroke="white"
                                stroke-width="2"
                                fill="none"
                            />

                            <!-- Play Triangle -->
                            <polygon
                                points="20,16 20,32 32,24"
                                fill="white"
                            />
                        </svg>
                        <p>TVBET</p>
                    </div>
                </div>
            </div>
            <div class="game-card">
                <img src="@/assets/games-card.webp" alt="Game 5" />
                <div class="game-overlay">
                    <div class="overlay-content">
                        <p>spin 2 wheel</p>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- Outer Circle -->
                            <circle
                                cx="24"
                                cy="24"
                                r="22"
                                stroke="white"
                                stroke-width="2"
                                fill="none"
                            />

                            <!-- Play Triangle -->
                            <polygon
                                points="20,16 20,32 32,24"
                                fill="white"
                            />
                        </svg>
                        <p>TVBET</p>
                    </div>
                </div>
            </div>
            <div class="game-card">
                <img src="@/assets/games-card.webp" alt="Game 6" />
                <div class="game-overlay">
                    <div class="overlay-content">
                        <p>spin 2 wheel</p>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- Outer Circle -->
                            <circle
                                cx="24"
                                cy="24"
                                r="22"
                                stroke="white"
                                stroke-width="2"
                                fill="none"
                            />

                            <!-- Play Triangle -->
                            <polygon
                                points="20,16 20,32 32,24"
                                fill="white"
                            />
                        </svg>
                        <p>TVBET</p>
                    </div>
                </div>
            </div>
            <div class="game-card">
                <img src="@/assets/games-card.webp" alt="Game 7" />
                <div class="game-overlay">
                    <div class="overlay-content">
                        <p>spin 2 wheel</p>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- Outer Circle -->
                            <circle
                                cx="24"
                                cy="24"
                                r="22"
                                stroke="white"
                                stroke-width="2"
                                fill="none"
                            />

                            <!-- Play Triangle -->
                            <polygon
                                points="20,16 20,32 32,24"
                                fill="white"
                            />
                        </svg>
                        <p>TVBET</p>
                    </div>
                </div>
            </div>
            <div class="game-card">
                <img src="@/assets/games-card.webp" alt="Game 8" />
                <div class="game-overlay">
                    <div class="overlay-content">
                        <p>spin 2 wheel</p>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- Outer Circle -->
                            <circle
                                cx="24"
                                cy="24"
                                r="22"
                                stroke="white"
                                stroke-width="2"
                                fill="none"
                            />

                            <!-- Play Triangle -->
                            <polygon
                                points="20,16 20,32 32,24"
                                fill="white"
                            />
                        </svg>
                        <p>TVBET</p>
                    </div>
                </div>
            </div>
            <div class="game-card">
                <img src="@/assets/games-card.webp" alt="Game 9" />
                <div class="game-overlay">
                    <div class="overlay-content">
                        <p>spin 2 wheel</p>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- Outer Circle -->
                            <circle
                                cx="24"
                                cy="24"
                                r="22"
                                stroke="white"
                                stroke-width="2"
                                fill="none"
                            />

                            <!-- Play Triangle -->
                            <polygon
                                points="20,16 20,32 32,24"
                                fill="white"
                            />
                        </svg>
                        <p>TVBET</p>
                    </div>
                </div>
            </div>
            <div class="game-card">
                <img src="@/assets/games-card.webp" alt="Game 10" />
                <div class="game-overlay">
                    <div class="overlay-content">
                        <p>spin 2 wheel</p>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- Outer Circle -->
                            <circle
                                cx="24"
                                cy="24"
                                r="22"
                                stroke="white"
                                stroke-width="2"
                                fill="none"
                            />

                            <!-- Play Triangle -->
                            <polygon
                                points="20,16 20,32 32,24"
                                fill="white"
                            />
                        </svg>
                        <p>TVBET</p>
                    </div>
                </div>
            </div>
            <div class="game-card">
                <img src="@/assets/games-card.webp" alt="Game 11" />
                <div class="game-overlay">
                    <div class="overlay-content">
                        <p>spin 2 wheel</p>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- Outer Circle -->
                            <circle
                                cx="24"
                                cy="24"
                                r="22"
                                stroke="white"
                                stroke-width="2"
                                fill="none"
                            />

                            <!-- Play Triangle -->
                            <polygon
                                points="20,16 20,32 32,24"
                                fill="white"
                            />
                        </svg>
                        <p>TVBET</p>
                    </div>
                </div>
            </div>
            <div class="game-card">
                <img src="@/assets/games-card.webp" alt="Game 12" />
                <div class="game-overlay">
                    <div class="overlay-content">
                        <p>spin 2 wheel</p>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- Outer Circle -->
                            <circle
                                cx="24"
                                cy="24"
                                r="22"
                                stroke="white"
                                stroke-width="2"
                                fill="none"
                            />

                            <!-- Play Triangle -->
                            <polygon
                                points="20,16 20,32 32,24"
                                fill="white"
                            />
                        </svg>
                        <p>TVBET</p>
                    </div>
                </div>
            </div>
            <div class="game-card">
                <img src="@/assets/games-card.webp" alt="Game 13" />
                <div class="game-overlay">
                    <div class="overlay-content">
                        <p>spin 2 wheel</p>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- Outer Circle -->
                            <circle
                                cx="24"
                                cy="24"
                                r="22"
                                stroke="white"
                                stroke-width="2"
                                fill="none"
                            />

                            <!-- Play Triangle -->
                            <polygon
                                points="20,16 20,32 32,24"
                                fill="white"
                            />
                        </svg>
                        <p>TVBET</p>
                    </div>
                </div>
            </div>
            <div class="game-card">
                <img src="@/assets/games-card.webp" alt="Game 14" />
                <div class="game-overlay">
                    <div class="overlay-content">
                        <p>spin 2 wheel</p>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- Outer Circle -->
                            <circle
                                cx="24"
                                cy="24"
                                r="22"
                                stroke="white"
                                stroke-width="2"
                                fill="none"
                            />

                            <!-- Play Triangle -->
                            <polygon
                                points="20,16 20,32 32,24"
                                fill="white"
                            />
                        </svg>
                        <p>TVBET</p>
                    </div>
                </div>
            </div>
            <div class="game-card">
                <img src="@/assets/games-card.webp" alt="Game 15" />
                <div class="game-overlay">
                    <div class="overlay-content">
                        <p>spin 2 wheel</p>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- Outer Circle -->
                            <circle
                                cx="24"
                                cy="24"
                                r="22"
                                stroke="white"
                                stroke-width="2"
                                fill="none"
                            />

                            <!-- Play Triangle -->
                            <polygon
                                points="20,16 20,32 32,24"
                                fill="white"
                            />
                        </svg>
                        <p>TVBET</p>
                    </div>
                </div>
            </div>
            <div class="game-card">
                <img src="@/assets/games-card.webp" alt="Game 16" />
                <div class="game-overlay">
                    <div class="overlay-content">
                        <p>spin 2 wheel</p>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- Outer Circle -->
                            <circle
                                cx="24"
                                cy="24"
                                r="22"
                                stroke="white"
                                stroke-width="2"
                                fill="none"
                            />

                            <!-- Play Triangle -->
                            <polygon
                                points="20,16 20,32 32,24"
                                fill="white"
                            />
                        </svg>
                        <p>TVBET</p>
                    </div>
                </div>
            </div>
            <div class="game-card">
                <img src="@/assets/games-card.webp" alt="Game 17" />
                <div class="game-overlay">
                    <div class="overlay-content">
                        <p>spin 2 wheel</p>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- Outer Circle -->
                            <circle
                                cx="24"
                                cy="24"
                                r="22"
                                stroke="white"
                                stroke-width="2"
                                fill="none"
                            />

                            <!-- Play Triangle -->
                            <polygon
                                points="20,16 20,32 32,24"
                                fill="white"
                            />
                        </svg>
                        <p>TVBET</p>
                    </div>
                </div>
            </div>
            <div class="game-card">
                <img src="@/assets/games-card.webp" alt="Game 18" />
                <div class="game-overlay">
                    <div class="overlay-content">
                        <p>spin 2 wheel</p>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- Outer Circle -->
                            <circle
                                cx="24"
                                cy="24"
                                r="22"
                                stroke="white"
                                stroke-width="2"
                                fill="none"
                            />

                            <!-- Play Triangle -->
                            <polygon
                                points="20,16 20,32 32,24"
                                fill="white"
                            />
                        </svg>
                        <p>TVBET</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <AppFooter />
    </div>
  </div>
</template>

<script>
import LoggedInHeader from '../components/Header/logged-in-header.vue'
import AppSidebar from '../components/Sidebar.vue'
import AppFooter from '../components/Footer/footer.vue'
import { BDropdown, BDropdownItem } from 'bootstrap-vue-3'

export default {
  name: 'CasinoPage',
  components: {
    LoggedInHeader,
    AppSidebar,
    AppFooter,
    BDropdown,
    BDropdownItem
  },
  data() {
    return {
      isSidebarOpen: false, // Collapsed by default
      selected: 'Popular',
      options: ['Popular', 'Newest', 'A-Z']
    }
  },
  methods: {
    closeSidebar() {
      this.isSidebarOpen = false;
    },
    openSidebar() {
      this.isSidebarOpen = true;
    },
    selectOption(option) {
      this.selected = option;
    }
  }
}
</script>

<style scoped>
.main-content {
  margin-left: 20%;
  width: calc(100% - 20%);
  transition: margin-left 0.3s ease, width 0.3s ease;
}

.main-content.collapsed {
  margin-left: 5%;
  width: calc(100% - 5%);
}


.casino-body {
  background: linear-gradient(135deg, #272727 0%, #272727 30%, #c706fd 100%);
  min-height: 100vh;
  padding: 2rem;
}

.casino-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 1rem 0;
}

.back-btn {
  background: inherit;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.casino-title {
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  font-family: "Urbanist", sans-serif;
}

.sort-dropdown select {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  padding: 0.5rem 1rem;
  color: white;
  font-family: "Urbanist", sans-serif;
  cursor: pointer;
}

.sort-dropdown select option {
  background: #272727;
  color: white;
}

.game-cards-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15%, 1fr));
  gap: 1rem;
  max-width: 1400px;
  margin: 0 auto;
}

.game-cards-wrapper img {
  width: 100%;
  height: 270px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.game-cards-wrapper img:hover {
  transform: scale(1.05);
}

.game-card {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}

.game-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.game-card:hover .game-overlay {
  opacity: 1;
}

.overlay-content {
  text-align: center;
  color: white;
  font-family: "Urbanist", sans-serif;
}

.overlay-content p {
  margin: 0.5rem 0;
  font-size: 1.5rem;
  font-weight: bold;
}

.overlay-content svg {
  margin: 0.5rem 0;
  width: 32px;
  height: 32px;
}
</style>
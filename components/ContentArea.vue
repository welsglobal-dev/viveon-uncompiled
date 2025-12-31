<template>
    <div class="page-content-area d-flex flex-wrap">
        <AppSidebar :isOpen="isSidebarOpen" @close="closeSidebar" @open="openSidebar" />
        <AppMainArea :sidebarOpen="isSidebarOpen" />
    </div>
</template>

<script>
    import AppSidebar from './Sidebar.vue'
    import AppMainArea from './Main.vue'

    export default {
        name: 'AppContentArea',
        components: {
            AppSidebar,
            AppMainArea
        },
        data() {
            return {
                isSidebarOpen: true
            }
        },
        methods: {
            closeSidebar() {
                this.isSidebarOpen = false;
            },
            openSidebar() {
                this.isSidebarOpen = true;
            }
        }
    }
</script>

<style>
    .hamburger-icon {
        width: 5%;
        min-height: 100vh;
        background: #131313;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding-top: 1rem;
        cursor: pointer;
    }
    .hamburger-icon img {
        filter: invert(1);
        width: 28px;
        height: 28px;
    }
</style>
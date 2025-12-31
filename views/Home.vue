<template>
  <AppHeader />
  <AppContentArea />
</template>

<script>
import AppHeader from '../components/Header/Header.vue'
import AppContentArea from '../components/ContentArea.vue'

export default {
  name: 'AppHome',
  components: {
    AppHeader,
    AppContentArea
  }
}
</script>

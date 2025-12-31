<template>
  <header class="header global-header text-light">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      
      <div class="left d-flex align-items-center">
        <img src="@/assets/logo.png" alt="Logo" class="logo header-logo" />

        <!-- Gap of 50px -->
        <div style="width:50px"></div>

        <!-- Bootstrap search input with icon -->
        <b-input-group>
          <b-input-group-text>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
          </b-input-group-text>
          <b-form-input class="b-form-input font-urbanist" placeholder="Find Games"></b-form-input>
        </b-input-group>
      </div>

      <div class="right d-flex" style="gap:1rem;">
        <b-button class="btn btn-secondary text-uppercase font-urbanist font-urbanist-bold btn-secondary-login">Log in</b-button>
        <b-button class="btn btn-primary text-uppercase font-urbanist font-urbanist-bold btn-primary-signup">Sign UP</b-button>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style scoped>
.header {
  padding: 16px 0;
  background: linear-gradient(90deg, #251a23 20%, #131313 30%);
  position: sticky;
  top: 0;
  z-index: 10;
}
.header-logo {
  max-width: 430px;
  width: auto;
  object-fit: contain;
}
.logo {
  height: 40px;
}
.b-form-input {
    background: #272727;
    border-radius: 8px;
    /* opacity: 0.349; */
    max-width: 500px;
    width: auto;
    height: 40px;
    border: 1px solid transparent;
}

.b-form-input::placeholder,
.b-form-input {
  color: #FFF;
  font-size: 1rem;
}
.b-form-input::placeholder {
  color: #878787;;
}
.b-form-input:focus {
  outline: unset;
  box-shadow: unset;
  background-color: #272727;
  border: 1px solid transparent;
  color: white;
}
.input-group-text {
  background-color: #272727;
  color: white;
  border: transparent;
  cursor: pointer;
  border-radius: 8px 0 0 8px;
}
.btn-secondary-login,
.btn-primary-signup {
  width: 120px;
}
</style>

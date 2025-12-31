<template>
  <AppHeader />

  <div class="register-content-area">
    <div class="register-content-wrap">
      <div class="register-image">
        <img
          :src="activeTab === 'login'
            ? require('@/assets/sign-in-bg.webp')
            : require('@/assets/sign-up-welcome-bonus.webp')"
          class="login-welcome-image"
        />
      </div>

      <div class="register-tabs-forms p-3">
        <!-- Tabs -->
        <div class="register-tabs mb-5">
          <button
            class="register-tab text-uppercase font-syne"
            :class="{ active: activeTab === 'login' }"
            @click="activeTab = 'login'"
          >
            Log in
          </button>

          <button
            class="register-tab text-uppercase font-syne"
            :class="{ active: activeTab === 'register' }"
            @click="activeTab = 'register'"
          >
            Sign up
          </button>
        </div>

        <!-- LOGIN FORM -->
        <form v-if="activeTab === 'login'" class="form-container">
          <div class="form-group">
            <label class="font-syne text-uppercase form-label">E-mail</label>
            <input type="email" />
          </div>

          <div class="form-group password-group">
            <label class="font-syne text-uppercase form-label">Password</label>
            <div class="password-wrapper">
              <input
                :type="showLoginPassword ? 'text' : 'password'"
                class="w-100" />
              <img
                class="eye-icon"
                :src="showLoginPassword ? eyeOpen : eyeClose"
                @click="showLoginPassword = !showLoginPassword"
              />
            </div>
            <a class="forgot-link font-urbanist text-white text-capitalize">Forgot password?</a>
          </div>

          <button class="primary-btn text-uppercase font-syne user-login-submit">Log In</button>

          <p class="switch-text font-urbanist">
            New player?
            <span class="text-uppercase text-decoration-underline" @click="activeTab = 'register'">Sign up</span>
          </p>
        </form>

        <!-- REGISTER FORM -->
        <form v-if="activeTab === 'register'" class="form-container">
          <div class="row">
            <div class="col-6 form-group">
              <label class="font-syne text-uppercase form-label">First name</label>
              <input type="text" />
            </div>

            <div class="col-6 form-group">
              <label class="font-syne text-uppercase form-label">Last name</label>
              <input type="text" />
            </div>
          </div>

          <div class="form-group">
            <label class="font-syne text-uppercase form-label">E-mail</label>
            <input type="email" />
          </div>

          <div class="form-group password-group">
            <label class="font-syne text-uppercase form-label">Password</label>
            <div class="password-wrapper">
              <input class="w-100"
                :type="showRegisterPassword ? 'text' : 'password'"
              />
              <img
                class="eye-icon"
                :src="showRegisterPassword ? eyeOpen : eyeClose"
                @click="showRegisterPassword = !showRegisterPassword"
              />
            </div>
          </div>

          <div class="consent">
            <input type="checkbox" />
            <span>I agree to the ViveOn.io terms and conditions and privacy policy and confirm that: I am at least the age of majority in my jurisdiction; I reside and am located in a Permitted Territory; I do not own an        existing account on ViveOn.io; and ViveOn.io reserves the right to ban all duplicate accounts registered by me and nullify any and all prizes from such duplicate accounts.</span>
          </div>

          <div class="consent">
            <input type="checkbox" />
            <span>I agree that ViveOn.io will collect and use my personal information in accordance with the privacy policy , including to determine my eligibility to use the Services.</span>
          </div>

          <button class="primary-btn text-uppercase font-syne user-register-submit">Create Account</button>

          <p class="switch-text font-urbanist">
            Already have a free account?
            <span @click="activeTab = 'login'"
            class="text-uppercase text-decoration-underline">Login</span>
          </p>
        </form>
      </div>
    </div>
  </div>

  <AppFooter />
</template>


<script>
import AppHeader from '../components/Header/Header.vue'
import AppFooter from '../components/Footer/footer.vue'

export default {
  name: 'AppLoginPage',
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      activeTab: 'login'
    }
  }
}
</script>

<style>
  .register-content-area {
    background-color: grey;
    background-image: url('../assets/login-bg-image.jpeg');
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .register-content-area::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(140deg, #5cf9ed 0%, #c706fd 99%, #c706fd 100%);
    z-index: 1;
    pointer-events: none;
    opacity: 0.38;
  }
  
  .register-content-wrap {
    width: 100%;
    max-width: 1000px;
    display: flex;
    height: auto;
    min-height: 500px;
    background-color: #272727;
    border-radius: 30px;
    z-index: 10;
  }

  .register-image {
    height: 600px;
  }

  .register-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px 0 0 30px;
    background-position: center center;
  }

  .register-content-wrap > div {
    width: 50%;
  }

  .register-tabs-forms {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .register-tabs {
    border-radius: 50px;
    background-color: #1d1d1d;
    display: flex;
    justify-content: center;
    width: fit-content;
  }

  .register-tab {
    border-radius: 50px;
    border: unset;
    outline: unset;
    padding: 6px 2rem;
    color: #f975e5;
    background-color: transparent;
  }

  .register-tab.active {
    background-color: #f975e5;
    color: #222b31;
  }

  .form-container {
  width: 100%;
  max-width: 350px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.form-group label {
  color: white;
  font-size: 14px;
  margin-bottom: 6px;
}

.form-group input {
  padding: 7px 10px;
  border-radius: 50px;
  border: none;
  outline: none;
  background-color: transparent;
  background-color: #1d1d1d;
  color: white;
}

.form-group input.w-100 {
  width: 100%;
}

.password-wrapper {
  position: relative;
}

.eye-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  width: 18px;
  cursor: pointer;
  transform: translateY(-50%);
}

.forgot-link {
  font-size: 12px;
  text-align: right;
  display: block;
  margin-top: 6px;
  cursor: pointer;
}

.primary-btn {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: none;
  background-color: #f975e5;
  color: #222b31;
  font-weight: bold;
  margin-top: 1rem;
}

.user-login-submit {
  color: #222b31;
  border-radius: 40px;
  background-image: linear-gradient(140deg, #5bf9ed 0%, #e68dff 99%, #e68dff 100%);
  border: 4px solid;
}
.user-register-submit {
  color: #222b31;
  border-radius: 40px;
  background-image: linear-gradient(140deg, #5bf9ed 0%, #e68dff 99%, #e68dff 100%);
  border: 4px solid;
  display: block;
}
.switch-text {
  color: white;
  text-align: center;
  margin-top: 1rem;
}

.switch-text span {
  color: #5cf9ed;
  cursor: pointer;
}


.consent {
  display: flex;
  gap: 8px;
  color: white;
  font-size: 12px;
  margin-bottom: 8px;
}

.consent input[type="checkbox"] {
  width: 24px;
  height: 24px;
  border-radius: 5px;
  border: 3px solid #f976e5;
  background: transparent;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
  margin-top: 5px;
}

/* Checked icon (properly centered & scaled) */
.consent input[type="checkbox"]:checked::after {
  content: "";
  position: absolute;
  width: 6px;
  height: 11px;
  border: solid #f976e5;
  border-width: 0 3px 3px 0;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%) rotate(45deg);
}

</style>
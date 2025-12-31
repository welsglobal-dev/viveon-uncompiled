<template>
  <header class="header">
    <div class="container-fluid header-inner">

      <!-- LEFT -->
      <div class="left d-flex align-items-center">
        <img src="@/assets/logo.png" alt="Logo" class="logo header-logo" />
        <div style="width:50px"></div>

        <b-input-group>
          <b-input-group-text>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              viewBox="0 0 16 16">
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </b-input-group-text>
          <b-form-input placeholder="Find Games" class="b-form-input font-urbanist" />
        </b-input-group>
      </div>

      <!-- RIGHT -->
      <div class="right">

        <!-- Balance Pills -->
        <div class="balance-pill gradient-pill">
          <img src="@/assets/CCC-Coin.png" />
          <div class="balance-text">
            <span class="amount">0.00 CCCC</span>
            <span class="sub-text">CircaCoin Balance</span>
          </div>
          <button class="btn-pill">Buy</button>
        </div>

        <div class="balance-pill gradient-pill">
          <img src="@/assets/ptc-icon.png" />
          <div class="balance-text">
            <span class="amount">175 PTC</span>
            <span class="sub-text">Remaining Credits</span>
          </div>
          <button class="btn-pill">Deposit</button>
        </div>

        <!-- USER DROPDOWN -->
        <div class="custom-dropdown">
          <button class="user-trigger" @click.stop="toggleDropdown">
            <img src="@/assets/avatar-1.png" />
            <span class="username">jalibch</span>
            <img src="@/assets/chevron-down.svg" />
          
          </button>

<div v-if="dropdownOpen" class="user-dropdown" @click.stop>

  <div class="dropdown-user-info">
    <img src="@/assets/avatar-1.png" />
    <div class="user-meta">
      <strong>jalibch</strong>
      <span>ID: 10000203</span>
    </div>
  </div>

  <div class="dropdown-divider"></div>

  <div class="dropdown-item">
    <img src="@/assets/user.svg" class="dropdown-item-icon" />
    My Profile
  </div>

  <div class="dropdown-item">
    <img src="@/assets/redeem.svg" class="dropdown-item-icon" />
    Redeem
  </div>

  <div class="dropdown-item">
    <img src="@/assets/history.svg" class="dropdown-item-icon" />
    Bet History
  </div>

  <div class="dropdown-item">
    <img src="@/assets/transactions.svg" class="dropdown-item-icon" />
    Transactions
  </div>

  <div class="dropdown-item">
    <img src="@/assets/security.svg" class="dropdown-item-icon" />
    Security
  </div>

  <div class="dropdown-divider"></div>

  <div class="dropdown-item logout">
    <img src="@/assets/logout.svg" class="dropdown-item-icon" />
    Logout
  </div>

</div>

        </div>

        <img class="header-icon" src="@/assets/Settings.png" />
        <img class="header-icon" src="@/assets/Notification.png" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      dropdownOpen: false
    };
  },
  mounted() {
    document.addEventListener("click", this.closeOnOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeOnOutside);
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    closeOnOutside(e) {
      if (!this.$el.contains(e.target)) {
        this.dropdownOpen = false;
      }
    }
  }
};
</script>

<style scoped>
/* HEADER */
.header {
  padding: 14px 0;
  background: linear-gradient(90deg, #251a23 0%, #131313 100%);
  position: sticky;
  top: 0;
  z-index: 10;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* LEFT SIDE */
.left {
  display: flex;
  align-items: center;
}

.header-logo {
  max-width: 430px;
  width: auto;
  object-fit: contain;
}

.logo {
  height: 40px;
}

/* SEARCH INPUT */
.b-form-input {
  background: #272727;
  border-radius: 8px;
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
  color: #878787;
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

/* RIGHT SIDE */
.right {
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
}

/* BALANCE PILLS */
.balance-pill {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #1f1f1f;
  padding: 0px;
  border-radius: 12px;
  color: #fff;
  justify-content: space-between;
}

/* ICON IN BALANCE PILL */
.balance-pill img {
  width: 32px;
  height: 32px;
  margin-left: 14px;
}

/* TEXT STACK IN BALANCE PILL */
.balance-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  font-family: "Urbanist", sans-serif;

}

.amount {
  font-size: 15px;
  font-weight: 600;
}

.sub-text {
  font-size: 11px;
  color: #bdbdbd;
  margin-top: 2px;
}

.gradient-pill {
  background: linear-gradient(
    135deg,
    rgba(95, 255, 236, 0.12),
    rgba(249, 117, 229, 0.12)
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    inset 0 0 20px rgba(255, 255, 255, 0.04),
    0 8px 20px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
}

.btn-pill {
  background-image: linear-gradient(140deg, #5bf9ed 0%, #f975e5 99%, #f975e5 100%);
  border: none;
  color: #000;
  font-weight: 700;
  font-size: 12px;
  padding: 6px 16px;
  border-radius: 10px;
  cursor: pointer;
  white-space: nowrap;
  height: 53px;
  font-family: "Urbanist", sans-serif;

}

.btn-pill:hover {
  opacity: 0.9;
}

/* USER TRIGGER */
.user-trigger {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #272727;
  padding: 0px 12px;
  border-radius: 12px;
  color: #fff;
  font-size: 13px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  height: 53px;
}

.user-trigger:hover {
  background: #222;
}

.user-trigger img:first-child {
  width: 26px;
  height: 26px;
  border-radius: 50%;
}

/* Chevron dropdown icon */
.chevron-icon {
  width: 12px;
  height: 12px;
  fill: currentColor;
  transition: transform 0.3s ease;
  color: #ccc;
}

.chevron-icon.rotate {
  transform: rotate(180deg);
}

/* HEADER ICONS (Settings and Notification) */
.header-icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

/* ===== USER DROPDOWN CONTAINER ===== */
.user-dropdown {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 260px;
  padding: 10px;
  border-radius: 16px;
  background: #111111;
  z-index: 1000;
  background-clip: padding-box;
  border: 1px solid transparent;
}

/* Gradient border */
.user-dropdown::before {
  content: "";
  position: absolute;
  inset: -1px;
filter: drop-shadow(0 0 30px rgba(0,0,0,0.43));
background-color: #141414;
  z-index: -1;
}

/* ===== USER INFO ===== */
.dropdown-user-info {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
}

.dropdown-user-info img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.user-meta {
  display: flex;
  flex-direction: column;
}

.user-meta strong {
  font-size: 16px;
  color: #ffffff;
}

.user-meta span {
  font-size: 16px;
  color: #fff;
}


/* ===== DROPDOWN ITEMS ===== */
.dropdown-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 10px;
  font-size: 14px;
  color: #eaeaea;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

/* Reset icon coloring */
.dropdown-item-icon {
  width: 18px;
  height: 18px;
}

/* FIRST THREE ITEMS */
.dropdown-item:nth-of-type(1) .dropdown-item-icon,
.dropdown-item:nth-of-type(2) .dropdown-item-icon,
.dropdown-item:nth-of-type(3) .dropdown-item-icon {
  fill: #5bf9ed;
}

/* LAST THREE ITEMS */
.dropdown-item:nth-of-type(4) .dropdown-item-icon,
.dropdown-item:nth-of-type(5) .dropdown-item-icon,
.dropdown-item:nth-of-type(6) .dropdown-item-icon {
  fill: #f975e5;
}


/* Hover state */
.dropdown-item:hover {
  background: linear-gradient(
    135deg,
    rgba(95, 255, 236, 0.15),
    rgba(249, 117, 229, 0.15)
  );
  color: #ffffff;
}



</style>
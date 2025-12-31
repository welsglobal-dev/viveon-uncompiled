<template>
    <footer class="">
        <div class="row">
            <div class="col-12 col-lg-4 footer-logo">
                <img src="@/assets/logo.png" alt="">
            </div>
            <div class="col-12 col-lg-4 d-flex gap-5 justify-content-center">
                <div>
                    <h5 class="text-white font-urbanist mb-3">HELP</h5>
                    <ul class="list-unstyled">
                        <li>
                            <a href="#" class="text-white font-urbanist text-decoration-none">About Us</a>
                        </li>
                        <li>
                            <a href="#" class="text-white font-urbanist text-decoration-none">FAQs</a>
                        </li>
                        <li>
                            <a href="#" class="text-white font-urbanist text-decoration-none">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-white font-urbanist mb-3">HELP</h5>
                    <ul class="list-unstyled">
                        <li>
                            <a href="#" class="text-white font-urbanist text-decoration-none">Policy</a>
                        </li>
                        <li>
                            <a href="#" class="text-white font-urbanist text-decoration-none">FAQs</a>
                        </li>
                        <li>
                            <a href="#" class="text-white font-urbanist text-decoration-none">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-lg-4 footer-brands d-flex align-items-start justify-content-end gap-2">
                <img src="@/assets/21plus.png" alt="" class="image-21">
                <img src="@/assets/responsible-gaming.png" alt="" class="responsible-gaming">
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-12 col-lg-5">
                <p class="text-white font-urbanist">
                    Viveon.io is a next-generation online gaming platform supporting multi-currency play,
                    including major global fiat currencies and our ecosystem token CirCaCoin (CCC). <br /> <br />
                    Viveon.io is operated by Tokengram Investments Ltd., registered under No.
                    TG-092568 at Commerce Plaza Building, 87 Digital
                    Exchange Drive, Road Town, Tortola, BVI.
                    This website operates under a Mock Online Gaming License issued by the Global eGaming Authority
                    (License No. GEA/2025/1194/01). Players must meet legal age requirements and comply with gaming laws
                    in their
                    jurisdiction. Contact: <a class="footer-link" href="mailto:support@viveon.io">support@viveon.io</a>
                </p>
            </div>
            <!-- Providers -->
            <div class="col-12 col-lg-7">
                <h4 class="font-urbanist font-urbanist-bold text-uppercase text-white">
                    Game Providers
                </h4>

                <!-- Row 1 -->
                <div class="providers-grid providers-4">
                    <div class="provider-item">
                        <img src="@/assets/tv-bet.png" alt="TVBet">
                    </div>
                    <div class="provider-item">
                        <img src="@/assets/jacktop.png" alt="Jacktop">
                    </div>
                    <div class="provider-item">
                        <img src="@/assets/evoplay.png" alt="Evoplay">
                    </div>
                    <div class="provider-item">
                        <img src="@/assets/beton.png" alt="BetOnGames">
                    </div>
                </div>

                <!-- Row 2 -->
                <div class="providers-grid providers-3 mt-3">
                    <div class="provider-item">
                        <img src="@/assets/1.svg" alt="Mascot Gaming">
                    </div>
                    <div class="provider-item">
                        <img src="@/assets/slotopia.png" alt="Slotopia">
                    </div>
                    <div class="provider-item">
                        <img src="@/assets/el-casino.png" alt="ElCasino">
                    </div>
                </div>
            </div>

        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom pt-3">
            <span class="font-urbanist"></span>
            © 2025 viveon.io | All rights reserved
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'AppFooter'
    }
</script>

<style>
    footer {
        background-color: #272727;
        padding: 30px 30px 1rem 30px;
        padding: 30px;
    }

    .footer-logo img {
        width: 100%;
    }

    .footer-brands {
        /* Empty, can be removed or add styles */
    }

    .image-21 {
        width: 50px;
    }

    .responsible-gaming {
        width: 150px;
    }

    /* Shared grid styles */
    .providers-grid {
        display: grid;
        gap: 1%;
        align-items: center;
    }

    /* 4 logos = 25% each */
    .providers-4 {
        grid-template-columns: repeat(4, 25%);
    }

    /* 3 logos = 33.333% each */
    .providers-3 {
        grid-template-columns: repeat(3, 33.333%);
    }

    /* Provider item */
    .provider-item {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* Logo behavior */
    .provider-item img {
        max-width: 80%;
        height: auto;
        object-fit: contain;
        opacity: 0.95;
    }


    /* Bottom Text */
    .footer-bottom {
        text-align: center;
        color: #9a9d9e;
        border-top: 1px solid #9a9d9e;
    }

    .footer-link {
        color: #04F4C9;
    }
</style>
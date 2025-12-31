<template>
    <section class="mt-5">
        <div class="latest-bets-tabs mb-3 gap-2 d-flex">
            <b-button class="btn btn-primary text-uppercase font-urbanist font-urbanist-bold">Latest Bets</b-button>
            <b-button class="btn btn-secondary text-uppercase font-urbanist font-urbanist-bold">High Rollers</b-button>
        </div>

        <!-- Bootstrap Table -->
        <table class="table table-sm latest-bets-table px-3">
            <thead>
                <tr>
                    <th class="font-urbanist font-urbanist-bold text-capitalize">User</th>
                    <th class="font-urbanist font-urbanist-bold text-capitalize">Game</th>
                    <th class="font-urbanist font-urbanist-bold text-capitalize">Bet</th>
                    <th class="font-urbanist font-urbanist-bold text-capitalize">Multiplier</th>
                    <th class="font-urbanist font-urbanist-bold text-capitalize">Payout</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td><img v-if="item.image" :src="item.image" alt="Item image" class="me-2"
                            style="width: 25px; height: 25px; object-fit: cover;" />{{ item.user }}</td>

                    <!-- Name column: image + text if image exists -->
                    <td>
                        <span>{{ item.game }}</span>
                    </td>

                    <td>
                        <img v-if="item.betAvatar" :src="item.betAvatar" alt="Item image" class="me-2"
                            style="width: 25px; height: 25px; object-fit: cover;" />
                        {{ item.bet }}</td>
                    <td>{{ item.multiplier }}</td>
                    <td>{{ item.payout }}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script setup>
    import { ref } from 'vue'
    import Avatar1 from '@/assets/avatar-1.png'
    import Avatar2 from '@/assets/avatar-2.png'
    import Avatar3 from '@/assets/avatar-3.png'
    import Avatar4 from '@/assets/avatar-4.png'
    import Avatar5 from '@/assets/avatar-5.png'
    import PTCIcon from '@/assets/ptc-icon.png'

    // Sample data
    const items = ref([
        { user: 'jalibtch', game: 'Baccarat', bet: '100.00', multiplier: '0.00x', payout: '0.00', image: Avatar1, betAvatar: PTCIcon },
        { user: 'jalibtch', game: 'Slots', bet: '24,560.00', multiplier: '1.75x', payout: '42,980.00', image: Avatar2, betAvatar: PTCIcon },
        { user: 'jalibtch', game: 'Roulette', bet: '78.00', multiplier: '2.00x', payout: '156.00', image: Avatar3, betAvatar: PTCIcon },
        { user: 'jalibtch', game: 'Lottery', bet: '50.00', multiplier: '100.00x', payout: '5,000.00', image: Avatar4, betAvatar: PTCIcon },
        { user: 'jalibtch', game: 'Plinko', bet: '893.34', multiplier: '5.00x', payout: '4,466.7', image: Avatar5, betAvatar: PTCIcon },
    ])
</script>

<script>
    export default {
        name: 'LatestBets'
    }
</script>

<style>
.latest-bets-table thead tr th {
    background-color: #272727;
    color: white;
}
.latest-bets-table tbody tr td {
    background-color: #272727;
    color: white;
    border-bottom: unset;
    font-family: "Urbanist", sans-serif;
}
</style>
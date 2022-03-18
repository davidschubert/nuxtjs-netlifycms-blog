<template>
  <section class="w-full max-w-5xl mx-auto mb-16 bg-green-500">
    <button v-on:click="getFritzcolaData">Get Fritzcola Data</button>
    <div>
      <strong class="text-red-500">{{ randomFritzcola }}</strong>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
let getQuotesJson =
  'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/fd9c289c2ee41a844cfbe99ba531aca3b483bf42/quotes.json'

export default {
  // random Quotes
  name: 'Fritzcola',
  data() {
    return {
      fritzcolaDataList: [],
    }
  },
  computed: {
    randomFritzcola() {
      const rand = Math.floor(Math.random() * this.fritzcolaDataList.length)
      return this.fritzcolaDataList[rand] ? this.fritzcolaDataList[rand].quote : ''
    },
  },
  methods: {
    getFritzcolaData() {
      axios.get(getQuotesJson).then((response) => {
        this.fritzcolaDataList = response.data
      })
    },
  },
}
</script>

<style scoped>
button {
  background-color: red;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}
</style>

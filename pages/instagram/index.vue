<template>
  <main>

    <nav class="mb-8" aria-label="go back">
      <router-back class="block" />
    </nav>

    <section class="w-full max-w-5xl mx-auto mb-16 bg-gray-300">
      <h1 class="title">Instagram</h1>
      <h2>Hier spiele ich mit der API von Instagram rum</h2>
      <p>Das wird spannend!</p>
    </section>

    <section class="w-full max-w-5xl mx-auto mb-16 bg-green-200">
      <h2>IP API:</h2>
      <p><b>Meine IP-Adresse:</b> {{ ip }}</p>
      <br />
      <h2>Bored API:</h2>
      <p>
        <b>activity:</b> {{ bored.activity }}<br />
        <b>type:</b> {{ bored.type }}<br />
        <b>participants:</b> {{ bored.participants }}<br />
        <b>price:</b> {{ bored.price }}<br />
        <b>link:</b> {{ bored.link }}<br />
        <b>key:</b> {{ bored.key }}<br />
        <b>accessibility:</b> {{ bored.accessibility }}<br />
      </p>
    </section>

    <section class="w-full max-w-5xl mx-auto mb-16 bg-blue-200">
      <div>
        <ul>
            <li v-for="quote in quotes" :key="index"><strong>{{ quote.quote }}</strong> by {{ quote.author }}</li>
        </ul>
      </div>
    </section>

    <section class="w-full max-w-5xl mx-auto mb-16 bg-red-200">
      <button v-on:click="getTeacupData">Get Teacup Data</button>
      <div>
        <strong>{{ randomQuote }}</strong>
      </div>
    </section>

    <section class="w-full max-w-5xl mx-auto mb-16 bg-yellow-200">
      <div>
        <h1>Rendering</h1>
        <p>
          This page is rendered on the <strong>{{ rendering }}</strong>
        </p>
        <p v-if="rendering === 'server'">First load or hard refresh is done on server side.</p>
        <p v-if="rendering === 'client'">Navigation is done on client side.</p>
        <p>
          <ul>
            <li>Refresh the page for server side rendering.</li>
            <li>Click the links to see client side rendering.</li>
          </ul>
        </p>
      </div>
    </section>

  </main>
</template>

<script>
import axios from 'axios'

// Different API's
let apiIp = 'http://icanhazip.com'
let apiBored = 'http://www.boredapi.com/api/activity/'
let getQuotes =
  'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/fd9c289c2ee41a844cfbe99ba531aca3b483bf42/quotes.json'

export default {
  async asyncData() {
    const dataIp = await axios.get(apiIp)
    const dataBored = await axios.get(apiBored)
    const dataQuotes = await axios.get(getQuotes)

    console.log(dataIp.data)
    console.log(dataBored.data)
    console.log(dataQuotes.data)

    return {
      ip: dataIp.data,
      bored: dataBored.data,
      quotes: dataQuotes.data,
      rendering: process.server ? 'server' : 'client',
    }
  },

  // random Quotes
  name: 'Teacup',
  data() {
    return {
      teacupDataList: []
    }
  },
  computed:{
    randomQuote() {
    const rand=Math.floor(Math.random() * this.teacupDataList.length)
      return this.teacupDataList[rand]?this.teacupDataList[rand].quote:""
    }
  },
  methods: {
    getTeacupData() {
      axios.get(getQuotes).then((response) => {
        this.teacupDataList = response.data
      })
    }
  }

}
</script>

<style>
.quote {
  max-width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  margin-top: 120px;
}
.quote .sentence {
  width: 60%;
  padding-right: 32px;
}
.quote img {
  width: 40%;
}
.sentence p {
  text-align: right;
}
</style>

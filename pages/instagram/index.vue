<template>
  <main>
    <nav class="mb-8" aria-label="go back">
      <router-back class="block" />
    </nav>
    <section class="w-full max-w-5xl mx-auto mb-16">
      <h1 class="title">Instagram</h1>
      <h2>Hier spiele ich mit der API von Instagram rum</h2>
      <p>Das wird spannend!</p>
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
  </main>
</template>

<script>
import axios from 'axios'

// API Endpoints
let apiIp = 'http://icanhazip.com'
let apiBored = 'http://www.boredapi.com/api/activity/'

export default {
  async asyncData({ $axios }) {
    const dataIp = await $axios.get(apiIp)
    const dataBored = await $axios.get(apiBored)

    console.log(dataIp.data)
    console.log(dataBored.data)
    
    return {
      ip: dataIp.data,
      bored: dataBored.data,
    }
  },
}
</script>

<template>
  <main>
    <nav class="mb-8" aria-label="go back">
      <router-back class="block" />
    </nav>
    <section class="w-full max-w-5xl mx-auto mb-16 bg-pukpink dark:bg-pukyellow">
      <h1 class="title">Auch neue Kontakte sind normal</h1>
      <h2>Aus neu mach normal</h2>
      <p>
        Neugeschäft? Neuer Job? Neu ist normal! Und das Beste: Wer das Neue sucht, muss einfach nur dieses Formular
        ausfüllen. Wir melden uns dann auch zurück. Versprochen. Und für alle, die es ganz eilig haben, stehen unsere
        Telefonnummern am Ende der Seite.
      </p>
      <h3>David Schubert</h3>
      <p>
        Peter-Marquard-Str. 13<br />
        22303 Hamburg<br />
        <br />
      </p>
      <p>
        Tel. +49 (0)152 02 9494 05<br />
        Mail
        <a href="mailto:business@davidschubert.com" target="_blank" rel="noreferrer noopener"
          >business@davidschubert.com</a
        >
      </p>
    </section>
    <section v-if="impressum" class="w-full max-w-5xl mx-auto mt-10 bg-puklightblue dark:bg-pukyellow">
      <article>
        <h5
          v-if="impressum.penis"
          class="inline-block py-1 px-2 my-2 bg-gray text-white text-sm font-medium rounded-sm whitespace-no-wrap"
        >
          {{ impressum.titletag }}
        </h5>
        <h1 class="">{{ impressum.titletag }}</h1>
        <p class="mt-1 mb-4 text-primary-600 dark:text-primary-400">{{ impressum.metadescription }}</p>
        <p class="mt-1 mb-4 text-primary-600 dark:text-primary-400">{{ impressum.content }}</p>
        <p class="mt-1 mb-4 text-primary-600 dark:text-primary-400">{{ impressum.body }}</p>
        <p class="mt-1 mb-4 text-primary-600 dark:text-primary-400">{{ impressum.team[0].name }}</p>
        <br />
        <ul id="v-for-team">
          <li v-for="value in impressum.team">
            {{ value }}
          </li>
        </ul>
        <br />
        <div v-for="(value, name) in impressum.team[0]">{{ name }}: {{ value }}</div>
        <br />
        <div v-for="(value, name) in impressum.team">
          {{ impressum.team[0].name }}<br />
          {{ impressum.team[0].position }}<br />
          <nuxt-img v-bind:src="impressum.team[0].photo" width="300" height="250" /><br />
        </div>
        <br />

        <!-- Abfrage für ein Object Array -->
        <div class="grid gap-4 grid-cols-2">
          <div class="my-4 p-4 bg-white" v-for="spieler in impressum.team" :name="spieler.name">
            <h3>{{ spieler.name }}</h3>
            <p>{{ spieler.position }}</p>
            <p><nuxt-img v-bind:src="spieler.photo" width="300" height="250" v-bind:alt="spieler.name" /></p>
          </div>
        </div>
      </article>
    </section>
    <section v-if="impressum" class="w-full max-w-5xl mx-auto mt-10 bg-puklightblue dark:bg-pukyellow">
      <h1>Content von Markdown File</h1>
      <nuxt-content :document="impressum.titletag" />
    </section>
  </main>
</template>

<script>
import impressum from '~/content/meta/impress.json'

export default {
  async asyncData() {
    return {
      impressum,
    }
  },

  // Transitions
  /*transition: {
    name: 'intro',
    appear: true,
    css: true,
    beforeEnter(el) {
      console.log('PAGE - Before Entering')
    },
    enter(el, done) {
      console.log('PAGE - Entering')
      done()
    },

    leave(el, done) {
      console.log('PAGE - Leaving')
      done()
    },
  },*/
}
</script>

<style>

</style>

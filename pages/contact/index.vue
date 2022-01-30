<template>
  <main>
    <nav class="mb-8" aria-label="go back">
      <router-back class="block" />
    </nav>
    <section class="w-full max-w-5xl mx-auto mb-16">
      <h1 class="title">Auch neue Kontakte sind normal</h1>
      <h2>Aus neu mach normal</h2>
      <p>
        Neugeschäft? Neuer Job? Neu ist normal! Und das Beste: Wer das Neue sucht, muss einfach nur dieses Formular
        ausfüllen. Wir melden uns dann auch zurück. Versprochen. Und für alle, die es ganz eilig haben, stehen unsere
        Telefonnummern am Ende der Seite.
      </p>
    </section>
    <section class="w-full max-w-5xl mx-auto">
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
    <section v-if="impress">
      <nav class="mb-8" aria-label="go back">
        <router-back class="block" />
      </nav>
      <article>
        <h5
          v-if="mycontent.createdAt"
          class="inline-block py-1 px-2 my-2 bg-gray text-white text-sm font-medium rounded-sm whitespace-no-wrap"
        ></h5>
        <h1 class="">{{ mycontent.title }}</h1>
        <p class="mt-1 mb-4 text-primary-600 dark:text-primary-400">{{ mycontent.description }}</p>
        <nuxt-content :document="mycontent" />
      </article>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let mycontent
    try {
      mycontent = await $content('impress', params.impress).fetch()
    } catch (e) {
      error({ message: 'Impressum content not found' })
    }
    return { post }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    },
  },
}
</script>

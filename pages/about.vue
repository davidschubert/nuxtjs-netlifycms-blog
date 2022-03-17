<template>
  <main>
    <nav class="mb-8" aria-label="go back">
      <router-back class="block" />
    </nav>
    <section class="w-full max-w-5xl mx-auto">
      <h1 class="title">Kurzfristig einberufene Pressekonferenz: FC Bayern bezieht Stellung zum Süle-Abschied!</h1>
      <br />
      <h2>Normal-Image Tag</h2>
      <figure>
        <nuxt-img
          src="/img/uploads/david_schubert.jpg"
          alt="Image Placeholder"
          sizes="sm:50vw md:150vw lg:400vw"
          format="webp"
        />
        <figcaption class="text-center pt-4">
          Image by <a href="#" class="underline font-bold">Lorem ipsum</a>
        </figcaption>
      </figure>
      <br />
      <h2>Nuxt-Image Tag</h2>
      <nuxt-img
        preload
        src="/img/placeholder_image.svg"
        sizes="sm:100vw md:50vw lg:400px"
        alt="Image Placeholder"
        format="webp"
        fit="cover"
        width="200"
        height="100"
        :modifiers="{ roundCorner: '0:100' }"
      />
      <br />
      <br />
      <h2>Nuxt-Picture Tag</h2>
      <nuxt-picture
        src="/img/placeholder_image.svg"
        :imgAttrs="{ id: 'my-id', class: 'my-class', style: 'display:block', 'data-my-data': 'my-value' }"
        sizes="sm:100vw md:50vw lg:400px"
        alt="Image Placeholder"
        format="webp"
        fit="cover"
        width="280"
        height="210"
        :modifiers="{ roundCorner: '0:100' }"
      />
      <br />
      <br />
      <br />
      <h2>Normal-Image Tag</h2>
      <img src="/img/uploads/david_schubert.jpg" alt="Image Placeholder" width="300" height="250" /><br />
      <br />
      <h2>Nuxt-Image Tag</h2>
      <nuxt-img
        preload
        src="/img/uploads/david_schubert.jpg"
        sizes="sm:100vw md:50vw lg:400px"
        alt="Image Placeholder"
        format="webp"
        fit="cover"
        width="200"
        height="100"
        :modifiers="{ roundCorner: '50:100' }"
      />
      <br />
      <br />
      <h2>Nuxt-Picture Tag</h2>
      <nuxt-picture
        src="/img/uploads/david_schubert.jpg"
        :imgAttrs="{ id: 'my-id', class: 'my-class', style: 'display:block', 'data-my-data': 'my-value' }"
        sizes="sm:100vw md:50vw lg:400px"
        alt="Image Placeholder"
        format="webp"
        fit="cover"
        width="280"
        height="210"
        :modifiers="{ roundCorner: '30:100' }"
      />
      <br />
      <br />
      <p>
        Übereinstimmenden Medienberichten zufolge wird Niklas Süle den FC Bayern am Ende der Saison verlassen. Die
        Münchner könnten den Abschied des 26-jährigen bereits am heutigen Mittwoch offiziell bestätigen.
      </p>
      <p>
        <a href="#">Wie die Münchner „tz“ berichtet</a>, hat der FC Bayern kurzfristig eine Pressekonferenz heute um 13
        Uhr einberufen. Demnach wird sich Oliver Kahn den Fragen der Medien stellen. Im Fokus soll es dabei vor allem um
        Niklas Süle und dessen geplatzte Vertragsverhandlung gehen. Das Blatt geht davon aus, dass der Klubchef sich zu
        den Hintergründen äußern wird, warum der Abwehrspieler sich gegen einen Verbleib beim Rekordmeister entschieden
        hat.
      </p>
      <p>
        Gerüchten zufolge liegt dies nicht nur an den unterschiedlichen finanziellen Vorstellungen zwischen Klub und
        Spieler, sondern auch an der fehlenden Wertschätzung durch die Bayern-Bosse in den vergangenen Jahren.
      </p>
      <!--<p style="background-color: yellow">Inhalt: {{ PAGE_CONTENT.metadescription }}</p>-->
    </section>
  </main>
</template>

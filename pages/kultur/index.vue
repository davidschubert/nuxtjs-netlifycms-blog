<template>
  <section id="container" role="main" style="width: 100%">
    <div id="cools" class="cools shown">
      <header class="cools__header nav-black">
        <h1 class="h1" v-if="$nuxt.isOffline">culture off</h1>
        <h1 class="h1" v-if="$nuxt.isOnline">culture on</h1>
      </header>

      <main class="scrollable">
        <div class="container">
          <div class="row">
            <div class="col col--1">
              <figure class="media media--3 media--small r r--1-1">
                <img src="/img/uploads/david_schubert.jpg" loading="auto" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2022/01/antoni_culture_01-22.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2021/12/antoni-christmas-02.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2021/12/antoni-zusammen-gegen-corona.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2021/12/antoni-christmas-01-1.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--3 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2021/12/IMG_4843.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <video
                  poster="https://antoni.de/wp-content/uploads/2021/12/summer-party-light.jpg"
                  preload="none"
                  autobuffer
                  autoplay
                  loop
                  muted
                  playsinline
                >
                  <source
                    src="https://antoni.de/wp-content/uploads/2021/12/summer-party-light.webm"
                    type="video/webm"
                  />
                  <source src="https://antoni.de/wp-content/uploads/2021/12/summer-party-light.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2021/10/culture_01_211015.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2021/10/horizont_award_211015.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <picture
                  poster="https://antoni.de/wp-content/uploads/2021/11/bar_martin_still_211103.jpg"
                  preload="false"
                  autobuffer
                  autoplay
                  loop
                  muted
                  playsinline
                >
                  <source
                    src="https://antoni.de/wp-content/uploads/2021/11/bar_martin_gif_211103_1.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://antoni.de/wp-content/uploads/2021/11/bar_martin_gif_211103.mp4"
                    type="video/mp4"
                  />
                </picture>
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--3 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2021/09/antoni-culture-eqg.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2021/10/culture_211015.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--3 media--small r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2021/03/katjes_nikeata_210303.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2021/03/running_crew_03_2021.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2021/03/culture_2_210311.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2021/03/culture_3_210311.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2021/03/culture_1_210311.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--3 media--small r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2021/01/antoni_scarf_xmas_2020.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2021/01/christmas-tree-2020.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--3 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2020/09/rooftop_20200903.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <video
                  poster="https://antoni.de/wp-content/uploads/2020/09/Posterimage_giga_rocket_200915.jpg"
                  preload="false"
                  autobuffer
                  autoplay
                  loop
                  muted
                  playsinline
                >
                  <source src="https://antoni.de/wp-content/uploads/2020/09/SquareRocket.webm" type="video/webm" />
                  <source src="https://antoni.de/wp-content/uploads/2020/09/SquareRocket.mp4" type="video/mp4" />
                </video>
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--3 media--small r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2020/09/katjes_granny_20200903.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2020/09/behind-the-scenes-sweet-power.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--3 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2020/08/IMG_7814.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2020/08/IMG_7817.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--3 media--small r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2020/08/Bildschirmfoto-2020-06-11-um-14.13.36-2-2.png"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2020/04/Teams_culture_antoni.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--3 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2020/02/DSC_1983.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2020/02/784E8050-036E-49BA-B541-1C1788F6EA9A.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--3 media--small r r--1-1">
                <img src="/img/uploads/david_schubert.jpg" loading="lazy" alt="David Schubert" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/12/office_view.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/09/post66.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/09/water4.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/09/post8.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/09/post7.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/09/post6.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/09/post5.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/09/post4-1.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/09/post44.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/09/post2-1.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/09/post33.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/09/block.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/09/post3.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/09/katjes.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/09/katj.jpg" loading="lazy" alt="" />
                <figcaption class="description">
                  <h2>katj</h2>
                </figcaption>
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/09/katjes4.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/06/1.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/09/block2.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/07/DSC_9423.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/06/adc_awards.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/06/2.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <video
                  poster="https://antoni.de/wp-content/uploads/2019/06/adc2.jpg"
                  preload="false"
                  autobuffer
                  autoplay
                  loop
                  muted
                  playsinline
                >
                  <source src="https://antoni.de/wp-content/uploads/2019/06/adc2.webm" type="video/webm" />
                  <source src="https://antoni.de/wp-content/uploads/2019/06/adc2.mp4" type="video/mp4" />
                </video>
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--3 media--small r r--1-1">
                <img src="" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/03/cult65.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--3 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/03/cult5.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/03/cult4.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/03/cult_02.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/03/cult_01.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/01/FW_weloveyou_078.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--3 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2019/09/post3-1.jpg" loading="lazy" alt="" />
                <figcaption class="description">
                  <h2>post3</h2>
                </figcaption>
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/12/stolen_stars.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2018/10/41882031_1802872639761027_4392090868674730616_n.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2018/10/37243046_2185020255075586_1743551749156765696_n.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2018/10/40298721_269055923714511_3799137506653748611_n.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/08/cult2.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/08/cult_futball.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/08/cult3.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/08/cult53.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/08/cult33.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/07/AfterlightImage.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/08/soccer_gp.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/07/img1.jpg" loading="lazy" alt="" />
                <figcaption class="description">
                  <h2>img1</h2>
                </figcaption>
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <video
                  poster="https://antoni.de/wp-content/uploads/2018/07/antoni-blockparty-story_1.jpg"
                  preload="false"
                  autobuffer
                  autoplay
                  loop
                  muted
                  playsinline
                >
                  <source
                    src="https://antoni.de/wp-content/uploads/2018/07/antoni-blockparty-story_1.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://antoni.de/wp-content/uploads/2018/07/antoni-blockparty-story_1.mp4"
                    type="video/mp4"
                  />
                </video>
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/07/bloc2.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/07/blackparty.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/07/fish.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/05/01_martin.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/06/01.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/05/all02.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--3 media--small r r--1-1">
                <img src="" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/05/ahoj_2.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--3 media--small r r--1-1">
                <img src="" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/05/hand_nails.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/05/rockyxantoni.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/05/culture_kart.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/04/culture_1.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/04/IMG_2745-Kopie_1.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/04/IMG_2148_1.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/04/top1.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/04/culture_team.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/04/culture_tim-1.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/04/culture_3dfloor.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/02/hazrl_johanna.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2018/02/square_culture_management.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/02/cult2.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2017/12/culture_5.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2017/12/culture111-600x600-c-default.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2017/08/17436226_1780916522225474_5264563799070182564_o-1024x1024-c-default.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/01/strongerthentime2.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/01/strongerthentime.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <video
                  poster="https://antoni.de/wp-content/uploads/2018/01/culture_year.jpg"
                  preload="false"
                  autobuffer
                  autoplay
                  loop
                  muted
                  playsinline
                >
                  <source src="https://antoni.de/wp-content/uploads/2018/01/culture_year_2.webm" type="video/webm" />
                  <source src="https://antoni.de/wp-content/uploads/2018/01/culture_year_2.mp4" type="video/mp4" />
                </video>
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/01/culture_arnold.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/01/culture_matti.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/01/culture.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2018/01/culture3.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2018/01/culture_xmas4-600x600-c-default.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2018/01/culture_xmas-1024x1024-c-default.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2017/08/tumb_mid-600x600-c-default.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2017/08/cool_9.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <video
                  poster="https://antoni.de/wp-content/uploads/2017/08/culture_2-1024x1024-c-default.jpg"
                  preload="false"
                  autobuffer
                  autoplay
                  loop
                  muted
                  playsinline
                >
                  <source src="https://antoni.de/wp-content/uploads/2017/08/culture_2222.webm" type="video/webm" />
                  <source src="https://antoni.de/wp-content/uploads/2017/08/culture_2222.mp4" type="video/mp4" />
                </video>
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--3 media--small r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2017/08/cool_bt2-600x600-c-default.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2017/08/cool_13.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2017/12/antoniii-600x600-c-default.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2017/08/cool_6.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2017/12/DSC_5800-1.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2017/12/culture_6-600x600-c-default.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2017/08/IMG_9323-600x600-c-default.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2017/12/culture_1-1024x1024-c-default.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2017/08/cool_19-600x600-c-default.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2017/08/cool_8.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <video
                  poster="https://antoni.de/wp-content/uploads/2017/08/cool_page1-1024x1024-c-default.jpg"
                  preload="false"
                  autobuffer
                  autoplay
                  loop
                  muted
                  playsinline
                >
                  <source src="https://antoni.de/wp-content/uploads/2017/08/culture_loop1.webm" type="video/webm" />
                  <source
                    src="https://antoni.de/wp-content/uploads/2017/08/04138DD0-C1AF-4868-A57F-4F05E3127B9E.mp4"
                    type="video/mp4"
                  />
                </video>
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2017/08/IMG_9448-600x600-c-default.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2017/12/welcome.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2017/08/cool_7.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2017/12/mb_fire-600x600-c-default.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2017/08/cool_15-600x600-c-default.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2017/12/culture_3.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2017/12/youarenotinvited.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2017/12/vr-600x600-c-default.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2017/12/no_parking-1024x1024-c-default.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2017/12/snow_kamp-600x600-c-default.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2017/08/super3.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2017/12/skate.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2017/12/culture222.jpg" loading="lazy" alt="" />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2017/12/culture66.jpg" loading="lazy" alt="" />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img src="https://antoni.de/wp-content/uploads/2017/10/makingof_lion-1.jpg" loading="lazy" alt="" />
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col col--1">
              <figure class="media media--1 media--small r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2017/12/culture77-600x600-c-default.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
              <figure class="media media--2 media--small r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2017/12/culture87-600x600-c-default.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
            <div class="col col--2">
              <figure class="media media--large r r--1-1">
                <img
                  src="https://antoni.de/wp-content/uploads/2017/12/culture33-1024x1024-c-default.jpg"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
export default {
  transition: {
    name: 'intro',
    mode: 'out-in',
    duration: 300,
  },
}
</script>

<style>
/* ::selection {
  background: #222;
  color: #fff;
} */

/* div,
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

body {
  line-height: 1;
}

body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #000;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -ms-font-smoothing: antialiased;
  font-smoothing: antialiased;
  height: 100vh;
  width: 100%;
} */

@media screen and (max-width: 740px) {
  main {
    padding-left: 0;
    padding-right: 0;
  }
}

#container > div {
  visibility: hidden;
}

#container > div.shown {
  z-index: 2;
  visibility: inherit;
}

.cools {
  position: relative;
}

.cools__header {
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.cools__header .h1 {
  color: #000;
  margin: auto;
  line-height: 1;
  letter-spacing: -0.02em;
}

.h1 {
  font-size: 13vw;
  margin-left: -0.4vw;
  font-weight: bold;
  line-height: 0;
}

.h1,
.h2,
.h3,
.h4 {
  text-rendering: optimizelegibility;
}

/* Scrollable Images */
.scrollable {
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  overflow: hidden;
}

.cools .scrollable {
  z-index: 2;
  padding-top: 80vh;
}

/* Container */
.container {
  width: calc(100% - 88px);
  margin-left: 44px;
  box-sizing: border-box;
}

@media screen and (max-width: 740px) {
  .container,
  .case .section--video .content-wrapper,
  .case .section--slideshow-videos .content-wrapper,
  .case .section--slideshow-photos .content-wrapper {
    width: calc(100% - 44px);
    margin-left: 22px;
  }
}

/* Image Boxen */
.cools .row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

@media screen and (max-width: 740px) {
  .cools .row {
    display: block !important;
    width: 100%;
    margin-bottom: 0 !important;
  }
}

/** childs */
.cools .row:nth-child(2n) {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 6.34516%;
}

.cools .row:nth-child(2n + 1) {
  margin-bottom: 11.1678%;
}

/** coles */
.cools .row .col {
  width: 49.23875%;
}

@media screen and (max-width: 740px) {
  .cools .row .col {
    display: block;
    margin-bottom: 0 !important;
  }
}

@media screen and (max-width: 740px) {
  .cools .row .col--1,
  .cools .row .col--2 {
    width: 87.30969% !important;
  }
}

@media screen and (max-width: 740px) {
  .cools .row .col--2 {
    margin-left: 6.34516%;
  }
}

@media screen and (max-width: 740px) {
  .cools .row .col .media {
    margin-top: 0 !important;
    margin-bottom: 11.1678% !important;
  }
}

.cools .row:nth-child(2n) .col--1 {
  -webkit-box-ordinal-group: 3;
  -webkit-order: 2;
  -ms-flex-order: 2;
  order: 2;
  width: 42.89359%;
}

.cools .row:nth-child(2n) .col--2 {
  width: 49.23875%;
  margin-left: 12.88651%;
  -webkit-box-ordinal-group: 2;
  -webkit-order: 1;
  -ms-flex-order: 1;
  order: 1;
}

/** figure */
.r {
  position: relative;
  display: block;
}

.r::after {
  content: '';
  display: block;
}

.r--1-1::after {
  padding-bottom: 100%;
}

.cools .row .col .media {
  position: relative;
  display: block;
  overflow: hidden;
}

.cools .row:nth-child(2n) .col--1 .media {
  width: 55.62164%;
}

.cools .row:nth-child(2n + 1) .col--1 .media {
  width: 48.45395%;
}

.cools .row:nth-child(2n) .col--1 .media--1 {
  margin-left: 14.79279%;
  margin-top: -11.24328%;
  margin-bottom: 26.03607%;
}

.cools .row:nth-child(2n + 1) .col--1 .media--1 {
  margin-left: 25.77302%;
  margin-top: -3.04502%;
  margin-bottom: 15.97861%;
}

.cools .row:nth-child(2n) .col--1 .media--2 {
  margin-left: 44.37836%;
}

.cools .row:nth-child(2n) .col--1 .media--3 {
  margin: 18.34229% 14.79279% 0 14.79279%;
}

.cools .row:nth-child(2n + 1) .col--1 .media--3 {
  margin: 15.97861% 12.88651% 0 25.77302%;
}

/** image */
.cools .row .col .media img {
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  display: block;
}

/** video */
video {
  object-fit: contain;
}

.cools .row .col .media video {
  height: 100%;
  left: 50%;
  position: absolute;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}

@media (min-width: 1536px) {
  .container {
    max-width: 100%;
  }
}
</style>

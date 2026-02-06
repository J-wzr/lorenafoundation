<template>
  <q-page class="hero-page">
    <!-- Background Image -->
    <div class="hero-background"></div>

    <!-- Hero Content -->
    <div class="hero-container">
      <!-- Remove q-container, just use a div -->
      <div class="full-width-container">
        <div class="row items-center hero-row no-wrap">
          <!-- Left Side: Text Content -->
          <div class="col-12 col-md-6 text-column">
            <div class="hero-text">
              <!-- Bible Verse Quote -->
              <div class="quote-mark text-h2 q-mb-sm">"</div>
              <p class="bible-verse text-body1 q-mb-md">
                But the fruit of the spirit is love, joy, peace, long suffering,
                gentleness, goodness, faith, meekness, temperance: against such
                there is no law.
              </p>
              <p
                class="bible-reference text-subtitle1 text-weight-bold q-mb-xl"
              >
                Galatians 5:22-23 (KJV)
              </p>

              <!-- Typing Effect Title -->
              <h1 class="hero-title text-h3 text-weight-bold">
                <span ref="typingText" class="typed-text"></span
                ><span class="typing-cursor" v-show="showCursor"></span>
              </h1>

              <a href="/campaigns" class="campaigns-link">
                <span class="link-arrow">→</span> Explore Our Campaigns
              </a>
            </div>
          </div>

          <!-- Right Side: Carousel -->
          <div class="col-12 col-md-6 carousel-column">
            <!-- Custom Preloader -->
            <div v-if="loading" class="carousel-preloader">
              <div class="heart-loader">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path
                    class="heart-path"
                    d="M50,85 C50,85 15,60 15,35 C15,20 25,10 35,10 C42,10 47,14 50,20 C53,14 58,10 65,10 C75,10 85,20 85,35 C85,60 50,85 50,85 Z"
                  />
                </svg>
                <div class="loader-text">Loading Stories...</div>
              </div>
            </div>

            <div v-show="!loading" class="carousel-container">
              <q-carousel
                v-model="slide"
                animated
                infinite
                :autoplay="6000"
                swipeable
                control-color="white"
                class="hero-carousel"
                @transition="onSlideTransition"
              >
                <q-carousel-slide
                  v-for="(image, index) in images"
                  :key="index"
                  :name="index"
                  class="carousel-slide"
                >
                  <div
                    class="slide-image"
                    :style="{ backgroundImage: `url(${image.src})` }"
                    :class="{ 'slide-animating': currentSlide === index }"
                  ></div>
                  <div class="carousel-overlay-fade"></div>
                  <div class="carousel-caption">
                    <div
                      class="caption-content"
                      :class="{ 'caption-visible': currentSlide === index }"
                    >
                      <h3 class="text-h4 text-weight-bold q-mb-sm">
                        {{ image.caption }}
                      </h3>
                      <p class="text-body1">{{ image.description }}</p>
                    </div>
                  </div>
                </q-carousel-slide>

                <template v-slot:control>
                  <q-carousel-control
                    position="bottom-right"
                    :offset="[18, 18]"
                  >
                    <div class="carousel-controls-wrapper">
                      <div class="slide-counter">
                        {{ slide + 1 }} of {{ images.length }}
                      </div>
                      <div class="carousel-controls row q-gutter-xs">
                        <div
                          v-for="(img, n) in images"
                          :key="n"
                          :class="['control-dot', { active: slide === n }]"
                          @click="changeSlide(n)"
                        ></div>
                      </div>
                    </div>
                  </q-carousel-control>
                </template>
              </q-carousel>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- More content goes below -->
    <section class="impact-section">
      <div class="impact-container">
        <div class="impact-row">
          <!-- Left Side: Animated Graphics with Campaigns -->
          <div class="graphics-column">
            <div class="impact-graphics">
              <!-- Central Campaigns Grid -->
              <div class="central-illustration">
                <div class="ripple-effect ripple-1"></div>
                <div class="ripple-effect ripple-2"></div>
                <div class="ripple-effect ripple-3"></div>
                <div class="campaigns-grid">
                  <a href="/wash" class="campaign-item">
                    <div class="campaign-icon">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                        <circle cx="12" cy="14" r="2" />
                      </svg>
                    </div>
                    <div class="campaign-name">WASH</div>
                  </a>

                  <a href="/community-health" class="campaign-item">
                    <div class="campaign-icon">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9 4h6v2H9V4zm3 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
                        />
                        <path
                          d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                        />
                      </svg>
                    </div>
                    <div class="campaign-name">Community Health</div>
                  </a>

                  <a href="/education-for-all" class="campaign-item">
                    <div class="campaign-icon">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"
                        />
                      </svg>
                    </div>
                    <div class="campaign-name">Education for All</div>
                  </a>

                  <a href="/equality-and-empowerment" class="campaign-item">
                    <div class="campaign-icon">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
                        />
                        <circle cx="12" cy="16" r="1.5" />
                      </svg>
                    </div>
                    <div class="campaign-name">Equality & Empowerment</div>
                  </a>

                  <a href="/green-transformation" class="campaign-item">
                    <div class="campaign-icon">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"
                        />
                        <path
                          d="M8.5 12c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S8.5 13.38 8.5 12z"
                        />
                      </svg>
                    </div>
                    <div class="campaign-name">Green Transformation</div>
                  </a>

                  <a
                    href="/livelihood-and-economic-inclusion"
                    class="campaign-item"
                  >
                    <div class="campaign-icon">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"
                        />
                      </svg>
                    </div>
                    <div class="campaign-name">
                      Livelihood & Economic Inclusion
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Side: Content -->
          <div class="content-column">
            <div class="impact-content">
              <h2 class="impact-title">We do Appreciate, Thank You!</h2>

              <p class="impact-description">
                Your support helps us to provide lasting and impactful
                solutions, bringing hope and dignity to children, women and men
                in need. Even
                <span class="highlight-amount">$10 to $50</span> can create
                real, lasting change in families and communities.
              </p>

              <div class="transparency-note">
                <div class="note-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="note-text">
                  <strong>Transparency & Accountability:</strong> We ensure
                  every contribution is used effectively to empower grassroots
                  communities. All donations are tax-deductible to the full
                  extent permitted by law.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: "HomePage",

  meta: {
    title: "Lorena Foundation - Together We Can Transform Lives",
    meta: {
      description: { name: "description", content: "Lorena Foundation is a non-profit empowering communities through education, health, equality, and sustainable development in Uganda and beyond." },
      ogTitle: { property: "og:title", content: "Lorena Foundation - Together We Can Transform Lives" },
      ogDescription: { property: "og:description", content: "Empowering communities through education, health, equality, and sustainable development." },
    },
  },

  data() {
    return {
      slide: 0,
      currentSlide: 0,
      loading: true,
      showCursor: false,
      fullText: "Together, We Can Transform Lives",
      typeSpeed: 90,
      images: [
        {
          src: "/water.jpg",
          caption: "WASH (Water, Sanitation & Health)",
          description: "Give Water. Give Life. Transform a Future.",
        },
        {
          src: "/woman_carrying_baby.jpg",
          caption: "Community Health",
          description: "Health is Not a Privilege. It's a Human Right.",
        },
        {
          src: "/group-african-kids-classroom-education.jpg",
          caption: "Education for All",
          description: "Educate a Child. Empower a Future.",
        },
        {
          src: "/carpenter-cutting-mdf-board-inside-workshop-empowerment.jpg",
          caption: "Equality and Empowerment",
          description: "Lift Voices. Break Chains. Empower Futures.",
        },
        {
          src: "/portrait-countryside-worker-posing-green-transformation.jpg",
          caption: "Green Transformation",
          description:
            "Protect the Planet. Empower Communities. Transform the Future",
        },
        {
          src: "/medium-shot-smiley-elderly-woman-outside-mission.jpg",
          caption: "Livelihood & Economic Inclusion",
          description: "Opportunity Shouldn’t Be a Privilege.",
        },
      ],
    };
  },

  watch: {
    slide(newVal) {
      this.currentSlide = newVal;
    },
  },

  mounted() {
    setTimeout(() => {
      this.loading = false;
      setTimeout(() => {
        this.typeText();
      }, 300);
    }, 2000);
  },

  methods: {
    typeText() {
      let i = 0;
      const chars = this.fullText.split("");
      const type = () => {
        if (i < chars.length) {
          const span = document.createElement("span");
          span.textContent = chars[i];
          span.className = "letter";
          span.style.animationDelay = `${i * 0.05}s`;
          this.$refs.typingText.appendChild(span);
          i++;
          setTimeout(type, this.typeSpeed);
        } else {
          this.showCursor = false;
        }
      };
      type();
    },

    changeSlide(index) {
      this.slide = index;
      this.currentSlide = index;
    },

    onSlideTransition(newVal, oldVal) {
      this.currentSlide = newVal;
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
}

.hero-page {
  position: relative;
  background-color: #f8f9fa;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90vh;
  background-image: url("/big_background_beautiful.png");
  background-size: cover;
  background-position: center;
  opacity: 0.35;
  z-index: 0;
}

.hero-container {
  position: relative;
  height: 90vh;
  display: flex;
  align-items: center;
  z-index: 1;
}

.full-width-container {
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 100%;
}

.hero-row {
  height: 90vh;
  margin: 0 !important;
  padding: 0 !important;
}

.text-column {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0;
  background-image: url("/big_bg_home.png");
}

.carousel-column {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 !important;
  margin: 0 !important;
  position: relative;
  overflow: hidden;
}

.hero-text {
  padding: 20px 60px 20px 40px;
  color: #2c3e50;
  width: 100%;
}

.quote-mark {
  color: #1976d2;
  line-height: 0.8;
  font-weight: 700;
}

.bible-verse {
  font-style: italic;
  line-height: 1.8;
  color: #34495e;
  font-size: 1rem;
}

.bible-reference {
  color: #c62828;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
}

.hero-title {
  color: #1a1a1a;
  min-height: 80px;
  font-weight: 800;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
}

.typed-text {
  display: inline-block;
}

.letter {
  display: inline-block;
  opacity: 0;
  transform: translateY(-20px) rotate(-5deg);
  animation: letterDrop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes letterDrop {
  0% {
    opacity: 0;
    transform: translateY(-20px) rotate(-5deg);
  }
  50% {
    transform: translateY(5px) rotate(2deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotate(0deg);
  }
}

.typing-cursor {
  display: inline-block;
  width: 3px;
  height: 1.1em;
  background: linear-gradient(to bottom, #1976d2, #42a5f5);
  margin-left: 4px;
  box-shadow: 0 0 8px rgba(25, 118, 210, 0.5);
}

.carousel-preloader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.heart-loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.heart-loader svg {
  width: 80px;
  height: 80px;
}

.heart-path {
  fill: none;
  stroke: #e74c3c;
  stroke-width: 3;
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation: heartBeat 2s ease-in-out infinite;
  transform-origin: center;
}

@keyframes heartBeat {
  0%,
  100% {
    stroke-dashoffset: 300;
    fill: transparent;
    transform: scale(1);
  }
  40% {
    stroke-dashoffset: 0;
    fill: rgba(231, 76, 60, 0.2);
  }
  50% {
    fill: rgba(231, 76, 60, 0.6);
    transform: scale(1.1);
  }
  60% {
    fill: rgba(231, 76, 60, 0.2);
    transform: scale(1);
  }
}

.loader-text {
  color: #34495e;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  animation: fadeInOut 1.5s ease-in-out infinite;
}

@keyframes fadeInOut {
  0%,
  100% {
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
}

.carousel-container {
  width: 100%;
  height: 100%;
}

.hero-carousel {
  width: 100% !important;
  height: 90vh !important;
  border-radius: 0 0 0 24px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.carousel-slide {
  position: relative;
  overflow: hidden;
}

.slide-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: none;
}

.slide-image.slide-animating {
  animation: kenBurnsZoom 6s ease-out forwards;
}

@keyframes kenBurnsZoom {
  0% {
    transform: scale(1);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: scale(1.15);
    opacity: 1;
  }
}

.carousel-overlay-fade {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.1) 40%,
    rgba(0, 0, 0, 0.5) 70%,
    rgba(0, 0, 0, 0.75) 100%
  );
  z-index: 1;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px 40px 70px;
  color: white;
  z-index: 2;
}

.caption-content {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.caption-content.caption-visible {
  opacity: 1;
  transform: translateY(0);
}

.caption-content h3 {
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.5px;
  font-size: 1.8rem;
}

.caption-content p {
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  opacity: 0.95;
  line-height: 1.6;
  font-size: 1rem;
}

.carousel-controls-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.slide-counter {
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.5px;
}

.carousel-controls {
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.control-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 2px solid transparent;
  z-index: 100;
}

.control-dot:hover {
  background: rgba(255, 255, 255, 0.7);
  transform: scale(1.2);
}

.control-dot.active {
  background: rgba(255, 200, 200, 0.95);
  transform: scale(1.4);
  box-shadow: 0 0 12px rgba(255, 200, 200, 0.6);
}

.content-section {
  position: relative;
  z-index: 1;
  background: white;
}

.campaigns-link {
  display: inline-block;
  margin-top: 20px;
  color: #1976d2;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.campaigns-link:hover {
  color: #1565c0;
  transform: translateX(5px);
}

.link-arrow {
  display: inline-block;
  transition: transform 0.3s ease;
}

.campaigns-link:hover .link-arrow {
  transform: translateX(5px);
}

/* Mobile Styles */
@media (max-width: 1023px) {
  .hero-background {
    height: 50vh;
  }

  .hero-container {
    height: auto;
  }

  .hero-row {
    height: auto;
    flex-direction: column;
  }

  .text-column {
    order: 2;
    height: auto;
    padding: 30px 0;
  }

  .carousel-column {
    order: 1;
    height: 50vh;
    padding: 0;
  }

  .hero-carousel {
    height: 50vh !important;
    border-radius: 0 0 20px 20px;
  }

  .carousel-caption {
    padding: 25px 20px 60px;
  }

  .caption-content h3 {
    font-size: 1.4rem;
  }

  .caption-content p {
    font-size: 0.85rem;
  }

  .hero-text {
    padding: 0 20px;
  }

  .hero-title {
    font-size: 1.6rem;
    min-height: 60px;
  }

  .bible-verse {
    font-size: 0.95rem;
  }
}

@media (max-width: 599px) {
  .carousel-column {
    height: 45vh;
  }

  .hero-carousel {
    height: 45vh !important;
  }

  .caption-content h3 {
    font-size: 1.2rem;
  }

  .caption-content p {
    font-size: 0.8rem;
  }

  .hero-title {
    font-size: 1.4rem;
    min-height: 55px;
  }
}

.impact-section {
  position: relative;
  padding: 50px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #e8f4f8 100%);
  overflow: hidden;
}

.impact-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
      circle at 20% 30%,
      rgba(52, 152, 219, 0.12) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(231, 76, 60, 0.12) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 50% 50%,
      rgba(46, 204, 113, 0.08) 0%,
      transparent 60%
    );
  pointer-events: none;
  z-index: 0;
}

.impact-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
  position: relative;
  z-index: 1;
}

.impact-row {
  display: flex;
  align-items: center;
  gap: 60px;
}

.graphics-column {
  flex: 1;
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-column {
  flex: 1;
  padding: 0 20px;
}

.impact-graphics {
  position: relative;
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Central Campaigns Display */
.central-illustration {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.campaigns-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  max-width: 550px;
  animation: pulse 4s ease-in-out infinite;
  position: relative;
  z-index: 2;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.01);
  }
}

.campaign-item {
  background: white;
  padding: 15px 8px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
  min-height: 150px;
  background-image: url("/big_bg_home.png");
}

.campaign-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(52, 152, 219, 0.1),
    rgba(46, 204, 113, 0.1)
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.campaign-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}

.campaign-item:hover::before {
  opacity: 1;
}

.campaign-icon {
  width: 52px;
  height: 52px;
  position: relative;
  z-index: 1;
  flex-shrink: 0;
}

.campaign-icon svg {
  width: 100%;
  height: 100%;
  fill: #95a5a6;
  transition: fill 0.4s ease;
}

.campaign-item:hover .campaign-icon svg {
  fill: #3498db;
}

.campaign-name {
  font-size: 14px;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  line-height: 1.4;
  position: relative;
  z-index: 1;
}

/* Ripple Effects around grid - Subtle and Soft */
.ripple-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(52, 152, 219, 0.2) 0%,
    transparent 70%
  );
  animation: ripple 6s ease-in-out infinite;
  pointer-events: none;
  filter: blur(30px);
  z-index: 1;
}

.ripple-1 {
  animation-delay: 0s;
}

.ripple-2 {
  animation-delay: 2s;
  background: radial-gradient(
    circle,
    rgba(46, 204, 113, 0.18) 0%,
    transparent 70%
  );
}

.ripple-3 {
  animation-delay: 4s;
  background: radial-gradient(
    circle,
    rgba(155, 89, 182, 0.15) 0%,
    transparent 70%
  );
}

@keyframes ripple {
  0% {
    width: 350px;
    height: 350px;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    width: 800px;
    height: 800px;
    opacity: 0;
  }
}

/* Content Styles */
.impact-content {
  max-width: 600px;
}

.impact-title {
  font-size: 2rem;
  font-weight: 800;
  color: #0b72d9;
  line-height: 1.2;
  margin-bottom: 25px;
  animation: fadeInUp 0.8s ease-out 0.2s backwards;
}

.impact-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #34495e;
  margin-bottom: 35px;
  animation: fadeInUp 0.8s ease-out 0.4s backwards;
}

.highlight-amount {
  color: #e74c3c;
  font-weight: 700;
  font-size: 1.2em;
}

.transparency-note {
  display: flex;
  gap: 15px;
  padding: 25px;
  background: linear-gradient(135deg, #e8f4f8, #d4edfa);
  border-left: 4px solid #3498db;
  border-radius: 8px;
  margin-bottom: 35px;
  animation: fadeInUp 0.8s ease-out 0.8s backwards;
}

.note-icon {
  color: #3498db;
  flex-shrink: 0;
}

.note-icon svg {
  width: 32px;
  height: 32px;
}

.note-text {
  font-size: 14px;
  line-height: 1.7;
  color: #2c3e50;
}

.note-text strong {
  color: #1a1a1a;
  display: block;
  margin-bottom: 5px;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Mobile Responsive */
@media (max-width: 1023px) {
  .impact-section {
    padding: 20px 0;
  }

  .impact-row {
    flex-direction: column;
    gap: 40px;
  }

  .graphics-column {
    min-height: 500px;
    order: 1; /* Graphics FIRST on mobile */
  }

  .content-column {
    order: 2; /* Content SECOND on mobile */
  }

  .impact-graphics {
    height: 500px;
  }

  .impact-title {
    font-size: 2.2rem;
  }

  .campaigns-grid {
    grid-template-columns: repeat(2, 1fr);
    max-width: 400px;
    gap: 20px;
  }

  .campaign-item {
    min-height: 130px;
    padding: 25px 15px;
  }

  .campaign-icon {
    width: 44px;
    height: 44px;
  }

  .campaign-name {
    font-size: 12px;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .btn-secondary {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 599px) {
  .impact-title {
    font-size: 1.8rem;
  }

  .impact-description {
    font-size: 1rem;
  }

  .campaigns-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    max-width: 320px;
  }

  .campaign-item {
    padding: 20px 15px;
  }

  .campaign-icon {
    font-size: 28px;
  }

  .campaign-name {
    font-size: 11px;
  }

  .transparency-note {
    flex-direction: column;
    padding: 20px;
  }

  .impact-card {
    display: none; /* Hide floating cards on very small screens */
  }
}
</style>

<template>
  <q-page class="campaigns-page">
    <!-- Hero Banner -->
    <section class="hero-banner">
      <div
        class="hero-bg"
        :style="{
          backgroundImage: 'url(/paradosi/par1.jpg)',
        }"
      ></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-badge">OUR CAMPAIGNS</span>
        <h1 class="hero-title">Making an Impact Together</h1>
      </div>
    </section>

    <!-- Blog Post Content -->
    <section class="blog-section">
      <div class="blog-container">
        <!-- Campaign Number + Title Inline -->
        <div class="campaign-header">
          <span class="campaign-number">1</span>
          <h2 class="campaign-title">PARADOSI</h2>
        </div>

        <div class="title-divider"></div>

        <p class="campaign-intro">
          Paradosi is a flagship development program designed to strengthen
          career readiness, mentorship, and leadership among young people. The
          program equips participants with practical skills, guidance, and
          exposure that support their growth both academically and personally.
        </p>

        <p class="activities-lead">
          The activities include but are not limited to:
        </p>

        <ul class="activities-list">
          <li>
            <span class="bullet-icon"></span>
            <span>Career awareness and skills development sessions.</span>
          </li>
          <li>
            <span class="bullet-icon"></span>
            <span>Leadership and values-based training.</span>
          </li>
          <li>
            <span class="bullet-icon"></span>
            <span>Mentorship engagements with trained facilitators.</span>
          </li>
          <li>
            <span class="bullet-icon"></span>
            <span
              >Interactive workshops aimed at building confidence, communication
              and goal setting.</span
            >
          </li>
        </ul>

        <p class="campaign-closing">
          All sessions are conducted by trained facilitators, are fully
          participatory, and are designed to complement the education
          institutions' existing efforts in nurturing disciplined, confident,
          and future-focused learners.
        </p>

        <!-- Image Gallery - Auto Flip -->
        <div class="gallery-wrapper">
          <h3 class="gallery-heading">Gallery</h3>

          <div
            class="flipbook"
            @mouseenter="pauseAutoFlip"
            @mouseleave="resumeAutoFlip"
          >
            <!-- Left page (previous image) -->
            <div class="flipbook-left">
              <transition name="page-left" mode="out-in">
                <img
                  :key="'left-' + leftIndex"
                  :src="galleryImages[leftIndex].src"
                  :alt="galleryImages[leftIndex].alt"
                  class="flipbook-img"
                />
              </transition>
            </div>

            <!-- Right page (current/flipping image) -->
            <div class="flipbook-right">
              <transition name="page-right" mode="out-in">
                <img
                  :key="'right-' + rightIndex"
                  :src="galleryImages[rightIndex].src"
                  :alt="galleryImages[rightIndex].alt"
                  class="flipbook-img"
                />
              </transition>
            </div>

            <!-- Center fold line -->
            <div class="flipbook-fold"></div>

            <!-- Nav arrows -->
            <button
              class="flip-arrow flip-arrow-left"
              @click="flipPrev"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              class="flip-arrow flip-arrow-right"
              @click="flipNext"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>

            <!-- Page dots -->
            <div class="flip-dots">
              <span
                v-for="(_, i) in totalSpreads"
                :key="i"
                class="flip-dot"
                :class="{ active: i === currentSpread }"
                @click="goToSpread(i)"
              ></span>
            </div>
          </div>
        </div>

        <!-- Get in Touch -->
        <div class="get-in-touch">
          <p>Interested in supporting or learning more about PARADOSI?</p>
          <router-link to="/contact-us" class="touch-link">
            Get in Touch
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="arrow-icon"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </router-link>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: "CampaignsPage",

  meta: {
    title: "Our Campaigns - Lorena Foundation",
    meta: {
      description: { name: "description", content: "Explore Lorena Foundation's campaigns including PARADOSI, WASH, Education, Health and more - making a lasting impact in communities." },
      ogTitle: { property: "og:title", content: "Our Campaigns - Lorena Foundation" },
      ogDescription: { property: "og:description", content: "Explore our campaigns making a lasting impact in communities." },
    },
  },

  data() {
    return {
      currentSpread: 0,
      autoFlipTimer: null,
      galleryImages: [
        { src: "/paradosi/par1.jpg", alt: "PARADOSI program session" },
        { src: "/paradosi/par2.jpg", alt: "Participants in training" },
        { src: "/paradosi/par3.jpg", alt: "Mentorship engagement" },
        { src: "/paradosi/par4.jpg", alt: "Leadership workshop" },
        { src: "/paradosi/par5.jpg", alt: "Skills development activity" },
        { src: "/paradosi/par6.jpg", alt: "Career awareness session" },
        { src: "/paradosi/par7.jpg", alt: "Interactive workshop" },
        { src: "/paradosi/par8.jpg", alt: "Group facilitation" },
        { src: "/paradosi/par9.jpg", alt: "Values-based training" },
        { src: "/paradosi/par10.jpg", alt: "Building confidence" },
        { src: "/paradosi/par11.jpg", alt: "Goal setting session" },
        { src: "/paradosi/par12.jpg", alt: "Future-focused learners" },
      ],
    };
  },

  computed: {
    totalSpreads() {
      return Math.ceil(this.galleryImages.length / 2);
    },
    leftIndex() {
      return this.currentSpread * 2;
    },
    rightIndex() {
      const idx = this.currentSpread * 2 + 1;
      return idx < this.galleryImages.length ? idx : this.leftIndex;
    },
  },

  mounted() {
    this.startAutoFlip();
  },

  beforeUnmount() {
    this.stopAutoFlip();
  },

  methods: {
    flipNext() {
      if (this.currentSpread < this.totalSpreads - 1) {
        this.currentSpread++;
      } else {
        this.currentSpread = 0;
      }
      this.restartAutoFlip();
    },
    flipPrev() {
      if (this.currentSpread > 0) {
        this.currentSpread--;
      } else {
        this.currentSpread = this.totalSpreads - 1;
      }
      this.restartAutoFlip();
    },
    goToSpread(i) {
      this.currentSpread = i;
      this.restartAutoFlip();
    },
    startAutoFlip() {
      if (this.autoFlipTimer) return;
      this.autoFlipTimer = setInterval(() => {
        if (this.currentSpread < this.totalSpreads - 1) {
          this.currentSpread++;
        } else {
          this.currentSpread = 0;
        }
      }, 4000);
    },
    stopAutoFlip() {
      if (this.autoFlipTimer) {
        clearInterval(this.autoFlipTimer);
        this.autoFlipTimer = null;
      }
    },
    restartAutoFlip() {
      this.stopAutoFlip();
      this.startAutoFlip();
    },
    pauseAutoFlip() {
      this.stopAutoFlip();
    },
    resumeAutoFlip() {
      this.startAutoFlip();
    },
  },
};
</script>

<style scoped lang="scss">
* {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
}

.campaigns-page {
  background-color: #f8f9fa;
}

/* ==================== HERO ==================== */
.hero-banner {
  position: relative;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center 30%;
  filter: brightness(0.5);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(10, 58, 92, 0.7),
    rgba(19, 138, 183, 0.6)
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
}

.hero-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 5px 16px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.5px;
  margin-bottom: 10px;
}

.hero-title {
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  margin: 0;
}

/* ==================== BLOG ==================== */
.blog-section {
  padding: 30px 20px 50px;
}

.blog-container {
  max-width: 720px;
  margin: 0 auto;
  background: white;
  border-radius: 14px;
  padding: 32px 36px;
  box-shadow: 0 2px 16px rgba(10, 58, 92, 0.06);
  margin-top: -40px;
  position: relative;
  z-index: 2;
}

/* Number + Title inline */
.campaign-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 10px;
}

.campaign-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #138ab7, #19aae0);
  color: white;
  font-size: 17px;
  font-weight: 700;
  box-shadow: 0 3px 10px rgba(19, 138, 183, 0.3);
  flex-shrink: 0;
}

.campaign-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #0a3a5c;
  letter-spacing: 2px;
  margin: 0;
}

.title-divider {
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #e53935, #d35400);
  border-radius: 3px;
  margin: 0 auto 20px;
}

.campaign-intro {
  font-size: 0.88rem;
  line-height: 1.7;
  color: #34495e;
  margin-bottom: 12px;
}

.activities-lead {
  font-size: 0.86rem;
  color: #34495e;
  margin-bottom: 10px;
  font-weight: 500;
}

.activities-list {
  list-style: none;
  padding: 0;
  margin: 0 0 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 0.86rem;
    line-height: 1.6;
    color: #34495e;
  }
}

.bullet-icon {
  flex-shrink: 0;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #19aae0;
  margin-top: 8px;
}

.campaign-closing {
  font-size: 0.88rem;
  line-height: 1.7;
  color: #34495e;
  padding-top: 8px;
  border-top: 1px solid #eef2f5;
  margin-top: 8px;
}

/* ==================== FLIPBOOK GALLERY ==================== */
.gallery-wrapper {
  margin-top: 30px;
}

.gallery-heading {
  font-size: 1rem;
  font-weight: 700;
  color: #0a3a5c;
  margin-bottom: 14px;
  text-align: center;
}

.flipbook {
  position: relative;
  display: flex;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(10, 58, 92, 0.1), 0 1px 4px rgba(0, 0, 0, 0.06);
  background: #1a1a1a;
}

.flipbook-left,
.flipbook-right {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.flipbook-img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  display: block;
}

.flipbook-fold {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  transform: translateX(-50%);
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.05) 40%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(0, 0, 0, 0.05) 60%,
    rgba(0, 0, 0, 0.2)
  );
  z-index: 5;
}

/* Page flip transitions */
.page-left-enter-active,
.page-left-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-left-enter-from {
  opacity: 0;
  transform: rotateY(40deg) scale(0.92);
  transform-origin: right center;
}

.page-left-leave-to {
  opacity: 0;
  transform: rotateY(-40deg) scale(0.92);
  transform-origin: right center;
}

.page-right-enter-active,
.page-right-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-right-enter-from {
  opacity: 0;
  transform: rotateY(-40deg) scale(0.92);
  transform-origin: left center;
}

.page-right-leave-to {
  opacity: 0;
  transform: rotateY(40deg) scale(0.92);
  transform-origin: left center;
}

/* Nav arrows */
.flip-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  color: #0a3a5c;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background: #138ab7;
    color: white;
    box-shadow: 0 4px 12px rgba(19, 138, 183, 0.3);
  }
}

.flip-arrow-left {
  left: 8px;
}

.flip-arrow-right {
  right: 8px;
}

/* Page dots */
.flip-dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 10;
}

.flip-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;

  &.active {
    background: white;
    transform: scale(1.2);
  }

  &:hover:not(.active) {
    background: rgba(255, 255, 255, 0.7);
  }
}

/* ==================== GET IN TOUCH ==================== */
.get-in-touch {
  margin-top: 36px;
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #eef2f5;

  p {
    font-size: 0.92rem;
    color: #5a6c7d;
    margin-bottom: 10px;
  }
}

.touch-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #138ab7;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    color: #0a3a5c;
    gap: 12px;

    .arrow-icon {
      transform: translateX(3px);
    }
  }
}

.arrow-icon {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

/* ==================== RESPONSIVE ==================== */
@media (max-width: 768px) {
  .hero-banner {
    height: 170px;
  }

  .hero-title {
    font-size: 1.5rem;
    padding: 0 20px;
  }

  .blog-container {
    padding: 26px 20px;
    margin-top: -30px;
    border-radius: 12px;
  }

  .campaign-title {
    font-size: 1.3rem;
  }

  .campaign-intro,
  .campaign-closing {
    font-size: 0.85rem;
  }

  .flipbook-img {
    height: 200px;
  }
}

@media (max-width: 480px) {
  .hero-banner {
    height: 150px;
  }

  .hero-title {
    font-size: 1.3rem;
  }

  .hero-badge {
    font-size: 10px;
    padding: 4px 14px;
  }

  .blog-container {
    padding: 22px 16px;
    border-radius: 10px;
  }

  .campaign-header {
    gap: 10px;
  }

  .campaign-title {
    font-size: 1.1rem;
    letter-spacing: 1px;
  }

  .campaign-number {
    width: 32px;
    height: 32px;
    font-size: 15px;
  }

  .flipbook-img {
    height: 150px;
  }

  .flip-arrow {
    width: 28px;
    height: 28px;

    svg {
      width: 14px;
      height: 14px;
    }
  }

  .flip-arrow-left {
    left: 4px;
  }

  .flip-arrow-right {
    right: 4px;
  }
}
</style>

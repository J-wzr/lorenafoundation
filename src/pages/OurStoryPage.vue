<template>
  <q-page class="story-page">
    <!-- Breadcrumb Section -->
    <section class="breadcrumb-section">
      <div class="breadcrumb-bg"></div>
      <div class="breadcrumb-overlay"></div>
      <div class="breadcrumb-content">
        <div class="container">
          <nav class="breadcrumb-nav">
            <span class="breadcrumb-item">Home</span>
            <q-icon name="chevron_right" class="breadcrumb-separator" />
            <span class="breadcrumb-item active">Our story</span>
          </nav>
        </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="story-section">
      <div class="container">
        <div class="board-header">
          <div class="board-divider"></div>
          <h2 class="section-title board-title">Our Story</h2>
          <div class="board-divider"></div>
        </div>

        <div class="story-layout">
          <div class="story-image-container">
            <div class="image-card">
              <img src="/Lorena_Darnell.png" alt="Lorena Darnell - Founder" />
            </div>
          </div>

          <div class="story-text-content">
            <p class="story-paragraph">
              When our founder met Lorena Darnell, it was in the city of
              Baghdad, Iraq, during her overseas mission work. That divine
              encounter became the beginning of many beautiful stories, most
              profoundly, the transformation of his own life. He journeyed from
              the depths of failure and self-pity into a victorious life in
              Christ.
            </p>

            <p class="story-paragraph">
              This encounter ignited a return to school and set in motion a
              ripple effect of change that continues to touch the communities we
              serve today.
            </p>

            <p class="story-paragraph">
              The organization is named in honor of Lorena Darnell, a woman who
              has lived a life marked by, compassion, and love. Throughout her
              life, she has faithfully cared for the needy and supported
              countless individuals in discovering their purpose through
              education. A devout believer in the Lord, Lorena has lit a light
              that shines in dark places, one that continues to illuminate the
              paths of many, long after the moment of encounter.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How We Serve Section -->
    <section class="serve-section">
      <div class="container">
        <div class="board-header">
          <div class="board-divider"></div>
          <h2
            class="section-title board-title"
            style="margin-bottom: 0; padding-bottom: 0"
          >
            How We Serve
          </h2>
          <div class="board-divider"></div>
        </div>
        <p class="about-description" style="margin-top: 0; padding-top: 0">
          <span class="text-primary" style="margin-top: 0; padding-top: 0"
            >Every day, across the world, countless people live in precarity.
          </span>
          Those on the margins of society are disproportionately affected,
          bearing the greatest burden of poverty, injustice, and limited
          opportunity.
        </p>
        <p class="about-description" style="margin-top: 15px">
          At <b>Lorena Foundation</b>, we believe transformation is possible,
          because
          <span class="text-primary"
            >God is still at work in the lives of His people.</span
          >Through His grace, lives can be restored, renewed, and changed.
        </p>
        <p class="about-description" style="margin-top: 15px">
          <b style="margin-bottom: 0; padding-bottom: 0">Our Approach</b><br />
          <b class="text-primary" style="margin-top: 0; padding-top: 0"
            >God-inspired, practical solutions</b
          ><br />
          We implement long-term, community-centered solutions that address the
          most urgent needs, uplifting individuals, strengthening families, and
          building resilient communities.
        </p>
        <p class="about-description" style="margin-top: 15px">
          <b class="text-primary" style="margin-top: 0; padding-top: 0"
            >Community-led transformation </b
          ><br />
          The people we serve are active partners in transformation. Local
          leadership guides our work, ensuring ownership, dignity, and
          sustainability.
        </p>
        <p class="about-description" style="margin-top: 15px">
          <b class="text-primary" style="margin-top: 0; padding-top: 0"
            >Meaningful partnerships </b
          ><br />
          We collaborate with like-minded individuals, organizations, and
          institutions, working together to honour God’s purpose and maximize
          lasting impact.
        </p>
        <p class="about-description" style="margin-top: 15px">
          <b class="text-primary" style="margin-top: 0; padding-top: 0"
            >Our Commitment </b
          ><br />
          We stand in solidarity with communities and partners to transform
          lives,
          <span class="text-primary"
            >demonstrating God’s love through practical action, compassion,
            accountability, and impact that transcends generations.</span
          >
        </p>
      </div>
    </section>

    <!-- Impact in Numbers Section -->
    <section class="impact-section" ref="impactSection">
      <div class="container">
        <div class="board-header" style="padding-top: 3rem">
          <div class="board-divider"></div>
          <h2 class="section-title board-title">Impact in Numbers</h2>
          <div class="board-divider"></div>
        </div>

        <div class="impact-stats">
          <div class="impact-item">
            <div class="impact-icon-wrapper">
              <q-icon name="groups" class="impact-icon" />
            </div>
            <div class="impact-arrow">
              <svg width="60" height="20" viewBox="0 0 60 20">
                <path
                  d="M0 10 L50 10 M45 5 L50 10 L45 15"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
            </div>
            <div class="impact-content">
              <div class="impact-label">IMPACTED OVER</div>
              <div class="impact-value">
                {{ animatedPeople.toLocaleString() }} People
              </div>
            </div>
          </div>

          <div class="impact-item">
            <div class="impact-icon-wrapper">
              <q-icon name="place" class="impact-icon" />
            </div>
            <div class="impact-arrow">
              <svg width="60" height="20" viewBox="0 0 60 20">
                <path
                  d="M0 10 L50 10 M45 5 L50 10 L45 15"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
            </div>
            <div class="impact-content">
              <div class="impact-label">OVER</div>
              <div class="impact-value">
                {{ animatedDistricts }} Districts covered
              </div>
            </div>
          </div>

          <div class="impact-item">
            <div class="impact-icon-wrapper">
              <q-icon name="home" class="impact-icon" />
            </div>
            <div class="impact-arrow">
              <svg width="60" height="20" viewBox="0 0 60 20">
                <path
                  d="M0 10 L50 10 M45 5 L50 10 L45 15"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
            </div>
            <div class="impact-content">
              <div class="impact-label">HELPING OVER</div>
              <div class="impact-value">
                {{ animatedHouseholds.toLocaleString() }} House Holds
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <div class="cta-text">
            <h2 class="cta-title">Ready to transform a life?</h2>
            <p class="cta-description">
              Every Donation you make can end poverty or transform the life of
              people
            </p>
            <button class="cta-button">
              Donate
              <q-icon name="arrow_forward" class="cta-button-icon" />
            </button>
          </div>
          <div class="cta-image">
            <img src="/child_carrying_basket.jpg" alt="Child carrying basket" />
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  meta: {
    title: "Our Story - Lorena Foundation",
    meta: {
      description: {
        name: "description",
        content:
          "Learn about the story behind Lorena Foundation - our journey, impact and commitment to transforming lives in communities.",
      },
      ogTitle: {
        property: "og:title",
        content: "Our Story - Lorena Foundation",
      },
      ogDescription: {
        property: "og:description",
        content: "The journey, impact and commitment behind Lorena Foundation.",
      },
    },
  },

  data() {
    return {
      animatedPeople: 0,
      animatedDistricts: 0,
      animatedHouseholds: 0,
      hasAnimated: false,
    };
  },
  mounted() {
    this.observeImpactSection();
  },
  methods: {
    observeImpactSection() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.hasAnimated) {
              this.hasAnimated = true;
              this.animateCounters();
            }
          });
        },
        { threshold: 0.3 }
      );

      if (this.$refs.impactSection) {
        observer.observe(this.$refs.impactSection);
      }
    },
    animateCounters() {
      this.animateValue("animatedPeople", 0, 5264, 400);
      this.animateValue("animatedDistricts", 0, 5, 1500);
      this.animateValue("animatedHouseholds", 0, 1053, 1000);
    },
    animateValue(key, start, end, duration) {
      const startTime = performance.now();
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        this[key] = Math.floor(easeOutQuart * (end - start) + start);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    },
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

.story-page {
  background: #f8fafc;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  overflow-x: hidden;
}

// Breadcrumb Section
.breadcrumb-section {
  position: relative;
  height: 200px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #0a4c648c;
}

.breadcrumb-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("/planting_trees.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.8;
  transform: scale(1.1);
  animation: subtle-zoom 10s ease-in-out infinite alternate;
  z-index: 0;
}

.breadcrumb-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(25, 170, 224, 0.1) 0%,
    rgba(25, 170, 224, 0.2) 100%
  );
  z-index: 1;
}

@keyframes subtle-zoom {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1.15);
  }
}

.breadcrumb-content {
  position: relative;
  z-index: 2;
  width: 100%;
  animation: fadeInDown 0.8s ease-out;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.breadcrumb-nav {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
}

.breadcrumb-item {
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s ease;

  &.active {
    color: #ffffff;
    font-weight: 500;
  }

  &:not(.active):hover {
    color: #ffffff;
    cursor: pointer;
  }
}

.breadcrumb-separator {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1rem;
}

// Container
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

// Section Title with Dividers (copied from team page)
.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 2rem 0;
  text-align: left;
  letter-spacing: -0.01em;
}

.board-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.board-divider {
  flex: 1;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(203, 213, 225, 0.6),
    transparent
  );
  max-width: 200px;
}

.board-title {
  margin: 0;
  text-align: center;
  white-space: nowrap;
  font-size: 1.35rem;
}

// Story Section
.story-section {
  padding: 2.5rem 0 1.5rem;
  background: #ffffff;
}

.story-layout {
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  animation: fadeInUp 0.8s ease-out 0.2s backwards;
}

.story-image-container {
  flex: 0 0 350px;
}

.image-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
}

.story-text-content {
  flex: 1;
}

.story-paragraph {
  font-size: 1rem;
  line-height: 1.6;
  color: rgb(71, 85, 105);
  margin: 0 0 1rem 0;

  &:last-child {
    margin-bottom: 0;
  }
}

// How We Serve Section
.serve-section {
  padding: 1.5rem 0 1.5rem;
  background: #f8fafc;
}

.about-description {
  text-align: left;
  font-size: 1rem;
  line-height: 1.8;
  margin: 0 auto;
  max-width: 1000px;
  color: rgb(71, 85, 105);
  animation: fadeInUp 0.8s ease-out 0.2s backwards;
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

// Impact Section
.impact-section {
  background: #f5f5f5;
  padding: 1.5rem 0 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.impact-stats {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 900px;
  margin: 0 auto;
  align-items: center;
  width: 100%;
}

.impact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  animation: fadeInUp 0.8s ease-out backwards;
  width: 100%;
  max-width: 700px;

  &:nth-child(1) {
    animation-delay: 0.2s;
  }
  &:nth-child(2) {
    animation-delay: 0.4s;

    .impact-icon-wrapper {
      border-radius: 68% 32% 70% 30% / 58% 62% 38% 42%;
    }
  }
  &:nth-child(3) {
    animation-delay: 0.6s;

    .impact-icon-wrapper {
      border-radius: 65% 35% 60% 40% / 70% 50% 50% 30%;
    }
  }
}

.impact-icon-wrapper {
  background: rgba(255, 255, 255, 0.95);
  width: 110px;
  height: 110px;
  border-radius: 73% 27% 64% 36% / 65% 58% 42% 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, border-radius 0.3s ease;

  &:hover {
    transform: scale(1.05);
    border-radius: 50% 50% 50% 50%;
  }

  &:nth-child(1) {
    border-radius: 70% 30% 65% 35% / 60% 65% 35% 40%;
  }
}

.impact-icon {
  font-size: 2.5rem;
  color: #19aae0;
}

.impact-arrow {
  color: #19aae0;
  flex-shrink: 0;
  animation: arrow-move 2s ease-in-out infinite;
}

@keyframes arrow-move {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
}

.impact-content {
  flex: 1;
  text-align: left;
}

.impact-label {
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: rgb(71, 85, 105);
  margin-bottom: 0.5rem;
}

.impact-value {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  color: rgb(71, 85, 105);
}

// Call to Action Section
.cta-section {
  background: #ffffff;
  padding: 5rem 0;
  overflow: hidden;
}

.cta-content {
  display: flex;
  align-items: center;
  gap: 5rem;
  animation: fadeInUp 0.8s ease-out;
}

.cta-text {
  flex: 0 0 45%;
  max-width: 550px;
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  color: #138ab7;
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
}

.cta-description {
  font-size: 1.15rem;
  line-height: 1.7;
  color: #1e293b;
  margin: 0 0 2.5rem 0;
}

.cta-button {
  background: #138ab7;
  color: #ffffff;
  border: none;
  padding: 1.1rem 2.8rem;
  font-size: 1.15rem;
  font-weight: 700;
  border-radius: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(25, 170, 224, 0.3);
  letter-spacing: 0.05em;

  &:hover {
    background: #1591c2;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(25, 170, 224, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }
}

.cta-button-icon {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.cta-button:hover .cta-button-icon {
  transform: translateX(5px);
}

.cta-image {
  flex: 1;
  position: relative;
  animation: fadeInRight 0.8s ease-out;

  img {
    width: 100%;
    height: auto;
    border-radius: 32px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    object-fit: cover;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 25px 70px rgba(0, 0, 0, 0.18);
    }
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

// Responsive adjustments
@media (max-width: 968px) {
  .story-layout {
    flex-direction: column;
    align-items: center;
  }

  .story-image-container {
    flex: 0 0 auto;
    max-width: 400px;
    width: 100%;
  }

  .impact-stats {
    gap: 3rem;
  }

  .impact-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .impact-content {
    text-align: center;
  }

  .impact-arrow {
    display: none;
  }

  .board-divider {
    max-width: 80px;
  }

  .board-title {
    font-size: 1.2rem;
  }
}

@media (max-width: 768px) {
  .about-description,
  .story-paragraph {
    font-size: 1rem;
  }

  .story-section,
  .serve-section {
    padding: 2rem 0 2rem;
  }

  .container {
    padding: 0 1.5rem;
  }

  .impact-value {
    font-size: 1.8rem;
  }

  .cta-content {
    flex-direction: column;
    gap: 3rem;
  }

  .cta-text {
    flex: 1;
    max-width: 100%;
    text-align: center;
  }

  .cta-image {
    width: 100%;
  }

  .cta-title {
    font-size: 1.5rem;
  }

  .cta-description {
    font-size: 1rem;
  }

  .cta-button {
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }

  .board-divider {
    max-width: 60px;
  }

  .board-title {
    font-size: 1.2rem;
  }
}
</style>

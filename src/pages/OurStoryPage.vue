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

    <!-- About Us Section -->
    <section class="about-section">
      <div class="container">
        <h1 class="about-title">About Us</h1>
        <p class="about-description">
          <strong>Lorena foundation</strong> is a local charity that aims at
          providing safe water and appropriate sanitation solutions, improve
          community health access, strive to achieve gender equality, improve
          access to quality education, enhance livelihood and economic
          inclusion, promote sustainable agriculture, and food security and
          contributes to inclusive green socio-economic transformation for
          people in developing countries and disaster areas.
        </p>

        <div class="about-images">
          <div class="image-card">
            <img src="/kids_running.jpg" alt="Children in community" />
          </div>
          <div class="image-card">
            <img
              src="/doctor_patient.jpg"
              alt="Healthcare worker with patient"
            />
          </div>
          <div class="image-card">
            <img src="/spinach.jpg" alt="Agricultural work" />
          </div>
        </div>

        <h2 class="together-title">Together, We Can Do Something</h2>
        <p class="about-description">
          Since Lorena Foundation was established, we have been pursuing one
          ambitious goal: building healthy, inclusive, and sustainable
          communities. The challenges of safe water, poor sanitation, hunger,
          and inequality are immense — but we remain hopeful. We know the
          solutions, and every day we make progress through strong partnerships
          and the generosity of people like you. By working hand in hand, we
          believe every child, woman, and man can gain access to safe water,
          quality education, better health, sustainable livelihoods, and a
          brighter future within our lifetime.
        </p>
      </div>
    </section>

    <!-- Impact in Numbers Section -->
    <section class="impact-section">
      <div class="container">
        <h2 class="impact-title">Impact in Numbers</h2>

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
              <div class="impact-value">30,000 People</div>
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
              <div class="impact-value">4 Districts covered</div>
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
              <div class="impact-value">6,000 House Holds</div>
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
            <h2 class="cta-title">Ready to change a life?</h2>
            <p class="cta-description">
              Every 10$ – $50 can end poverty or change a life of the
              unfortunate kids, poor single mothers and more
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
  // name: 'PageName',
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

// About Section
.about-section {
  // background: #1e5a6d;
  padding: 3rem 0;
  // color: #ffffff;
}

.about-title {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0 0 0;
  letter-spacing: 0.05em;
  animation: fadeInUp 0.8s ease-out;
}

.together-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin: 4rem 0 2rem 0;
  letter-spacing: 0.05em;
}

.about-description {
  text-align: center;
  font-size: 1rem;
  line-height: 1.8;
  margin: 0 auto 2rem;
  max-width: 1000px;
  color: rgb(71, 85, 105);
  animation: fadeInUp 0.8s ease-out 0.2s backwards;

  strong {
    font-weight: 600;
    // color: #ffffff;
  }
}

.about-images {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 3rem;
  animation: fadeInUp 0.8s ease-out 0.4s backwards;
}

.image-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex: 1;
  max-width: 380px;

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
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.impact-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0 4rem 0;
  letter-spacing: 0.03em;
  animation: fadeInUp 0.8s ease-out;
}

.impact-stats {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 900px;
  margin: 0 auto;
}

.impact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  animation: fadeInUp 0.8s ease-out backwards;

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
  .about-images {
    flex-direction: column;
    align-items: center;
  }

  .image-card {
    max-width: 100%;
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

  .impact-arrow {
    display: none;
  }
}

@media (max-width: 768px) {
  .about-title {
    font-size: 2.5rem;
  }

  .about-description {
    font-size: 1rem;
  }

  .about-section {
    padding: 3rem 0;
  }

  .container {
    padding: 0 1.5rem;
  }

  .impact-title {
    font-size: 2rem;
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
}
</style>

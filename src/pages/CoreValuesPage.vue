<template>
  <q-page class="mission-vision-page">
    <!-- Breadcrumb Section with Background -->
    <section class="breadcrumb-section">
      <div class="breadcrumb-bg"></div>
      <div class="breadcrumb-overlay"></div>
      <div class="breadcrumb-content">
        <div class="container">
          <nav class="breadcrumb-nav">
            <span class="breadcrumb-item">Home</span>
            <q-icon name="chevron_right" class="breadcrumb-separator" />
            <span class="breadcrumb-item active">Mission, Vision & Values</span>
          </nav>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="content-section mission-section">
      <div class="container">
        <div class="content-grid mission-grid">
          <div class="text-content">
            <span class="section-label">Our Purpose</span>
            <h2 class="section-title">Our Mission</h2>
            <p class="section-text">
              To empower grassroots communities to improve their livelihoods and
              welfare through capacity building, skills improvement, knowledge
              and information development, capital support, and development
              programs.
            </p>
            <div class="mission-points">
              <div
                class="point-item"
                v-for="(item, index) in missionPoints"
                :key="index"
              >
                <div class="point-icon">
                  <q-icon :name="item.icon" />
                </div>
                <span class="point-text">{{ item.text }}</span>
              </div>
            </div>
          </div>
          <div class="image-content">
            <div class="image-frame">
              <img
                src="/community_health.jpg"
                alt="Community Health"
                class="content-image"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- Animated background circles -->
      <div class="bg-circle circle-1"></div>
      <div class="bg-circle circle-2"></div>
      <div class="bg-circle circle-3"></div>
    </section>

    <!-- Vision Section -->
    <section class="content-section vision-section">
      <div class="container">
        <div class="content-grid">
          <div class="text-content">
            <span class="section-label vision-label">Our Future</span>
            <h2 class="section-title">Our Vision</h2>
            <p class="section-text vision-text">
              To create a strong, vibrant, inclusive, and sustainable community
              contributing to a prosperous, equitable, and stable society.
            </p>
            <div class="vision-tags">
              <span
                class="tag-item"
                v-for="(keyword, index) in visionKeywords"
                :key="index"
              >
                {{ keyword }}
              </span>
            </div>
          </div>
          <div class="image-content">
            <div class="image-frame">
              <img
                src="/our_vision.jpg"
                alt="Our Vision"
                class="content-image"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- Animated background circles -->
      <div class="bg-circle circle-4"></div>
      <div class="bg-circle circle-5"></div>
    </section>

    <!-- Values Section -->
    <section class="content-section values-section">
      <div class="container">
        <div class="content-grid values-grid">
          <div class="image-content">
            <div class="image-frame">
              <img
                src="/our_values.jpg"
                alt="Our Values"
                class="content-image"
              />
            </div>
          </div>
          <div class="text-content">
            <span class="section-label">Our Foundation</span>
            <h2 class="section-title">Our Values</h2>

            <div class="values-list">
              <div
                class="value-item"
                v-for="(value, index) in values"
                :key="index"
              >
                <div class="value-number">{{ index + 1 }}</div>
                <div class="value-content">
                  <h3 class="value-title">{{ value.title }}</h3>
                  <p class="value-description">{{ value.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Animated background circles -->
      <div class="bg-circle circle-6"></div>
      <div class="bg-circle circle-7"></div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Meet the People Behind Our Mission</h2>
          <p class="cta-text">
            Discover the dedicated team working tirelessly to empower
            communities and create lasting change.
          </p>
          <q-btn to="/our-team" class="cta-button" flat>
            <span>View Our Team</span>
            <q-icon name="arrow_forward" class="cta-icon" />
          </q-btn>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const missionPoints = [
  { icon: "groups", text: "Capacity Building" },
  { icon: "school", text: "Skills Development" },
  { icon: "lightbulb", text: "Knowledge Sharing" },
  { icon: "trending_up", text: "Capital Support" },
];

const visionKeywords = [
  "Strong",
  "Vibrant",
  "Inclusive",
  "Sustainable",
  "Prosperous",
  "Equitable",
  "Stable",
];

const values = [
  {
    title: "Equity & Inclusion",
    description:
      "We believe in fairness, gender equality, and opportunities for all.",
  },
  {
    title: "Sustainability",
    description:
      "We promote long-term solutions that protect people and the environment.",
  },
  {
    title: "Community Empowerment",
    description:
      "We strengthen grassroots communities to be agents of their own change.",
  },
  {
    title: "Transparency & Accountability",
    description:
      "We uphold integrity and responsible stewardship of resources.",
  },
  {
    title: "Collaboration",
    description:
      "We partner with communities, stakeholders, and supporters for greater impact.",
  },
  {
    title: "Innovation",
    description:
      "We embrace new approaches to address evolving challenges effectively.",
  },
];
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

.mission-vision-page {
  background: #ffffff;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  overflow-x: hidden;
}

// Breadcrumb Section
.breadcrumb-section {
  position: relative;
  height: 120px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #19aae0;
}

.breadcrumb-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("/community_health.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.5;
  transform: scale(1.1);
  animation: subtle-zoom 20s ease-in-out infinite alternate;
  z-index: 0;
}

.breadcrumb-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(25, 170, 224, 0.1) 0%,
    rgba(25, 170, 224, 0.3) 100%
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

// Content Sections
.content-section {
  padding: 3rem 0;
  position: relative;
  overflow: hidden;
}

.mission-section {
  background: #ffffff;
}

.vision-section {
  background: #f5f5f5;
}

.values-section {
  background: #ffffff;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: center;

  &.mission-grid {
    .image-content {
      order: -1;
    }
  }

  &.values-grid {
    align-items: center;
  }
}

// Section Labels and Titles
.section-label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #19aae0;
  margin-bottom: 0.75rem;
  padding: 0.3rem 0.8rem;
  background: rgba(25, 170, 224, 0.1);
  border-radius: 20px;
  animation: fadeInUp 0.6s ease-out;
}

.vision-label {
  color: #19aae0;
  background: rgba(25, 170, 224, 0.1);
}

.section-title {
  font-size: 1.85rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 1rem 0;
  line-height: 1.3;
  animation: fadeInUp 0.8s ease-out;
}

.section-text {
  font-size: 1rem;
  line-height: 1.7;
  color: #475569;
  margin-bottom: 1.5rem;
  text-align: justify;
  animation: fadeInUp 1s ease-out;
}

.vision-text {
  font-size: 1.1rem;
  font-weight: 500;
  color: #334155;
}

// Mission Points
.mission-points {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
}

.point-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  border: 1px solid rgba(25, 170, 224, 0.15);
  backdrop-filter: blur(10px);
  animation: fadeInScale 0.6s ease-out backwards;

  &:nth-child(1) {
    animation-delay: 0.2s;
  }
  &:nth-child(2) {
    animation-delay: 0.3s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
  &:nth-child(4) {
    animation-delay: 0.5s;
  }

  @media (max-width: 768px) {
    padding: 0;
    background: transparent;
    border: none;
    backdrop-filter: none;
    width: auto;
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.point-icon {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(25, 170, 224, 0.1);
  border-radius: 10px;
  flex-shrink: 0;

  .q-icon {
    font-size: 1.3rem;
    color: #19aae0;
  }

  @media (max-width: 768px) {
    display: none;
  }
}

.point-text {
  font-size: 0.9rem;
  font-weight: 500;
  color: #334155;
  padding: 0.2rem 0.5rem;
  background: rgba(25, 170, 224, 0.08);
  color: #19aae0;
  border-radius: 6px;
  border: 1px solid rgba(25, 170, 224, 0.15);

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: 1px solid rgba(25, 170, 224, 0.2);
  }
}

// Vision Tags
.vision-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.25rem;
}

.tag-item {
  padding: 0.5rem 1rem;
  background: rgba(25, 170, 224, 0.08);
  color: #19aae0;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(25, 170, 224, 0.2);
  animation: fadeInScale 0.6s ease-out backwards;

  &:nth-child(1) {
    animation-delay: 0.2s;
  }
  &:nth-child(2) {
    animation-delay: 0.3s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
  &:nth-child(4) {
    animation-delay: 0.5s;
  }
  &:nth-child(5) {
    animation-delay: 0.6s;
  }
  &:nth-child(6) {
    animation-delay: 0.7s;
  }
  &:nth-child(7) {
    animation-delay: 0.8s;
  }
}

// Values List
.values-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 0.75rem;
}

.value-item {
  display: flex;
  gap: 0.85rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(25, 170, 224, 0.08);
  animation: fadeInUp 0.6s ease-out backwards;

  &:nth-child(1) {
    animation-delay: 0.2s;
  }
  &:nth-child(2) {
    animation-delay: 0.3s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
  &:nth-child(4) {
    animation-delay: 0.5s;
  }
  &:nth-child(5) {
    animation-delay: 0.6s;
  }
  &:nth-child(6) {
    animation-delay: 0.7s;
  }

  &:last-child {
    border-bottom: none;
  }
}

.value-number {
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #19aae0 0%, #1590c0 100%);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(25, 170, 224, 0.25);
  transition: all 0.3s ease;

  .value-item:hover & {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 5px 14px rgba(25, 170, 224, 0.35);
  }
}

.value-content {
  flex: 1;
  padding-top: 0.1rem;
}

.value-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.25rem 0;
  line-height: 1.3;
  transition: color 0.3s ease;

  .value-item:hover & {
    color: #19aae0;
  }
}

.value-description {
  font-size: 0.85rem;
  line-height: 1.45;
  color: #64748b;
  margin: 0;
}

// CTA Section
.cta-section {
  padding: 3.5rem 0;
  background: linear-gradient(135deg, #19aae0 0%, #1590c0 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
  }
}

.cta-content {
  text-align: center;
  position: relative;
  z-index: 1;
  max-width: 700px;
  margin: 0 auto;
  animation: fadeInUp 0.8s ease-out;
}

.cta-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.75rem 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
}

.cta-text {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 1.75rem 0;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.85rem 2rem;
  background: #ffffff;
  color: #19aae0;
  font-size: 0.95rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
    background: #f8fafc;
  }

  &:active {
    transform: translateY(-1px);
  }

  .cta-icon {
    font-size: 1.15rem;
    transition: transform 0.3s ease;
  }

  &:hover .cta-icon {
    transform: translateX(5px);
  }
}

// Image Content
.image-content {
  position: relative;
  animation: fadeInRight 1s ease-out;
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

.image-frame {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  height: 400px;
}

.content-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  animation: gentle-pulse 8s ease-in-out infinite;
}

@keyframes gentle-pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

// Animated Background Circles
.bg-circle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}

.circle-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(25, 170, 224, 0.08) 0%,
    transparent 70%
  );
  top: -200px;
  left: -100px;
  animation: float-slow 25s ease-in-out infinite;
}

.circle-2 {
  width: 350px;
  height: 350px;
  background: radial-gradient(
    circle,
    rgba(25, 170, 224, 0.06) 0%,
    transparent 70%
  );
  bottom: -100px;
  right: -50px;
  animation: float-slow 30s ease-in-out infinite reverse;
}

.circle-3 {
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(25, 170, 224, 0.05) 0%,
    transparent 70%
  );
  top: 50%;
  right: 10%;
  animation: float-medium 20s ease-in-out infinite;
}

.circle-4 {
  width: 450px;
  height: 450px;
  background: radial-gradient(
    circle,
    rgba(25, 170, 224, 0.07) 0%,
    transparent 70%
  );
  top: -150px;
  right: -100px;
  animation: float-medium 22s ease-in-out infinite;
}

.circle-5 {
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(25, 170, 224, 0.05) 0%,
    transparent 70%
  );
  bottom: -50px;
  left: 5%;
  animation: float-slow 28s ease-in-out infinite reverse;
}

.circle-6 {
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(25, 170, 224, 0.06) 0%,
    transparent 70%
  );
  top: -100px;
  left: -80px;
  animation: float-medium 24s ease-in-out infinite;
}

.circle-7 {
  width: 350px;
  height: 350px;
  background: radial-gradient(
    circle,
    rgba(25, 170, 224, 0.05) 0%,
    transparent 70%
  );
  bottom: -80px;
  right: 10%;
  animation: float-slow 26s ease-in-out infinite reverse;
}

@keyframes float-slow {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(30px, -30px) scale(1.05);
  }
  50% {
    transform: translate(-20px, -50px) scale(0.95);
  }
  75% {
    transform: translate(-40px, 20px) scale(1.02);
  }
}

@keyframes float-medium {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(40px, -40px) rotate(5deg);
  }
  66% {
    transform: translate(-30px, 30px) rotate(-5deg);
  }
}

// Mobile Responsive
@media (max-width: 768px) {
  .breadcrumb-section {
    height: 140px;
  }

  .content-section {
    padding: 2.5rem 0;
  }

  .container {
    padding: 0 1.5rem;
  }

  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;

    &.mission-grid {
      .image-content {
        order: 1;
      }
    }

    &.values-grid {
      .image-content {
        order: 1;
      }
    }
  }

  .section-title {
    font-size: 1.65rem;
  }

  .section-text {
    font-size: 0.95rem;
  }

  .image-frame {
    height: 280px;
  }

  .mission-points {
    grid-template-columns: 1fr;
  }

  .bg-circle {
    display: none;
  }

  .value-item {
    gap: 1rem;
  }

  .value-number {
    width: 38px;
    height: 38px;
    font-size: 1rem;
  }

  .value-title {
    font-size: 0.95rem;
  }

  .value-description {
    font-size: 0.85rem;
  }

  .cta-section {
    padding: 3rem 0;
  }

  .cta-title {
    font-size: 1.5rem;
  }

  .cta-text {
    font-size: 0.95rem;
  }

  .cta-button {
    padding: 0.8rem 1.75rem;
    font-size: 0.9rem;
  }
}
</style>

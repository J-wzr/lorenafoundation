<template>
  <q-page class="team-page">
    <!-- Breadcrumb Section -->
    <section class="breadcrumb-section">
      <div class="breadcrumb-bg"></div>
      <div class="breadcrumb-overlay"></div>
      <div class="breadcrumb-content">
        <div class="container">
          <nav class="breadcrumb-nav">
            <span class="breadcrumb-item">Home</span>
            <q-icon name="chevron_right" class="breadcrumb-separator" />
            <span class="breadcrumb-item active">Our Team</span>
          </nav>
        </div>
      </div>
    </section>

    <!-- Team Members Section -->
    <section class="team-section">
      <div class="container">
        <div class="team-grid">
          <div
            class="team-card"
            v-for="(member, index) in teamMembers"
            :key="index"
            :style="{ animationDelay: `${index * 0.15}s` }"
          >
            <div class="card-inner">
              <div class="member-image-wrapper" @click="openModal(member)">
                <div class="image-circle">
                  <img
                    :src="member.image"
                    :alt="member.name"
                    class="member-image"
                  />
                  <div class="plus-overlay">
                    <div class="plus-icon">+</div>
                  </div>
                </div>
              </div>

              <div class="member-info">
                <h3 class="member-name">{{ member.name }}</h3>
                <span class="member-role">{{ member.role }}</span>

                <div class="member-bio" v-html="member.detailedBio"></div>

                <div class="contact-actions">
                  <a
                    :href="`tel:${member.phone}`"
                    class="contact-btn phone-btn"
                    title="Call"
                  >
                    <q-icon name="phone" />
                  </a>
                  <a
                    :href="`mailto:${member.email}`"
                    class="contact-btn email-btn"
                    title="Email"
                  >
                    <q-icon name="email" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Background Circles -->
      <div class="bg-circle circle-1"></div>
      <div class="bg-circle circle-2"></div>
      <div class="bg-circle circle-3"></div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Want to know more about us?</h2>
          <p class="cta-text">
            Read more about Lorana Foundation's Establishment.
          </p>
          <q-btn to="/our-story" class="cta-button" flat>
            <span>View Our Story</span>
            <q-icon name="arrow_forward" class="cta-icon" />
          </q-btn>
        </div>
      </div>
    </section>

    <!-- Image Modal (Simple) -->
    <transition name="modal-fade">
      <div v-if="showModal" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="closeModal">
            <q-icon name="close" />
          </button>

          <div class="modal-body">
            <div class="modal-image-wrapper">
              <img
                :src="selectedMember.image"
                :alt="selectedMember.name"
                class="modal-image"
              />
            </div>
            <h3 class="modal-caption">{{ selectedMember.name }}</h3>
          </div>
        </div>
      </div>
    </transition>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);
const selectedMember = ref({});

const teamMembers = ref([
  {
    name: "Barbra Ekusia",
    role: "Team Leader",
    image: "/barbra.jpg",
    phone: "+256700000000",
    email: "barbra@organization.org",
    detailedBio:
      "<p>Barbra Ekusia brings energy, dedication, and vision to our work. As <em>Team Leader</em>, she coordinates people and projects with a steady hand, ensuring that every effort moves us closer to positive and lasting change.</p><p>She thrives on teamwork, bringing together community voices, local partners, and our staff to create solutions that matter. Her leadership style combines compassion with clarity, making it easy for the team to stay focused, motivated, and effective.</p><p>For Barbra, leadership is more than guiding a team; it's about <em>empowering others</em> and building a shared path toward brighter futures.</p>",
  },
  {
    name: "Patricia Kokora",
    role: "Program Officer",
    image: "/patricia.jpg",
    phone: "+256700000001",
    email: "patricia@organization.org",
    detailedBio:
      "<p>Patricia Kokora is passionate about building lasting change and brighter futures together with the community. As our <em>Program Officer</em>, she helps design and guide projects that make a difference in people's everyday lives.</p><p>From working with community members to teaming up with local leaders and partners, Patricia ensures that our programs truly reflect the needs and dreams of the people we serve.</p><p>With a heart for service and an eye for detail, she keeps things moving smoothly—whether it's <em>planning activities</em>, <em>supporting volunteers</em>, or making sure we learn from every step we take.</p>",
  },
  {
    name: "Maurine Maturu",
    role: "Operations & People Officer",
    image: "/maurine.jpg",
    phone: "+256700000002",
    email: "maurine@organization.org",
    detailedBio:
      "<p>Maurine Maturu is committed to creating people-centered, smooth and effective operations. In her role, she oversees day-to-day processes while nurturing a supportive environment where the team can thrive.</p><p>She excels at bringing together staff, partners, and community members to solve some of the community challenges. Maurine's role is not just about managing systems.</p><p>It's about <em>empowering individuals</em> and building a foundation for sustainable growth and impact.</p>",
  },
  {
    name: "Amos Edoza",
    role: "Volunteer Officer",
    image: "/amos.jpg",
    phone: "+256700000003",
    email: "amos@organization.org",
    detailedBio:
      "<p>Amos Edoza is passionate about creating lasting change through the power of community and volunteerism. As our <em>Volunteer Officer</em>, Amos plays a vital role in supporting, coordinating, and uplifting our volunteers.</p><p>He ensures volunteers have the tools, resources and guidance they need to make a real difference. From <em>onboarding and training</em> to <em>day-to-day support and recognition</em>, Amos works closely with both volunteers and community members.</p><p>He builds meaningful connections and shared impact, making sure every step we take together is <em>thoughtful, inclusive, and rooted in learning</em>.</p>",
  },
]);

const openModal = (member) => {
  selectedMember.value = member;
  showModal.value = true;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  showModal.value = false;
  document.body.style.overflow = "";
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

.team-page {
  background: #f8fafc;
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
    rgba(25, 170, 224, 0.5) 0%,
    rgba(25, 170, 224, 0.6) 100%
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

// Team Section
.team-section {
  padding: 2.5rem 0 3.5rem;
  position: relative;
  overflow: hidden;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
}

.team-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.02);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInScale 0.8s ease-out backwards;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.03);
    border-color: #cbd5e1;

    .plus-overlay {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.card-inner {
  padding: 2rem;
  background: #ffffff;
}

.member-image-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  cursor: pointer;
}

.image-circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: visible;
  position: relative;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.02);
  }
}

.member-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #a52a2a;
  box-shadow: 0 4px 12px rgba(165, 42, 42, 0.15);
  transition: all 0.4s ease;

  .image-circle:hover & {
    border-color: #19aae0;
    box-shadow: 0 6px 20px rgba(25, 170, 224, 0.25);
  }
}

.plus-overlay {
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 10;
}

.plus-icon {
  width: 40px;
  height: 40px;
  background: #19aae0;
  color: white;
  font-size: 1.8rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(25, 170, 224, 0.4);
  transition: all 0.3s ease;

  &:hover {
    background: #1590c0;
    transform: scale(1.1);
  }
}

.member-info {
  text-align: center;
}

.member-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000000;
  margin: 0 0 0.5rem 0;
  transition: color 0.3s ease;

  .team-card:hover & {
    color: #19aae0;
  }
}

.member-role {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  background: #a52a2a;
  padding: 0.4rem 1.2rem;
  border-radius: 20px;
  margin-bottom: 1.25rem;
  transition: all 0.3s ease;

  .team-card:hover & {
    background: #19aae0;
    transform: scale(1.05);
  }
}

.member-bio {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #475569;
  text-align: justify;
  margin: 1.25rem 0;
  padding: 1.25rem;
  background: rgba(248, 250, 252, 0.8);
  border-radius: 12px;
  border: 1px solid rgba(226, 232, 240, 0.6);

  :deep(p) {
    margin: 0 0 1rem 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  :deep(strong) {
    color: #000000;
    font-weight: 700;
  }

  :deep(em) {
    font-style: italic;
    color: #19aae0;
    font-weight: 500;
  }
}

.contact-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.contact-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;

  .q-icon {
    font-size: 1.2rem;
  }

  &.phone-btn {
    background: rgba(25, 170, 224, 0.1);
    color: #19aae0;
    border: 1.5px solid rgba(25, 170, 224, 0.3);

    &:hover {
      background: #19aae0;
      color: #ffffff;
      border-color: #19aae0;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(25, 170, 224, 0.3);
    }
  }

  &.email-btn {
    background: rgba(165, 42, 42, 0.1);
    color: #a52a2a;
    border: 1.5px solid rgba(165, 42, 42, 0.3);

    &:hover {
      background: #a52a2a;
      color: #ffffff;
      border-color: #a52a2a;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(165, 42, 42, 0.3);
    }
  }
}

// Modal Styles
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .modal-content,
.modal-fade-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-fade-enter-from .modal-content,
.modal-fade-leave-to .modal-content {
  transform: scale(0.9) translateY(20px);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
  backdrop-filter: blur(4px);
}

.modal-content {
  background: #ffffff;
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.95);
  color: #1e293b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #ffffff;
    transform: rotate(90deg);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .q-icon {
    font-size: 1.5rem;
  }
}

.modal-body {
  padding: 2.5rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
}

.modal-image-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.modal-image {
  width: 100%;
  height: auto;
  max-width: 500px;
  object-fit: cover;
}

.modal-caption {
  font-size: 1.75rem;
  font-weight: 700;
  color: #000000;
  margin-top: 1rem;
}

// Background Circles
.bg-circle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}

.circle-1 {
  width: 350px;
  height: 350px;
  background: radial-gradient(
    circle,
    rgba(25, 170, 224, 0.03) 0%,
    transparent 70%
  );
  top: -80px;
  left: -100px;
  animation: float-slow 25s ease-in-out infinite;
}

.circle-2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(165, 42, 42, 0.025) 0%,
    transparent 70%
  );
  bottom: -80px;
  right: -80px;
  animation: float-slow 30s ease-in-out infinite reverse;
}

.circle-3 {
  width: 250px;
  height: 250px;
  background: radial-gradient(
    circle,
    rgba(25, 170, 224, 0.02) 0%,
    transparent 70%
  );
  top: 50%;
  right: 10%;
  animation: float-medium 20s ease-in-out infinite;
}

@keyframes float-slow {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(20px, -20px) scale(1.03);
  }
  50% {
    transform: translate(-15px, -30px) scale(0.97);
  }
  75% {
    transform: translate(-25px, 15px) scale(1.01);
  }
}

@keyframes float-medium {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(3deg);
  }
  66% {
    transform: translate(-20px, 20px) rotate(-3deg);
  }
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

// Mobile Responsive
@media (max-width: 768px) {
  .breadcrumb-section {
    height: 100px;
  }

  .container {
    padding: 0 1.5rem;
  }

  .team-section {
    padding: 2rem 0 3rem;
  }

  .card-inner {
    padding: 1.75rem;
  }

  .image-circle {
    width: 160px;
    height: 160px;
  }

  .member-name {
    font-size: 1.35rem;
  }

  .member-bio {
    font-size: 0.9rem;
  }

  .modal-image {
    width: 100%;
    height: auto;
  }

  .modal-caption {
    font-size: 1.5rem;
  }

  .cta-section {
    padding: 3rem 0;
  }
}
</style>

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

    <!-- Leadership Team Section -->
    <section class="team-section">
      <div class="container">
        <div class="board-header">
          <div class="board-divider"></div>
          <h2 class="section-title board-title">Our Leadership Team</h2>
          <div class="board-divider"></div>
        </div>
        <div class="team-grid">
          <div
            class="team-card"
            v-for="(member, index) in leadershipTeam"
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
                    v-if="member.phone"
                    :href="`tel:${member.phone}`"
                    class="contact-btn phone-btn"
                    title="Call"
                  >
                    <q-icon name="phone" />
                  </a>

                  <a
                    v-if="member.email"
                    :href="`mailto:${member.email}`"
                    class="contact-btn email-btn"
                    title="Email"
                  >
                    <q-icon name="email" />
                  </a>

                  <span
                    v-if="member.emailDisplay && !member.email"
                    class="contact-btn email-btn disabled"
                    title="Email not available"
                  >
                    <q-icon name="email" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Board Section -->
    <section class="board-section">
      <div class="container">
        <div class="board-header">
          <div class="board-divider"></div>
          <h2 class="section-title board-title">Our Board</h2>
          <div class="board-divider"></div>
        </div>

        <!-- Board members WITH images: Bosco & Norman -->
        <div class="board-cards-grid">
          <div
            class="team-card"
            v-for="(member, index) in boardMembersWithImages"
            :key="'board-img-' + index"
            :style="{ animationDelay: `${index * 0.15}s` }"
          >
            <div class="card-inner">
              <div class="member-image-wrapper" @click="openModal(member)">
                <div class="image-circle image-circle--white-bg">
                  <img
                    :src="member.image"
                    :alt="member.name"
                    class="member-image member-image--contain"
                  />
                  <div class="plus-overlay">
                    <div class="plus-icon">+</div>
                  </div>
                </div>
              </div>

              <div class="member-info">
                <h3 class="member-name">{{ member.name }}</h3>
                <span class="member-role">{{ member.role }}</span>
                <div class="member-bio">
                  <p>{{ member.profession }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Board members WITHOUT images: Dorothy, Pastor Rogers, Rev. Hillary -->
        <div class="simple-board-row">
          <div
            class="simple-board-card"
            v-for="(member, index) in boardMembersSimple"
            :key="'board-simple-' + index"
            :style="{ animationDelay: `${(index + 2) * 0.12}s` }"
          >
            <div class="simple-avatar">
              <q-icon name="person" class="avatar-icon" />
            </div>
            <div class="simple-info">
              <span class="simple-name">{{ member.name }}</span>
              <span class="simple-role">Board Member</span>
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
            Read more about Lorena Foundation's Establishment.
          </p>
          <q-btn to="/our-story" class="cta-button" flat>
            <span>View Our Story</span>
            <q-icon name="arrow_forward" class="cta-icon" />
          </q-btn>
        </div>
      </div>
    </section>

    <!-- Image Modal -->
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
import { useMeta } from "quasar";

useMeta({
  title: "Our Team - Lorena Foundation",
  meta: {
    description: {
      name: "description",
      content:
        "Meet the dedicated team behind Lorena Foundation working to transform lives through community development programs.",
    },
    ogTitle: { property: "og:title", content: "Our Team - Lorena Foundation" },
    ogDescription: {
      property: "og:description",
      content: "Meet the dedicated team behind Lorena Foundation.",
    },
  },
});

const showModal = ref(false);
const selectedMember = ref({});

const leadershipTeam = ref([
  {
    name: "Barbra Ekusia",
    role: "Team Leader",
    image: "/barbra.jpg",
    phone: "0788489974",
    email: "mail",
    detailedBio:
      "<p>Barbra brings <strong>energy, dedication, and vision</strong> to our work. As Team Leader, she coordinates people and projects with clarity and compassion, uniting community voices, partners, and staff to create meaningful solutions.</p><p>Her empowering leadership keeps the team <em>focused, motivated, and moving together</em> toward positive, lasting change.</p>",
  },
  {
    name: "Patricia Kokora",
    role: "Program Officer",
    image: "/patricia.jpg",
    phone: "0775502323",
    email: "mail",
    detailedBio:
      "<p>Patricia is passionate about <strong>creating lasting change</strong> with the community. As Program Officer, she designs and guides projects that improve daily life.</p><p>By working closely with community members, leaders, and partners, she ensures our programs reflect real needs. With dedication and attention to detail, she keeps activities <em>organized, impactful, and continually improving</em>.</p>",
  },
  {
    name: "Maurine Maturu",
    role: "Operations & People Officer",
    image: "/maurine.jpg",
    phone: "07",
    email: "mail",
    detailedBio:
      "<p>Maurine oversees daily processes while <strong>fostering a supportive environment</strong> where the team can thrive. By uniting staff, partners, and community members, she helps tackle key challenges.</p><p>Her work goes beyond managing systems: she <em>empowers individuals</em> and strengthens the foundation for sustainable impact.</p>",
  },
  {
    name: "Amos Edoza",
    role: "Volunteer Officer",
    image: "/amos.jpg",
    phone: "0787359197",
    email: "mail",
    detailedBio:
      "<p>Amos is the <strong>focal point for volunteerism & outreach</strong>. As Volunteer Officer, he supports and coordinates volunteers, ensuring they have the tools and guidance to make real impact.</p><p>From <em>onboarding and training to daily support and recognition</em>, Amos builds meaningful connections that create lasting change.</p>",
  },
]);

// Board members with photos — rendered as full cards
const boardMembersWithImages = ref([
  {
    name: "John Bosco Candia",
    role: "Co-Founder & Board Member",
    profession: "Humanitarian and Development Practitioner",
    image: "/Bosco.png",
  },
  {
    name: "Eng. Norman Burua Adriko",
    role: "Board Member",
    profession: "Engineering Professional and Academic",
    image: "/Norman.png",
  },
]);

// Board members without photos — rendered as compact flex pills
const boardMembersSimple = ref([
  { name: "Dorothy Nangobi" },
  { name: "Pastor Rogers Nuwahereza" },
  { name: "Reverend Hillary Amuki" },
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

// ── Breadcrumb ────────────────────────────────────────────────────────────────
.breadcrumb-section {
  position: relative;
  height: 200px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #0a0a0a8c;
}

.breadcrumb-bg {
  position: absolute;
  inset: 0;
  background-image: url("/volunteer1.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.8;
  transform: scale(1.1);
  animation: subtle-zoom 10s ease-in-out infinite alternate;
  z-index: 0;
}

.breadcrumb-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.196) 0%,
    rgba(0, 0, 0, 0.343) 100%
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

// ── Layout helpers ────────────────────────────────────────────────────────────
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

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 2rem 0;
  letter-spacing: -0.01em;
}

// ── Sections ──────────────────────────────────────────────────────────────────
.team-section {
  padding: 2.5rem 0 1.5rem;
  position: relative;
  overflow: hidden;
}

.board-section {
  padding: 1.5rem 0 3.5rem;
  position: relative;
  overflow: hidden;
}

// ── Leadership grid ───────────────────────────────────────────────────────────
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

// ── Board image-card grid (Bosco & Norman) ────────────────────────────────────
.board-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  position: relative;
  z-index: 1;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
}

// ── Shared card ───────────────────────────────────────────────────────────────
.team-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInScale 0.8s ease-out backwards;
  display: flex;
  flex-direction: column;
}

.card-inner {
  padding: 2rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100%;
}

// ── Member image ──────────────────────────────────────────────────────────────
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
  overflow: hidden;
  position: relative;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.02);
  }
}

// White background for transparent-bg images (Bosco.png, Norman.png)
.image-circle--white-bg {
  background-color: #ffffff;
}

.member-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  border-radius: 50%;
  border: 3px solid #4a90e2;
  transition: all 0.4s ease;
}

// Use object-fit:contain so transparent-bg images aren't cropped
.member-image--contain {
  object-fit: contain;
  object-position: center center;
  background-color: #ffffff;
}

.plus-overlay {
  position: absolute;
  bottom: 5px;
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

// ── Member info ───────────────────────────────────────────────────────────────
.member-info {
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.member-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000000;
  margin: 0 0 0.5rem 0;
  transition: color 0.3s ease;
}

.member-role {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%);
  padding: 0.4rem 1.2rem;
  border-radius: 20px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  margin-bottom: 0.25rem;
  transition: all 0.3s ease;
}

.member-bio {
  font-size: 0.95rem;
  line-height: 1.65;
  color: #475569;
  text-align: left;
  margin: 0 0 1.25rem 0;
  padding: 1.25rem;
  background: rgba(248, 250, 252, 0.8);
  border-radius: 12px;
  border: 1px solid rgba(226, 232, 240, 0.6);
  flex: 1;
  hyphens: auto;
  word-spacing: -0.05em;
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  p {
    margin: 0 0 1rem 0;
    &:last-child {
      margin-bottom: 0;
    }
  }

  :deep(p) {
    margin: 0 0 1rem 0;
    &:last-child {
      margin-bottom: 0;
    }
  }

  :deep(strong) {
    color: #1e293b;
    font-weight: 600;
  }

  :deep(em) {
    font-style: normal;
    color: #19aae0;
    font-weight: 500;
  }
}

// ── Contact buttons ───────────────────────────────────────────────────────────
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
  cursor: pointer;

  .q-icon {
    font-size: 1.2rem;
  }

  &.phone-btn {
    background: rgba(25, 170, 224, 0.1);
    color: #19aae0;
    border: 1.5px solid rgba(25, 170, 224, 0.3);

    &:hover:not(.inactive) {
      background: #19aae0;
      color: #ffffff;
      border-color: #19aae0;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(25, 170, 224, 0.3);
    }

    &.inactive {
      opacity: 0.3;
      cursor: default;
    }
  }

  &.email-btn {
    background: rgba(74, 144, 226, 0.1);
    color: #4a90e2;
    border: 1.5px solid rgba(74, 144, 226, 0.3);

    &:hover:not(.inactive) {
      background: #4a90e2;
      color: #ffffff;
      border-color: #4a90e2;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
    }

    &.inactive {
      opacity: 0.3;
      cursor: default;
    }
  }
}

// ── Board header ──────────────────────────────────────────────────────────────
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

// ── Simple flex cards (Dorothy, Pastor Rogers, Rev. Hillary) ──────────────────
.simple-board-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  justify-content: space-between;
  position: relative;
  z-index: 1;
}

.simple-board-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 1rem 1.6rem;
  animation: fadeInScale 0.8s ease-out backwards;
  transition: all 0.3s ease;
  flex: 1 1 200px;
  max-width: 310px;
}

.simple-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(74, 144, 226, 0.08);
  border: 2px solid rgba(74, 144, 226, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;

  .avatar-icon {
    font-size: 1.4rem;
    color: #4a90e2;
    transition: color 0.3s ease;
  }
}

.simple-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.simple-name {
  font-size: 0.97rem;
  font-weight: 600;
  color: #1e293b;
  transition: color 0.3s ease;
  line-height: 1.3;
}

.simple-role {
  font-size: 0.75rem;
  font-weight: 600;
  color: #4a90e2;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

// ── Background Circles ────────────────────────────────────────────────────────
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
    rgba(74, 144, 226, 0.025) 0%,
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

// ── Modal ─────────────────────────────────────────────────────────────────────
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
  inset: 0;
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

// ── CTA Section ───────────────────────────────────────────────────────────────
.cta-section {
  padding: 3.5rem 0;
  background: linear-gradient(135deg, #19aae0 0%, #1590c0 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
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

// ── Mobile Responsive ─────────────────────────────────────────────────────────
@media (max-width: 768px) {
  .breadcrumb-section {
    height: 100px;
  }

  .container {
    padding: 0 1.5rem;
  }

  .team-section,
  .board-section {
    padding: 2rem 0;
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

  .board-divider {
    max-width: 60px;
  }

  .board-title {
    font-size: 1.2rem;
  }

  .simple-board-row {
    flex-direction: column;
    align-items: stretch;
  }

  .simple-board-card {
    max-width: 100%;
    flex: 1 1 auto;
  }
}
</style>

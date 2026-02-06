<template>
  <q-page class="wash-page">
    <!-- Hero - Always shows regardless of data -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="positioned-badge">ACTIVE CAMPAIGN</div>
      <div class="positioned-titles">
        <p class="positioned-subtitle">Education for All</p>
      </div>
    </section>

    <!-- Content -->
    <div class="content-area">
      <div class="container container-head">
        <!-- How to Donate - Always shows -->
        <div class="payment-banner">
          <div class="payment-banner-content">
            <div class="banner-header">
              <q-icon name="payment" class="banner-icon" />
              <div>
                <h3>How to Donate</h3>
                <p>Quick & secure payment in 3 steps</p>
              </div>
            </div>

            <div class="steps-horizontal">
              <div class="step-h">
                <div class="step-num-h">1</div>
                <div class="step-content-h">
                  <div class="step-title-h">Click Donate Now below</div>
                  <div class="step-desc-h">Opens Pesapal</div>
                </div>
              </div>

              <q-icon name="arrow_forward" class="arrow" />

              <div class="step-h">
                <div class="step-num-h">2</div>
                <div class="step-content-h">
                  <div class="step-title-h">Enter Details</div>
                  <div class="step-desc-h">
                    Write <strong>"WASH Campaign"</strong>
                  </div>
                </div>
              </div>

              <q-icon name="arrow_forward" class="arrow" />

              <div class="step-h">
                <div class="step-num-h">3</div>
                <div class="step-content-h">
                  <div class="step-title-h">Complete</div>
                  <div class="step-desc-h">
                    Updates in 2 hours after payment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid">
          <!-- Sidebar - Shows loading/error only in this card -->
          <div class="sidebar">
            <div class="sticky">
              <div class="card stats">
                <!-- Loading State for Stats -->
                <div v-if="loading" class="stats-loading">
                  <q-spinner-dots size="40px" color="primary" />
                  <p class="loading-text">Loading campaign data...</p>
                </div>

                <!-- Error State for Stats -->
                <div v-else-if="error" class="stats-error">
                  <q-icon name="cloud_off" size="40px" color="orange-7" />
                  <p class="error-title">Unable to load live data</p>
                  <p class="error-message">{{ error }}</p>
                  <q-btn
                    label="Retry"
                    size="sm"
                    color="primary"
                    outline
                    no-caps
                    @click="reloadData"
                    class="retry-btn"
                  />
                  <div class="error-note">
                    <q-icon name="info" size="14px" />
                    <span>You can still donate below</span>
                  </div>
                </div>

                <!-- Campaign Data Loaded -->
                <template v-else-if="campaign">
                  <div class="urgent">
                    <div class="urgent-amt">
                      Only
                      {{ formatCurrency(campaign.goal - campaign.raised) }}
                      Left!
                    </div>
                    <div class="urgent-sub">Help us reach our goal</div>
                  </div>

                  <div class="progress-wrap">
                    <div class="progress-top">
                      <span>Progress</span>
                      <span class="pct"
                        >{{
                          getPercentage(campaign.raised, campaign.goal)
                        }}%</span
                      >
                    </div>
                    <div class="progress-bar">
                      <div
                        class="progress-fill"
                        :style="{
                          width:
                            getPercentage(campaign.raised, campaign.goal) + '%',
                        }"
                      ></div>
                    </div>
                  </div>

                  <div class="stats-grid">
                    <div class="stat blue">
                      <q-icon name="attach_money" />
                      <div class="stat-val">
                        {{ formatCurrency(campaign.raised) }}
                      </div>
                      <div class="stat-lbl">Raised</div>
                    </div>
                    <div class="stat green">
                      <q-icon name="people" />
                      <div class="stat-val">{{ campaign.donationCount }}</div>
                      <div class="stat-lbl">Donors</div>
                    </div>
                    <div class="stat purple">
                      <q-icon name="flag" />
                      <div class="stat-val">
                        {{ formatCurrency(campaign.goal) }}
                      </div>
                      <div class="stat-lbl">Goal</div>
                    </div>
                  </div>
                </template>

                <!-- Donate Button - Always shows -->
                <q-btn
                  label="Donate Now"
                  size="lg"
                  color="red-7"
                  unelevated
                  no-caps
                  class="donate-btn"
                  @click="handleDonate"
                />

                <div class="secure">
                  <q-icon name="lock" size="14px" />
                  <span>100% Secure</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Story - Always shows -->
          <div class="main">
            <div class="card story" style="text-align: justify">
              <p class="quote">
                “Education is the most powerful weapon which you can use to
                change the world.”
                <br />
                <span class="quote-author"> Nelson Mandela</span>
              </p>

              <p class="headline" style="text-align: right">
                <strong>Educate a Child. Empower a Future.</strong>
              </p>

              <p class="lead" style="text-align: justify">
                <strong
                  >They dream of becoming doctors, teachers, and
                  leaders.</strong
                >
                Yet in many villages, there is no school to nurture those
                dreams.
              </p>

              <p style="text-align: justify">
                Millions of children risk losing their future simply because
                they cannot access education. Poverty, conflict, long distances,
                and discrimination keep classrooms out of reach.
              </p>

              <p style="text-align: justify">
                At <strong class="brand">Lorena Foundation</strong>, we are
                changing this story one child at a time. We partner with
                communities to build schools, provide learning materials
                starting from $10, support trained teachers, and create safe,
                inclusive learning spaces where every child can thrive.
              </p>

              <div class="callout" style="text-align: justify">
                <p class="callout-title">
                  Every child deserves the chance to learn.
                </p>
                <p>
                  Whether it is a girl facing early marriage, a child with
                  disabilities, or an orphan without support, education gives
                  dignity, voice, and opportunity.
                </p>
              </div>

              <p class="conclusion" style="text-align: justify">
                Your support can open a classroom door and unlock a lifetime of
                possibility.
              </p>
            </div>
          </div>
        </div>

        <!-- Next Campaign Section - Always shows -->
        <div class="next-campaign-section">
          <div class="next-campaign-left">
            <h2 class="next-title">Explore More Campaigns</h2>
            <p class="next-desc">
              Discover other ways you can make a difference in communities
              across the region.
            </p>
            <q-btn
              label="Next Campaign"
              size="lg"
              color="primary"
              unelevated
              no-caps
              icon-right="arrow_forward"
              class="next-btn"
              to="/equality-and-empowerment"
            />
          </div>
          <div class="next-campaign-right">
            <div
              class="campaign-preview-card q-hover-shadow cursor-pointer"
              @click="$router.push('/equality-and-empowerment')"
              v-ripple
            >
              <div class="preview-image"></div>
              <div class="preview-content">
                <div class="preview-badge">Coming Next</div>
                <h3 class="preview-title">Equality and Empowerment</h3>
                <p class="preview-text">
                  We cannot succeed when half of us are held back.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useMeta } from "quasar";
import { useCampaigns } from "src/composables/useCampaigns";

useMeta({
  title: "Education for All - Lorena Foundation",
  meta: {
    description: { name: "description", content: "Lorena Foundation's Education for All campaign ensures every child has access to quality education and learning opportunities." },
    ogTitle: { property: "og:title", content: "Education for All - Lorena Foundation" },
    ogDescription: { property: "og:description", content: "Ensuring every child has access to quality education and learning opportunities." },
  },
});

const {
  campaign,
  loading,
  error,
  fetchCampaign,
  getPercentage,
  formatCurrency,
} = useCampaigns();

const handleDonate = () => {
  window.open("https://www.pesapal.com/your-payment-link", "_blank");
};

const reloadData = () => {
  fetchCampaign("education-for-all");
};

onMounted(() => {
  fetchCampaign("education-for-all");
});
</script>

<style scoped lang="scss">
.wash-page {
  background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
  min-height: 100vh;
}

// Hero - Background stays behind
.hero {
  position: relative;
  height: 62vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("/group-african-kids-classroom-education.jpg") center/cover;
  background-attachment: fixed;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(25, 118, 210, 0.488),
    rgba(43, 43, 43, 0.253)
  );
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  padding: 0 1.5rem;
  max-width: 800px;
  animation: fadeInUp 0.8s ease;
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

.badge {
  display: inline-block;
  padding: 0.4rem 1.2rem;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  color: white;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.hero-title {
  font-size: clamp(1rem, 4vw, 2.5rem);
  font-weight: 900;
  color: white;
  margin: 0 0 0.5rem 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: clamp(0.95rem, 2vw, 1.25rem);
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  font-weight: 400;
}

// Positioned title elements
.positioned-badge {
  position: absolute;
  top: 15%;
  right: 0%;
  transform: translateX(-50%);
  z-index: 4;
  padding: 0.4rem 1.2rem;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  color: white;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border: 1px solid rgba(255, 255, 255, 0.4);
  animation: fadeInUp 0.8s ease;
}

.positioned-titles {
  position: absolute;
  left: 2%;
  bottom: 5%;
  z-index: 4;
  animation: fadeInUp 0.8s ease 0.2s backwards;
}

.positioned-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  color: rgba(188, 241, 255, 0.95);
  margin: 0;
  font-weight: 700;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

// Content Area
.content-area {
  position: relative;
  z-index: 10;
  background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
  padding-top: 0 !important;
}

// Payment Banner
.payment-banner {
  top: 80px;
  z-index: 100;
  background: linear-gradient(135deg, #1976d2 0%, #ef4444 100%);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  animation: slideDown 0.5s ease;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.payment-banner-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0.1rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0.1rem;
  }
}

.banner-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: white;
  flex-shrink: 0;

  .banner-icon {
    font-size: 2rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 800;
    margin: 0 0 0.2rem 0;
    line-height: 1;
  }

  p {
    font-size: 0.7rem;
    margin: 0;
    opacity: 0.95;
  }

  @media (max-width: 1024px) {
    justify-content: center;
    text-align: center;
  }
}

.steps-horizontal {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
}

.step-h {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 0.6rem 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
}

.step-num-h {
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: #1976d2;
  font-size: 0.85rem;
  font-weight: 900;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
}

.step-content-h {
  flex: 1;
}

.step-title-h {
  font-size: 0.85rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.1rem;
  line-height: 1;
}

.step-desc-h {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.3;

  strong {
    font-weight: 800;
    color: white;
  }
}

.arrow {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    display: none;
  }
}

// Container & Grid
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1rem 3rem;
}

.container-head {
  padding-top: 0;
  width: 98%;
}

.grid {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

// Cards
.card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  animation: slideIn 0.5s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Story
.story {
  padding: 2rem;
  border-top-right-radius: 0;

  p {
    font-size: 0.96rem;
    line-height: 1.65;
    color: #777;
    margin-bottom: 0.875rem;
  }

  .lead {
    font-size: 1.1rem;
    color: #334155;
    strong {
      color: #0f172a;
      font-weight: 700;
    }
  }

  .conclusion {
    font-size: 1.05rem;
    font-weight: 600;
    color: #0f172a;
    margin: 0;
  }
}

.quote {
  font-style: italic;
  font-size: 1.05rem;
  color: #475569;
  border-left: 4px solid #1976d2;
  padding-left: 1rem;
  margin: 0 0 1.5rem 0;

  .quote-author {
    font-size: 0.9rem;
    font-weight: 600;
    color: #64748b;
  }
}

.headline {
  font-size: 1.2rem;
  color: #0f172a;
  margin-bottom: 1.25rem;
}

.brand {
  color: #1976d2;
  font-weight: 700;
}

.callout {
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  border-left: 4px solid #1976d2;
  padding: 1.2rem;
  border-radius: 0 12px 12px 0;
  margin: 1.25rem 0;

  .callout-title {
    font-size: 1.05rem;
    font-weight: 700;
    color: #0d47a1;
    margin: 0 0 0.4rem 0;
  }

  p {
    font-size: 0.95rem;
    color: #1565c0;
    margin: 0;
  }
}

// Sidebar - Sticky
.sidebar {
  @media (min-width: 1025px) {
    .sticky {
      position: sticky;
      top: 6rem;
    }
  }
}

.sticky {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

// Stats Card
.stats {
  padding: 1.5rem;
  box-shadow: none !important;
  border-radius: 0 !important;
}

// Loading State for Stats
.stats-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  gap: 1rem;

  .loading-text {
    font-size: 0.9rem;
    color: #475569;
    margin: 0;
    font-weight: 600;
  }
}

// Error State for Stats
.stats-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
  text-align: center;
  gap: 0.75rem;

  .error-title {
    font-size: 1rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0;
  }

  .error-message {
    font-size: 0.85rem;
    color: #64748b;
    margin: 0;
    line-height: 1.4;
  }

  .retry-btn {
    margin-top: 0.5rem;
    padding: 0.4rem 1.5rem;
    font-weight: 600;
  }

  .error-note {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.75rem;
    color: #475569;
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 8px;

    .q-icon {
      color: #1976d2;
    }
  }
}

.urgent {
  background: #222;
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 1.25rem;

  .urgent-amt {
    font-size: 0.9rem;
    font-weight: 800;
    margin-bottom: 0.2rem;
  }

  .urgent-sub {
    font-size: 0.7rem;
    opacity: 0.95;
  }
}

.progress-wrap {
  margin-bottom: 1.25rem;
}

.progress-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.6rem;

  span:first-child {
    font-size: 0.8rem;
    font-weight: 600;
    color: #64748b;
  }

  .pct {
    font-size: 1.5rem;
    font-weight: 900;
    color: #1976d2;
  }
}

.progress-bar {
  height: 10px;
  background: #e2e8f0;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #1976d2, #42a5f5);
  border-radius: 50px;
  transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.5),
      transparent
    );
    animation: shimmer 2s infinite;
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6rem;
  margin-bottom: 1.25rem;
}

.stat {
  text-align: center;
  padding: 0.75rem 0.4rem;
  border-radius: 10px;

  &.blue {
    background: #e3f2fd;
  }
  &.green {
    background: #e8f5e9;
  }
  &.purple {
    background: #f3e5f5;
  }

  .q-icon {
    font-size: 1.25rem;
    margin-bottom: 0.4rem;
  }

  &.blue .q-icon {
    color: #1976d2;
  }
  &.green .q-icon {
    color: #388e3c;
  }
  &.purple .q-icon {
    color: #7b1fa2;
  }
}

.stat-val {
  font-size: 1rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 0.2rem;

  .blue & {
    color: #0d47a1;
  }
  .green & {
    color: #1b5e20;
  }
  .purple & {
    color: #4a148c;
  }
}

.stat-lbl {
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  .blue & {
    color: #1565c0;
  }
  .green & {
    color: #2e7d32;
  }
  .purple & {
    color: #6a1b9a;
  }
}

.donate-btn {
  width: 100%;
  padding: 0.5rem;
  font-size: 1.05rem;
  font-weight: 700;
  border-radius: 14px;
  margin-bottom: 0.6rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(211, 47, 47, 0.35);
  }
}

.secure {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  color: #000;
  font-size: 0.7rem;
  font-weight: 600;
}

// Next Campaign Section
.next-campaign-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  background: #eff5fa;
  border-radius: 20px;
  padding: 1.5rem;
  margin-top: 0rem;
  margin-bottom: 0rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem 1.5rem;
    gap: 2rem;
  }
}

.next-campaign-left {
  .next-title {
    font-size: 2rem;
    font-weight: 800;
    color: #0f172a;
    margin: 0 0 1rem 0;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .next-desc {
    font-size: 1rem;
    color: #475569;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .next-btn {
    padding: 0.55rem 2rem;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 12px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateX(5px);
    }
  }
}

.next-campaign-right {
  .campaign-preview-card {
    background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
    border-radius: 16px;
    overflow: hidden;
    border: 2px solid #cbd5e1;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    }
  }

  .preview-image {
    width: 100%;
    height: 200px;
    background: url("/our_values.jpg") center/cover;
    background-color: #94a3b8;
  }

  .preview-content {
    padding: 1rem;
  }

  .preview-badge {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    background: #1976d2;
    color: white;
    border-radius: 50px;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.75rem;
  }

  .preview-title {
    font-size: 1.25rem;
    font-weight: 800;
    color: #0f172a;
    margin: 0 0 0.5rem 0;
  }

  .preview-text {
    font-size: 0.9rem;
    color: #475569;
    line-height: 1.5;
    margin: 0;
  }
}

// Responsive
@media (max-width: 768px) {
  .hero {
    height: 40vh;
  }
  .hero-bg {
    position: top;
  }
  .hero-title {
    font-size: 1.75rem;
  }
  .hero-subtitle {
    font-size: 0.9rem;
  }
  .positioned-titles {
    left: 5%;
    bottom: 15%;
  }
  .story {
    padding: 1.5rem;
  }
  .stats {
    padding: 1rem;
  }
  .container {
    padding: 1.5rem 0.75rem 2rem;
  }
  .container-head {
    padding-top: 0;
    width: 100%;
  }
  .payment-banner {
    top: 30px;
  }
}
</style>

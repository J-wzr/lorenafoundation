<template>
  <q-page class="volunteer-page">
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

    <!-- Why Volunteer Section -->
    <section class="volunteer-section">
      <div class="container">
        <h2 class="volunteer-title">Why Volunteer with Us</h2>

        <div class="volunteer-cards">
          <div class="volunteer-card">
            <div class="volunteer-icon-wrapper">
              <svg aria-hidden="true" class="volunteer-icon e-font-icon-svg e-fas-dove" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M288 167.2v-28.1c-28.2-36.3-47.1-79.3-54.1-125.2-2.1-13.5-19-18.8-27.8-8.3-21.1 24.9-37.7 54.1-48.9 86.5 34.2 38.3 80 64.6 130.8 75.1zM400 64c-44.2 0-80 35.9-80 80.1v59.4C215.6 197.3 127 133 87 41.8c-5.5-12.5-23.2-13.2-29-.9C41.4 76 32 115.2 32 156.6c0 70.8 34.1 136.9 85.1 185.9 13.2 12.7 26.1 23.2 38.9 32.8l-143.9 36C1.4 414-3.4 426.4 2.6 435.7 20 462.6 63 508.2 155.8 512c8 .3 16-2.6 22.1-7.9l65.2-56.1H320c88.4 0 160-71.5 160-159.9V128l32-64H400zm0 96.1c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"></path>
              </svg>
            </div>
            <h3 class="volunteer-card-title">Make a Lasting Impact</h3>
            <p class="volunteer-card-description">
              By volunteering with Lorena Foundation, you directly contribute to improving access to safe water, sanitation, healthcare, education, and economic opportunities for communities in developing countries and disaster-affected areas. Your efforts help create sustainable solutions that truly transform lives.
            </p>
          </div>

          <div class="volunteer-card">
            <div class="volunteer-icon-wrapper">
              <q-icon name="school" class="volunteer-icon" />
            </div>
            <h3 class="volunteer-card-title">Develop Skills and Knowledge</h3>
            <p class="volunteer-card-description">
              Volunteering with us gives you hands-on experience in community development, project management, and sustainable practices. You'll gain valuable skills, insights, and personal growth while actively contributing to meaningful initiatives that empower grassroots communities.
            </p>
          </div>

          <div class="volunteer-card">
            <div class="volunteer-icon-wrapper">
              <q-icon name="volunteer_activism" class="volunteer-icon" />
            </div>
            <h3 class="volunteer-card-title">Join a Values-Driven Community</h3>
            <p class="volunteer-card-description">
              When you volunteer, you become part of a compassionate, innovative, and accountable team. We believe in collaboration, integrity, and sustainability, ensuring that every action you take contributes to equitable, inclusive, and long-term positive change.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Volunteer Form Section -->
    <section class="form-section">
      <div class="container">
        <div class="form-header">
          <h2 class="form-title">Become a Volunteer</h2>
          <p class="form-subtitle">
            Join our community and make a lasting impact. Fill out the form below to start your volunteer journey with Lorena Foundation.
          </p>
        </div>

        <!-- Success Message -->
        <div v-if="submitted" class="success-card">
          <div class="success-icon">✓</div>
          <h3 class="success-title">Thank You!</h3>
          <p class="success-message">
            Your volunteer application has been submitted successfully.
            We'll review your information and get back to you soon.
          </p>
        </div>

        <!-- Form -->
        <div v-else class="volunteer-form">
          <!-- Personal Information -->
          <div class="form-section-group">
            <h3 class="section-title">Personal Information</h3>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">First Name *</label>
                <q-input
                  v-model="formData.firstName"
                  outlined
                  dense
                  placeholder="Enter your first name"
                  class="form-input"
                />
              </div>

              <div class="form-group">
                <label class="form-label">Last Name *</label>
                <q-input
                  v-model="formData.lastName"
                  outlined
                  dense
                  placeholder="Enter your last name"
                  class="form-input"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Email Address *</label>
                <q-input
                  v-model="formData.email"
                  type="email"
                  outlined
                  dense
                  placeholder="your.email@example.com"
                  class="form-input"
                />
              </div>

              <div class="form-group">
                <label class="form-label">Phone Number *</label>
                <q-input
                  v-model="formData.phone"
                  type="tel"
                  outlined
                  dense
                  placeholder="+1 (555) 000-0000"
                  class="form-input"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Country *</label>
                <q-input
                  v-model="formData.country"
                  outlined
                  dense
                  placeholder="Enter your country"
                  class="form-input"
                />
              </div>

              <div class="form-group">
                <label class="form-label">City *</label>
                <q-input
                  v-model="formData.city"
                  outlined
                  dense
                  placeholder="Enter your city"
                  class="form-input"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Date of Birth *</label>
                <q-input
                  v-model="formData.dateOfBirth"
                  type="date"
                  outlined
                  dense
                  class="form-input"
                />
              </div>
            </div>
          </div>

          <!-- Volunteer Preferences -->
          <div class="form-section-group">
            <h3 class="section-title">Volunteer Preferences</h3>

            <div class="form-group">
              <label class="form-label">Areas of Interest * (Select at least one)</label>
              <div class="checkbox-grid">
                <q-checkbox
                  v-for="interest in interestOptions"
                  :key="interest"
                  v-model="formData.interests"
                  :val="interest"
                  :label="interest"
                  class="checkbox-item"
                />
              </div>
            </div>
          </div>

          <!-- Motivation -->
          <div class="form-section-group">
            <h3 class="section-title">Motivation</h3>

            <div class="form-group">
              <label class="form-label">Why do you want to volunteer with us? *</label>
              <q-input
                v-model="formData.motivation"
                type="textarea"
                outlined
                dense
                :rows="4"
                placeholder="Share your motivation and what you hope to achieve..."
                class="form-input"
              />
            </div>

            <div class="form-group">
              <label class="form-label">How did you hear about us?</label>
              <q-select
                v-model="formData.hearAboutUs"
                :options="hearAboutOptions"
                outlined
                dense
                placeholder="Select an option"
                class="form-input"
              />
            </div>
          </div>

          <q-btn
            @click="handleSubmit"
            label="Submit Application"
            class="submit-btn"
            unelevated
            no-caps
          />
        </div>
      </div>
    </section>

  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'VolunteerPage',
  setup() {
    const submitted = ref(false);
    const formData = ref({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      dateOfBirth: '',
      interests: [],
      motivation: '',
      hearAboutUs: ''
    });

    const interestOptions = [
      'Water And Sanitation',
      'Equality & Empowerment',
      'Education for all',
      'Green Transformation',
      'Community Health',
      'Livelihood & Economic Inclusion'
    ];

    const hearAboutOptions = [
      'Social Media',
      'Friend or Family',
      'Search Engine',
      'News/Media',
      'Event',
      'Other'
    ];

    const handleSubmit = () => {
      // Basic validation
      if (!formData.value.firstName || !formData.value.lastName ||
          !formData.value.email || !formData.value.phone ||
          !formData.value.country || !formData.value.city ||
          !formData.value.dateOfBirth || formData.value.interests.length === 0 ||
          !formData.value.motivation) {
        alert('Please fill in all required fields');
        return;
      }

      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData.value);

      // Show success message
      submitted.value = true;

      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return {
      submitted,
      formData,
      interestOptions,
      hearAboutOptions,
      handleSubmit
    };
  }
}
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

.volunteer-page {
  background: #f8fafc;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
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

// Why Volunteer Section
.volunteer-section {
  background: #f2f6ff;
  padding: 5rem 0;
}

.volunteer-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: #19aae0;
  margin: 0 0 3rem 0;
  animation: fadeInUp 0.8s ease-out;
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

.volunteer-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 1300px;
}

.volunteer-card {
  background: transparent;
  border-radius: 0;
  padding: 1rem;
  text-align: center;
  box-shadow: none;
  transition: transform 0.3s ease;
  animation: fadeInUp 0.8s ease-out backwards;

  &:nth-child(1) {
    animation-delay: 0.2s;
  }
  &:nth-child(2) {
    animation-delay: 0.4s;
  }
  &:nth-child(3) {
    animation-delay: 0.6s;
  }

  &:hover {
    transform: translateY(-5px);
  }
}

.volunteer-icon-wrapper {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.volunteer-card:hover .volunteer-icon-wrapper {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

.volunteer-icon {
  width: 50px;
  height: 50px;
  color: #19aae0;
  transition: color 0.3s ease;
  font-size: 3.5rem;
}

.volunteer-card-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #19aae0;
  margin: 0 0 1rem 0;
  line-height: 1.3;
}

.volunteer-card-description {
  font-size: 16px;
  line-height: 1.7;
  color: #1a1a1a;
  margin: 0;
  font-weight: 400;
}

// Form Section Styles
.form-section {
  padding: 5rem 0;
  background: #ffffff;
}

.form-header {
  text-align: center;
  margin-bottom: 3rem;
  animation: fadeInUp 0.8s ease-out;
}

.form-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #19aae0;
  margin: 0 0 1rem 0;
}

.form-subtitle {
  font-size: 1.1rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.success-card {
  background: #f0fdf4;
  border: 2px solid #86efac;
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  animation: fadeInUp 0.8s ease-out;
}

.success-icon {
  width: 80px;
  height: 80px;
  background: #22c55e;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  margin: 0 auto 1.5rem;
  font-weight: bold;
}

.success-title {
  font-size: 2rem;
  font-weight: 700;
  color: #166534;
  margin: 0 0 1rem 0;
}

.success-message {
  font-size: 1.1rem;
  color: #15803d;
  line-height: 1.6;
  margin: 0;
}

.volunteer-form {
  max-width: 800px;
  margin: 0 auto;
  animation: fadeInUp 0.8s ease-out;
}

.form-section-group {
  background: #f8fafc;
  border-radius: 16px;
  padding: 2.5rem;
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 1.5rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #e2e8f0;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-size: 0.95rem;
  font-weight: 500;
  color: #334155;
  margin-bottom: 0.5rem;
}

.form-input {
  width: 100%;
}

.checkbox-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.checkbox-item {
  font-size: 0.95rem;
}

.submit-btn {
  width: 100%;
  background: #19aae0;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 12px;
  margin-top: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: #1590c4;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(25, 170, 224, 0.3);
  }
}

// Tablet (≤968px)
@media (max-width: 968px) {
  .volunteer-section {
    padding: 4rem 0;
  }

  .volunteer-cards {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .volunteer-title {
    font-size: 2.25rem;
    margin: 0 0 3rem 0;
  }

  .volunteer-card {
    max-width: 600px;
    margin: 0 auto;
  }
}

// Mobile (≤768px)
@media (max-width: 768px) {
  .volunteer-section {
    padding: 3rem 0;
  }

  .volunteer-title {
    font-size: 2rem;
  }

  .volunteer-card {
    padding: 2.5rem 2rem;
  }

  .volunteer-icon-wrapper {
    width: 110px;
    height: 110px;
  }

  .volunteer-icon {
    font-size: 3.25rem;
  }

  .volunteer-card-title {
    font-size: 1.4rem;
  }

  .volunteer-card-description {
    font-size: 0.95rem;
  }

  // Form responsive
  .form-section {
    padding: 3rem 0;
  }

  .form-title {
    font-size: 2rem;
  }

  .form-subtitle {
    font-size: 1rem;
  }

  .form-section-group {
    padding: 2rem;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .checkbox-grid {
    grid-template-columns: 1fr;
  }
}

// Small Mobile (≤480px)
@media (max-width: 480px) {
  .volunteer-section {
    padding: 2.5rem 0;
  }

  .volunteer-title {
    font-size: 1.75rem;
    margin: 0 0 2.5rem 0;
  }

  .volunteer-cards {
    gap: 1rem;
  }

  .volunteer-card {
    padding: 2rem 1.5rem;
    border-radius: 0;
  }

  .volunteer-icon-wrapper {
    width: 100px;
    height: 100px;
    margin-bottom: 1.5rem;
  }

  .volunteer-icon {
    font-size: 3rem;
  }

  .volunteer-card-title {
    font-size: 1.3rem;
    margin: 0 0 1rem 0;
  }

  .volunteer-card-description {
    font-size: 0.9rem;
    line-height: 1.7;
  }

  // Form responsive
  .form-section {
    padding: 2.5rem 0;
  }

  .form-title {
    font-size: 1.75rem;
  }

  .form-subtitle {
    font-size: 0.95rem;
  }

  .form-section-group {
    padding: 1.5rem;
    border-radius: 12px;
  }

  .section-title {
    font-size: 1.3rem;
  }

  .success-card {
    padding: 2rem;
  }

  .success-icon {
    width: 60px;
    height: 60px;
    font-size: 2.5rem;
  }

  .success-title {
    font-size: 1.6rem;
  }

  .success-message {
    font-size: 1rem;
  }
}

// Extra Small Mobile (≤375px)
@media (max-width: 375px) {
  .volunteer-title {
    font-size: 1.6rem;
  }

  .volunteer-card {
    padding: 1.75rem 1.25rem;
  }

  .volunteer-icon-wrapper {
    width: 90px;
    height: 90px;
  }

  .volunteer-icon {
    font-size: 2.75rem;
  }

  .volunteer-card-title {
    font-size: 1.2rem;
  }
}
</style>

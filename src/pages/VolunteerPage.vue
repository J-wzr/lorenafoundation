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
            <span class="breadcrumb-item active">Volunteer</span>
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
              <svg
                aria-hidden="true"
                class="volunteer-icon e-font-icon-svg e-fas-dove"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M288 167.2v-28.1c-28.2-36.3-47.1-79.3-54.1-125.2-2.1-13.5-19-18.8-27.8-8.3-21.1 24.9-37.7 54.1-48.9 86.5 34.2 38.3 80 64.6 130.8 75.1zM400 64c-44.2 0-80 35.9-80 80.1v59.4C215.6 197.3 127 133 87 41.8c-5.5-12.5-23.2-13.2-29-.9C41.4 76 32 115.2 32 156.6c0 70.8 34.1 136.9 85.1 185.9 13.2 12.7 26.1 23.2 38.9 32.8l-143.9 36C1.4 414-3.4 426.4 2.6 435.7 20 462.6 63 508.2 155.8 512c8 .3 16-2.6 22.1-7.9l65.2-56.1H320c88.4 0 160-71.5 160-159.9V128l32-64H400zm0 96.1c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"
                ></path>
              </svg>
            </div>
            <h3 class="volunteer-card-title">Make a Lasting Impact</h3>
            <p class="volunteer-card-description">
              By volunteering with Lorena Foundation, you directly contribute to
              improving access to safe water, sanitation, healthcare, education,
              and economic opportunities for communities in developing countries
              and disaster-affected areas.
            </p>
          </div>

          <div class="volunteer-card">
            <div class="volunteer-icon-wrapper">
              <q-icon name="school" class="volunteer-icon" />
            </div>
            <h3 class="volunteer-card-title">Develop Skills and Knowledge</h3>
            <p class="volunteer-card-description">
              Volunteering with us gives you hands-on experience in community
              development, project management, and sustainable practices. You'll
              gain valuable skills while contributing to meaningful initiatives.
            </p>
          </div>

          <div class="volunteer-card">
            <div class="volunteer-icon-wrapper">
              <q-icon name="volunteer_activism" class="volunteer-icon" />
            </div>
            <h3 class="volunteer-card-title">Join a Values-Driven Community</h3>
            <p class="volunteer-card-description">
              When you volunteer, you become part of a compassionate,
              innovative, and accountable team. We believe in collaboration and
              sustainability, ensuring every action contributes to positive
              change.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Volunteer Form Section -->
    <section class="form-section">
      <div class="form-pattern"></div>
      <div class="container">
        <div class="form-header">
          <h2 class="form-title">Become a Volunteer</h2>
          <p class="form-subtitle">
            Join our community and make a lasting impact. Fill out the form
            below to start your volunteer journey with Lorena Foundation.
          </p>
        </div>

        <!-- Success Message -->
        <div v-if="submitted" class="success-card">
          <div class="success-icon">✓</div>
          <h3 class="success-title">Thank You!</h3>
          <p class="success-message">
            Your volunteer application has been submitted successfully. We'll
            review your information and get back to you soon.
          </p>
          <q-btn
            @click="resetForm"
            label="Submit Another Application"
            class="reset-btn"
            unelevated
            no-caps
          />
        </div>

        <!-- Form -->
        <div v-else class="volunteer-form">
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
                  :error="errors.firstName"
                  :error-message="
                    errors.firstName ? 'First name is required' : ''
                  "
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
                  :error="errors.lastName"
                  :error-message="
                    errors.lastName ? 'Last name is required' : ''
                  "
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
                  :error="errors.email"
                  :error-message="errors.email ? 'Valid email is required' : ''"
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
                  :error="errors.phone"
                  :error-message="
                    errors.phone ? 'Phone number is required' : ''
                  "
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
                  :error="errors.country"
                  :error-message="errors.country ? 'Country is required' : ''"
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
                  :error="errors.city"
                  :error-message="errors.city ? 'City is required' : ''"
                />
              </div>
            </div>
          </div>

          <div class="form-section-group">
            <h3 class="section-title">Volunteer Preferences</h3>

            <div class="form-group">
              <label class="form-label"
                >Areas of Interest * (Select at least one)</label
              >
              <div class="checkbox-grid">
                <q-checkbox
                  v-for="interest in interestOptions"
                  :key="interest"
                  v-model="formData.interests"
                  :val="interest"
                  :label="interest"
                  class="checkbox-item"
                  color="primary"
                />
              </div>
              <div v-if="errors.interests" class="error-text">
                Please select at least one area of interest
              </div>
            </div>
          </div>

          <div class="form-section-group">
            <h3 class="section-title">Motivation</h3>

            <div class="form-group">
              <label class="form-label"
                >Why do you want to volunteer with us? *</label
              >
              <q-input
                v-model="formData.motivation"
                type="textarea"
                outlined
                dense
                :rows="4"
                placeholder="Share your motivation and what you hope to achieve..."
                class="form-input"
                :error="errors.motivation"
                :error-message="
                  errors.motivation ? 'Please share your motivation' : ''
                "
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
            :loading="loading"
            :disable="loading"
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
import { ref, reactive } from "vue";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "src/boot/firebase";
import { Notify, useMeta } from "quasar";

export default {
  name: "VolunteerPage",
  setup() {
    useMeta({
      title: "Volunteer - Lorena Foundation",
      meta: {
        description: { name: "description", content: "Join Lorena Foundation as a volunteer and help transform lives through education, health and community empowerment programs." },
        ogTitle: { property: "og:title", content: "Volunteer - Lorena Foundation" },
        ogDescription: { property: "og:description", content: "Join us as a volunteer and help transform lives." },
      },
    });

    const submitted = ref(false);
    const loading = ref(false);
    const formData = ref({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      interests: [],
      motivation: "",
      hearAboutUs: "",
    });

    const errors = reactive({
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      country: false,
      city: false,
      interests: false,
      motivation: false,
    });

    const interestOptions = [
      "Water And Sanitation",
      "Equality & Empowerment",
      "Education for all",
      "Green Transformation",
      "Community Health",
      "Livelihood & Economic Inclusion",
    ];

    const hearAboutOptions = [
      "Social Media",
      "Friend or Family",
      "Search Engine",
      "News/Media",
      "Event",
      "Other",
    ];

    const validateForm = () => {
      let isValid = true;

      // Reset errors
      Object.keys(errors).forEach((key) => {
        errors[key] = false;
      });

      // Validate required fields
      if (!formData.value.firstName.trim()) {
        errors.firstName = true;
        isValid = false;
      }
      if (!formData.value.lastName.trim()) {
        errors.lastName = true;
        isValid = false;
      }
      if (!formData.value.phone.trim()) {
        errors.phone = true;
        isValid = false;
      }
      if (!formData.value.country.trim()) {
        errors.country = true;
        isValid = false;
      }
      if (!formData.value.city.trim()) {
        errors.city = true;
        isValid = false;
      }
      if (formData.value.interests.length === 0) {
        errors.interests = true;
        isValid = false;
      }
      if (!formData.value.motivation.trim()) {
        errors.motivation = true;
        isValid = false;
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (
        !formData.value.email.trim() ||
        !emailRegex.test(formData.value.email)
      ) {
        errors.email = true;
        isValid = false;
      }

      return isValid;
    };

    const handleSubmit = async () => {
      if (!validateForm()) {
        Notify.create({
          type: "negative",
          message: "Please fill in all required fields correctly",
          position: "top",
          timeout: 3000,
        });
        return;
      }

      loading.value = true;

      try {
        // Use addDoc instead of setDoc to generate unique IDs automatically
        const volunteersRef = collection(db, "volunteers");

        const volunteerData = {
          firstName: formData.value.firstName.trim(),
          lastName: formData.value.lastName.trim(),
          email: formData.value.email.trim().toLowerCase(),
          phone: formData.value.phone.trim(),
          country: formData.value.country.trim(),
          city: formData.value.city.trim(),
          interests: formData.value.interests,
          motivation: formData.value.motivation.trim(),
          hearAboutUs: formData.value.hearAboutUs || "Not specified",
          status: "pending",
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        };

        await addDoc(volunteersRef, volunteerData);

        submitted.value = true;
        window.scrollTo({ top: 0, behavior: "smooth" });

        Notify.create({
          type: "positive",
          message: "Application submitted successfully!",
          position: "top",
          timeout: 3000,
        });
      } catch (error) {
        console.error("Error submitting form:", error);

        let errorMessage = "Failed to submit application. Please try again.";

        // Handle specific error cases
        if (error.code === "permission-denied") {
          errorMessage =
            "Permission denied. Please check your internet connection and try again.";
        } else if (error.code === "unavailable") {
          errorMessage =
            "Network error. Please check your internet connection.";
        }

        Notify.create({
          type: "negative",
          message: errorMessage,
          position: "top",
          timeout: 5000,
        });
      } finally {
        loading.value = false;
      }
    };

    const resetForm = () => {
      formData.value = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        interests: [],
        motivation: "",
        hearAboutUs: "",
      };
      Object.keys(errors).forEach((key) => {
        errors[key] = false;
      });
      submitted.value = false;
    };

    return {
      submitted,
      loading,
      formData,
      errors,
      interestOptions,
      hearAboutOptions,
      handleSubmit,
      resetForm,
    };
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

.volunteer-page {
  background: #f8fafc;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  overflow-x: hidden;
}

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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.volunteer-section {
  background: linear-gradient(180deg, #f2f6ff 0%, #fafbff 100%);
  padding: 5rem 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(
        circle at 20% 30%,
        rgba(25, 170, 224, 0.03) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 70%,
        rgba(25, 170, 224, 0.03) 0%,
        transparent 50%
      );
    pointer-events: none;
  }
}

.volunteer-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: #19aae0;
  margin: 0 0 3rem 0;
  position: relative;
  z-index: 1;
}

.volunteer-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1300px;
  position: relative;
  z-index: 1;
}

.volunteer-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  border: 1px solid rgba(25, 170, 224, 0.1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(25, 170, 224, 0.15);
    background: rgba(255, 255, 255, 0.95);
  }
}

.volunteer-icon-wrapper {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(25, 170, 224, 0.1);
  border: 2px solid rgba(25, 170, 224, 0.1);
}

.volunteer-card:hover .volunteer-icon-wrapper {
  transform: scale(1.05) rotate(5deg);
  box-shadow: 0 6px 20px rgba(25, 170, 224, 0.2);
  border-color: rgba(25, 170, 224, 0.3);
}

.volunteer-icon {
  width: 50px;
  height: 50px;
  color: #19aae0;
  transition: color 0.3s ease;
  font-size: 3.5rem;
}

.volunteer-card:hover .volunteer-icon {
  color: #1590c4;
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
  color: #475569;
  margin: 0;
  font-weight: 400;
}

.form-section {
  position: relative;
  padding: 5rem 0;
  background: #ffffff;
  overflow: hidden;
}

.form-header {
  position: relative;
  z-index: 1;
  text-align: center;
  margin-bottom: 3rem;
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
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border: 2px solid #86efac;
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(34, 197, 94, 0.1);
}

.success-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  margin: 0 auto 1.5rem;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);
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
  margin: 0 0 2rem 0;
}

.reset-btn {
  background: #19aae0;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #1590c4;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(25, 170, 224, 0.3);
  }
}

.volunteer-form {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.form-section-group {
  background: rgba(248, 250, 252, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(226, 232, 240, 0.8);
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

.error-text {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.submit-btn {
  width: 100%;
  background: linear-gradient(135deg, #19aae0 0%, #1590c4 100%);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 12px;
  margin-top: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(25, 170, 224, 0.2);

  &:hover {
    background: linear-gradient(135deg, #1590c4 0%, #127ba8 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(25, 170, 224, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
}

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
  }

  .volunteer-card {
    max-width: 600px;
    margin: 0 auto;
  }
}

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

  .volunteer-card-title {
    font-size: 1.4rem;
  }
  .volunteer-card-title {
    font-size: 1.4rem;
  }
  .volunteer-card-description {
    font-size: 0.95rem;
  }
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
@media (max-width: 480px) {
  .container {
    padding: 0 1.5rem;
  }
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
  }
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

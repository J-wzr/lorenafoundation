<template>
  <q-page class="contact-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
      <div class="hero-content">
        <div class="container">
          <div class="breadcrumb">
            <router-link to="/" class="breadcrumb-link">Home</router-link>
            <span class="breadcrumb-separator">/</span>
            <span class="breadcrumb-current">Contact Us</span>
          </div>
          <h1 class="hero-title">Get In Touch</h1>
          <p class="hero-subtitle">
            See below for ways to connect with our team by phone, email, or in
            person.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content Section -->
    <section class="main-content">
      <div class="container">
        <div class="content-grid">
          <!-- Left Column - Contact Form -->
          <div class="form-column">
            <div class="form-card">
              <div class="card-icon">
                <q-icon name="mail_outline" />
              </div>
              <h2 class="card-title">Email Us</h2>
              <p class="card-description">
                Fill out the form below and we will reply within 48 hours. Or
                email us directly at
                <a href="mailto:info@lorenafoundation.org" class="email-link"
                  >info@lorenafoundation.org</a
                >
              </p>

              <!-- Success Message -->
              <div v-if="submitted" class="success-message">
                <div class="success-icon">✓</div>
                <h3 class="success-title">Message Sent!</h3>
                <p class="success-text">
                  We'll get back to you within 48 hours.
                </p>
                <q-btn
                  @click="resetForm"
                  label="Send Another Message"
                  flat
                  class="reset-btn"
                  no-caps
                />
              </div>

              <!-- Contact Form -->
              <form v-else @submit.prevent="handleSubmit" class="contact-form">
                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label">First Name *</label>
                    <q-input
                      v-model="formData.firstName"
                      outlined
                      dense
                      placeholder="John"
                      class="form-input"
                      required
                      :rules="[(val) => !!val || 'First name is required']"
                    />
                  </div>
                  <div class="form-group">
                    <label class="form-label">Last Name *</label>
                    <q-input
                      v-model="formData.lastName"
                      outlined
                      dense
                      placeholder="Doe"
                      class="form-input"
                      required
                      :rules="[(val) => !!val || 'Last name is required']"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label">Email *</label>
                  <q-input
                    v-model="formData.email"
                    type="email"
                    outlined
                    dense
                    placeholder="your.email@example.com"
                    class="form-input"
                    required
                    :rules="[
                      (val) => !!val || 'Email is required',
                      (val) =>
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ||
                        'Invalid email format',
                    ]"
                  />
                </div>

                <div class="form-group">
                  <label class="form-label">Your Interest</label>
                  <q-select
                    v-model="formData.interest"
                    :options="interestOptions"
                    outlined
                    dense
                    placeholder="I would like to..."
                    class="form-input"
                  />
                </div>

                <div class="form-group">
                  <label class="form-label">Message *</label>
                  <q-input
                    v-model="formData.message"
                    type="textarea"
                    outlined
                    dense
                    :rows="4"
                    placeholder="Tell us how we can help..."
                    class="form-input"
                    required
                    :rules="[(val) => !!val || 'Message is required']"
                  />
                </div>

                <q-btn
                  type="submit"
                  :loading="loading"
                  :disable="loading"
                  label="Send Message"
                  class="submit-btn"
                  unelevated
                  no-caps
                />
              </form>
            </div>
          </div>

          <!-- Right Column - Office Info & Map -->
          <div class="info-column">
            <!-- Office Card -->
            <div class="office-card">
              <div class="office-header">
                <div class="office-icon">
                  <q-icon name="location_city" />
                </div>
                <h2 class="office-title">Head Office</h2>
              </div>

              <div class="office-content">
                <h3 class="office-name">Arua, Uganda</h3>
                <p class="office-description">
                  Located in the heart of West Nile, our Arua office serves as
                  the regional hub for communities across northwestern Uganda.
                  From here, Lorena Foundation coordinates safe water projects,
                  sanitation programs, and livelihood initiatives that directly
                  reach rural and hard-to-access areas. The Arua office also
                  works closely with local leaders, grassroots organizations,
                  and development partners to strengthen health systems and
                  promote inclusive socio-economic growth.
                </p>
              </div>

              <!-- Map integrated into office card -->
              <div class="map-section">
                <div class="map-header">
                  <h3 class="map-title">Find Us</h3>
                  <a
                    href="https://www.google.com/maps/place/Arua,+Uganda"
                    target="_blank"
                    class="directions-link"
                  >
                    <q-icon name="directions" />
                    Get Directions
                  </a>
                </div>
                <div class="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254982.17676770958!2d30.734405599999998!3d3.0327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1767f4e0e3e0e3e3%3A0x7d9f8f8b8b8b8b8b!2sArua%2C%20Uganda!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
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
import { ref } from "vue";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "src/boot/firebase";
import { Notify } from "quasar";

export default {
  name: "ContactPage",
  setup() {
    const submitted = ref(false);
    const loading = ref(false);
    const formData = ref({
      firstName: "",
      lastName: "",
      email: "",
      interest: "",
      message: "",
    });

    const interestOptions = [
      "Volunteer with us",
      "Partner with us",
      "Donate",
      "Request information",
      "Media inquiry",
      "Other",
    ];

    const handleSubmit = async () => {
      if (
        !formData.value.firstName ||
        !formData.value.lastName ||
        !formData.value.email ||
        !formData.value.message
      ) {
        Notify.create({
          type: "negative",
          message: "Please fill in all required fields",
          position: "top",
          timeout: 3000,
        });
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.value.email)) {
        Notify.create({
          type: "negative",
          message: "Please enter a valid email address",
          position: "top",
          timeout: 3000,
        });
        return;
      }

      loading.value = true;

      try {
        const contactsRef = collection(db, "contacts");

        const contactData = {
          firstName: formData.value.firstName.trim(),
          lastName: formData.value.lastName.trim(),
          email: formData.value.email.trim().toLowerCase(),
          interest: formData.value.interest || "Not specified",
          message: formData.value.message.trim(),
          status: "new",
          createdAt: serverTimestamp(),
        };

        await addDoc(contactsRef, contactData);

        submitted.value = true;
        window.scrollTo({ top: 400, behavior: "smooth" });

        Notify.create({
          type: "positive",
          message: "Message sent successfully!",
          position: "top",
          timeout: 3000,
        });
      } catch (error) {
        console.error("Error submitting form:", error);

        let errorMessage = "Failed to send message. Please try again.";

        if (error.code === "permission-denied") {
          errorMessage =
            "Permission denied. Please check your internet connection.";
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
        interest: "",
        message: "",
      };
      submitted.value = false;
    };

    return {
      submitted,
      loading,
      formData,
      interestOptions,
      handleSubmit,
      resetForm,
    };
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");

.contact-page {
  background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #f8fafc 100%);
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  overflow-x: hidden;
  min-height: 100vh;
  position: relative;
}

.contact-page::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      circle at 20% 30%,
      rgba(25, 170, 224, 0.08) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(21, 144, 196, 0.06) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 50% 50%,
      rgba(25, 170, 224, 0.04) 0%,
      transparent 70%
    );
  pointer-events: none;
  z-index: 0;
}

.hero-section {
  position: relative;
  height: 35vh;
  min-height: 280px;
  max-height: 350px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, #19aae0 0%, #1590c4 100%);
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("/planting_trees.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.15;
  transform: scale(1.1);
  animation: subtle-zoom 15s ease-in-out infinite alternate;
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(25, 170, 224, 0.95) 0%,
    rgba(21, 144, 196, 0.9) 100%
  );
  z-index: 1;
}

.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  overflow: hidden;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  right: 10%;
  animation: float 20s ease-in-out infinite;
}

.shape-2 {
  width: 200px;
  height: 200px;
  bottom: -50px;
  left: 15%;
  animation: float 15s ease-in-out infinite 2s;
}

.shape-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  right: 20%;
  animation: float 18s ease-in-out infinite 1s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-30px) rotate(180deg);
  }
}

@keyframes subtle-zoom {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1.2);
  }
}

.hero-content {
  position: relative;
  z-index: 3;
  width: 100%;
  text-align: center;
}

.breadcrumb {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  animation: fadeInUp 0.8s ease-out;
}

.breadcrumb-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }
}

.breadcrumb-separator {
  color: rgba(255, 255, 255, 0.7);
}

.breadcrumb-current {
  color: #ffffff;
  font-weight: 600;
}

.hero-title {
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 1rem 0;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  animation: fadeInUp 0.8s ease-out 0.1s backwards;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.95);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.main-content {
  padding: 4rem 0;
  position: relative;
  z-index: 1;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.form-column,
.info-column {
  animation: fadeInUp 0.8s ease-out;
}

.info-column {
  animation-delay: 0.2s;
  animation-fill-mode: backwards;
}

.form-card {
  background: #ffffff;
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.office-card {
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid rgba(226, 232, 240, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url("/big_background_beautiful.png");
}

.form-card:hover,
.office-card:hover {
  box-shadow: 0 8px 32px rgba(25, 170, 224, 0.12);
  transform: translateY(-4px);
}

.card-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #19aae0 0%, #1590c4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  box-shadow: 0 8px 24px rgba(25, 170, 224, 0.3);
  animation: pulse 2s ease-in-out infinite;
}

.card-icon .q-icon {
  font-size: 2.5rem;
  color: #ffffff;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 8px 24px rgba(25, 170, 224, 0.3);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 12px 32px rgba(25, 170, 224, 0.4);
  }
}

.card-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 1rem 0;
  text-align: center;
}

.card-description {
  position: relative;
  padding: 0.8rem;
  font-size: 1rem;
  color: #121416;
  line-height: 1.7;
  text-align: center;
  margin: 0 0 2rem 0;
  background-image: url("/big_bg_home.png");
}

.email-link {
  color: #19aae0;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: #19aae0;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #1590c4;

    &::after {
      width: 100%;
    }
  }
}

.success-message {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border-radius: 16px;
  margin: 2rem 0;
  animation: fadeInScale 0.5s ease-out;
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

.success-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 auto 1rem;
  box-shadow: 0 4px 16px rgba(34, 197, 94, 0.3);
}

.success-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #166534;
  margin: 0 0 0.5rem 0;
}

.success-text {
  font-size: 1rem;
  color: #15803d;
  margin: 0 0 1.5rem 0;
}

.reset-btn {
  color: #19aae0;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(25, 170, 224, 0.1);
  }
}

.contact-form {
  margin-top: 2rem;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #334155;
  margin-bottom: 0.5rem;
}

.form-input {
  width: 100%;
}

.submit-btn {
  width: 100%;
  background: linear-gradient(135deg, #19aae0 0%, #1590c4 100%);
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 12px;
  margin-top: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(25, 170, 224, 0.3);

  &:hover {
    background: linear-gradient(135deg, #1590c4 0%, #127ba8 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(25, 170, 224, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
}

.office-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.office-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #19aae0 0%, #1590c4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(25, 170, 224, 0.25);
}

.office-icon .q-icon {
  font-size: 1.8rem;
  color: #ffffff;
}

.office-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}

.office-content {
  flex: 0 0 auto;
}

.office-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #19aae0;
}

.office-description {
  font-size: 0.95rem;
  color: #3d434b;
  line-height: 1.8;
  margin: 0 0 2rem 0;
  background-image: url("/big_bg_home.png");
  padding: 0.8rem;
}

.map-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 0.7rem;
  border-top: 2px solid #f1f5f9;
  min-height: 0;
}

.map-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-shrink: 0;
}

.map-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}

.directions-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #19aae0;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 8px;

  &:hover {
    background: rgba(25, 170, 224, 0.1);
    color: #1590c4;
  }
}

.map-container {
  width: 100%;
  height: 350px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  flex-shrink: 0;
}

@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 32vh;
    min-height: 260px;
  }

  .hero-title {
    font-size: 2.2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .main-content {
    padding: 3rem 0;
  }

  .form-card,
  .office-card {
    padding: 2rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .card-title {
    font-size: 1.6rem;
  }

  .office-title {
    font-size: 1.5rem;
  }

  .shape-1 {
    width: 200px;
    height: 200px;
  }

  .shape-2 {
    width: 150px;
    height: 150px;
  }

  .shape-3 {
    width: 100px;
    height: 100px;
  }

  .map-container {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .hero-section {
    height: 30vh;
    min-height: 240px;
  }

  .breadcrumb {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 1rem;
    padding: 0 1rem;
  }

  .main-content {
    padding: 2rem 0;
  }

  .content-grid {
    gap: 1.5rem;
  }

  .form-card,
  .office-card {
    padding: 1.5rem;
    border-radius: 16px;
  }

  .card-icon {
    width: 60px;
    height: 60px;
  }

  .card-icon .q-icon {
    font-size: 2rem;
  }

  .card-title {
    font-size: 1.4rem;
  }

  .office-header {
    flex-direction: column;
    text-align: center;
  }

  .office-icon {
    width: 50px;
    height: 50px;
  }

  .office-icon .q-icon {
    font-size: 1.5rem;
  }

  .office-title {
    font-size: 1.3rem;
  }

  .map-container {
    height: 250px;
  }

  .map-header {
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-start;
  }
}
</style>

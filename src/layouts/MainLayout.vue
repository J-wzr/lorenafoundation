<template>
  <q-layout view="hHh lpr fFf">
    <!-- Structured Data for Google -->
    <component :is="'script'" type="application/ld+json">
      { "@context": "https://schema.org", "@type": "Organization", "name":
      "Lorena Foundation", "alternateName": "Lorena Foundation - Together we can
      transform lives"}
    </component>
    <div class="white-scroll-bg"></div>

    <q-header class="header-container">
      <q-toolbar class="navbar-content">
        <router-link to="/" class="logo-link">
          <img src="icons/lorena_foundation_logo6.png" class="logo-image" />
        </router-link>

        <q-space />

        <div class="nav-links" :class="{ hidden: showMobileMenu }">
          <template v-for="link in navLinks" :key="link.id">
            <!-- Regular link without dropdown -->
            <router-link
              v-if="!link.disabled && !link.dropdown"
              :to="link.path"
              class="nav-link"
              :class="{ active: isLinkActive(link.path, link) }"
            >
              {{ link.label }}
            </router-link>

            <!-- Link with dropdown (hover) -->
            <div
              v-else-if="!link.disabled && link.dropdown"
              class="nav-link-wrapper"
              @mouseenter="openMenu(link.id)"
              @mouseleave="handleMenuLeave"
            >
              <span class="nav-link has-dropdown">
                {{ link.label }}
                <q-icon
                  name="mdi-chevron-down"
                  size="18px"
                  :class="{
                    rotated: hoveredMenu === link.id,
                    'active-chevron': isLinkActive(link.path, link),
                  }"
                />
              </span>
              <q-menu
                :model-value="hoveredMenu === link.id"
                anchor="bottom left"
                self="top left"
                :offset="[0, 8]"
                @update:model-value="(val) => !val && (hoveredMenu = null)"
              >
                <q-list
                  class="dropdown-menu"
                  @mouseenter="cancelMenuClose"
                  @mouseleave="handleMenuLeave"
                >
                  <q-item
                    v-for="item in link.dropdown"
                    :key="item.path"
                    clickable
                    v-close-popup
                    :class="{
                      'active-dropdown-item': route.path === item.path,
                    }"
                    @click="$router.push(item.path)"
                  >
                    <q-item-section>{{ item.label }}</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </div>

            <!-- Disabled link -->
            <span v-else class="nav-link disabled">
              {{ link.label }}
            </span>
          </template>
        </div>

        <q-btn
          v-if="!ctaButton.disabled"
          unelevated
          rounded
          no-caps
          padding="sm md"
          class="cta-btn custom-icon-size"
          :class="{ hidden: showMobileMenu }"
          :icon="ctaButton.icon"
          :label="ctaButton.label"
          :color="ctaButton.color"
          @click="$router.push(ctaButton.path)"
        />
        <q-btn
          v-else
          unelevated
          rounded
          no-caps
          padding="sm md"
          class="cta-btn disabled-btn custom-icon-size"
          :class="{ hidden: showMobileMenu }"
          :icon="ctaButton.icon"
          :label="ctaButton.label"
          :icon-size="ctaButton.iconSize"
          color="grey-5"
          disable
        />

        <!-- Hamburger Menu Button -->
        <q-btn
          flat
          dense
          round
          icon="menu"
          class="hamburger-btn"
          :class="{ visible: showMobileMenu, 'is-open': rightDrawerOpen }"
          @click="rightDrawerOpen = !rightDrawerOpen"
        />
      </q-toolbar>
    </q-header>

    <transition name="slide-fade">
      <div v-if="rightDrawerOpen" class="mobile-dropdown">
        <div class="mobile-menu-links">
          <template v-for="link in navLinks" :key="link.id">
            <!-- Regular link without dropdown -->
            <router-link
              v-if="!link.disabled && !link.dropdown"
              :to="link.path"
              class="mobile-nav-link"
              :class="{ active: isLinkActive(link.path, link) }"
              @click="handleMobileNavClick"
            >
              {{ link.label }}
            </router-link>

            <!-- Link with dropdown (accordion style) -->
            <div
              v-else-if="!link.disabled && link.dropdown"
              class="mobile-dropdown-wrapper"
            >
              <div
                class="mobile-nav-link has-dropdown"
                :class="{ 'dropdown-open': expandedMenu === link.id }"
                @click="toggleMobileDropdown(link.id)"
              >
                <span>{{ link.label }}</span>
                <q-icon
                  name="mdi-chevron-down"
                  size="20px"
                  class="dropdown-chevron"
                  :class="{
                    rotated: expandedMenu === link.id,
                    'active-chevron': isLinkActive(link.path, link),
                  }"
                />
              </div>
              <transition name="expand">
                <div v-if="expandedMenu === link.id" class="mobile-submenu">
                  <router-link
                    v-for="item in link.dropdown"
                    :key="item.path"
                    :to="item.path"
                    class="mobile-submenu-link"
                    :class="{ 'active-submenu-link': route.path === item.path }"
                    @click="handleMobileNavClick"
                  >
                    <q-icon name="mdi-circle-small" size="16px" />
                    {{ item.label }}
                  </router-link>
                </div>
              </transition>
            </div>

            <!-- Disabled link -->
            <span v-else class="mobile-nav-link disabled">
              {{ link.label }}
            </span>
          </template>
        </div>

        <div class="mobile-cta">
          <q-btn
            v-if="!ctaButton.disabled"
            unelevated
            rounded
            no-caps
            class="cta-btn-mobile"
            :icon="ctaButton.icon"
            :label="ctaButton.label"
            :color="ctaButton.color"
            @click="$router.push(ctaButton.path), handleMobileNavClick()"
          />
          <q-btn
            v-else
            unelevated
            rounded
            no-caps
            class="cta-btn-mobile"
            :icon="ctaButton.icon"
            :label="ctaButton.label"
            color="grey-5"
            disable
          />
        </div>
      </div>
    </transition>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Floating Action Buttons -->
    <transition name="fade">
      <div v-if="showFloatingButtons" class="floating-buttons">
        <a
          href="https://wa.me/256723456789"
          target="_blank"
          class="floating-btn whatsapp-floating"
          title="Chat on WhatsApp"
        >
          <q-icon name="mdi-whatsapp" />
        </a>
        <button
          @click="scrollToTop"
          class="floating-btn back-to-top-floating"
          title="Back to top"
        >
          <q-icon name="mdi-arrow-up" />
        </button>
      </div>
    </transition>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-heading">About Lorena Foundation</h3>
          <p class="footer-description">
            Lorena foundation is a local charity that aims at providing safe
            water and appropriate sanitation solutions, improve community health
            access, strive to achieve gender equality, improve access to quality
            education, enhance livelihood and economic inclusion, promote
            sustainable agriculture, and food security and contributes to
            inclusive green socio-economic transformation for people in
            developing countries and disaster areas.
          </p>
        </div>

        <div class="footer-section">
          <h3 class="footer-heading">Quick Links</h3>
          <div class="footer-links">
            <a href="core-values" class="footer-link"
              >Mission, Vision and Values</a
            >
            <a href="our-team" class="footer-link">Meet our Team</a>
            <a href="our-story" class="footer-link">Read our Story</a>
            <a href="campaigns" class="footer-link">About PARADOSI</a>
            <a href="volunteer" class="footer-link">Become a Volunteer</a>
            <a href="contact" class="footer-link">Send an Inquiry</a>
          </div>
        </div>

        <div class="footer-section">
          <h3 class="footer-heading">Contact Us</h3>
          <div class="contact-info">
            <a href="mailto:info@lorenafoundation.org" class="contact-item">
              <svg
                class="contact-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 7 10-7" />
              </svg>
              info@lorenafoundation.org
            </a>
            <a href="#" class="contact-item">
              <svg
                class="contact-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Arua, Uganda
            </a>
            <a href="tel:256781126633" class="contact-item" target="_blank">
              <svg
                class="contact-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
                />
              </svg>
              +256 712 345679
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">
          Copyright © {{ currentYear }} Lorena Foundation. All Rights Reserved.
        </p>
      </div>
    </footer>
  </q-layout>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "MainLayout",

  setup() {
    const route = useRoute();
    const siteName = "Lorena Foundation";

    const hoveredMenu = ref(null);
    const menuTimeout = ref(null);

    const openMenu = (linkId) => {
      // Clear any existing timeout
      if (menuTimeout.value) {
        clearTimeout(menuTimeout.value);
        menuTimeout.value = null;
      }
      hoveredMenu.value = linkId;
    };

    const handleMenuLeave = () => {
      // Set a timeout to close the menu
      menuTimeout.value = setTimeout(() => {
        hoveredMenu.value = null;
      }, 150);
    };

    const cancelMenuClose = () => {
      // Cancel the timeout if mouse enters the menu
      if (menuTimeout.value) {
        clearTimeout(menuTimeout.value);
        menuTimeout.value = null;
      }
    };

    const expandedMenu = ref(null);

    const toggleMobileDropdown = (linkId) => {
      expandedMenu.value = expandedMenu.value === linkId ? null : linkId;
    };

    // Only Portfolio has a real path, others are disabled/placeholder
    const navLinks = [
      { id: "home", label: "Home", path: "/", disabled: false },
      {
        id: "campaigns",
        label: "Our Programs",
        path: "#",
        disabled: false,
        dropdown: [
          { label: "WASH", path: "/wash" },
          { label: "Community Health", path: "/community-health" },
          { label: "Education for All", path: "/education-for-all" },
          {
            label: "Equality & Empowerment",
            path: "/equality-and-empowerment",
          },
          { label: "Green Transformation", path: "/green-transformation" },
          {
            label: "Livelihood & Economic inclusion",
            path: "/livelihood-and-economic-inclusion",
          },
        ],
      },
      {
        id: "about",
        label: "About Us",
        path: "#",
        disabled: false,
        dropdown: [
          { label: "Mission, Vision & Core Values", path: "/core-values" },
          { label: "Our Team", path: "/our-team" },
          { label: "Our Story", path: "/our-story" },
        ],
      },
      //     { id: "blog", label: "Blogs", path: "/blog", disabled: false },
      {
        id: "get-involved",
        label: "Get involved",
        path: "#",
        disabled: false,
        dropdown: [
          { label: "Volunteer", path: "/volunteer" },
          { label: "Contact Us", path: "/contact-us" },
          { label: "Our Campaigns", path: "/campaigns" },
        ],
      },
    ];

    const ctaButton = {
      label: "Donate",
      icon: "mdi-heart",
      color: "red-7",
      path: "#",
      disabled: false,
      iconSize: "12px",
    };

    const rightDrawerOpen = ref(false);
    const showMobileMenu = ref(false);
    const showFloatingButtons = ref(false);
    const currentYear = new Date().getFullYear();

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const whiteBg = document.querySelector(".white-scroll-bg");
      if (whiteBg) {
        whiteBg.style.transform = `translateY(-${scrollY}px)`;
      }

      showFloatingButtons.value = scrollY > 300;
    };

    const checkNavbarOverflow = () => {
      if (window.innerWidth < 1024) {
        showMobileMenu.value = true;
        return;
      }

      const toolbar = document.querySelector(".navbar-content");
      if (!toolbar) {
        showMobileMenu.value = false;
        return;
      }

      const logo = document.querySelector(".logo-link");
      const navLinksEl = document.querySelector(".nav-links");
      const ctaBtn = document.querySelector(".cta-btn");

      if (!logo || !navLinksEl || !ctaBtn) {
        showMobileMenu.value = false;
        return;
      }

      const toolbarWidth = toolbar.offsetWidth;
      const logoWidth = logo.offsetWidth;
      const navLinksWidth = navLinksEl.scrollWidth;
      const ctaBtnWidth = ctaBtn.offsetWidth;
      const totalRequired = logoWidth + navLinksWidth + ctaBtnWidth + 180;

      showMobileMenu.value = totalRequired > toolbarWidth;
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const isLinkActive = (linkPath, link) => {
      if (!linkPath) return false;

      // Check if current route matches the link path
      if (route.path === linkPath) return true;

      // If link has dropdown, check if current route matches any dropdown item
      if (link && link.dropdown) {
        return link.dropdown.some((item) => route.path === item.path);
      }

      return false;
    };

    const handleMobileNavClick = () => {
      rightDrawerOpen.value = false;
      expandedMenu.value = null;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", checkNavbarOverflow);
      window.addEventListener("load", checkNavbarOverflow);

      setTimeout(checkNavbarOverflow, 200);
      setTimeout(checkNavbarOverflow, 500);
      setTimeout(checkNavbarOverflow, 1000);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkNavbarOverflow);
      window.removeEventListener("load", checkNavbarOverflow);
    });

    return {
      rightDrawerOpen,
      showMobileMenu,
      showFloatingButtons,
      siteName,
      navLinks,
      ctaButton,
      scrollToTop,
      handleMobileNavClick,
      isLinkActive,
      currentYear,
      hoveredMenu,
      openMenu,
      handleMenuLeave,
      cancelMenuClose,
      expandedMenu,
      toggleMobileDropdown,
      route,
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

* {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

.white-scroll-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 84px;
  background: #138ab7;
  z-index: 1000;
  pointer-events: none;
  will-change: transform;
}

.custom-icon-size ::v-deep(.q-icon) {
  font-size: 16px !important;
}
.header-container {
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  z-index: 2000;
  background: white !important;
  border-radius: 18px;
  box-shadow: 0 4px 6px -1px rgba(10, 58, 92, 0.08),
    0 2px 4px -1px rgba(10, 58, 92, 0.04);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 8px -1px rgba(10, 58, 92, 0.1),
      0 3px 5px -1px rgba(10, 58, 92, 0.05);
  }
}

.navbar-content {
  padding: 12px 40px;
  background: transparent;
  min-height: 64px;
  height: 64px;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 0 0 auto;
  max-width: fit-content;
}

.logo-image {
  height: auto;
  width: 180px;
  object-fit: contain;
}

.logo-text {
  font-size: 17px;
  font-weight: 700;
  color: #0a3a5c;
  letter-spacing: -0.02em;
  line-height: 1.3;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-left: 24px;

  &.hidden {
    display: none !important;
  }
}

.nav-link {
  text-decoration: none;
  color: #5a6c7d;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.5;
  transition: all 0.3s ease;
  white-space: nowrap;
  position: relative;
  padding: 8px 4px;

  &:hover {
    color: #0a3a5c;
    transform: translateY(-1px);
  }

  &.active {
    color: #0a3a5c;
    font-weight: 600;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, #e53935, #d35400);
      border-radius: 2px;
      animation: slideIn 0.3s ease;
    }
  }
}

@keyframes slideIn {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

.nav-link-wrapper {
  position: relative;
}

.nav-link.has-dropdown {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  .q-icon {
    transition: transform 0.3s ease;
  }

  .q-icon.rotated {
    transform: rotate(180deg);
  }

  .q-icon.active-chevron {
    color: #e53935;
  }
}

.dropdown-menu {
  background: #19aae0;
  border-radius: 0 0 8px 8px;
  min-width: 180px;
  padding: 8px 0;

  .q-item {
    color: white;
    padding: 12px 20px;
    transition: background 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    &.active-dropdown-item {
      background: rgba(255, 255, 255, 0.25);
      font-weight: 600;
    }
  }
}

// Hide the menu arrow/tail
::v-deep(.q-menu) {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  &::before,
  &::after {
    display: none !important;
  }
}

.mobile-dropdown-wrapper {
  display: flex;
  flex-direction: column;
}

.mobile-nav-link {
  display: block;
  padding: 14px 24px;
  text-decoration: none;
  color: #5a6c7d;
  font-size: 15.5px;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.5;
  transition: all 0.25s ease;
  border-radius: 8px;
  margin: 2px 12px;
  position: relative;

  &:hover {
    background: rgba(10, 58, 92, 0.06);
    color: #0a3a5c;
    transform: translateX(4px);
  }

  &.active {
    background: rgba(230, 126, 34, 0.1);
    color: #0a3a5c;
    font-weight: 600;
  }

  &:active {
    transform: scale(0.98);
  }

  &.has-dropdown {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.dropdown-open {
      background: #f8f9fa;
      color: #19aae0;
    }
  }
}

.dropdown-chevron {
  transition: transform 0.3s ease;
  color: #666;

  &.rotated {
    transform: rotate(180deg);
    color: #19aae0;
  }

  &.active-chevron {
    color: #e53935;
  }
}

.mobile-submenu {
  background: #fafbfc;
  border-left: 3px solid #19aae0;
  margin-left: 12px;
  overflow: hidden;
}

.mobile-submenu-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px 12px 32px;
  color: #555;
  text-decoration: none;
  font-size: 15px;
  transition: all 0.2s ease;

  &:hover {
    background: #e3f5fc;
    color: #19aae0;
  }

  .q-icon {
    color: #19aae0;
  }

  &.active-submenu-link {
    background: rgba(230, 126, 34, 0.1);
    color: #0a3a5c;
    font-weight: 600;
  }
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: top;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
  transform: scaleY(0.8);
}

.expand-enter-to,
.expand-leave-from {
  max-height: 500px;
  opacity: 1;
  transform: scaleY(1);
}

.cta-btn {
  padding: 9px 24px;
  font-weight: 600;
  font-size: 14.5px;
  margin-left: 20px;
  letter-spacing: -0.01em;
  line-height: 1.4;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(230, 126, 34, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(230, 126, 34, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(230, 126, 34, 0.35);
  }

  &.hidden {
    display: none !important;
  }
}

.hamburger-btn {
  color: #0a3a5c !important;
  transition: all 0.3s ease;
  display: none;
  margin-left: 12px;

  :deep(.q-icon) {
    font-size: 24px;
  }

  &.visible {
    display: flex !important;
  }

  &:hover {
    background: rgba(10, 58, 92, 0.08) !important;
  }

  &.is-open {
    background: rgba(10, 58, 92, 0.12) !important;
    border: 1.5px solid #0a3a5c;
    color: #0a3a5c !important;
  }
}

.mobile-dropdown {
  position: fixed;
  top: 104px;
  left: 20px;
  right: 20px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px -4px rgba(10, 58, 92, 0.18);
  z-index: 1500;
  overflow: hidden;
}

.mobile-menu-links {
  padding: 16px 0;
}

.mobile-cta {
  padding: 16px 24px 20px;
  border-top: 1px solid rgba(10, 58, 92, 0.1);
}

.cta-btn-mobile {
  width: 100%;
  padding: 14px 24px;
  font-weight: 600;
  font-size: 15.5px;
  letter-spacing: -0.01em;
  line-height: 1.4;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(230, 126, 34, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(230, 126, 34, 0.4);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 6px rgba(230, 126, 34, 0.35);
  }
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.15s ease-in;
}

.slide-fade-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

/* Footer Styles */
.site-footer {
  background-color: #138ab7;
  background-image: linear-gradient(
      rgba(10, 58, 92, 0.5),
      rgba(10, 58, 92, 0.65)
    ),
    url("/");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #ffffff;
  padding: 60px 20px 0;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  padding-bottom: 40px;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-heading {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 20px;
  letter-spacing: -0.01em;
}

.footer-description {
  font-size: 14px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  text-align: justify;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition: all 0.3s ease;
  width: fit-content;

  &:hover {
    color: #f1adad;
    transform: translateX(5px);
  }
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #f1adad;
    transform: translateX(5px);
  }
}

.contact-icon {
  color: #917575;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  flex-shrink: 0;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding: 24px 0;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.back-to-top {
  display: none;
}

.copyright {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

/* Floating Buttons */
.floating-buttons {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.floating-btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  text-decoration: none;

  :deep(.q-icon) {
    font-size: 28px;
    color: #ffffff;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(-2px);
  }
}

.back-to-top-floating {
  background: #0a3a5c;

  &:hover {
    background: #083048;
  }
}

.whatsapp-floating {
  background: #25d366;

  &:hover {
    background: #20bd5a;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.nav-link.disabled,
.mobile-nav-link.disabled {
  color: #b0b8c1;
  cursor: not-allowed;
  opacity: 0.6;
  pointer-events: none;
}

.disabled-btn {
  cursor: not-allowed !important;
}

@media (max-width: 1200px) {
  .nav-links {
    gap: 20px;
  }

  .nav-link {
    font-size: 15px;
  }

  .cta-btn {
    margin-left: 12px;
    padding: 8px 20px;
    font-size: 14.5px;
  }
}

@media (max-width: 768px) {
  .white-scroll-bg {
    height: 88px;
  }

  .hamburger-btn :deep(.q-icon) {
    font-size: 26px;
  }

  .navbar-content {
    padding: 8px 16px;
    min-height: 80px;
    height: 80px;
  }

  .logo-image {
    width: 160px;
  }

  .logo-text {
    font-size: 16px;
  }

  .mobile-dropdown {
    top: 96px;
  }

  .mobile-nav-link {
    font-size: 15px;
  }

  .site-footer {
    padding: 40px 20px 0;
  }

  .footer-content {
    gap: 32px;
    padding-bottom: 32px;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
    padding: 20px 0;
  }

  .back-to-top {
    order: -1;
  }
}

@media (max-width: 480px) {
  .header-container {
    top: 8px;
    left: 8px;
    right: 8px;
    border-radius: 16px;
  }

  .navbar-content {
    padding: 8px 14px;
    min-height: 80px;
    height: 80px;
  }

  .logo-text {
    font-size: 15px;
  }

  .mobile-dropdown {
    top: 92px;
    left: 8px;
    right: 8px;
    border-radius: 14px;
  }

  .mobile-nav-link {
    padding: 12px 20px;
    font-size: 14.5px;
  }

  .mobile-cta {
    padding: 14px 20px 18px;
  }

  .cta-btn-mobile {
    font-size: 15px;
  }

  .site-footer {
    padding: 32px 16px 0;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .footer-heading {
    font-size: 17px;
  }

  .footer-description,
  .footer-link,
  .contact-item {
    font-size: 13px;
  }

  .copyright {
    font-size: 12px;
  }

  .floating-buttons {
    right: 16px;
    bottom: 16px;
    gap: 10px;
  }

  .floating-btn {
    width: 50px;
    height: 50px;

    :deep(.q-icon) {
      font-size: 26px;
    }
  }
}

@media (max-width: 360px) {
  .navbar-content {
    padding: 6px 12px;
    min-height: 80px;
    height: 80px;
  }

  .logo-text {
    font-size: 14px;
  }

  .mobile-dropdown {
    top: 88px;
  }

  .mobile-nav-link {
    font-size: 14px;
  }

  .cta-btn-mobile {
    font-size: 14.5px;
  }

  .site-footer {
    padding: 28px 12px 0;
  }

  .footer-heading {
    font-size: 16px;
  }
}
</style>

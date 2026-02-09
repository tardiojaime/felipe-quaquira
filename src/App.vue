<template>
  <div class="app-container">
    <header class="main-header">
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#proposals">Propuestas</a></li>
          <li><a href="#stories">Historias</a></li>
          <li><a href="#contact">Contacto</a></li>
          <li><a href="#location">Ubicación</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <HeroSection />
      <ProposalsSection />
      <StoriesSection />
      <ContactSection />
      <LocationSection />
    </main>

    <footer class="main-footer">
      <p>
        &copy; 2026 Felipe Coaquira Choque - Por un municipio con desarrollo,
        identidad y cultura.
      </p>
    </footer>
  </div>
</template>

<script setup>
import HeroSection from "./components/HeroSection.vue";
import ProposalsSection from "./components/ProposalsSection.vue";
import StoriesSection from "./components/StoriesSection.vue";
import ContactSection from "./components/ContactSection.vue";
import LocationSection from "./components/LocationSection.vue";
</script>

<style scoped>
.app-container {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.main-header {
  background-color: #ffffff;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border-bottom: 3px solid #76ff03;
}

.main-header nav ul {
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.main-header a {
  color: #333;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.main-header a:hover {
  color: #76ff03;
}

.main-footer {
  background-color: #1a1a1a; /* Keep dark footer for contrast */
  color: #ccc;
  text-align: center;
  padding: 2rem;
  border-top: 5px solid #76ff03;
}
</style>

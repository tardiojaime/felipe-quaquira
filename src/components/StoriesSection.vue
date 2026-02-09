<template>
  <section class="stories-section" id="stories">
    <h2 class="section-title">Historias y Visitas</h2>
    <div class="stories-container">
      <div v-for="(image, index) in images" :key="index" class="story-card">
        <img :src="image.src" :alt="image.alt" />
        <div class="story-info">
          <p>{{ image.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Importing images from assets if possible, or using direct paths if in public.
// Since we are in Vite, we can import them.
// Note: file names have spaces, renaming might be safer but import handles it usually.
import img1 from "../assets/story1.jpeg";
import img2 from "../assets/story2.jpeg";

const images = [
  {
    src: img1,
    alt: "Visita a comunidad",
    description: "Compartiendo con nuestras comunidades.",
  },
  {
    src: img2,
    alt: "Reunión vecinal",
    description: "Escuchando las necesidades de nuestros vecinos.",
  },
];
</script>

<style scoped>
.stories-section {
  padding: 4rem 2rem;
  background-color: #ffffff;
  color: #333;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #1a1a1a;
  border-bottom: 3px solid #76ff03;
  display: inline-block;
  padding-bottom: 0.5rem;
}

.stories-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.story-card {
  width: 300px;
  background: #f9f9f9;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #eee;
}

.story-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.story-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.story-info {
  padding: 1rem;
}

.story-info p {
  color: #555;
}
</style>

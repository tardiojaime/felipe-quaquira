<template>
  <section class="location-section" id="location">
    <h2 class="section-title">Nuestra Ubicación</h2>
    <p>Visita nuestra Casa de Campaña</p>
    <div class="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15219.043697960686!2d-64.9166666!3d-19.1833333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbcf456424e64f%3A0xc367644d651030e4!2sTarabuco!5e0!3m2!1sen!2sbo!4v1675880000000!5m2!1sen!2sbo"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </div>
  </section>
</template>

<style scoped>
.location-section {
  padding: 4rem 2rem;
  background-color: #ffffff;
  color: #333;
  text-align: center;
}

.section-title {
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  border-bottom: 3px solid #76ff03;
  display: inline-block;
  padding-bottom: 0.5rem;
}

.location-section p {
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: #666;
}

.map-container {
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 4px solid #76ff03;
}
</style>

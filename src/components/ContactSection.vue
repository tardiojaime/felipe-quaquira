<template>
  <section class="contact-section" id="contact">
    <h2 class="section-title">Contáctanos</h2>
    <div class="contact-links">
      <a
        href="https://www.facebook.com"
        target="_blank"
        class="social-link facebook"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
          />
        </svg>
        Facebook
      </a>
      <a
        href="https://www.tiktok.com"
        target="_blank"
        class="social-link tiktok"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.12 4.88-3.53 6.08-2.4 1.2-5.28 1.05-7.51-.39-2.22-1.44-3.53-3.91-3.53-6.56 0-2.95 1.63-5.61 4.19-6.87 2.57-1.26 5.64-.91 7.84.9.43.36.83.75 1.19 1.2v-4.03c-.48-.05-.96-.08-1.44-.08-3.4 0-6.4 1.83-7.9 4.82-1.5 2.99-.87 6.64 1.65 8.95 2.53 2.31 6.37 2.35 8.95.1 1.76-1.53 2.74-3.83 2.74-6.16v-8.15c-1.48.28-2.92.83-4.22 1.62-.08-1.55-.08-3.1 0-4.65z"
          />
        </svg>
        TikTok
      </a>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 4rem 2rem;
  background-color: #f0f0f0;
  color: #333;
  text-align: center;
}

.section-title {
  color: #1a1a1a;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  border-bottom: 3px solid #76ff03;
  display: inline-block;
  padding-bottom: 0.5rem;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: #222;
  background-color: #76ff03;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(118, 255, 3, 0.4);
}

.social-link svg {
  width: 24px;
  height: 24px;
}
</style>

<template>
  <div class="modern-page">
    <!-- Hero Section avec parallax -->
    <section class="hero-section" ref="heroSection">
      <div class="hero-background"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content" data-scroll>
        <div class="logo-container animate-fade-in">
          <img class="logo" src="@/img/logo.png" alt="Logo Eden">
          <h1 class="brand-name">Eden Headspa</h1>
        </div>
        <h2 class="hero-title animate-slide-up">L'Eden</h2>
        <p class="hero-subtitle animate-slide-up delay-1">Venez vivre une expérience de bien-être unique</p>
        <button class="cta-button animate-slide-up delay-2" @click="scrollToSection('concept')">
          Découvrir
          <span class="arrow">→</span>
        </button>
      </div>
      <div class="scroll-indicator">
        <div class="mouse"></div>
      </div>
    </section>

    <!-- Citation Section -->
    <section class="quote-section animate-on-scroll">
      <div class="quote-container">
        <svg class="quote-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
        </svg>
        <p class="quote-text">"Prenez soin de votre corps. C'est le seul endroit où vous devez vivre."</p>
        <p class="quote-author">— Jim Rohn</p>
      </div>
    </section>

    <!-- Concept Section -->
    <section id="concept" class="concept-section animate-on-scroll">
      <div class="section-header">
        <span class="section-tag">Notre Philosophie</span>
        <h2 class="section-title">Un Concept issu de la tradition ancestrale japonaise</h2>
      </div>
      <div class="concept-content">
        <div class="concept-card">
          <div class="card-icon">🌸</div>
          <p>Découvrez le Head Spa, un concept unique inspiré de traditions ancestrales, conçu pour offrir une expérience de bien-être inégalée. Ce soin de luxe commence par un nettoyage en profondeur et une hydratation minutieuse du cuir chevelu, suivi d'un massage spécifique qui non seulement détend mais stimule également la microcirculation sanguine.</p>
        </div>
        <div class="concept-card delay-1">
          <div class="card-icon">✨</div>
          <p>Le rituel du Head Spa intègre une variété de techniques et de traitements qui travaillent en synergie pour libérer les tensions accumulées. Ce processus offre non seulement une relaxation profonde, mais également un bien-être global, transformant ce soin en une véritable échappée de la vie quotidienne.</p>
        </div>
      </div>
    </section>

    <!-- Salon Section avec image parallax -->
    <section id="salon" class="salon-section animate-on-scroll">
      <div class="salon-content">
        <div class="salon-text">
          <span class="section-tag">Notre Espace</span>
          <h2 class="section-title">Un Refuge de Bien-être en Plein Coeur de Chambéry</h2>
          <p>Situé idéalement au cœur de Chambéry, le long de la paisible rive droite de la Leysse, l'Institut L'Éden est votre destination privilégiée pour une évasion hors du commun. Spécialisé dans le head spa, notre institut vous accueille dans un cadre serein où chaque soin est une expérience unique, méticuleusement adaptée à votre type de cheveux.</p>
          <p class="hide-on-mobile">À l'Institut L'Éden, nous nous engageons à vous offrir une déconnexion totale du tumulte quotidien. Nos soins, conçus pour revitaliser et soigner votre cuir chevelu, vous promettent une régénération complète et un ressourcement profond.</p>
          <a href="https://www.google.com/maps/place/92+Quai+Charles+Ravet,+73000+Chambéry" class="map-button" target="_blank">
            <span>📍</span> Voir sur la carte
          </a>
        </div>
        <div class="salon-image">
          <img src="@/img/plan.png" alt="Localisation" class="map-image">
        </div>
      </div>
    </section>

    <!-- Labels Section -->
    <section id="labels" class="labels-section animate-on-scroll">
      <h2 class="section-title">Nous utilisons des produits qui sont :</h2>
      <div class="labels-grid">
        <div class="label-card">
          <div class="label-icon-wrapper">
            <img src="@/img/vegan-cercle-vert.png" alt="Produits Vegan">
          </div>
          <h3>100% Vegan</h3>
          <p>Des produits sans cruauté animale</p>
        </div>
        <div class="label-card delay-1">
          <div class="label-icon-wrapper">
            <img src="@/img/logo-origine-france-garantie-OFG.png" alt="Origine France">
          </div>
          <h3>100% Fabriqué en France</h3>
          <p>Soutenir le savoir-faire français</p>
        </div>
        <div class="label-card delay-2">
          <div class="label-icon-wrapper">
            <img src="@/img/10004522.png" alt="Écologique">
          </div>
          <h3>100% Respectueux de l'environnement</h3>
          <p>Pour préserver notre planète</p>
        </div>
      </div>
    </section>

    <!-- Prestations Section -->
    <section id="offres" class="prestations-section animate-on-scroll">
      <div class="section-header">
        <span class="section-tag">Nos Services</span>
        <h2 class="section-title">Nos Prestations</h2>
      </div>
      <div class="prestations-grid">
        <!-- Soin Découverte -->
        <div class="prestation-card">
          <div class="prestation-image-wrapper">
            <img src="@/img/decouverte.jpg" alt="Soin Découverte">
            <div class="prestation-overlay">
              <span class="duration">45 minutes</span>
            </div>
          </div>
          <div class="prestation-content">
            <h3>Soin Découverte</h3>
            <div class="price-tag">69€</div>
            <p>Offrez-vous un moment de détente absolue avec notre Soin Découverte. Ce soin comprend un massage relaxant conçu pour vous aider à évacuer le stress accumulé et favoriser une meilleure circulation sanguine.</p>
            <button class="book-button" @click="scrollToSection('reservation')">Réserver</button>
          </div>
        </div>

        <!-- Soin Premium -->
        <div class="prestation-card featured">
          <div class="badge">Populaire</div>
          <div class="prestation-image-wrapper">
            <img src="@/img/premium.jpg" alt="Soin Premium">
            <div class="prestation-overlay">
              <span class="duration">60 minutes</span>
            </div>
          </div>
          <div class="prestation-content">
            <h3>Soin Premium</h3>
            <div class="price-tag">89€</div>
            <p>Plongez dans une expérience de bien-être ultime avec notre Soin Premium, une séance luxueuse de 60 minutes conçue pour revitaliser et rajeunir. Ce soin complet commence par une analyse détaillée suivie d'un massage et d'un gommage exquis du cuir chevelu.</p>
            <button class="book-button" @click="scrollToSection('reservation')">Réserver</button>
          </div>
        </div>

        <!-- Soin Un Temps pour Soie -->
        <div class="prestation-card">
          <div class="prestation-image-wrapper">
            <img src="@/img/sds.jpg" alt="Soin Un temps pour Soie">
            <div class="prestation-overlay">
              <span class="duration">90 minutes</span>
            </div>
          </div>
          <div class="prestation-content">
            <h3>Soin « Un temps pour Soie »</h3>
            <div class="price-tag">129€</div>
            <p>Offrez-vous une échappée belle de pure détente avec notre Soin « Un Temps pour Soie », un traitement de 90 minutes qui allie luxe et soin personnalisé. Ce soin débute par une analyse approfondie de votre cuir chevelu.</p>
            <button class="book-button" @click="scrollToSection('reservation')">Réserver</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Avis Section -->
    <section id="avis" class="reviews-section animate-on-scroll">
      <div class="section-header">
        <h2 class="section-title">Ce que nos clientes disent</h2>
        <div class="google-rating">
          <div class="stars">★★★★★</div>
          <p class="rating-text"><strong>5.0</strong> sur Google • Plus de 120 avis</p>
        </div>
      </div>
      <div class="reviews-slider">
        <div class="reviews-track">
          <!-- Original reviews -->
          <div class="review-card">
            <div class="review-header">
              <div class="avatar">👩‍🦰</div>
              <div class="review-info">
                <h4 class="review-author">Elsa</h4>
                <div class="review-stars">★★★★★</div>
              </div>
            </div>
            <p class="review-text">Découverte de 1h30 et je reviendrai avec plaisir ! Il y a eu tellement de soins que je ne pourrais tous les citer ! Pur moment de détente et de relaxation. Un accueil parfait, j'ai été bien choyée 😁</p>
          </div>
          <div class="review-card">
            <div class="review-header">
              <div class="avatar">👩‍🦱</div>
              <div class="review-info">
                <h4 class="review-author">Aurelie</h4>
                <div class="review-stars">★★★★★</div>
              </div>
            </div>
            <p class="review-text">C'était une première pour moi ! Un très bon moment de détente... un soin très complet. Et un personnel très sympathique à l'écoute de sa clientèle. Je recommande sans modération 🥰</p>
          </div>
          <div class="review-card">
            <div class="review-header">
              <div class="avatar">👩</div>
              <div class="review-info">
                <h4 class="review-author">Eloise</h4>
                <div class="review-stars">★★★★★</div>
              </div>
            </div>
            <p class="review-text">Super moment !! Le soin découverte est vraiment agréable et permet de découvrir le headspa ! Mes cheveux n'ont jamais été aussi propres et beaux après le soin ! Je recommande fortement, nous sommes vraiment très bien accueillis !!</p>
          </div>
          <div class="review-card">
            <div class="review-header">
              <div class="avatar">👩‍💼</div>
              <div class="review-info">
                <h4 class="review-author">Albe</h4>
                <div class="review-stars">★★★★★</div>
              </div>
            </div>
            <p class="review-text">J'ai eu la chance de découvrir ce Head Spa pour une séance de 60 minutes, et c'était tout simplement incroyable. Dès mon arrivée, l'ambiance apaisante m'a mise à l'aise. La praticienne était super : douce, attentionnée et très professionnelle. Un vrai moment de bien-être que je recommande à 100 % ! J'ai hâte de revenir 🥰</p>
          </div>
          <div class="review-card">
            <div class="review-header">
              <div class="avatar">👩‍👧</div>
              <div class="review-info">
                <h4 class="review-author">Catania</h4>
                <div class="review-stars">★★★★★</div>
              </div>
            </div>
            <p class="review-text">Équipe très souriante et très agréable, très douce et de bons conseils. Duo fait avec ma fille, que du bonheur, merci beaucoup à elles ♥️</p>
          </div>
          <!-- Duplicate reviews for seamless loop -->
          <div class="review-card">
            <div class="review-header">
              <div class="avatar">👩‍🦰</div>
              <div class="review-info">
                <h4 class="review-author">Elsa</h4>
                <div class="review-stars">★★★★★</div>
              </div>
            </div>
            <p class="review-text">Découverte de 1h30 et je reviendrai avec plaisir ! Il y a eu tellement de soins que je ne pourrais tous les citer ! Pur moment de détente et de relaxation. Un accueil parfait, j'ai été bien choyée 😁</p>
          </div>
          <div class="review-card">
            <div class="review-header">
              <div class="avatar">👩‍🦱</div>
              <div class="review-info">
                <h4 class="review-author">Aurelie</h4>
                <div class="review-stars">★★★★★</div>
              </div>
            </div>
            <p class="review-text">C'était une première pour moi ! Un très bon moment de détente... un soin très complet. Et un personnel très sympathique à l'écoute de sa clientèle. Je recommande sans modération 🥰</p>
          </div>
          <div class="review-card">
            <div class="review-header">
              <div class="avatar">👩</div>
              <div class="review-info">
                <h4 class="review-author">Eloise</h4>
                <div class="review-stars">★★★★★</div>
              </div>
            </div>
            <p class="review-text">Super moment !! Le soin découverte est vraiment agréable et permet de découvrir le headspa ! Mes cheveux n'ont jamais été aussi propres et beaux après le soin ! Je recommande fortement, nous sommes vraiment très bien accueillis !!</p>
          </div>
          <div class="review-card">
            <div class="review-header">
              <div class="avatar">👩‍💼</div>
              <div class="review-info">
                <h4 class="review-author">Albe</h4>
                <div class="review-stars">★★★★★</div>
              </div>
            </div>
            <p class="review-text">J'ai eu la chance de découvrir ce Head Spa pour une séance de 60 minutes, et c'était tout simplement incroyable. Dès mon arrivée, l'ambiance apaisante m'a mise à l'aise. La praticienne était super : douce, attentionnée et très professionnelle. Un vrai moment de bien-être que je recommande à 100 % ! J'ai hâte de revenir 🥰</p>
          </div>
          <div class="review-card">
            <div class="review-header">
              <div class="avatar">👩‍👧</div>
              <div class="review-info">
                <h4 class="review-author">Catania</h4>
                <div class="review-stars">★★★★★</div>
              </div>
            </div>
            <p class="review-text">Équipe très souriante et très agréable, très douce et de bons conseils. Duo fait avec ma fille, que du bonheur, merci beaucoup à elles ♥️</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Réservation Section -->
    <section id="reservation" class="reservation-section animate-on-scroll">
      <div class="section-header">
        <span class="section-tag">Prendre Rendez-vous</span>
        <h2 class="section-title">Réservez votre moment de détente</h2>
        <p class="section-subtitle">Utilisez le calendrier ci-dessous pour choisir votre créneau</p>
      </div>
      <div class="calendar-wrapper">
        <iframe
          class="calendar"
          src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1Wddn3i0WLbxD_yOb8lg0ABV9dj3ROGxNiV2gbdCZ5R7M2dMAOlfQeufzq8hS61OD_sPiroXCh"
          frameborder="0">
        </iframe>
      </div>
    </section>

    <!-- Footer -->
    <footer class="modern-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Institut L'Eden</h4>
          <p>📍 92 quai Charles Ravet, 73000 Chambéry</p>
          <p>📞 07 68 06 14 09</p>
          <p>✉️ ledenheadspa@gmail.com</p>
        </div>
        <div class="footer-section">
          <h4>Horaires</h4>
          <p>Mardi au Samedi : 9h30-18h00</p>
          <p>Dimanche et Lundi : Fermé</p>
          <p class="highlight">UNIQUEMENT SUR RDV</p>
          <p class="highlight">RÉSERVÉ AUX FEMMES ET ENFANTS</p>
        </div>
        <div class="footer-section">
          <h4>Suivez-nous</h4>
          <a href="https://www.instagram.com/leden_headspa?igsh=MTIzeTMxbGFjZGRheQ==" class="instagram-link" target="_blank">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @leden_headspa
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Eden Headspa - Tous droits réservés</p>
      </div>
    </footer>

    <!-- Bouton retour en haut -->
    <button class="back-to-top" @click="scrollToTop" :class="{ visible: showBackToTop }">
      ↑
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showBackToTop = ref(false)
const heroSection = ref(null)

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 500

  // Parallax effect pour le hero
  if (heroSection.value) {
    const scrolled = window.scrollY
    const heroBackground = heroSection.value.querySelector('.hero-background')
    if (heroBackground) {
      heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`
    }
  }

  // Animation au scroll pour les éléments
  const elements = document.querySelectorAll('.animate-on-scroll')
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const windowHeight = window.innerHeight
    if (elementTop < windowHeight * 0.85) {
      element.classList.add('visible')
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.modern-page {
  font-family: 'Inter', sans-serif;
  background-color: #fafaf8;
  color: #2c2c2c;
  overflow-x: hidden;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background: linear-gradient(135deg, #c6a68e 0%, #d8c3a5 50%, #e3d7c5 100%);
  z-index: 1;
}

@media (min-width: 769px) {
  .hero-background {
    background-image: linear-gradient(135deg, rgba(198, 166, 142, 0.6) 0%, rgba(216, 195, 165, 0.6) 50%, rgba(227, 215, 197, 0.6) 100%), url('@/img/salon.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .logo-container {
    background: #2c2c2c !important;
  }

  .hero-title {
    color: #2c2c2c !important;
    text-shadow: 0 2px 8px rgba(255, 255, 255, 0.3) !important;
  }

  .hero-subtitle {
    color: #2c2c2c !important;
  }

  .cta-button {
    background: #2c2c2c !important;
    color: #c6a68e !important;
  }

  .cta-button:hover {
    background: #1a1a1a !important;
  }
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.1) 100%);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  color: #fff;
  padding: 2rem;
}

.logo-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 3rem;
  padding: 0.1rem 1.5rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.brand-name {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 3rem;
  opacity: 0.95;
  letter-spacing: 1px;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.2rem 3rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: #c6a68e;
  background: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
}

.cta-button .arrow {
  transition: transform 0.3s ease;
}

.cta-button:hover .arrow {
  transform: translateX(5px);
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}

.mouse {
  width: 26px;
  height: 40px;
  border: 2px solid #fff;
  border-radius: 13px;
  position: relative;
}

.mouse::before {
  content: '';
  width: 4px;
  height: 8px;
  background: #fff;
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 2s infinite;
}

@keyframes scroll {
  0%, 20% {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(12px);
    opacity: 0;
  }
}

/* Animations */
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out;
}

.animate-slide-up.delay-1 {
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
}

.animate-slide-up.delay-2 {
  animation-delay: 0.4s;
  opacity: 0;
  animation-fill-mode: forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Quote Section */
.quote-section {
  padding: 8rem 2rem;
  background: linear-gradient(180deg, #fafaf8 0%, #f5f3f0 100%);
}

.quote-container {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.quote-icon {
  width: 60px;
  height: 60px;
  color: #c6a68e;
  margin-bottom: 2rem;
  opacity: 0.6;
}

.quote-text {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  line-height: 1.6;
  color: #2c2c2c;
  margin-bottom: 1.5rem;
}

.quote-author {
  font-size: 1.2rem;
  color: #888;
  font-weight: 300;
}

/* Section Styles */
section {
  padding: 6rem 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-tag {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: #c6a68e;
  color: #fff;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 700;
  color: #2c2c2c;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  font-weight: 300;
}

/* Concept Section */
.concept-section {
  background: linear-gradient(135deg, #e3d7c5 0%, #d8c3a5 100%);
}

.concept-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
}

.concept-card {
  padding: 3rem;
  background: linear-gradient(135deg, #fafaf8 0%, #f5f3f0 100%);
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.concept-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.concept-card p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
}

/* Salon Section */
.salon-section {
  background: #fff;
}

.salon-content {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.salon-text {
  padding: 2rem;
}

.salon-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a4a4a;
  margin-bottom: 1.5rem;
}

.map-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #fff;
  color: #c6a68e;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 500;
  margin-top: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.map-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.salon-image {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

.map-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.4s ease;
}

.salon-image:hover .map-image {
  transform: scale(1.05);
}

/* Labels Section */
.labels-section {
  background: linear-gradient(135deg, #e3d7c5 0%, #d8c3a5 100%);
  color: #000;
}

.labels-section .section-title {
  color: #2c2c2c;
  margin-bottom: 5rem;
}

.labels-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.label-card {
  text-align: center;
  padding: 2rem;
  background: #fff;
  border-radius: 20px;
  border: none;
  transition: all 0.4s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.label-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}

.label-icon-wrapper {
  width: 120px;
  height: 120px;
  margin: 0 auto 1.5rem;
  padding: 1rem;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.label-icon-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.label-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #2c2c2c;
}

.label-card p {
  font-size: 1rem;
  color: #555;
}

/* Prestations Section */
.prestations-section {
  background: #fff;
}

.prestations-grid {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
}

.prestation-card {
  position: relative;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.prestation-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.prestation-card.featured {
  border: 3px solid #c6a68e;
}

.badge {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 2;
  padding: 0.5rem 1.5rem;
  background: #c6a68e;
  color: #fff;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.prestation-image-wrapper {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.prestation-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.prestation-card:hover .prestation-image-wrapper img {
  transform: scale(1.1);
}

.prestation-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.duration {
  color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 20px;
}

.prestation-content {
  padding: 2rem;
}

.prestation-content h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: #2c2c2c;
  margin-bottom: 1rem;
}

.price-tag {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: linear-gradient(135deg, #c6a68e, #d8c3a5);
  color: #fff;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
}

.prestation-content p {
  font-size: 1rem;
  line-height: 1.7;
  color: #666;
  margin-bottom: 2rem;
}

.book-button {
  width: 100%;
  padding: 1rem;
  background: #c6a68e;
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.book-button:hover {
  background: #b39578;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(198, 166, 142, 0.4);
}

/* Reviews Section */
.reviews-section {
  background: linear-gradient(135deg, #f5f3f0 0%, #fafaf8 100%);
  overflow: hidden;
}

.google-rating {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
}

.stars {
  color: #FFC107;
  font-size: 2.5rem;
  letter-spacing: 0.3rem;
  text-shadow: 0 2px 4px rgba(255, 193, 7, 0.3);
}

.rating-text {
  font-size: 1.2rem;
  color: #666;
}

.rating-text strong {
  color: #2c2c2c;
  font-size: 1.6rem;
  font-weight: 700;
}

.reviews-slider {
  position: relative;
  max-width: calc(700px + 2rem);
  margin: 3rem auto 0;
  overflow: hidden;
  padding: 2rem 0;
}

.reviews-track {
  display: flex;
  gap: 2rem;
  padding-left: 1rem;
  animation: slideReviews 15s linear infinite;
}

@keyframes slideReviews {
  0% {
    transform: translateX(0);
  }
  10% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(calc(-1 * (700px + 2rem)));
  }
  30% {
    transform: translateX(calc(-1 * (700px + 2rem)));
  }
  40% {
    transform: translateX(calc(-2 * (700px + 2rem)));
  }
  50% {
    transform: translateX(calc(-2 * (700px + 2rem)));
  }
  60% {
    transform: translateX(calc(-3 * (700px + 2rem)));
  }
  70% {
    transform: translateX(calc(-3 * (700px + 2rem)));
  }
  80% {
    transform: translateX(calc(-4 * (700px + 2rem)));
  }
  90% {
    transform: translateX(calc(-4 * (700px + 2rem)));
  }
  100% {
    transform: translateX(calc(-5 * (700px + 2rem)));
  }
}

.reviews-track:hover {
  animation-play-state: paused;
}

.review-card {
  width: 700px;
  min-width: 700px;
  max-width: 700px;
  flex-shrink: 0;
  background: #fff;
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  position: relative;
}

.review-card::before {
  content: '"';
  position: absolute;
  top: 1rem;
  left: 2rem;
  font-size: 6rem;
  font-family: 'Playfair Display', serif;
  color: #c6a68e;
  opacity: 0.15;
  line-height: 1;
}

.review-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, #c6a68e, #d8c3a5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  flex-shrink: 0;
  box-shadow: 0 4px 16px rgba(198, 166, 142, 0.3);
}

.review-info {
  flex: 1;
}

.review-author {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #2c2c2c;
  margin-bottom: 0.5rem;
}

.review-stars {
  color: #FFC107;
  font-size: 1.3rem;
  letter-spacing: 0.2rem;
}

.review-text {
  font-size: 1.15rem;
  line-height: 1.9;
  color: #555;
  position: relative;
  z-index: 1;
}

/* Reservation Section */
.reservation-section {
  background: linear-gradient(135deg, #d8c3a5 0%, #c6a68e 100%);
}

.reservation-section .section-tag {
  background: #2c2c2c;
  color: #c6a68e;
}

.reservation-section .section-title,
.reservation-section .section-subtitle {
  color: #2c2c2c;
}

.calendar-wrapper {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  padding-bottom: 75%;
  height: 0;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  background: #fff;
}

.calendar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: #fff;
}

/* Footer */
.modern-footer {
  background: linear-gradient(180deg, #2c2c2c 0%, #1a1a1a 100%);
  color: #fff;
  padding: 4rem 2rem 2rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section h4 {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #c6a68e;
}

.footer-section p {
  margin-bottom: 0.8rem;
  line-height: 1.6;
  opacity: 0.9;
}

.footer-section .highlight {
  color: #c6a68e;
  font-weight: 600;
}

.instagram-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, #f58529, #dd2a7b, #8134af);
  color: #fff;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.instagram-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(245, 133, 41, 0.4);
}

.instagram-link svg {
  width: 24px;
  height: 24px;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.7;
}

/* Back to Top Button */
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: #c6a68e;
  color: #fff;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
}

.back-to-top:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

/* Scroll Animations */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

.delay-1 {
  transition-delay: 0.2s;
}

.delay-2 {
  transition-delay: 0.4s;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 3.5rem;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .salon-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .logo-container {
    background: #2c2c2c !important;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .brand-name {
    font-size: 1.5rem;
  }

  .logo {
    width: 60px;
    height: 60px;
  }

  section {
    padding: 4rem 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .quote-text {
    font-size: 1.5rem;
  }

  .concept-content,
  .labels-grid,
  .prestations-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .reviews-slider {
    max-width: calc(500px + 2rem);
    padding: 1.5rem 0;
  }

  .review-card {
    width: 500px;
    min-width: 500px;
    max-width: 500px;
    padding: 2rem;
  }

  @keyframes slideReviews {
    0% {
      transform: translateX(0);
    }
    10% {
      transform: translateX(0);
    }
    20% {
      transform: translateX(calc(-1 * (500px + 2rem)));
    }
    30% {
      transform: translateX(calc(-1 * (500px + 2rem)));
    }
    40% {
      transform: translateX(calc(-2 * (500px + 2rem)));
    }
    50% {
      transform: translateX(calc(-2 * (500px + 2rem)));
    }
    60% {
      transform: translateX(calc(-3 * (500px + 2rem)));
    }
    70% {
      transform: translateX(calc(-3 * (500px + 2rem)));
    }
    80% {
      transform: translateX(calc(-4 * (500px + 2rem)));
    }
    90% {
      transform: translateX(calc(-4 * (500px + 2rem)));
    }
    100% {
      transform: translateX(calc(-5 * (500px + 2rem)));
    }
  }

  .avatar {
    width: 60px;
    height: 60px;
    font-size: 2rem;
  }

  .review-author {
    font-size: 1.4rem;
  }

  .review-text {
    font-size: 1rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hide-on-mobile {
    display: none;
  }

  .salon-image {
    display: none;
  }
}

@media (max-width: 480px) {
  .logo-container {
    background: #2c2c2c !important;
    padding: 0.1rem 1rem;
    gap: 0.6rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .logo {
    width: 50px;
    height: 50px;
  }

  .brand-name {
    font-size: 1.1rem;
  }

  .cta-button {
    padding: 1rem 2rem;
    font-size: 1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .reviews-slider {
    max-width: calc(320px + 2rem);
    padding: 1rem 0;
  }

  .review-card {
    width: 320px;
    min-width: 320px;
    max-width: 320px;
    padding: 1.5rem;
    border-radius: 16px;
  }

  @keyframes slideReviews {
    0% {
      transform: translateX(0);
    }
    10% {
      transform: translateX(0);
    }
    20% {
      transform: translateX(calc(-1 * (320px + 2rem)));
    }
    30% {
      transform: translateX(calc(-1 * (320px + 2rem)));
    }
    40% {
      transform: translateX(calc(-2 * (320px + 2rem)));
    }
    50% {
      transform: translateX(calc(-2 * (320px + 2rem)));
    }
    60% {
      transform: translateX(calc(-3 * (320px + 2rem)));
    }
    70% {
      transform: translateX(calc(-3 * (320px + 2rem)));
    }
    80% {
      transform: translateX(calc(-4 * (320px + 2rem)));
    }
    90% {
      transform: translateX(calc(-4 * (320px + 2rem)));
    }
    100% {
      transform: translateX(calc(-5 * (320px + 2rem)));
    }
  }

  .review-card::before {
    font-size: 4rem;
    top: 0.5rem;
    left: 1rem;
  }

  .review-header {
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .avatar {
    width: 50px;
    height: 50px;
    font-size: 1.8rem;
  }

  .review-author {
    font-size: 1.2rem;
  }

  .review-stars {
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
  }

  .review-text {
    font-size: 0.95rem;
    line-height: 1.7;
  }

  .stars {
    font-size: 2rem;
    letter-spacing: 0.2rem;
  }

  .rating-text {
    font-size: 1rem;
  }

  .rating-text strong {
    font-size: 1.3rem;
  }

  .back-to-top {
    width: 45px;
    height: 45px;
    bottom: 1.5rem;
    right: 1.5rem;
  }
}
</style>

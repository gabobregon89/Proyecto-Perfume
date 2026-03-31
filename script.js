const whatsappNumber = "5493624859559";

const perfumes = [
  {
    name: "Amber Nocturne",
    price: "$39.900",
    size: "100 ml",
    family: "Ambar especiado",
    description: "Notas calidas de vainilla, cuero suave y maderas oscuras.",
    gradient: "linear-gradient(135deg, #d4a373 0%, #8b5e34 100%)",
  },
  {
    name: "Velvet Bloom",
    price: "$42.500",
    size: "80 ml",
    family: "Floral elegante",
    description: "Rosa aterciopelada, jazmin luminoso y fondo almizclado.",
    gradient: "linear-gradient(135deg, #f2c6c2 0%, #b56576 100%)",
  },
  {
    name: "Citrus Atelier",
    price: "$34.800",
    size: "90 ml",
    family: "Citrico fresco",
    description: "Bergamota, neroli y un cierre limpio para todos los dias.",
    gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
  },
  {
    name: "Midnight Oud",
    price: "$48.900",
    size: "100 ml",
    family: "Amaderado intenso",
    description: "Oud refinado, incienso y toques ahumados de gran presencia.",
    gradient: "linear-gradient(135deg, #5c4742 0%, #1f1714 100%)",
  },
  {
    name: "Pure Linen",
    price: "$31.700",
    size: "75 ml",
    family: "Limpio y suave",
    description: "Salida fresca, corazon blanco y sensacion de ropa recien lavada.",
    gradient: "linear-gradient(135deg, #dbe7f0 0%, #7a9eb1 100%)",
  },
  {
    name: "Golden Peony",
    price: "$37.200",
    size: "85 ml",
    family: "Floral frutal",
    description: "Peonia, pera jugosa y un fondo delicado con aire sofisticado.",
    gradient: "linear-gradient(135deg, #f7d794 0%, #f19066 100%)",
  },
];

const perfumeList = document.querySelector("#perfume-list");

function createWhatsAppLink(perfume) {
  const message = `Hola, me interesa el perfume ${perfume.name} (${perfume.size}) que figura a ${perfume.price}. Quisiera mas informacion.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function renderPerfumes() {
  perfumeList.innerHTML = perfumes
    .map(
      (perfume) => `
        <article class="catalog-card">
          <div class="catalog-visual" style="--card-gradient: ${perfume.gradient}">
            <div class="bottle-shape" aria-hidden="true"></div>
          </div>
          <div class="catalog-body">
            <div class="catalog-header">
              <h3>${perfume.name}</h3>
              <span class="catalog-price">${perfume.price}</span>
            </div>
            <p class="catalog-meta">${perfume.family} - ${perfume.size}</p>
            <p class="catalog-description">${perfume.description}</p>
            <a
              class="buy-btn"
              href="${createWhatsAppLink(perfume)}"
              target="_blank"
              rel="noreferrer"
              aria-label="Consultar ${perfume.name} por WhatsApp"
            >
              Comprar por WhatsApp
            </a>
          </div>
        </article>
      `
    )
    .join("");
}

renderPerfumes();

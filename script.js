const whatsappNumber = "5493624859559";

const perfumes = [
  {
    name: "KAIAK Aero",
    price: "$62.000",
    size: "100 ml",
    family: "Femenino / Masculino",
    description: "Fresca y moderna, que busca capturar el encuentro del viento con el agua del mar.",
    gradient: "linear-gradient(135deg, #d4a373 0%, #8b5e34 100%)",
    image: "images/kaiak-aero.webp",
  },
  {
    name: "KAIAK Clasico",
    price: "$62.800",
    size: "100 ml",
    family: "Masculino",
    description: "Aromática herbal de frescura potente, ideal para uso diario y climas cálidos.",
    gradient: "linear-gradient(135deg, #f2c6c2 0%, #b56576 100%)",
    image: "images/kaiak-clasico-masc.webp",
  },
  {
    name: "KAIAK Aventura",
    price: "$62.000",
    size: "100 ml",
    family: "Femenino",
    description: "Floral y refrescante, ideal para el uso diario en primavera y verano.",
    gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    image: "images/kaiak-aventura-fem.webp",
  },
  {
    name: "KRISKA Jeans",
    price: "$50.500",
    size: "100 ml",
    family: "Femenino",
    description: "Floral Verde, con una mezcla de frescor cítrico, notas dulces moderadas y confort.",
    gradient: "linear-gradient(135deg, #5c4742 0%, #1f1714 100%)",
    image: "images/kriska-jeans-fem.webp",
  },
  {
    name: "KRISKA Clasico",
    price: "$45.000",
    size: "100 ml",
    family: "Femenino",
    description: "Dulzura de vainilla equilibrada con maderas, notas de ciruela y frambuesa negra.",
    gradient: "linear-gradient(135deg, #dbe7f0 0%, #7a9eb1 100%)",
    image: "images/kriska-clasico-fem.webp",
  },
  {
    name: "HUMOR Liberta",
    price: "$60.200",
    size: "100 ml",
    family: "Unisex",
    description: "Amaderada Frutal Moderada, ideal para mujer y hombre.",
    gradient: "linear-gradient(135deg, #f7d794 0%, #f19066 100%)",
    image: "images/humor-liberta.webp",
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
          <div class="catalog-visual" style="--card-gradient: url(${perfume.image})">
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

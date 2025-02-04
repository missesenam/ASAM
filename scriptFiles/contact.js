const contactInfo = [
  {
    title: "Email",
    description: "support@asamfoundation.com",
    image: "📧",
  },
  {
    title: "Phone",
    description: "0244181189",
    image: "📞",
  },
  {
    title: "Address",
    description: "A263/8 Kpakpo Samoa Street",
    image: "📍",
  },
  {
    title: "Website",
    description: "Asamfoundation.org",
    image: "🌍",
  },
];

const container = document.getElementById("contact-container");

contactInfo.forEach((item) => {
  const card = document.createElement("div");
  card.className = "bg-accent shadow-md rounded-lg p-4 text-center";

  card.innerHTML = `
    <div class="text-3xl mb-2">${item.image}</div>
    <h3 class="font-semibold text-primary">${item.title.toUpperCase()}</h3>
    <p class="text-sm text-text">${item.description}</p>
  `;

  container.appendChild(card);
});

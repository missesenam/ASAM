const contactInfo = [
  {
    title: "Email",
    description: "support@asamfoundation.com",
    icon: '<i class="fa fa-envelope text-secondary"></i>',
  },
  {
    title: "Phone",
    description: "0244181189",
    icon: '<i class="fa fa-phone text-secondary"></i>',
  },
  {
    title: "Address",
    description: "A263/8 Kpakpo Samoa Street",
    icon: '<i class="fa fa-map-marker-alt text-secondary"></i>',
  },
  {
    title: "Website",
    description: "Asamfoundation.org",
    icon: '<i class="fa fa-globe text-secondary"></i>',
  },
];

const container = document.getElementById("contact-container");

contactInfo.forEach((item) => {
  const card = document.createElement("div");
  card.className = "bg-primary shadow-md rounded-lg p-4 text-center";

  card.innerHTML = `
    <div class="text-3xl mb-2">${item.icon}</div>
    <h3 class="font-semibold text-accent">${item.title.toUpperCase()}</h3>
    <p class="text-sm text-white">${item.description}</p>
  `;

  container.appendChild(card);
});

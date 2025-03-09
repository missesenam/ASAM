const values = [
  {
    title: "Compassion",
    description: "Showing empathy and kindness to those in need.",
    image: "/img/helping-hands.jpg",
  },
  {
    title: "Empowerment",
    description: "Equipping individuals with skills, knowledge, and resources.",
    image: "/img/education.jpg",
  },
  {
    title: "Excellence",
    description: "Striving for exceptional quality in all endeavors.",
    image: "/img/trophy,achievement.jpg",
  },
  {
    title: "Integrity",
    description: "Upholding honesty, transparency, and accountability.",
    image: "./img/handshake,honesty.jpg",
  },
  {
    title: "Inclusivity",
    description: "Serving both church members and the broader community.",
    image: "./img/integration.jpg",
  },
  {
    title: "Collaboration",
    description: "Partnering with stakeholders for greater effectiveness.",
    image: "./img/teamwork,partnership.jpg",
  },
  // {
  //   title: "Sustainability",
  //   description: "Fostering self-sufficiency and long-term impact.",
  //   image: "https://source.unsplash.com/600x400/?sustainability,green",
  // },
];

function renderCards() {
  const container = document.getElementById("card-container");
  container.innerHTML = values
    .map(
      (item) => `
        <div class="flex flex-col md:flex-row w-full bg-white shadow-sm border-2 border-primary/70 rounded-lg overflow-hidden">
          <div class="p-2.5 md:w-3/6 shrink-0">
            <img src="${item.image}" alt="${item.title}" class="h-full w-full rounded-md md:rounded-lg object-cover" />
          </div>
          <div class="p-3 md:w-3/6 flex flex-col justify-center text-text">
            <h4 class="mb-2 text-xl font-semibold text-primary">${item.title}</h4>
            <p class="mb-4 leading-normal font-light">${item.description}</p>
          </div>
        </div>`
    )
    .join("");
}

renderCards();

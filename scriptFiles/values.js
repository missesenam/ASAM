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
    image: "./img/community.jpg",
  },
  {
    title: "Sustainability",
    description: "Fostering self-sufficiency and long-term impact.",
    image: "https://source.unsplash.com/600x400/?sustainability,green",
  },
  {
    title: "Collaboration",
    description: "Partnering with stakeholders for greater effectiveness.",
    image: "https://source.unsplash.com/600x400/?teamwork,partnership",
  },
];

function renderCards() {
  const container = document.getElementById("card-container");
  container.innerHTML = values
    .map(
      (item) => `
        <div class="flex flex-col md:flex-row w-full bg-white shadow-sm border border-accent rounded-lg overflow-hidden">
          <div class="p-2.5 md:w-3/6 shrink-0">
            <img src="${item.image}" alt="${item.title}" class="h-full w-full rounded-md md:rounded-lg object-cover" />
          </div>
          <div class="p-3 md:w-3/6 flex flex-col justify-center">
            <h4 class="mb-2 text-text text-xl font-semibold">${item.title}</h4>
            <p class="mb-4 text-text leading-normal font-light">${item.description}</p>
          </div>
        </div>`
    )
    .join("");
}

renderCards();

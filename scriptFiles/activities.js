const activities = [
  {
    title: "Educational Empowerment",
    description: "Scholarships, mentorship, tutoring, and counseling.",
    icon: '<i class="fas fa-book-open"></i>',
  },
  {
    title: "Business Support",
    description:
      "Entrepreneurship training, funding, grants, incubation, and acceleration.",
    icon: '<i class="fas fa-briefcase"></i>',
  },
  {
    title: "Skills Training",
    description: "Vocational training and apprenticeships.",
    icon: '<i class="fas fa-hammer"></i>',
  },
  {
    title: "Individual Development",
    description: "Capacity building, coaching, and leadership development.",
    icon: '<i class="fas fa-user"></i>',
  },
  {
    title: "Community Outreach",
    description: "Partnerships, workshops, seminars, and conferences.",
    icon: '<i class="fas fa-handshake"></i>',
  },
  {
    title: "Research & Development",
    description:
      "Innovative solutions for education, entrepreneurship, and skills development.",
    icon: '<i class="fas fa-lightbulb"></i>',
  },
  {
    title: "IT Training",
    description: "Free computers for students in tech.",
    icon: '<i class="fas fa-desktop"></i>',
  },
  {
    title: "",
    description:
      '<a href="#" class="bg-white text-secondary font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:opacity-70">Apply Now </a>',
    icon: '<i class="fas fa-check-circle"></i>',
  },
];
const activitiesContainer = document.getElementById("activities");

activities.forEach((activity) => {
  const card = document.createElement("div");
  card.className =
    "bg-primary p-6 rounded-xl border-t-8 border-secondary shadow-lg hover:shadow-xl transition duration-300 text-center text-white";

  card.innerHTML = `
        <div class="flex justify-center mb-4">
          <div class="w-14 h-12 flex items-center justify-center rounded-full">
            ${activity.icon}
          </div>
        </div>
        <h3 class="text-xl font-semibold mb-2">${activity.title}</h3>
        <p class="text-gray-400">${activity.description}</p>
      `;

  activitiesContainer.appendChild(card);
});

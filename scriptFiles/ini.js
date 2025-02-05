const firstfounding = [
  {
    name: "Family Endowment",
    description: "Initial funding provided by Apostle Samuel Aziator's family.",
    icon: '<i class="fa fa-users text-secondary"></i>',
  },
  {
    name: "Church Support",
    description:
      "Seed funding from Church of Conquerors International Ghana using Apostle Memorial Day celebration as a fundraising means.",
    icon: '<i class="fa fa-church text-secondary"></i>',
  },
];

const fundingSec = document.getElementById("funding");

firstfounding.forEach((funding) => {
  const sectionDiv = document.createElement("div");
  sectionDiv.classList.add("p-4", "border", "hover:shadow-2xl", "bg-white/50");

  sectionDiv.innerHTML = `
        <div class="flex items-center gap-4">
          ${funding.icon}
          <h3 class="text-xl font-semibold text-text">${funding.name}</h3>
        </div>
        <p class="mt-2 text-left">
          ${funding.description}
        </P>
      `;

  fundingSec.appendChild(sectionDiv);
});

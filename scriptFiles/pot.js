const secondfounding = [
  {
    name: "Donations",
    description: "Individual and corporate donations.",
    icon: '<i class="fa fa-hand-holding-heart text-secondary"></i>',
  },
  {
    name: "Grants",
    description:
      "Local and international grants from foundations, NGOs, and government agencies.",
    icon: '<i class="fa fa-gift text-secondary"></i>',
  },
  {
    name: "Sponsorships",
    description: "Partnerships with businesses and organizations.",
    icon: '<i class="fa fa-handshake text-secondary"></i>',
  },
  //   {
  //     name: "Fundraising Events",
  //     description: "Charity events, galas, and campaigns.",
  //     icon: '<i class="fa fa-calendar-alt text-secondary"></i>', // Represents events
  //   },
  //   {
  //     name: "Corporate Social Responsibility (CSR)",
  //     description: "Partnerships with companies' CSR initiatives.",
  //     icon: '<i class="fa fa-briefcase text-secondary"></i>', // Represents corporate social responsibility
  //   },
];
const fundingSecond = document.getElementById("fundingsecond");

secondfounding.forEach((funding) => {
  const sectionDiv = document.createElement("div");
  sectionDiv.classList.add(
    "p-4",
    "border",
    "border-black/70",
    "hover:bg-transparent",
    "bg-black/70"
  );

  sectionDiv.innerHTML = `
        <div class="flex items-center gap-4">
          ${funding.icon}
          <h3 class="text-xl font-semibold text-secondary">${funding.name}</h3>
        </div>
        <p class="mt-2 text-left">
          ${funding.description}
        </P>
      `;

  fundingSecond.appendChild(sectionDiv);
});

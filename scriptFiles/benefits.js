const benefits = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="currentColor"> <path d="M12 2L1 7l11 5 9-4.09V16h2V8l-11-6zm-1 12.91L3 10v5h2v-3.5l6 3V21h2v-5.09l6-3V15h2v-5l-8 4-1 0.5z"/></svg>',
    title: "Junior High to Tertiary Students",
    description: "Support for students from junior high to tertiary education.",
    alignRight: false,
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="currentColor"> <path d="M7 2v3H3c-1.1 0-2 .9-2 2v4h2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V11h2V7c0-1.1-.9-2-2-2h-4V2H7zm2 2h6v1H9V4zm-4 5h14v10H5V9z"/></svg>',
    title: "Young Adults Seeking Vocational Training",
    description: "Opportunities for vocational training and apprenticeships.",
    alignRight: true,
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="currentColor"><path d="M4 6h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2zm0 2v4h16V8H4zm0 6v4h16v-4H4zm6-11h4c1.1 0 2 .9 2 2v1H8V3c0-1.1.9-2 2-2z"/></svg>',
    title: "Entrepreneurs and Small Business Owners",
    description:
      "Funding and mentorship for entrepreneurs and small businesses.",
    alignRight: false,
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="currentColor"><path d="M12 2l-10 5v2h2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9h2V7l-10-5zm0 2.18L18 7l-6 3-6-3 6-2.82zM6 9.9L12 13l6-3.1V19H6V9.9z"/></svg>',
    title: "Individuals Requiring Educational Support",
    description:
      "Guidance and counseling for those needing educational assistance.",
    alignRight: true,
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="currentColor"><path d="M12 2L1 10v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V10L12 2zm0 2.3l7 5.2V20h-3v-6H8v6H5V9.5l7-5.2zM10 12h4v8h-4v-8z"/></svg>',
    title: "Community Groups and Organizations",
    description:
      "Support for organizations aligned with ASAM Foundation's mission.",
    alignRight: false,
  },
];

const container = document.getElementById("benefits-container");

benefits.forEach((benefit) => {
  const benefitItem = document.createElement("div");
  //   benefitItem.className =
  //     "flex items-center gap-6 mb-8 ${benefit.alignRight ? 'flex-row-reverse' : ''} ";

  //   benefitItem.innerHTML = `
  //       <img src="${benefit.icon}" alt="${benefit.title}" class="w-16 h-16" />
  //       <div>
  //         <h3 class="text-secondary text-xl font-semibold">${benefit.title}</h3>
  //         <p class="text-text mt-2">${benefit.description}</p>
  //       </div>
  // `;
  benefitItem.innerHTML = `
  <div class="flex ${
    benefit.alignRight ? "flex-row-reverse" : ""
  } items-center gap-6 mb-8">
${benefit.icon}
    <div class="${benefit.alignRight ? "text-right ml-auto" : ""}">
      <h3 class="${benefit.color} text-xl font-semibold">${benefit.title}</h3>
      <p class="text-text mt-2">${benefit.description}</p>
    </div>
  </div>
`;

  container.appendChild(benefitItem);
});

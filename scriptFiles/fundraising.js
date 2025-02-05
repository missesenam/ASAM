const fundingSources = [
  {
    category: "Revenue Streams",
    icon: `<i class="fa fa-piggy-bank text-secondary"></i>
`,
    sources: [
      "Interest on Endowments",
      "Program Fees (training, workshops, etc.)",
      "Consulting Services",
    ],
  },
  {
    category: "Partnership Opportunities",
    icon: `<i class="fa fa-handshake text-secondary"></i>`,
    sources: [
      "Educational Institutions",
      "Businesses and Entrepreneurs",
      "NGOs and Community Organizations",
      "Government Agencies",
      "International Development Organizations",
    ],
  },
  {
    category: "Crowdfunding Platforms",
    icon: `<i class="fa fa-donate text-secondary"></i>
`,
    sources: ["GoFundMe", "Kickstarter", "Indiegogo", "Global Giving"],
  },
  {
    category: "Philanthropic Partners",
    icon: `<i class="fa fa-heart text-secondary"></i>
`,
    sources: [
      "Ghanaian philanthropists",
      "International foundations (e.g., Bill and Melinda Gates Foundation)",
      "Corporate foundations (e.g., Coca-Cola Foundation)",
    ],
  },
  //   {
  //     category: "Government Funding",
  //     icon: `<i class="fa fa-building text-secondary"></i>
  // `,
  //     sources: [
  //       "Ghanaian government grants",
  //       "International government agencies",
  //     ],
  //   },
];

const fundingSection = document.getElementById("funding-section");

fundingSources.forEach((funding) => {
  const sectionDiv = document.createElement("div");
  sectionDiv.classList.add("p-4", "border", "hover:shadow-2xl");

  sectionDiv.innerHTML = `
        <div class="flex items-center gap-4">
          ${funding.icon}
          <h3 class="text-xl font-semibold text-text">${funding.category}</h3>
        </div>
        <ul class="mt-2 list-disc pl-6 text-gray-700">
          ${funding.sources.map((source) => `<li>${source}</li>`).join("")}
        </ul>
      `;

  fundingSection.appendChild(sectionDiv);
});

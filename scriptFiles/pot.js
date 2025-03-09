const secondfounding = [
  {
    description: "Equipping students with essential digital skills",
    icon: '<i class="fa fa-laptop-code text-secondary"></i>',
  },
  {
    description: "Providing access to online learning resources",
    icon: '<i class="fa fa-globe text-secondary"></i>',
  },
  {
    description: "Enhancing career prospects for young tech enthusiasts",
    icon: '<i class="fa fa-chart-line text-secondary"></i>',
  },
];
const fundingSecond = document.getElementById("fundingsecond");

secondfounding.forEach((funding) => {
  const sectionDiv = document.createElement("div");
  sectionDiv.classList.add(
    "p-5",
    "border",
    "border-black/70",
    "hover:bg-transparent",
    "bg-black/70",
    "w-full"
  );

  sectionDiv.innerHTML = `
        <div class="flex items-center gap-4">
          ${funding.icon}
          <p class="mt-2 text-left">
            ${funding.description}
          </P>
        </div>
      `;

  fundingSecond.appendChild(sectionDiv);
});

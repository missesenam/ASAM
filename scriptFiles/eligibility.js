const eligibilityCriteria = [
  { text: "Be a brilliant but needy student" },
  { text: "Be a Ghanaian community member (non-church affiliate)" },
  { text: "Be an entrepreneur or small business owner" },
  { text: "Be an individual seeking skills training or apprenticeships" },
];

// Select the eligibility container
const eligibilityContainer = document.getElementById("eligibility");

// Create a `<ul>` element with necessary styles
const ul = document.createElement("ul");
ul.className = "space-y-4 text-gray-300 ";

// Populate the list dynamically
eligibilityCriteria.forEach((item) => {
  const li = document.createElement("li");
  li.className =
    "flex items-start pb-8 border-b transition-all duration-500 hover:translate-x-10 ";
  li.innerHTML = `<span class="text-secondary2 font-semibold mr-2">★</span> ${item.text}`;
  ul.appendChild(li);
});

// Append the list to the container
eligibilityContainer.appendChild(ul);

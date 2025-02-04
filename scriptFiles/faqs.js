const faqs = [
  {
    category: "General FAQs",
    items: [
      {
        question: "What is the ASAM Foundation?",
        answer:
          "The ASAM Foundation is a non-profit organization established in memory of Apostle Samuel Aziator to empower individuals through education, entrepreneurship, and skills development.",
      },
      {
        question: "What is the mission of the ASAM Foundation?",
        answer:
          "Our mission is to provide holistic support to Church of Conquerors International Ghana members and the broader community, enhancing their educational, economic, and social well-being.",
      },
      {
        question: "Who founded the ASAM Foundation?",
        answer:
          "The ASAM Foundation was founded by Apostle Samuel Aziator's family and the Church of Conquerors International Ghana.",
      },
    ],
  },
  {
    category: "Eligibility & Application FAQs",
    items: [
      {
        question: "Who is eligible for ASAM Foundation support?",
        answer:
          "Members of Church of Conquerors International Ghana, community members, brilliant but needy students, entrepreneurs, and individuals seeking skills training.",
      },
      {
        question: "How do I apply for ASAM Foundation support?",
        answer:
          "Submit an application form (available on our website or at designated centers), provide the required documentation, and attend an interview or assessment (if necessary).",
      },
      {
        question: "What documents do I need to apply?",
        answer:
          "ID, academic records, business plan, proof of membership (for church members).",
      },
    ],
  },
  {
    category: "Programs & Services FAQs",
    items: [
      {
        question: "What programs and services does the ASAM Foundation offer?",
        answer:
          "Scholarships, entrepreneurship training, vocational training, apprenticeships, mentorship, counseling, business incubation, and acceleration.",
      },
      {
        question: "How long do programs last?",
        answer:
          "Program duration varies (scholarships: 1-4 years, entrepreneurship training: 3-24 months).",
      },
      {
        question: "Are programs available online?",
        answer:
          "Some programs are available online; others require in-person participation.",
      },
    ],
  },
  {
    category: "Financial & Donations FAQs",
    items: [
      {
        question: "How is the ASAM Foundation funded?",
        answer:
          "Through donations, grants, sponsorships, fundraising events, and corporate social responsibility initiatives.",
      },
      {
        question: "Can I donate to the ASAM Foundation?",
        answer: "Yes, individual and corporate donations are welcome.",
      },
      {
        question: "How can I volunteer?",
        answer:
          "Contact us through our website or email to explore volunteer opportunities.",
      },
    ],
  },
  {
    category: "Contact & Support FAQs",
    items: [
      {
        question: "How do I contact the ASAM Foundation?",
        answer:
          "Email: support@asamfoundation.org, Phone: 0244181189, Address: Banana Inn, Website: asamfoundation.org",
      },
      {
        question: "What are your office hours?",
        answer: "Monday to Friday (8am-5pm).",
      },
      {
        question: "How can I report a concern or complaint?",
        answer: "Email: report@asamfoundation.org.",
      },
    ],
  },
];
const faqContainer = document.getElementById("faq-container");

faqs.forEach((section) => {
  // Create section wrapper
  const sectionDiv = document.createElement("div");

  // Create and append category heading
  const heading = document.createElement("h2");
  heading.className =
    "text-2xl lg:text-3xl font-bold text-primary my-7 font-serif";
  heading.textContent = section.category;
  sectionDiv.appendChild(heading);

  // Create and append list
  section.items.forEach((faq) => {
    // Create collapse wrapper
    const collapseDiv = document.createElement("div");
    collapseDiv.className = "collapse collapse-plus border border-accent mb-3";
    collapseDiv.setAttribute("tabindex", "0");

    // Create question (collapse title)
    const questionDiv = document.createElement("div");
    questionDiv.className = "collapse-title text-xl font-medium bg-secondary";
    questionDiv.textContent = faq.question;

    // Create answer (collapse content)
    const answerDiv = document.createElement("div");
    answerDiv.className = "collapse-content bg-background";
    const answerText = document.createElement("p");
    answerText.className = "py-3";
    answerText.textContent = faq.answer;
    answerDiv.appendChild(answerText);

    collapseDiv.appendChild(questionDiv);
    collapseDiv.appendChild(answerDiv);
    sectionDiv.appendChild(collapseDiv);
  });
  faqContainer.appendChild(sectionDiv);
});

// <div
//   tabindex="0"
//   class="collapse collapse-plus border-base-300 bg-base-200 border"
// >
//   <div class="collapse-title text-xl font-medium">Focus me to see content</div>
//   <div class="collapse-content">
//     <p>tabindex="0" attribute is necessary to make the div focusable</p>
//   </div>
// </div>;

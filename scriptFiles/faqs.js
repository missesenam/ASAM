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

<div className="space-y-6">
  {faqs.map((section, index) => (
    <div key={index}>
      <h2 className="text-xl font-bold text-primary mb-3">
        {section.category}
      </h2>
      <ul className="space-y-2 list-disc pl-5">
        {section.items.map((faq, i) => (
          <li key={i}>
            <strong>{faq.question}</strong> <br />
            {faq.answer}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>;

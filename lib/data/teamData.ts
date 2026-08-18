export const productSaleAndMarketingTeam = [
  {
    name: "Santosh Aryal",
    slug: "santosh-aryal",
    role: "Business Development Manager",
    image: "images/ourTeam/santosh-aryal.jpg",
    bio: [
      "Santosh Aryal brings a unique blend of analytical thinking and strategic vision to his role as Business Development Manager at Green Sky Travels. With an academic background in Physics (M.Sc.), Santosh approaches the travel business with precision, logic, and an eye for innovative growth opportunities.",
      "He is responsible for identifying new markets, building strategic partnerships, and driving the company’s expansion across diverse destinations. His ability to analyze market trends, understand client needs, and craft customized solutions has made him an integral part of Green Sky Travels’ success story.",
      "Santosh is passionate about connecting people with enriching travel experiences and is constantly exploring ways to enhance the company’s offerings. His scientific mindset combined with a deep interest in global cultures makes him a dynamic force in shaping the future of Green Sky Travels."
    ],
  },
  {
    name: "Ghimire Bandhu",
    slug: "ghimire-bandhu",
    role: "Operations Manager & Key Account Manager (Himalayan Tourism)",
    image: "images/ourTeam/ghimire-bandhu.jpg",
    bio: "An MBA Graduate and passionate about tourism and hospitality, Ghimire has been in the tourism industry since 2006. He currently works as a Operations Manager and Key Account Manager for Himalayan Tourism at Green Sky Travels. Being a professional tour guide, he possesses in-depth knowledge of tourism and hospitality, ensuring clients receive exceptional service and insights into the travel industry.",
  },
  {
    name: "Athul Kishan",
    slug: "athul-kishan",
    role: "Sales Manager",
    image: "images/ourTeam/athul-kishan.jpg",
    bio: "With over five years of experience in Tourism and Hospitality Management, Mr. Athul is a seasoned professional dedicated to ensuring seamless travel experiences. As the Sales Manager at Green Sky Travels, he oversees sales management to provide hassle-free journeys for every traveler. His hands-on approach, industry expertise, and commitment to excellence make him an invaluable part of the team, ensuring that every trip is smooth, efficient, and memorable.",
  },
];

export const operationsAndLogisticsTeam = [
  {
    name: "Ghimire Bandhu",
    slug: "ghimire-bandhu",
    role: "Operations Manager & Key Account Manager (Himalayan Tourism)",
    image: "images/ourTeam/ghimire-bandhu.jpg",
    bio: "With a deep love for the Himalayas, Ghimire oversees operations and ensures that every trekking and tour experience in the region is impeccably organized and unforgettable.",
  },
  {
    name: "Sobha Kadaria",
    slug: "sobha-kadaria",
    role: "Customer care Executive",
    image: "images/ourTeam/shobha-kadaria.jpg",
    bio: ["Shoba Kadaria is a key member of the Green Sky Travels customer care team, dedicated to ensuring that every client enjoys a smooth and satisfying experience from the first inquiry to the final return home. Friendly, approachable, and always ready to help, Shoba is the first point of contact for many of our travelers—and often the reason they keep coming back.",
    "With a strong background in customer service and a passion for travel, Shoba excels at understanding client needs, addressing concerns promptly, and providing timely updates and support.",
     "Her calm demeanor and problem-solving attitude make her a trusted companion throughout the travel planning process.Whether it's answering queries, coordinating with other departments, or offering helpful advice, Shoba goes the extra mile to make every customer feel valued and well taken care of.",]
  },
  {
    name: "Manoj Kumar",
    slug: "manoj-kumar",
    role: "Visa Desk & Documentation Head",
    image: "images/ourTeam/manoj-kumar.jpg",
    bio: [
      "Manoj Kumar is the backbone of Green Sky Travels’ visa and documentation services. With a meticulous eye for detail and years of experience in the travel industry, Manoj ensures that every visa application is handled smoothly, efficiently, and in compliance with the latest regulations. His in-depth knowledge of global visa processes makes him an invaluable resource for clients traveling to a wide range of destinations.",
      "In addition to managing all aspects of visa documentation, Manoj also oversees air ticketing support when required, providing end-to-end travel solutions under one roof. His commitment to accuracy and customer satisfaction ensures that every journey starts off stress-free.",
      "Reliable, responsive, and highly organized, Manoj plays a crucial role in making the travel dreams of Green Sky Travels’ clients a reality."

    ]
  },
];

export const allTeamMembers = [...productSaleAndMarketingTeam, ...operationsAndLogisticsTeam].filter(
  (member, index, self) => index === self.findIndex((m) => m.slug === member.slug)
);

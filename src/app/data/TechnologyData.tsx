type ITechnologyData = {
  id: number;
  title: string;
  details: string[];
}[];

export const technologyData: ITechnologyData = [
  {
    id: 1,
    title: "Languages",
    details: [
      "JavaScript",
      "TypeScript",
      "Next.js",
      "React.js",
      "Node.js",
      "Jest",
      "jQuery",
      "HTML5",
      "CSS3",
      "Tailwind",
      "PHP, MySql",
    ],
  },
  {
    id: 2,
    title: "Development & Tools",
    details: [
      "UI/UX",
      "Component Dev",
      "Functional Programming",
      "API Integration",
      "Unit Testing",
      "A/B Testing",
      "CSS Styling",
      "SalesForce",
      "IBM Websphere",
      "WordPress",
      "Shopify",
      "Accessibility",
      "SEO",
      "Pixel Integration",
      "Docker",
      "Jenkins",
      "CI/CD",
      "Agile",
      "GitHub",
      "Jira",
    ],
  },
  {
    id: 3,
    title: "Graphic Design Tools",
    details: ["Figma", "Sketch", "Photoshop", "Illustrator"],
  },
];

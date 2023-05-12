const jobs = [
  {
    position: "Software Developer",
    company: "Admios",
    startDate: "2021",
    projects: [
      {
        name: "King Energy",
        tasks: [
          "Integrated existing system with the payment provider Blueswipe. Built with NestJS, using Prisma as an ORM and React for the frontend.",
          "Integration with VGS, which acts as a proxy and stores the sensitive information. Created UI to allow users to add their payment methods. Currently all credit card and ACH payments are handled using this.",
          "Created multiple endpoints to support user admin. Implemented a generic search class, which included filters and pagination, allowing easy and fast implementation of new endpoints.",
        ],
      },
      {
        name: "Admios Labs",
        tasks: [
          "Admios Labs exists to investigate, learn new technologies and create internal tools. I replicated the job aggregator from Firebrick in Node using Express.js with TypeScript.",
        ],
      },
      {
        name: "Firebrick",
        tasks: [
          "Created job aggregator API in C# which combined listings from multiple providers. It runs on Docker and it is deployed through Github Actions to AWS Elastic Beanstalk automatically.",
          "A Vue.js app was also built from scratch to manage the settings of said job aggregator API. This included configuring and creating Cypress tests for this UI.",
        ],
      },
    ],
  },
  {
    position: "Software Developer & Tech Lead",
    company: "C&S",
    startDate: "2019",
    endDate: "2020",
    tasks: [
      "Planned, improved and oversaw system architecture. Created prototypes for 5+ projects for the company's sales area. Most of them have a .NET Core REST API and React.",
      "Improved both frontend and backend architecture for Argenper's, a money transfer company. Contributed to its development both in C# and React. The app manages clients, money transfers, exchange rates, authorizations, limits, cashier, store and global balances.",
      "Analyzed bad performing queries done with ORM's and raw SQL and improved them. In some cases I had to use SQL Server Profiler to detect them or their problem.",
    ],
  },
  {
    position: "Software Developer",
    company: "C&S",
    startDate: "2016",
    endDate: "2019",
    projects: [
      {
        name: "Central Puerto",
        tasks: [
          'Developed "SAM", an ASP.NET environmental emission management web application. Defined the main entities and coded the backend with C# and Entity Framework; worked on the frontend with Razor.',
          "Developed functionalities to manage the energy production, payments, operation orders, and state of the machines. It was made using C#, NHibernate and WebForms with DevExpress.",
        ],
      },
      {
        name: "Argentina Federal Government",
        tasks: [
          'Made a huge modification to the "Firma" C# API which allowed the government to convert different files to PDF\'s, sign them and verify signatures. The API handled PDF files in memory and my task was to modify it so it handled them using mainly disk space.',
          "Used the IText library. Developed stress and concurrency tests using JMeter.",
          "Improved performance allowed it to handle 200k+ requests/day on the production server.",
        ],
      },
      {
        name: "Internally for C&S",
        tasks: [
          "Led the migration of company wide repositories from SVN to GIT. Every existing SVN repository was migrated successfully.",
          "Installed and configured from scratch a new Jenkins instance to manage CI/CD. Created a template for .NET projects, which included automatically downloading new Git commits from our Gitlab or DevOps, compilation, test execution and deployment.",
          "Configured a Linux server to deploy the company's WordPress site. This included installing and configuring MySQL, a new WordPress instance and Nginx.",
          "Configured and installed a Linux server to deploy a Rocket.Chat for the company's internal communication.",
        ],
      },
    ],
  },
];

export default jobs;

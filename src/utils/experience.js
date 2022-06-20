export const experience = [
  {
    company: "Checkfront",
    website: "https://www.checkfront.com",
    position: "Software Developer",
    dates: "January 2020 - current",
    years: yearsDiff("01-07-2020", "today"),
    tasks: [
      "Write clean, efficient and performant code tested both by unit and integration tests",
      "Worked with designers, product managers and devs to improve Checkfront's design system written using React and Storybook.",
      "Researched the availability algorithm that powers the app, mainly written in PHP",
      "Led meetings with senior stakeholders, collected feedback, and created documentation on why we should leverage Postgres to handle more of the logic of the algorithm",
      "Created a Recommendation Algorithm using PostgreSQL, Hasura and GraphQL that won an award in our yearly company hackathon",
      "Led Agile processes within a Scrum Master orientation, leading daily standup, grooming, and retros",
      "Mentored co-op students, helping them get their tickets across the board and be able to demo their work",
    ],
  },
  {
    company: "YYJ Tech Ladies",
    website: "http://yyjtechladies.com/",
    position: "Wordpress Developer",
    dates: "September 2020 - August 2021",
    years: yearsDiff("September 1, 2020", "August 1, 2021"),
    tasks: [
      "Communicated regularly with a project manager, designer and another senior developer to iterate on previous work and scope out new work for a YYJ Tech Ladies website",
      "Developed a custom theme and used Gutenberg blocks along with Advanced Custom fields to satisfy design and product requirements",
      "Tracked the progress of the project by creating tickets and using a kanban board shared with the members of the project in Trello",
      "Regularly met with YYJ Tech ladies administrators to share our progress",
    ],
  },
  {
    company: "University of Victoria",
    website: "https://www.uvic.ca",
    position: "Mathematics Researcher",
    dates: "September 2015 - December 2021",
    years: yearsDiff("09-01-2015", "12-01-2021"),
    tasks: [
      "Met weekly with my advisor to discuss thesis research work",
      "Attended conferences and gave research talks in Canada, U.S., England, Denmark and Brazil",
      "Led Multivariable Calculus tutorials",
      "Tutored students in the Tutorial Center in a wide range of math and stats courses",
      "Marked student coursework in mathematics courses ranging from logic to abstract algebra, to analysis.",
    ],
  },
  {
    company: "Western Washington University",
    website: "https://www.wwu.edu",
    position: "Mathematics Instructor",
    dates: "August 2010- June 2015",
    years: yearsDiff("08-26-2010", "06-20-2015"),
    tasks: [
      "Met weekly with my advisor to discuss thesis research work",
      "Attended conferences and gave research talks in Canada, U.S., England, Denmark and Brazil",
      "Led Multivariable Calculus tutorials",
      "Tutored students in the Tutorial Center in a wide range of math and stats courses",
      "Marked student coursework in mathematics courses ranging from logic to abstract algebra, to analysis.",
    ],
  },
  {
    company: "Center For Talented Youth",
    website: "https://www.wwu.edu",
    position: "Geometry Through Art Instructor",
    dates: "June 2015- July 2015",
    years: yearsDiff("06-15-2015", "07-20-2015"),
    tasks: [
      "Designed curriculum for the course for middle school students which included, two and three dimensional geometry projects, illusions, tessellations, and mathematical debate",
      "Provided course feedback and recommendation letters for each student",
    ],
  },
];

function yearsDiff(d1, d2) {
  const date1 = new Date(d1);
  const date2 = d2 === "today" ? new Date() : new Date(d2);
  const yearsDiff = date2.getFullYear() - date1.getFullYear();
  const months = date2.getMonth() - date1.getMonth();
  const totalMonths = yearsDiff * 12 + months;
  const years = Math.floor(totalMonths / 12);
  return { years: years, months: totalMonths % 12 };
}

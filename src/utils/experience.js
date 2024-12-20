export const experience = [
  {
    company: 'Marinelabs',
    website: 'https://marinelabs.io/',
    position: 'Software Developer',
    dates: 'March 2023 - August 2024',
    years: yearsDiff('March 20, 2023', 'August 12, 2024'),
    tasks: [
      'Sole full-time software engineer on hardware/firmware/software team',
      'Visualize forecast data with the use of our own real time data as well as third party API.',
      'Used machine learning resources to identify vessel wakes and display data in real time',
      'Combine three.js with sonar detection',
      'Research and build with new technologies with changing requests and project partnerships',
    ],
  },
  {
    company: 'Delving',
    website: 'https://www.delving.co',
    position: 'Software Developer',
    dates: 'September 2022 - March 2023',
    years: yearsDiff('September 7, 2022', 'March 1, 2023'),
    tasks: [
      'Part of a fast paced team focused on rapid experimentation, learning and data driven decision making.',
      'Everyday consisted with pair programming using the principles of test driven development.',
      'Worked on all of the parts of the app; from queues in GCP to styling our MUI components.',
      'Contributed to an algorithm to detect changes between Excel spreadsheets using local sensitive hashing, patience sort, and various distance metrics.',
      'Made it easy for Excel users to keep using the software they love by generating a styled change report using OpenPyXl.',
    ],
  },
  {
    company: 'Checkfront',
    website: 'https://www.checkfront.com',
    position: 'Software Developer',
    dates: 'January 2020 - August 2022',
    years: yearsDiff('January 7, 2020', 'July 25, 2022'),
    tasks: [
      'Write clean, efficient and performant code tested both by unit and integration tests',
      'Collaborated with designers, promoting our design system and helping market our brand.',
      'Led meetings with stakeholders and created documentation on our availability algorithm.',
      'Co-created an award winning Recommendation Algorithm using PostgreSQL and Hasura.',
      'Mentored co-op students, helping them get their tickets across the board and be ready to demo.',
    ],
  },
  {
    company: 'YYJ Tech Ladies',
    website: 'http://yyjtechladies.com/',
    position: 'Wordpress Developer',
    dates: 'September 2020 - August 2021',
    years: yearsDiff('September 1, 2020', 'August 1, 2021'),
    tasks: [
      'Communicated regularly with a project manager, designer and another senior developer to iterate on previous work and scope out new work for a YYJ Tech Ladies website',
      'Developed a custom theme and used Gutenberg blocks along with Advanced Custom fields to satisfy design and product requirements',
      'Tracked the progress of the project by creating tickets and using a kanban board shared with the members of the project in Trello',
      'Regularly met with YYJ Tech ladies administrators to share our progress',
    ],
  },
  {
    company: 'University of Victoria',
    website: 'https://www.uvic.ca',
    position: 'Mathematics Researcher',
    dates: 'September 2015 - December 2021',
    years: yearsDiff('09-01-2015', '12-01-2021'),
    tasks: [
      'Met weekly with my advisor to discuss thesis research work',
      'Attended conferences and gave research talks in Canada, U.S., England, Denmark and Brazil',
      'Led Multivariable Calculus tutorials',
      'Tutored students in the Tutorial Center in a wide range of math and stats courses',
      'Marked student coursework in mathematics courses ranging from logic to abstract algebra, to analysis.',
    ],
  },
  {
    company: 'Western Washington University',
    website: 'https://www.wwu.edu',
    position: 'Mathematics Instructor',
    dates: 'August 2010- June 2015',
    years: yearsDiff('08-26-2010', '06-20-2015'),
    tasks: [
      'Met weekly with my advisor to discuss thesis research work',
      'Attended conferences and gave research talks in Canada, U.S., England, Denmark and Brazil',
      'Led Multivariable Calculus tutorials',
      'Tutored students in the Tutorial Center in a wide range of math and stats courses',
      'Marked student coursework in mathematics courses ranging from logic to abstract algebra, to analysis.',
    ],
  },
  {
    company: 'Center For Talented Youth',
    website: 'https://www.wwu.edu',
    position: 'Geometry Through Art Instructor',
    dates: 'June 2015- July 2015',
    years: yearsDiff('06-15-2015', '07-20-2015'),
    tasks: [
      'Designed curriculum for the course for middle school students which included, two and three dimensional geometry projects, illusions, tessellations, and mathematical debate',
      'Provided course feedback and recommendation letters for each student',
    ],
  },
];

function yearsDiff(d1, d2) {
  const date1 = new Date(d1);
  const date2 = d2 === 'today' ? new Date() : new Date(d2);
  const yearsDiff = date2.getFullYear() - date1.getFullYear();
  const months = date2.getMonth() - date1.getMonth();
  const totalMonths = yearsDiff * 12 + months;
  const years = Math.floor(totalMonths / 12);
  return { years: years, months: totalMonths % 12 };
}

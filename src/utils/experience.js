export const experience = [
  {
    company: "Checkfront",
    website: "https://www.checkfront.com",
    position: "Software Developer",
    dates: "January 2020- current",
    years: yearsDiff("01-07-2020", "today"),
  },
  {
    company: "YYJ Tech Ladies",
    website: "https://www.wwu.edu",
    position: "Mathematics Instructor",
    dates: "August 2010- June 2015",
    years: yearsDiff("08-26-2010", "06-20-2015"),
  },
  {
    company: "University of Victoria",
    website: "https://www.wwu.edu",
    position: "Mathematics Instructor",
    dates: "August 2010- June 2015",
    years: yearsDiff("08-26-2010", "06-20-2015"),
  },
  {
    company: "Western Washington University",
    website: "https://www.wwu.edu",
    position: "Mathematics Instructor",
    dates: "August 2010- June 2015",
    years: yearsDiff("08-26-2010", "06-20-2015"),
  },
  {
    company: "Center For Talented Youth",
    website: "https://www.wwu.edu",
    position: "Mathematics Instructor",
    dates: "August 2010- June 2015",
    years: yearsDiff("08-26-2010", "06-20-2015"),
  },
];

function yearsDiff(d1, d2) {
  let date1 = new Date(d1);
  let date2 = new Date(d2);
  let yearsDiff = date2.getFullYear() - date1.getFullYear();
  return yearsDiff;
}

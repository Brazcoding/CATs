const companies= [
  {name: "company one", category: "finance", start: 1981, end: 2003},
  {name: "company two", category: "retail", start: 1992, end: 2008},
  {name: "company three", category: "auto", start: 1999, end: 2007},
  {name: "company four", category: "retail", start: 1989, end: 2010},
  {name: "company five", category: "technology", start: 2009, end: 2014},
  {name: "company six", category: "finance", start: 1987, end: 2010},
  {name: "company seven", category: "auto", start: 1986, end: 1996},
  {name: "company eight", category: "technology", start: 2011, end: 2016},
  {name: "company nine", category: "retail", start: 1981, end: 1989},
  {name: "company ten", category: "finance", start: 1990, end: 2021},
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

for(let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

// forEach

companies.forEach(function(company) {
  console.log(company.name)
});

//filter

let can

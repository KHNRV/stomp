const scoring = { 0: "no", 1: "maybe", 2: "yes" };

export const compCol = [
  { title: "Bib #", field: "bib" },
  { title: "First Name", field: "first_name" },
  { title: "Last Name", field: "last_name" },
  { title: "Judge 1", field: "judge1", lookup: scoring }, //hidden: true
  { title: "Judge 2", field: "judge2", lookup: scoring },
  { title: "Judge 3", field: "judge3", lookup: scoring },
  { title: "Judge 4", field: "judge4", lookup: scoring },
  { title: "Judge 5", field: "judge5", lookup: scoring },
];

export const compData = [
  {
    bib: 101,
    first_name: "Dora",
    last_name: "Dewing",
    judge1: 2,
    judge2: 2,
    judge3: 1,
    judge4: 2,
    judge5: 0,
  },
  {
    bib: 102,
    first_name: "Sophie",
    last_name: "Minocchi",
    judge1: 0,
    judge2: 0,
    judge3: 1,
    judge4: 0,
    judge5: 2,
  },
  {
    bib: 103,
    first_name: "Willette",
    last_name: "Romagosa",
    judge1: 2,
    judge2: 0,
    judge3: 0,
    judge4: 2,
    judge5: 2,
  },
  {
    bib: 104,
    first_name: "Camey",
    last_name: "Darree",
    judge1: 0,
    judge2: 0,
    judge3: 1,
    judge4: 2,
    judge5: 2,
  },
  {
    bib: 105,
    first_name: "Dennet",
    last_name: "Reidshaw",
    judge1: 2,
    judge2: 2,
    judge3: 1,
    judge4: 1,
    judge5: 2,
  },
];

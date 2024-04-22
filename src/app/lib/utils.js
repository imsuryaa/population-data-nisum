export const countryCode = (value) =>
  value == "United States" ? "US" : "Others";

export const numberWithCommas = (value) =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "code", label: "Country\u00a0Code", minWidth: 100 },
    { id: "year", label: "Year", minWidth: 100 },
    {
      id: "population",
      label: "Population",
      minWidth: 170,
    },
];
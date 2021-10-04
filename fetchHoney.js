const API_URL = "https://restcountries.com/v3/all";

const fetchData = async () => {
  const api = await fetch(API_URL)
  .then((response) => response.json())
  .then((area) => {
      var HONEY = api.area;
      for(let i=0 ; i<HONEY.length ; i++) {

        console.log(HONEY[i], 'area');
      }
  })
  console.log(api);
};

fetchData();

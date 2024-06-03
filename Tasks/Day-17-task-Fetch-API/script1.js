function rest(){var res = fetch("https://restcountries.com/v3.1/all")
res.then((data) => {
  return data.json()
}).then((data1) => data1).catch((error) => console.log(error));

}
rest();
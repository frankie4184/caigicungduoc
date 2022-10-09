import { useState } from "react";

import Search from "./Search";
import Filter from "./Filter";
import CountryList from "./CountryList";
import { render } from "react-dom";

export default function Main() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const changeInput = (event) => {
    setSearch(event.target.value);
  };

  const changeFilter = (f) => {
    setFilter(f);
  };

  const countries = [
    {
      name: "United States of America",
      population: "323,947,000",
      region: "america",
      capital: "Washington, D.C.",
      currency: "US dollar",
      languages: ["English"],
      borderCountries: ["Canada", "Mexico"],
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
    },
    {
      name: "Ukraine",
      population: "44,130,000",
      region: "europe",
      capital: "Kyiv",
      currency: "Ukrainian hryvnia",
      languages: ["Ukrainian"],
      borderCountries: ["Russia", "Belarus", "Poland"],
      imgSrc:
        "https://cdn.britannica.com/14/4814-004-7C0DF1BB/Flag-Ukraine.jpg",
    },
    {
      name: "Canada",
      population: "38,010,000",
      region: "america",
      capital: "Ottawa",
      currency: "Canadian dollar",
      languages: ["English", "French"],
      borderCountries: ["United States of America"],
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png",
    },
    {
      name: "Belarus",
      population: "9,399,000",
      region: "europe",
      capital: "Minsk",
      currency: "Belarusian ruble",
      languages: ["Belarusian", "Russian"],
      borderCountries: ["Latvia", "Poland", "Ukraine"],
      imgSrc:
        "https://flagcolor.com/wp-content/uploads/2019/02/belarus_flag_PANTONE.png",
    },
    {
      name: "Vietnam",
      population: "97,340,000",
      region: "asia",
      capital: "Ha Noi",
      currency: "vietnam dong",
      languages: ["Vietnamese"],
      borderCountries: ["Cambodia", "Laos", "China"],
      imgSrc:
        "https://cdn.britannica.com/41/4041-004-D051B135/Flag-Vietnam.jpg",
    },
    {
      name: "Japan",
      population: "125,800,000",
      region: "asia",
      capital: "Tokyo",
      currency: "yen",
      languages: ["Japanese"],
      borderCountries: [],
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png",
    },
    {
      name: "Kenya",
      population: "53,770,000",
      region: "africa",
      capital: "Nairobi",
      currency: "Kenyan shilling",
      languages: ["Swahili", "English"],
      borderCountries: ["South Sudan", "Ethiopia", "Somalia"],
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg",
    },
    {
      name: "Australia",
      population: "25,690,000",
      region: "oceania",
      capital: "Canberra",
      currency: "Australian dollar",
      languages: ["English"],
      borderCountries: [],
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
    },
  ];

  const filteredCountries = countries
    .filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((country) => {
      if (filter === "all") {
        return true;
      }
      return country.region.toLowerCase() === filter;
    });

  console.log(search);
  console.log(filter);
  console.log(filteredCountries);
  return (
    <>
      <main className="flex-1 bg-gray-light p-8 dark:bg-blue-bg-very-dark">
        <div className="flex flex-col items-start gap-10 md:flex-row md:justify-between">
          <Search changeInput={changeInput} />
          <Filter changeFilter={changeFilter} filter={filter} />
        </div>
        <CountryList countrylist={filteredCountries} />
      </main>
    </>
  );
}

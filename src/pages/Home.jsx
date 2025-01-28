import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

export default function Home() {
  const [countries, setCountries] = useState({
    error: false,
    loading: false,
    data: [],
  });

  const [everyCountry, setEveryCountry] = useState([]);
  const [region, setRegion] = useState(null);
  const [countryName, setCountryName] = useState(null);

  function handleError() {
    setCountries({
      error: true,
      loading: false,
      data: [],
    });
  }

  function handleLoading() {
    setCountries({
      error: false,
      loading: true,
      data: [],
    });
  }

  async function fetchAllCountry() {
    handleLoading();
    try {
      const response = await fetch(
        `${
          region
            ? `https://restcountries.com/v3.1/region/${region}`
            : "https://restcountries.com/v3.1/all"
        }`
      );
      if (!response.ok) {
        throw new Error(`An error has occurred : ${response.status}`);
      }
      const result = await response.json();
      setCountries({
        error: false,
        loading: false,
        data: result,
      });
    } catch (error) {
      console.log(error.message);
      handleError();
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchSearchedCountry();
  }

  async function fetchSearchedCountry() {
    handleLoading();
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      if (!res.ok) {
        throw new Error(`An error has occurred : ${res.status} `);
      }
      const result = await res.json();
      setCountries({
        error: false,
        loading: false,
        data: result,
      });
    } catch (error) {
      console.log(error.message);
      handleError();
    }
  }

  let tab = [];

  async function getEveryCountry() {
    for (let country of countries.data) {
      tab.push(country.name.common);
    }
    setEveryCountry(tab);
  }

  console.log(everyCountry);

  useEffect(() => {
    getEveryCountry();
  }, []);

  useEffect(() => {
    fetchAllCountry();
  }, [region]);

  return (
    <main className=" flex flex-col dark:text-white">
      <div className=" flex flex-wrap justify-center gap-5 md:justify-between md:gap-0">
        <form
          onSubmit={handleSubmit}
          className=" flex flex-row border border-gray-50 px-5 py-2 text-xl font-semibold text-gray-900 shadow rounded-[5px] gap-4 dark:border-transparent dark:bg-[#2b3743]"
        >
          <Search
            className=" self-center"
            size={25}
            color="gray"
            strokeWidth={2.5}
          />
          <input
            list="country"
            value={countryName}
            onChange={(event) => setCountryName(event.target.value)}
            className=" self-center outline-none dark:bg-transparent dark:text-white"
            type="text"
            placeholder="Search for a country..."
          />
          <datalist id="country">
            {everyCountry.map((country, index) => (
              <option key={index}>{country}</option>
            ))}
          </datalist>
        </form>

        <select
          onChange={(e) => setRegion(e.target.value)}
          className=" cursor-pointer font-semibold outline-none border border-gray-100 shadow px-5 py-2 dark:border-transparent dark:bg-[#2b3743]"
        >
          <option value="">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      {countries.error === true ? (
        <p className=" mt-[60px] h-[15rem] text-2xl text-center font-bold text-red-800">
          Something went wrong
        </p>
      ) : countries.loading === true ? (
        <Loading />
      ) : (
        <div className=" mt-10 flex flex-wrap justify-center gap-10">
          {countries.data &&
            countries.data.map((country) => (
              <Link
                className=" hover:translate-y-[-10px] duration-300"
                key={nanoid(10)}
                to={`/country/${country.name.common}`}
              >
                <div className="flex flex-col">
                  <img
                    className="w-[15rem] h-[10rem] border border-gray-200 border-b-transparent rounded-tl-[5px] rounded-tr-[5px] object-cover dark:border-gray-800"
                    src={country.flags.png}
                    alt={`${country.name.common} flag`}
                  />
                  <div className="shadow bg-white flex flex-col gap-1 p-5 dark:bg-[#2b3743]">
                    <h1 className="font-bold w-[150px]">
                      {country.name.common}
                    </h1>
                    <p className="pt-5">
                      <span className=" font-semibold">Population</span>:{" "}
                      {country.population.toLocaleString()}
                    </p>
                    <p>
                      <span className=" font-semibold">Region</span>:{" "}
                      {country.region}
                    </p>
                    <p className=" w-[10rem]">
                      <span className=" font-semibold">Capital</span>:{" "}
                      {country.capital}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      )}
    </main>
  );
}

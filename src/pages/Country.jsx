import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import Loading from "../components/Loading";

export default function Country() {
  const { countryId } = useParams();
  const [details, setDetails] = useState({
    error: false,
    loading: false,
    data: null,
  });

  async function fetchCountryDetails() {
    setDetails({ error: false, loading: true, data: null });
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${countryId}`
      );
      if (!res.ok) throw new Error(`An error has occurred: ${res.status}`);
      const result = await res.json();
      setDetails({ error: false, loading: false, data: result[0] });
    } catch (error) {
      console.log(error.message);
      setDetails({ error: true, loading: false, data: null });
    }
  }

  useEffect(() => {
    fetchCountryDetails();
  }, [countryId]);

  return (
    <main className="flex flex-col gap-10 dark:text-white">
      <Link
        to="/"
        className="border border-gray-300 w-[120px] shadow rounded-[5px] cursor-pointer px-5 py-2 flex flex-row justify-center items-center gap-3 dark:border-transparent dark:border-slate-700"
      >
        <MoveLeft strokeWidth={2.7} className="self-center" color="#9ca3af" />
        <p className=" text-gray-400 font-bold">Back</p>
      </Link>

      {details.error ? (
        <p className="mt-[60px] bg-[#c1c1c1f2] h-[15rem] text-2xl text-center font-bold text-red-800">
          Something went wrong
        </p>
      ) : details.loading ? (
        <Loading />
      ) : details.data ? (
        <div className="flex flex-wrap gap-10">
          <img
            className="object-cover border border-gray-300 w-auto md:w-[25rem] h-[20rem] dark:border-transparent"
            src={details.data.flags?.png || ""}
            alt={details.data.name?.common || "Country Flag"}
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold">{details.data.name?.common}</h1>
            <div className=" flex flex-col gap-5">
              <div className="flex flex-wrap gap-10 md:gap-[60px]">
                <div className="flex flex-col gap-4">
                  <p>
                    <span className=" font-bold">Native Name:</span>{" "}
                    {Object.values(details.data.name.nativeName)[0].official}
                  </p>
                  <p>
                    <span className=" font-bold">Population: </span>
                    {details.data.population?.toLocaleString() || "N/A"}
                  </p>
                  <p>
                    <span className=" font-bold">Region: </span>
                    {details.data.region || "N/A"}
                  </p>
                  <p>
                    <span className=" font-bold">Sub Region: </span>
                    {details.data.subregion || "N/A"}
                  </p>
                  <p>
                    <span className=" font-bold">Capital: </span>
                    {details.data.capital?.join(", ") || "N/A"}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <p>
                    <span className=" font-bold">Top Level Domain: </span>
                    {details.data.tld?.join(", ") || "N/A"}
                  </p>
                  <p>
                    <span className=" font-bold">Currencies: </span>
                    {details.data.currencies
                      ? Object.values(details.data.currencies)
                          .map((currency) => currency.name)
                          .join(", ")
                      : "N/A"}
                  </p>
                  <p className=" leading-5 md:w-[25rem]">
                    <span className=" font-bold">Languages: </span>
                    {details.data.languages
                      ? Object.values(details.data.languages).join(", ")
                      : "N/A"}
                  </p>
                </div>
              </div>

              <div className=" mt-4 flex flex-wrap gap-2 ">
                <span className=" self-center font-bold">
                  Border Countries:
                </span>
                
                {details.data.borders ? (
                  details.data.borders.map((element, index) => (
                    <span
                      className=" border border-gray-300 shadow rounded-[5px] px-5 py-1"
                      key={index}
                    >
                      {element}
                    </span>
                  ))
                ) : (
                  <p>No Border Countries</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}

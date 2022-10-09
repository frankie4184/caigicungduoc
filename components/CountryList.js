import CountryCard from "./CountryCard";

export default function CountryList(props) {
  return (
    <div className=" mx-10 mt-16 grid gap-16 md:grid-cols-2 xl:mx-0 xl:grid-cols-4">
      {props.countrylist.length > 0 ? (
        props.countrylist.map((c) => (
          <CountryCard
            key={c.name}
            name={c.name}
            population={c.population}
            region={c.region}
            capital={c.capital}
            img={{
              source: c.imgSrc,
              alt: `flag - ${c.name}`,
            }}
          />
        ))
      ) : (
        <p>Country not found</p>
      )}
    </div>
  );
}

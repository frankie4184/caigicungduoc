export default function CountryCard(props) {
  return (
    <div className=" overflow-hidden rounded-lg bg-white shadow-lg dark:bg-blue-dark dark:text-white">
      <img
        className="aspect-video"
        src={props.img.source}
        alt={props.img.alt}
      />
      <div className="space-y-6 px-10 py-12 xl:px-6 xl:py-6">
        <h1 className="text-3xl font-bold xl:text-base">{props.name}</h1>
        <ul className="space-y-2 text-xl xl:text-sm">
          <li>
            <span className="font-semibold">Population: </span>
            {props.population}
          </li>
          <li className="capitalize">
            <span className="font-semibold">Region: </span> {props.region}
          </li>
          <li>
            <span className="font-semibold">Capital: </span> {props.capital}
          </li>
        </ul>
      </div>
    </div>
  );
}

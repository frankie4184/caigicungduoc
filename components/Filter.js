import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Filter(props) {
  const [open, setOpen] = useState(false);
  console.log(open);

  const handleClick = (filter) => {
    props.changeFilter(filter);
    setOpen(false);
  };
  const buttons = ["all", "africa", "america", "asia", "europe", "oceania"];

  return (
    <div className=" relative inline-flex flex-col space-y-1 ">
      <button
        className="dark:bg-blue-dark dark:text-white inline-flex items-center gap-12 rounded-lg bg-white px-8 py-4 shadow-lg"
        onClick={() => setOpen(!open)}
      >
        Filter by Region
        <Icon icon="akar-icons:chevron-down" />
      </button>
      {/* {open ? (
        <div className="absolute top-full left-0 right-0 inline-flex flex-col items-start gap-2 rounded-lg bg-white px-6 py-4 shadow-lg dark:bg-blue-dark dark:text-white">
          <button onClick={() => {props.changeFilter("all")}>All</button
          setOpen(false)>}
          <button onClick={() => {props.changeFilter("africa")}>Africa<
          setOpen(false)/}button>
          <button onClick={() => {props.changeFilter("america")}>America<
          setOpen(false)/}button>
          <button onClick={() => {props.changeFilter("asia")}>Asia</button
          setOpen(false)>}
          <button onClick={() => {props.changeFilter("europe")}>Europe<
          setOpen(false)/}button>
          <button onClick={() => {props.changeFilter("oceania")}>Oceania<
          setOpen(false)/}button>
        </div>
      ) : null} */}

      <div
        className={`dark:bg-blue-dark dark:text-white absolute top-full left-0 right-0 inline-flex flex-col items-start gap-2 rounded-lg bg-white py-1 shadow-lg transition duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      >
        {buttons.map((text) => (
          <button
            key={text}
            className={`${
              props.filter === text ? "bg-gray-200" : ""
            } w-full px-6 py-1 text-left capitalize transition duration-200`}
            onClick={() => handleClick(text)}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}

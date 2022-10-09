import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Search(props) {
  return (
    <div className="flex w-full items-center rounded-lg bg-white px-6 py-4 text-gray-dark shadow-lg  dark:bg-blue-dark dark:text-white md:w-[300px] xl:w-[400px]">
      <Icon className="text-lg " icon="ant-design:search-outlined" />
      <input
        className="w-full bg-transparent px-6 focus:outline-none dark:placeholder:text-white "
        type="search"
        placeholder="Search for a country..."
        onChange={props.changeInput}
      />
    </div>
  );
}

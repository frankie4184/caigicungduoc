import { Icon } from "@iconify/react";

export default function Navbar(props) {
  return (
    <nav className="flex justify-between bg-white px-6 py-10 drop-shadow-xl dark:bg-blue-dark ">
      <div className="font-bold text-blue-very-dark dark:text-white">
        Where in the world?
      </div>
      <div className="flex items-center gap-2 font-medium text-blue-very-dark dark:text-white">
        <Icon className="dark:hidden " icon="bi:moon" />
        <Icon className="hidden dark:block" icon="bi:moon-fill" />
        <button className="tracking-wider" onClick={props.dmm}>
          Dark Mode
        </button>
      </div>
    </nav>
  );
}

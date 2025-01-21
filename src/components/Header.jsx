import {Moon}from "lucide-react";

export default function Header() {
  return (
    <header className=" flex flex-wrap justify-center gap-5 border border-transparent shadow py-5 px-[10%] md:justify-between md:gap-0">
      <h1 className=" text-2xl font-bold self-center">Where in the world ?</h1>
      <button className=" font-semibold self-center flex justify-center gap-2 items-center">
        <Moon size={30} strokeWidth={1.2} />
        <p>Dark Mode</p>
      </button>
    </header>
  );
}

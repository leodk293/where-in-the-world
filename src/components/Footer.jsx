import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" flex flex-col border-t border-t-gray-200 shadow items-center py-7 gap-5 mt-[100px] dark:bg-[#2b3743] dark:border-t-transparent dark:text-white">
      {/* <span className=' h-[1px] bg-gray-900 w-auto rounded-[5px] md:w-[70rem]'/> */}
      <nav className=" flex flex-wrap gap-4 text-xl font-semibold justify-start">
        <a
          className="border border-transparent rounded-[50%] bg-black p-3"
          href=""
        >
          <Facebook size={32} color="#ffff" strokeWidth={1.25} />
        </a>
        <a
          className="border border-transparent rounded-[50%] bg-black p-3"
          href=""
        >
          <Twitter size={32} color="#ffff" strokeWidth={1.25} />
        </a>
        <a
          className="border border-transparent rounded-[50%] bg-black p-3"
          href=""
        >
          <Linkedin size={32} color="#ffff" strokeWidth={1.25} />
        </a>
      </nav>
      <p className=" font-semibold text-2xl">Contact</p>
    </footer>
  );
}

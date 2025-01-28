import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" flex flex-col border-t border-t-gray-200 shadow items-center py-7 gap-5 mt-[100px] dark:bg-[#2b3743] dark:border-t-transparent dark:text-white">
      <nav className=" flex flex-wrap gap-4 text-xl font-semibold justify-start">
        <a
          target="_blank"
          className="border border-transparent rounded-[50%] bg-black p-3"
          href="https://web.facebook.com/profile.php?id=100092315485742"
        >
          <Facebook size={32} color="#ffff" strokeWidth={1.25} />
        </a>
        <a
          target="_blank"
          className="border border-transparent rounded-[50%] bg-black p-3"
          href="https://x.com/Aboubac48530295"
        >
          <Twitter size={32} color="#ffff" strokeWidth={1.25} />
        </a>
        <a
          target="_blank"
          className="border border-transparent rounded-[50%] bg-black p-3"
          href="https://www.linkedin.com/in/aboubacar-traore-495736252/"
        >
          <Linkedin size={32} color="#ffff" strokeWidth={1.25} />
        </a>
      </nav>
      <p className=" font-semibold text-2xl">Contact</p>
    </footer>
  );
}

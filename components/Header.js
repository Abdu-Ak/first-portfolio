import Link from "next/link";
import Socials from "../components/Socials";
import Image from "next/image";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={'/'}  className="pt-[85px]">
            <Image
              src={"/text.png"}
          
              width={440}
              height={96}
              alt="logo"
              priority={true}
            />
          </Link>
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;

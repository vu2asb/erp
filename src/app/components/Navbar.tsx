import Image from "next/image";
import Logo from "../../../public/assets/Logo.svg";
import User from "../../../public/assets/User.svg";
import Menu from "../../../public/assets/Menu.svg";
import Sun from "../../../public/assets/Sun.svg";
// Using local assets; good source of svg icons is https://www.svgrepo.com/
import Moon from "../../../public/assets/Moon.svg";
// Using React Icons from https://react-icons.github.io/react-icons/
import { BiUser } from "react-icons/bi";



const navLinks = [
{name: 'Services'},
{name: 'Produts'},
{name: 'About'},
];

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" />
        <div className="hidden lg:flex pl-[74px] gap-[56px]">
        {navLinks.map((item, index) => (
            <p className="text-[#36485C] font-medium" key={index}>{item.name}</p>
        ))}
        </div>
      </div>
      <div className="flex gap-x-5">
        <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]">Open an account</p>
        <div className="flex items-center gap-x-2">
          <Image src={User} alt="User Profile" />
          <span className="hidden font-medium text-[#36485C] lg:block">Sign in</span> 
        </div>
        <div className="flex w-full item-center">
          <Image src={Sun} alt="Sun" />
          <Image src={Moon} alt="Moon" />
          <BiUser />
        </div>
        <div>
          <Image src={Menu} alt="Menu" className="lg:hidden"/>
        </div>
      </div>
    </nav>
  );
}

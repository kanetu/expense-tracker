import Link from "next/link";
import Image from "next/image";
import HomeIcon from "../icons/homeIcon";
import LogoutIcon from "../icons/logoutIcon";
import ProfileIcon from "../icons/profileIcon";

const SideNav = () => {
  const items = [
    {
      name: "Home",
      link: "/home",
      renderIcon: () => (
        <HomeIcon width="20px" height="20px" className="mr-4" />
      ),
    },
    {
      name: "Profile",
      link: "/profile",
      renderIcon: () => (
        <ProfileIcon width="20px" height="20px" className="mr-4" />
      ),
    },
  ];
  return (
    <div className="p-4 flex h-full flex-col relative">
      <div className="flex items-center flex-col relative">
        <Link href={"/"}>
          <Image
            className="dark:invert"
            src="/logo.webp"
            alt="Next.js logo"
            width={180}
            height={80}
            priority
          />
        </Link>
        <span className="absolute bottom-[20px] uppercase font-bold">
          Expenses tracker
        </span>
      </div>
      <div>
        <ul className="mt-8 &> [&>li]:mt-4">
          {items.map((item) => (
            <li key={item.name} className="flex ">
              {item.renderIcon()}
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute bottom-0 left-0 p-4 flex">
        <LogoutIcon width="20px" height="20px" className="mr-4" />
        <button>Logout</button>
      </div>
    </div>
  );
};

export default SideNav;

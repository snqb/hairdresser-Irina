import { Bell } from "lucide-react";
import Image from "next/image";
import Profile from "../../../../../public/assets/profile.jpg";
import MenuDropdown from "../menu/Menu";
import Link from "next/link";
import ModalWindow from "@/ui/modal/ModalWindow";
import AvatarProfile from "@/ui/avatar/AvatarProfile";

const Header = () => {
  return (
    <nav className="bg-[#E2E2E2] shadow-md p-2 flex items-center justify-between">
      <AvatarProfile />

      <div className="flex gap-x-6">
        <Link href="/admin/orders">
          <Bell className="mt-[9px]" />
        </Link>

        <ModalWindow />

        <MenuDropdown className="mt-[9px]" />
      </div>
    </nav>
  );
};

export default Header;

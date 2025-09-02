import NavItem from "./NavItem";
import { Home, BookOpen, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function MobileMenu() {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <NavItem to="/" label="Home" icon={Home} className="w-full" />
      <NavItem to="/forum" label="Forum" icon={BookOpen} className="w-full" />
      <NavItem to="/profile" label="Profile" icon={User} className="w-full" />

      <Separator className="my-2" />

      {/* Extra actions like logout */}
      <NavItem to="/logout" label="Logout" />
    </div>
  );
}

import { Home, User, FolderGit2, Award, LucideIcon } from "lucide-react";

export interface NavItemType {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const NAV_ITEMS: NavItemType[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "About Me", href: "/about", icon: User },
  { label: "Projects", href: "/projects", icon: FolderGit2 },
  { label: "Sertifikat", href: "/sertifikat", icon: Award },
];
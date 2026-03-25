import { Users2 } from "lucide-react"
import { HomeIcon, User2, Settings, Shield } from "lucide-react"

export const menuConfig = [
  {
    label: "Dashboard",
    path: "/",
    icon: HomeIcon,
  },
  {
    label: "Assurés",
    path: "/insureds",
    icon: User2,
  },
  {
    label: "Groupements",
    path: "/groups",
    icon: Users2,
  },
  {
    label: "Contrats",
    path: "/contracts",
    icon: Shield,
  },

  {
    label: "Sinistres",
    path: "/sinistres",
    icon: Shield,
  },
]
import { Menu } from "lucide-react"
import { assets } from "../assets/assets"
import { useCurrentuser } from "../features/auth/hooks/useCurrentUser"

const Header = () => {
   const {currentUser} = useCurrentuser();

  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6 sticky top-0 z-30">
      
      {/* Left */}
      <div className="flex items-center gap-4">
     

        <div className="flex items-center gap-2 mb-2">
          <img src={assets.logo_axa} alt="AXA" className="h-10" />
          <div className="w-px h-10 bg-gray-700" />
          <img src={assets.logo_cnaas} alt="CNAAS" className="h-10" />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">{currentUser?.firstName} {currentUser?.lastName}</span>

        <img
          src="https://i.pravatar.cc/40"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  )
}

export default Header
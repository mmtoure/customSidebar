import { Menu } from "lucide-react"

const Header = ({ setIsOpen }) => {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6 sticky top-0 z-30">
      
      {/* Left */}
      <div className="flex items-center gap-4">
     

        <h1 className="font-semibold text-lg">Dashboard</h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Moustapha</span>

        <img
          src="https://i.pravatar.cc/40"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  )
}

export default Header
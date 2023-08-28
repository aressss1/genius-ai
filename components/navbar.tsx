import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { UserButton } from "@clerk/nextjs"

import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <div className="flex items-center p-4" >
        <Button variant="ghost" size="icon" className="md:hidden"  >
            <HamburgerMenuIcon />
        </Button>
        <div className="flex w-full justify-end" >
            <UserButton afterSignOutUrl="/" />
        </div>
    </div>
  )
}

export default Navbar

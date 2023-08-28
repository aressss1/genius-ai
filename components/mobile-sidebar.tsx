'use client'

import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import Sidebar from "./sidebar"
import { useEffect, useState } from "react"


const MobileSidebar = () => {
    const [isMounted , setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    } , [])

    if(!isMounted){
        return null
    }

    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <Button variant="ghost" size="icon" className="md:hidden"  >
                        <HamburgerMenuIcon />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <Sidebar />
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileSidebar

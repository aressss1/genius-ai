'use client'

import { cn } from "@/lib/utils"


import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import FreeCounter from "./free-counter"
import { routes } from "@/constant"
import { Badge } from "./ui/badge"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"]
})

interface SidebarProps {
    apiLimitCount: number;
    isPro: boolean
}

const Sidebar = ({
    apiLimitCount = 0,
    isPro = false
}: SidebarProps) => {
    const pathname = usePathname()


    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white " >
            <div className="px-3 py-2 flex-1" >
                <Link href="/dashboard" className="flex items-center pl-3 mb-14" >
                    <div className="relative w-8 h-8 mr-2" >
                        <Image
                            fill
                            alt="Logo"
                            src="/logo.png"
                        />
                    </div>
                    <h1 className={cn("text-2xl font-bold flex ",
                        montserrat.className
                    )} >
                        Genius AI
                        {isPro && (
                            <Badge variant="premium" className="uppercase text-sm py-1" >
                                Pro
                            </Badge>
                        )}
                    </h1>
                </Link>
                <div className="space-y-1" >
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400")}
                        >
                            <div className="flex items-center flex-1 ">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <FreeCounter isPro={isPro} apiLimitCount={apiLimitCount} />
        </div>
    )
}

export default Sidebar

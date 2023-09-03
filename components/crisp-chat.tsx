'use client'

import { Crisp } from "crisp-sdk-web"
import { useEffect } from "react"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("e015e738-e607-4199-b1d1-613eda1b0d12")
    } , [])


    return null
}
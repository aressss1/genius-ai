"use client"

import { LightningBoltIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast";

interface SubscriptionButtonProps {
    isPro: boolean
}

const SubscriptionButton = ({ isPro = false } : SubscriptionButtonProps) => {
    const [loading , setLoading] = useState(false)

    const onClick = async () => {
        try {
            setLoading(true)
            const response = await axios.get("/api/stripe")

            window.location.href = response.data.url
        } catch (error) {
            toast.error('Something went wrong')
        } finally {
            setLoading(false)
        }
    }

  return (
    <Button 
        variant={isPro ? "default" : "premium"} 
        disabled={loading}
        onClick={onClick}
    >
        {isPro ? "Manage Subscription" : 'Upgrade'}
        {!isPro && <LightningBoltIcon className="w-4 h-4 ml-2 fill-white" /> }
    </Button>
  )
}

export default SubscriptionButton

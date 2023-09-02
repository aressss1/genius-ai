import Heading from "@/components/heading"
import SubscriptionButton from "@/components/subscription-button"
import { checkSubscription } from "@/lib/subscription"
import { GearIcon } from "@radix-ui/react-icons"


const SettingsPage = async () => {
    const isPro = await checkSubscription()

  return (
    <div>
        <Heading 
            title="Settings"
            description="Manage account settings"
            icon={GearIcon}
            iconColor="text-gray-700"
            bgColor="bg-gray-700/10"
        />
        <div className="px-4 lg:px-8 space-y-4" >
            <div className="text-muted-foreground text-sm " >
                {isPro ? "You are currently on a Pro Plan" : "You are currently on a Free Plan"}
            </div>
            <SubscriptionButton isPro={isPro} />
        </div>
    </div>
  )
}

export default SettingsPage

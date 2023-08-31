import { ChatBubbleIcon, CodeIcon, ImageIcon, PlayIcon, VideoIcon } from "@radix-ui/react-icons"

export const MAX_FREE_COUNTS = 5 ;

export const tools = [
    {
      label: 'Conversation',
      icon: ChatBubbleIcon,
      href: '/conversation',
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
    },
    {
      label: 'Music Generation',
      icon: PlayIcon,
      href: '/music',
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      label: 'Image Generation',
      icon: ImageIcon,
      color: "text-pink-700",
      bgColor: "bg-pink-700/10",
      href: '/image',
    },
    {
      label: 'Video Generation',
      icon: VideoIcon,
      color: "text-orange-700",
      bgColor: "bg-orange-700/10",
      href: '/video',
    },
    {
      label: 'Code Generation',
      icon: CodeIcon,
      color: "text-green-700",
      bgColor: "bg-green-700/10",
      href: '/code',
    },
  ];
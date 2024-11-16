import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="text-3xl font-bold">
      Welcome to wechat, where you chat with anyone and have fun.
      <UserButton />
      <ModeToggle />
    </div>
  )
}

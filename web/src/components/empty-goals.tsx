import { Plus } from 'lucide-react'

import logo from '../assets/logo-in-orbit.svg'
import lestStart from '../assets/lets-start-illustration.svg'
import { DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'

export function EmptyGoals() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8">
      <img src={logo} alt="" />
      <img src={lestStart} alt="" />
      <p className="max-w-80 text-center leading-relaxed text-zinc-300">
        You have not registered any goal yet, how about registering one right
        now?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          New goal
        </Button>
      </DialogTrigger>
    </div>
  )
}

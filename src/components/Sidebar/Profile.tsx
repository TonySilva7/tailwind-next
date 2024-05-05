import { LogOut } from 'lucide-react'
import { Button } from '../Button'

function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/TonySilva7.png"
        alt="imagem perfil do usuário"
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Tony Silva
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          tony@mail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="text-zinc-500" />
      </Button>
    </div>
  )
}

export { Profile }

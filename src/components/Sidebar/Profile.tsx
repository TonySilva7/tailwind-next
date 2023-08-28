import { LogOut } from 'lucide-react'

function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/TonySilva7.png"
        alt="imagem perfil do usuário"
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Tony Silva</span>
        <span className="truncate text-sm text-zinc-500">tony@mail.com</span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut />
      </button>
    </div>
  )
}

export { Profile }

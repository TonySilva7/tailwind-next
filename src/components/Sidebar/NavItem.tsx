import { ChevronDown, LucideIcon } from 'lucide-react'

type NavItemProps = {
  title: string
  icon: LucideIcon
}

function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 dark:hover:bg-zinc-800 dark:group-hover:text-violet-300"
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500 dark:text-zinc-100">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-400 dark:text-zinc-600" />
    </a>
  )
}

export { NavItem, type NavItemProps }

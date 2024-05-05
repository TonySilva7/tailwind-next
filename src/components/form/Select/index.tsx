'use client'
import * as SelectRadix from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'

type SelectProps = SelectRadix.SelectProps & {
  children: React.ReactNode
  placeholder: string
}

function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <SelectRadix.Root {...props}>
      <SelectRadix.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-50 data-[placeholder]:text-zinc-400">
        <SelectRadix.Value placeholder={placeholder} className="text-black" />
        <SelectRadix.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectRadix.Icon>
      </SelectRadix.Trigger>

      <SelectRadix.Portal>
        <SelectRadix.Content
          side="bottom"
          sideOffset={5}
          position="popper"
          className="animate-slideDownAndFade z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm"
        >
          <SelectRadix.Viewport>{children}</SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  )
}

export { Select, type SelectProps }

'use client'
import { ComponentProps } from 'react'
import * as SelectRadix from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'

type SelectProps = ComponentProps<'div'>

function Select({ title = 'Select :)' }: SelectProps) {
  return (
    <SelectRadix.Root>
      <SelectRadix.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-400">
        <SelectRadix.Value
          placeholder="Select a country..."
          className="text-black"
        />
        <SelectRadix.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectRadix.Icon>
      </SelectRadix.Trigger>

      <SelectRadix.Portal>
        <SelectRadix.Content
          side="bottom"
          sideOffset={5}
          position="popper"
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white"
        >
          <SelectRadix.Viewport>
            <SelectRadix.Item
              value="br"
              className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
            >
              <SelectRadix.ItemText className="text-black">
                Brasil
              </SelectRadix.ItemText>
              <SelectRadix.ItemIndicator>
                <Check className="text-violet-6500 h-4 w-4" />
              </SelectRadix.ItemIndicator>
            </SelectRadix.Item>
            <SelectRadix.Item
              value="us"
              className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
            >
              <SelectRadix.ItemText className="text-black">
                United States
              </SelectRadix.ItemText>
              <SelectRadix.ItemIndicator>
                <Check className="text-violet-6500 h-4 w-4" />
              </SelectRadix.ItemIndicator>
            </SelectRadix.Item>
          </SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  )
}

export { Select, type SelectProps }

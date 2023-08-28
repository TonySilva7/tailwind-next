'use client'
import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

type SelectItemProps = Select.SelectItemProps & {
  text: string
}

function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <Select.Item
      className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
      {...props}
    >
      <Select.ItemText className="text-black">{text}</Select.ItemText>
      <Select.ItemIndicator>
        <Check className="text-violet-6500 h-4 w-4" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}

export { SelectItem, type SelectItemProps }

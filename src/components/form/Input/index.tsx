import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type PrefixProps = ComponentProps<'div'>

function Prefix({ ...rest }: PrefixProps) {
  return <div {...rest} />
}

type ControlProps = ComponentProps<'input'>

function Control({ ...rest }: ControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:text-zinc-100 dark:placeholder-zinc-400"
      {...rest}
    />
  )
}

type RootProps = ComponentProps<'div'>

function Root({ ...rest }: RootProps) {
  return (
    <div
      className={twMerge(
        'flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm',
        'focus-within:border-violet-400 focus-within:ring-4 focus-within:ring-violet-50',
        'dark:focus-within:ring-violet-500/2 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500',
        rest.className,
      )}
      {...rest}
    />
  )
}

export const Input = {
  Prefix,
  Control,
  Root,
}

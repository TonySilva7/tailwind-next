import { ComponentProps } from 'react'

type PrefixProps = ComponentProps<'div'>

function Prefix({ ...rest }: PrefixProps) {
  return <div {...rest} />
}

type ControlProps = ComponentProps<'input'>

function Control({ ...rest }: ControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...rest}
    />
  )
}

type RootProps = ComponentProps<'div'>

function Root({ ...rest }: RootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...rest}
    />
  )
}

export const Input = {
  Prefix,
  Control,
  Root,
}

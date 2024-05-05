import { ComponentProps } from 'react'

type TextAreaProps = ComponentProps<'textarea'>

function TextArea({ ...props }: TextAreaProps) {
  return (
    <textarea
      cols={30}
      rows={5}
      className="min-h-[100px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 text-zinc-900 placeholder-zinc-600 shadow-sm outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-50"
      {...props}
    />
  )
}

export { TextArea, type TextAreaProps }

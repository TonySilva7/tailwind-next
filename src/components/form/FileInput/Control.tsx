'use client'
import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

type ControlProps = ComponentProps<'input'>

function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFilesSelected } = useFileInput()
  const handleFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return
    const files = Array.from(event.target.files)
    onFilesSelected(files, multiple)
  }

  return (
    <input
      type="file"
      id={id}
      multiple={multiple}
      onChange={handleFileSelected}
      className="sr-only"
      {...props}
    />
  )
}

export { Control, type ControlProps }

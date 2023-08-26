type ButtonProps = {
  title?: string
}

function Button({ title = 'Button :)' }: ButtonProps) {
  return (
    <div>
      <h1> Hello {title}</h1>
    </div>
  )
}

export { Button, type ButtonProps }


export default function Home() {
  return (
    <div className='p-8 bg-slate-900 text-slate-100 h-screen'>
      <h1 className='font-bold text-5xl flex items-center gap-3 before:w-0.5 before:h-8 before:bg-sky-500 before:flex'>Bem Vindo</h1>
      <h2 className=''> Login</h2>
      <p className=''>Texto 03</p>
      <button disabled className='font-medium p-1 bg-sky-500 rounded-md px-4 py-1 mt-4 enable:hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed'>
        Entrar
      </button>
    </div>
  )
}

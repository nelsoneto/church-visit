import React from 'react'

const cadastro = () => {
  return (
    <div>
        <form>
            <label className="block">
                <span>Nome:</span>
                <input type="text" className="className='mt-4 block w-96 lg:w-80 md:w-60 xs:w-32 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400'   " />
            </label>
            <label className="block">
                <span>Sobrenome:</span>
                <input type="text" className="className='mt-4 block w-96 lg:w-80 md:w-60 xs:w-32 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400'   " />
            </label>
            <label className="block">
                <span>Telefone:</span>
                <input type="number" className="className='mt-4 mb-6 block w-96 lg:w-80 md:w-60 xs:w-32 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400'   " />
            </label>
                <input type="submit" className="className='mt-8 block w-96 lg:w-80 md:w-60 xs:w-32 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400'   " />
        </form>
    </div>
  )
}

export default cadastro
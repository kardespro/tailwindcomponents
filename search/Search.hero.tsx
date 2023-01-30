import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <div className="pb-16">
      <h1 className="text-blue-900  font-bold text-xl">Google</h1>
      <p className="text-xs font-sm pr-4 ">My Honey Amazing</p>
    
    </div>
      <div className="grid grid-cols-3 gap-2">
    <div className="pl-4 pt-2 w-80">
      <input 
        type="text"
        name="search"
        className="rounded-md shadow-md shadow-gray-300 bg-gray-10 border-2 border-gray-300 w-full py-3 pl-2 hover:border-amber-600 hover:border-2 hover:text-amber-600"
        placeholder="🔍 My honey amazing"
        />
      </div>
    <div className="rounded-md bg--300 text-center pt-6 pl-52 pr-4">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

    </div>
     </div>
    </div>
  )
}

export default Home

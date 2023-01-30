export default function SearchBar(){
  return(
    <>
     <div className="grid grid-cols-3 gap-2">
    <div className="pl-4 pt-2 w-80">
      <input 
        type="text"
        name="search"
        className="rounded-md shadow-md shadow-gray-300 bg-gray-10 border-2 border-gray-300 w-full py-3 pl-2 hover:border-amber-600 hover:border-2 hover:text-amber-600"
        placeholder="🔍 Marka , Ürün veya kategori ara"
        />
      </div>
    <div className="rounded-md bg--300 text-center pt-6 pl-52 pr-4">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-900">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
</svg>

    </div>
     </div>
    </>
  )
}

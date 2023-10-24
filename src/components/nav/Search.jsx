import { AiOutlineSearch } from "react-icons/ai"

function Search({searchToggle}) {
  return (
    <div className={`${searchToggle? 'mx-0 ' : 'mx-5 border rounded-md'} flex-grow theme-border-color  relative overflow-hidden`}>
          <input
            placeholder="Wish..."
            className={`py-2 w-full px-4  bg-neutral-200 outline-none placeholder:text-gray-500`}
            type="text"
          />
          <div
            className={` ${searchToggle  ?'h-full' : ''} absolute  top-0 bottom-0 flex items-center right-0 overflow-hidden py-2 px-3  theme-bg-color text-white`}
          >
            <AiOutlineSearch size={22} />
          </div>
        </div>
  )
}

export default Search
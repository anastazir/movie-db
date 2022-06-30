import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { useRef } from 'react';
import Thumbnail from './Thumbnail';

const Row = ({title, recLists, loading}: any) => {
    const rowRef = useRef<HTMLDivElement>(null)
    
    const handleClick = (direction: string) =>{

        if (rowRef.current){
            const {scrollLeft, clientWidth} = rowRef.current
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
            console.log("scrollTo", scrollTo);
            rowRef.current.scrollTo({left: scrollTo, behavior: "smooth"})
        }
    }

    if(loading) {
        return <div>Loading...</div>
    }
    return (
    <section className="md:space-y-24">
      <div className=" h-100 space-y-0.5 md:space-y-2">
        <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">{title}</h2>
            <div className="group relative ">
                <ChevronLeftIcon  className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" onClick={()=>handleClick("left")}/>
                <div ref={rowRef} className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2 -z-10">
                {recLists  && recLists.map((movie:any, index:number) => {
                      return (
                        <Thumbnail key={index} movie={movie}/>
                      )
                },)}
                </div>
                <ChevronRightIcon className="absolute top-0 bottom-0 m-auto h-9 w-9 right-2 opacity-0 cursor-pointer transition hover:scale-125 
                group-hover:opacity-100" onClick={()=>handleClick("right")} />
            </div>
      </div>
    </section>
    )
}

export default Row
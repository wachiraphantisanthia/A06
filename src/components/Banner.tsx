'use client'
import Image from "next/image";
import {useState} from "react"

export default function Banner() {
  const covers = ["/banner.png","/banner2.png","/banner3.png"]
  const [index,setIndex] = useState(0)
  return (
    <div className="relative w-full h-[450px] overflow-hidden" onClick={()=> setIndex((prev)=> prev + 1)}>
      <Image
        key={index}
        src={covers[index % covers.length]}
        alt="covers"
        fill
        className="object-cover"
        priority
         unoptimized
      />

      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl z-10 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-8xl font-bold drop-shadow-xl">
          where every event finds its venue
        </h1>

        <p className="mt-6 text-2xl drop-shadow-md">
          Finding the perfect venue has never been easier. Whether it's a wedding,
          corporate event, or private party, we connecting people to the perfect place.
        </p>
      </div>
    </div>
  );
}
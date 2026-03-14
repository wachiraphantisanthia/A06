import Link from "next/link"
import Image from "next/image"

export default function TopMenu() {
  return (
    <div className="w-full h-[120px] bg-white fixed top-0 left-0 flex items-center justify-end px-16 shadow-md z-50">

      <div className="flex items-center gap-10">

        {/* BOOKING BUTTON */}
        <Link href="/booking">
          <div className="bg-blue-600 hover:bg-blue-700 text-white text-4xl font-bold px-50 py-7 rounded-full shadow-2xl cursor-pointer transition">
            BOOKING
          </div>
        </Link>

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="VenueVista Logo"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </Link>

      </div>

    </div>
  )
}
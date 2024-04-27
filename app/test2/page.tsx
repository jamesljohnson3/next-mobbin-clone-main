"use client"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden w-64 border-r bg-gray-100/40 dark:bg-gray-800/40 lg:block">
        <div className="flex h-full max-h-screen overflow-auto flex-col gap-4 p-4">
          <div className="flex h-[60px] items-center border-b px-4">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <MusicIcon className="h-6 w-6" />
              <span>Melodic</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto">
            <nav className="grid gap-2">
              <Link
                className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <LibraryIcon className="h-4 w-4" />
                Library
              </Link>
              <Link
                className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <ListMusicIcon className="h-4 w-4" />
                Playlists
              </Link>
              <div className="grid gap-2">
                <p className="px-3 text-sm font-medium text-gray-500 dark:text-gray-400">Categories</p>
                <Link
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  Pop
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  Rock
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  Hip-Hop
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  Electronic
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  Country
                </Link>
              </div>
              <div className="grid gap-2">
                <p className="px-3 text-sm font-medium text-gray-500 dark:text-gray-400">Genres</p>
                <Link
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  Indie
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  Metal
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  R&B
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  Classical
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  Jazz
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center justify-between px-4 lg:px-6 border-b border-gray-200 dark:border-gray-800">
          <Link className="flex items-center gap-2" href="#">
            <MusicIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Melodic</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="relative w-full max-w-md">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="w-full rounded-md bg-gray-100 px-8 py-2 text-sm shadow-none focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-950"
                placeholder="Search for artists, albums, and playlists"
                type="search"
              />
            </div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuLink asChild>
                  <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href="#"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href="#"
                  >
                    Library
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href="#"
                  >
                    Playlists
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </header>
        <main className="flex-1 overflow-auto">
          <section className="py-8 px-4 lg:px-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight">Albums</h2>
              <p className="text-gray-500 dark:text-gray-400">Discover the latest and greatest albums.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              <div className="group relative">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View album</span>
                </Link>
                <img
                  alt="Album cover"
                  className="aspect-square rounded-lg object-cover group-hover:opacity-50 transition-opacity"
                  height={200}
                  src="/placeholder.svg"
                  width={200}
                />
                <div className="mt-2">
                  <h3 className="text-sm font-semibold tracking-tight line-clamp-1">Melodic Bliss</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">Various Artists</p>
                </div>
              </div>
              <div className="group relative">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View album</span>
                </Link>
                <img
                  alt="Album cover"
                  className="aspect-square rounded-lg object-cover group-hover:opacity-50 transition-opacity"
                  height={200}
                  src="/placeholder.svg"
                  width={200}
                />
                <div className="mt-2">
                  <h3 className="text-sm font-semibold tracking-tight line-clamp-1">Rhythmic Fusion</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">Various Artists</p>
                </div>
              </div>
              <div className="group relative">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View album</span>
                </Link>
                <img
                  alt="Album cover"
                  className="aspect-square rounded-lg object-cover group-hover:opacity-50 transition-opacity"
                  height={200}
                  src="/placeholder.svg"
                  width={200}
                />
                <div className="mt-2">
                  <h3 className="text-sm font-semibold tracking-tight line-clamp-1">Ethereal Harmonies</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">Various Artists</p>
                </div>
              </div>
              <div className="group relative">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View album</span>
                </Link>
                <img
                  alt="Album cover"
                  className="aspect-square rounded-lg object-cover group-hover:opacity-50 transition-opacity"
                  height={200}
                  src="/placeholder.svg"
                  width={200}
                />
                <div className="mt-2">
                  <h3 className="text-sm font-semibold tracking-tight line-clamp-1">Sonic Odyssey</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">Various Artists</p>
                </div>
              </div>
              <div className="group relative">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View album</span>
                </Link>
                <img
                  alt="Album cover"
                  className="aspect-square rounded-lg object-cover group-hover:opacity-50 transition-opacity"
                  height={200}
                  src="/placeholder.svg"
                  width={200}
                />
                <div className="mt-2">
                  <h3 className="text-sm font-semibold tracking-tight line-clamp-1">Euphonic Resonance</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">Various Artists</p>
                </div>
              </div>
            </div>
          </section>
          <section className="py-8 px-4 lg:px-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight">Artists</h2>
              <p className="text-gray-500 dark:text-gray-400">Explore the latest and greatest artists.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              <div className="group relative">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View artist</span>
                </Link>
                <img
                  alt="Artist profile"
                  className="aspect-square rounded-full object-cover group-hover:opacity-50 transition-opacity"
                  height={200}
                  src="/placeholder.svg"
                  width={200}
                />
                <div className="mt-2">
                  <h3 className="text-sm font-semibold tracking-tight line-clamp-1">Melodic Maestro</h3>
                </div>
              </div>
              <div className="group relative">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View artist</span>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LibraryIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 6 4 14" />
      <path d="M12 6v14" />
      <path d="M8 8v12" />
      <path d="M4 4v16" />
    </svg>
  )
}


function ListMusicIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15V6" />
      <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      <path d="M12 12H3" />
      <path d="M16 6H3" />
      <path d="M12 18H3" />
    </svg>
  )
}


function MusicIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
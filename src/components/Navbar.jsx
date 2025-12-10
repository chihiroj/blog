"use client"

import cms from "@/lib/cms"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { LuSearch } from "react-icons/lu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Navbar() {
  const [query, setQuery] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const [results, setResults] = useState([])

  const navBarRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (navBarRef.current && !navBarRef.current.contains(e.target)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = async () => {
    const cmsResult = await cms.search(query)
    setResults(cmsResult)
    setShowDropdown(true)
  }

  return (
    <div className="flex w-full justify-center border-b bg-white">
      <nav
        ref={navBarRef}
        className="flex w-full max-w-[1200px] items-center justify-between px-4 py-5"
      >
        <span className="text-2xl font-bold">Blog</span>

        <div className="relative flex items-center">

          <Button onClick={() => cms.login()} variant="ghost">Login</Button>

          <Input
            placeholder="Search..."
            value={query}
            className="rounded-r-none"
            onChange={(e) => {
              setQuery(e.target.value)
              if (e.target.value === "") setShowDropdown(false)
            }}
            onFocus={() => query.length > 0 && setShowDropdown(true)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />

          <Button
            size="icon"
            variant="default"
            onClick={handleSearch}
            className="rounded-l-none"
          >
            <LuSearch className="h-4 w-4" />
          </Button>

          {showDropdown && results.length > 0 && (
            <div
              className="absolute left-0 top-full z-50 mt-2 w-full overflow-hidden rounded-md border border-gray-200 bg-white shadow-md"
            >
              {results.map((r) => (
                <Link
                  key={r.id}
                  href={`/articles/${r.id}`}
                  className="block border-b border-gray-100 px-3 py-2 text-sm hover:bg-gray-100"
                >
                  {r.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

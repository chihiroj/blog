"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function ArticleView({ article }) {
  const router = useRouter()

  return (
    <div
      className="flex flex-col break-words"
    >
      <div className="relative h-[350px] w-full">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute bottom-0 left-0 w-full bg-black/60 px-8 py-6 text-white">
          <h1 className="text-xl font-bold md:text-2xl">{article.title}</h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">

        <div className="mb-6">
          <Button variant="ghost" onClick={() => router.back()}>
            ← Go back
          </Button>
        </div>

        <div className="mb-8 flex items-center gap-4 text-sm">
          <span className="font-medium">{article.author}</span>
          <span className="text-muted-foreground">{article.date}</span>
        </div>

        <p
          className="mb-10 text-lg leading-relaxed text-muted-foreground whitespace-pre-line break-words"
        >
          {article.description}
        </p>
      </div>
    </div>
  )
}

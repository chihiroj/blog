"use client"

import ArticleCard from "./ArticleCard"

export default function ArticleList({ items }) {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-[1200px] flex-col px-4 my-10">
        <h2 className="mb-4 text-2xl font-bold">All articles</h2>

        <div className="mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

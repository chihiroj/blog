"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ArticleCard({ article }) {
  return (
    <Card className="max-w-[300px] overflow-hidden shadow-sm pt-0 gap-2">
      <div className="h-[200px] w-full overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover"
        />
      </div>

      <CardContent className="space-y-3 pt-4 pl-4 pr-4">
        <Badge variant="destructive" className="w-fit">
          {article.category}
        </Badge>

        <h3 className="text-lg font-bold">{article.title}</h3>

        <p className="line-clamp-2 text-sm text-muted-foreground">
          {article.description}
        </p>

        <div className="flex justify-end">
          <Button asChild variant="ghost" size="sm">
            <Link href={`/articles/${article.slug}`}>Read more</Link>
          </Button>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t pt-3">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={article.avatar} alt={article.author} />
            <AvatarFallback>
              {article.author?.[0] ?? "?"}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm">{article.author}</span>
        </div>

        <span className="text-sm text-muted-foreground">{article.date}</span>
      </CardFooter>
    </Card>
  )
}

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NewsArticle } from "@/types";
import { news } from "@/data/mockData";

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <Badge variant="outline">{article.category}</Badge>
        <span className="text-sm text-gray-500">{article.date}</span>
      </div>
      <h3 className="text-lg font-semibold text-[#1E293B] mb-3">
        {article.title}
      </h3>
      <p className="text-gray-600 mb-4">{article.summary}</p>
      <Button variant="outline" className="w-full">
        Читать полностью
      </Button>
    </CardContent>
  </Card>
);

export const NewsSection: React.FC = () => {
  return (
    <section id="news" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-4 font-['Inter']">
            Новости
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-['Source_Sans_Pro']">
            Последние новости и достижения нашего института
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

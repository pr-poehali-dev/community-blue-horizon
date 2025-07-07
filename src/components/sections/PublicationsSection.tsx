import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { Publication } from "@/types";
import { publications } from "@/data/mockData";

interface PublicationCardProps {
  publication: Publication;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardContent className="p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-[#1E293B] mb-2">
            {publication.title}
          </h3>
          <p className="text-gray-600 mb-2">{publication.authors}</p>
          <p className="text-sm text-gray-500 mb-4">
            {publication.journal} • {publication.year}
          </p>
          <div className="flex items-center space-x-4">
            <Badge variant="outline">{publication.category}</Badge>
            <div className="flex items-center space-x-1">
              <Icon name="Quote" size={16} className="text-gray-400" />
              <span className="text-sm text-gray-500">
                {publication.citations} цитирований
              </span>
            </div>
          </div>
        </div>
        <Button variant="outline" size="sm">
          <Icon name="ExternalLink" className="mr-2" size={16} />
          Читать
        </Button>
      </div>
    </CardContent>
  </Card>
);

export const PublicationsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-4 font-['Inter']">
            Публикации
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-['Source_Sans_Pro']">
            Последние научные работы и исследования
          </p>
        </div>
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="relative">
              <Icon
                name="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                placeholder="Поиск публикаций..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full md:w-96"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                <SelectItem value="physics">Физика</SelectItem>
                <SelectItem value="medicine">Медицина</SelectItem>
                <SelectItem value="energy">Энергетика</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-6">
          {publications.map((publication) => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
        </div>
      </div>
    </section>
  );
};

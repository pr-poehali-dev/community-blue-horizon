import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Event } from "@/types";
import { events } from "@/data/mockData";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <Badge variant="secondary">{event.type}</Badge>
        <span className="text-sm text-gray-500">{event.date}</span>
      </div>
      <h3 className="text-lg font-semibold text-[#1E293B] mb-2">
        {event.title}
      </h3>
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2">
          <Icon name="MapPin" size={16} className="text-gray-400" />
          <span className="text-sm text-gray-600">{event.location}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Users" size={16} className="text-gray-400" />
          <span className="text-sm text-gray-600">{event.speakers}</span>
        </div>
      </div>
      <Button className="w-full bg-[#2563EB] hover:bg-[#1E293B]">
        Зарегистрироваться
      </Button>
    </CardContent>
  </Card>
);

export const EventsSection: React.FC = () => {
  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-4 font-['Inter']">
            Предстоящие события
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-['Source_Sans_Pro']">
            Конференции, семинары и другие научные мероприятия
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

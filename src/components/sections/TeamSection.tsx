import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TeamMember } from "@/types";
import { team } from "@/data/mockData";

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardContent className="p-6 text-center">
      <Avatar className="w-20 h-20 mx-auto mb-4">
        <AvatarImage src="/img/4ca698e6-4242-40aa-8409-73353d0c0df8.jpg" />
        <AvatarFallback className="bg-[#2563EB] text-white text-lg">
          {member.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <h3 className="text-xl font-semibold text-[#1E293B] mb-2">
        {member.name}
      </h3>
      <p className="text-gray-600 mb-2">{member.position}</p>
      <p className="text-sm text-gray-500 mb-4">{member.specialization}</p>
      <div className="flex justify-center space-x-4 text-sm">
        <div className="text-center">
          <div className="font-semibold text-[#2563EB]">
            {member.publications}
          </div>
          <div className="text-gray-500">Публикаций</div>
        </div>
        <div className="text-center">
          <div className="font-semibold text-[#2563EB]">{member.hIndex}</div>
          <div className="text-gray-500">H-индекс</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-4 font-['Inter']">
            Наша команда
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-['Source_Sans_Pro']">
            Ведущие ученые и исследователи, работающие на переднем крае науки
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

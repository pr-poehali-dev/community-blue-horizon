import React from "react";

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
  <div>
    <div className="text-4xl font-bold text-[#2563EB] mb-2">{value}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

export const StatsSection: React.FC = () => {
  const stats = [
    { value: "150+", label: "Исследователей" },
    { value: "500+", label: "Публикаций" },
    { value: "25", label: "Активных проектов" },
    { value: "12", label: "Направлений" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

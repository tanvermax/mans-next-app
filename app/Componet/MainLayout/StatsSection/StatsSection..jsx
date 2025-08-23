"use client";

import { Briefcase, Globe, Star, Coffee } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    icon: <Coffee className="w-8 h-8" />,
    number: 2020,
    suffix: '',
    label: 'Foundation Year',
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    number: 25000,
    suffix: '+',
    label: 'Production capacity',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    number: 50,
    suffix: '+',
    label: 'Employees',
  },
  {
    icon: <Star className="w-8 h-8" />,
    number: 1500,
    suffix: '+',
    label: 'Project Complete',
  },
];

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className="bg-[#10182B] text-white py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            {stat.icon}
            <div className="lg:text-2xl font-bold">
              {inView ? (
                <CountUp end={stat.number} duration={3} suffix={stat.suffix} />
              ) : (
                `0${stat.suffix}`
              )}
            </div>
            <div className="md:text-base text-[10px] tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;

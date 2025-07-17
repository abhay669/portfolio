'use client'

import React from "react";
import { motion } from "framer-motion";

interface ImpactCardProps {
  title: string;
  subtitle: string;
  value: string;
  description: string;
}

const ImpactCard: React.FC<ImpactCardProps> = ({
  title,
  subtitle,
  value,
  description,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-8 border-l border-black h-80 divide-y divide-gray-200
       flex flex-col"
    >
      <div className="flex flex-col h-full justify-between ">
        <div className="space-y-6">
          <h3 className="text-xl font-medium ">{title}</h3>
          <p className="text-gray-500 text-sm ">{subtitle}</p>
        </div>

        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-6xl md:text-7xl font-normal "
        >
          {value}
        </motion.div>

        <div className="">
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Impact = () => {
  const impactData = [
    {
      title: "Growth",
      subtitle: "Revenue Growth",
      value: "x5",
      description:
        "Our Clients revenue grew fivefold after partnering with Us and Our team to redesign their brand identity.",
    },
    {
      title: "Views",
      subtitle: "Views Growth",
      value: "10M+",
      description:
        "After partnering with us to create Content to Showcase thier brand identity, and they get what they want moare then 10 million views on thier page.",
    },
    {
      title: "Success Rate",
      subtitle: "Success Rate increase",
      value: "+36%",
      description:
        "After rebuling our clients Brand identity, the new design led to record-breaking stats, including a 36% increase in Success rate",
    },
    {
      title: "Leads",
      subtitle: "Marketing Growth",
      value: "499+",
      description:
        "One of Our Client Got 499+ Leads in One Month, solidifying its position as the leader in Office Container Manufacturer.",
    },
    {
      title: "Clients",
      subtitle: "Average rating from our clients",
      value: "4.7/5",
      description:
        "Client satisfaction is central to our culture. Their feedback helps us grow, which is why we always invite them to share their experiences.",
    },
    {
      title: "Exprience",
      subtitle: "Exprience in This Field",
      value: "1.5+",
      description:
        "The agency had Exprience in Digital Marketing Over 1.5 years.",
    },
  ];

  return (
    <div className="2xl:w-4/5 md:mx-auto md:px-16 px-6 py-16 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 space-y-2"
      >
        <h2 className="text-4xl font-bold
         text-gray-900 mb-4">Our Impact</h2>
        <p className="text-[#7b7b7b] text-lg">
          Our process is designed to deliver exceptional results and ensure a
          seamless experience from start to finish.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {impactData.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <ImpactCard {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Impact;

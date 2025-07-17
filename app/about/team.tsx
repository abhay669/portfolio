"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";



interface StatItemProps {
  label: string;
  value: string;
}

interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  website?: string;
}

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  description: string;
  social: SocialLinks;
  index: number;
}

const StatItem: React.FC<StatItemProps> = ({ label, value }) => (
  <div
    className="flex flex-col items-center border-b md:border-b-0 
    md:border-l border-gray-200 px-4 py-6 first:border-l-0 
    flex-1 text-center"
  >
    <h3 className="text-[#7b7b7b] text-base mb-4">{label}</h3>
    <span className="text-4xl md:text-5xl lg:text-6xl font-light">{value}</span>
  </div>
);

const TeamMember: React.FC<TeamMemberProps> = ({
  image,
  name,
  role,
  description,
  // social, // Remove social prop usage
}) => (
  <motion.div className="flex flex-col h-full">
    <div className="relative overflow-hidden group ">
      <motion.div transition={{ duration: 0.4 }} className="h-full">
        <Image
          height={10000}
          width={10000}
          src={image}
          alt={name}
          className="object-cover 
            h-[300px] 
            w-full "
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black bg-opacity-20"
      />
    </div>
    <div className="pt-6 space-y-3 flex-1">
      <h3 className="font-medium text-xl">{name}</h3>
      <p className="text-gray-600 font-medium">{role}</p>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      {/* Social links removed */}
    </div>
  </motion.div>
);

const stats: StatItemProps[] = [
  { label: "Team Size", value: "9" },
  { label: "Research", value: "1" },
  { label: "Marketer", value: "2" },
  { label: "Designers", value: "3" },
  { label: "Devlopers", value: "1" },
  { label: "Founders", value: "2" },
];

const teamMembers: Omit<TeamMemberProps, "index">[] = [
  {
    name: "Shyam Navdiya",
    role: " Founder",
    image: "/team/shyam.jpg",
    description: "I like to do Editing",
    social: {
     
    },
  },
  {
    name: "Nikhil Nakrani",
    role: " CEO ",
    image: "/team/nikhil.jpg",
    description: "",
    social: {
  
    },
  },
  {
    name: "Trith Kalathiya",
    role: " Marketing Head",
    image: "/team/trith.jpg",
    description: " ",
    social: {
      
    },
  },
  {
    name: "Abhay Thummar",
    role: " It Expert",
    image: "/team/ABHAY.png",
    description: " ",
    social: {
      
    },
  },
  {
    name: "Maitry Hihoriya",
    role: " Marketing Specialist",
    image: "/team/Maitry.png",
    description: " ",
    social: {
     
    },
  },
  {
    name: "Piyu Kalathiya",
    role: " Graphic Designer",
    image: "/team/piyu.jpg",
    description: " ",
    social: {
    
    },
  },
  {
    name: "Khushi Meheta",
    role: "Graphic Designer",
    image: "/team/Khushi.png",
    description: "",
    social: {
      
    },
  },
  {
    name: "Meet Charakhawala",
    role: "Graphic Designer",
    image: "/team/Meet.png",
    description: "",
    social: {
    
    },
  },
  {
    name: "Mahek Charakhawala",
    role: "Resercher",
    image: "/team/Mahek.png",
    description: "",
    social: {
      
    },
  },
];

const Team = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-6">
            /Team
          </p>
          <p
            className="text-[#7b7b7b]
           max-w-3xl text-lg"
          >
            Our team consists of dedicated professionals with diverse expertise
            in healthcare, technology, and innovation. Together, we work to
            create meaningful impact through cutting-edge solutions.
          </p>
        </motion.div>

        <div className="flex flex-col
         md:flex-row flex-wrap md:flex-nowrap 
         justify-between w-full mb-20">
          {stats.map((stat, index) => (
            <StatItem key={index} label={stat.label} 
            value={stat.value} />
          ))}
        </div>

        <div className="grid grid-cols-1
         md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} index={index} />
          ))}
        </div>


      </div>
    </div>
  );
};

export default Team;

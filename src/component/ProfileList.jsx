import React, { useState } from "react";

import abc from '/abc.jpg';
import aa from '/aa.png';
import aaa from '/aaa.png';
import bb from '/bb.png';
import bbb from '/bbb.png';
import bcd from '/bcd.jpg';
import cc from '/cc.png';
import ccc from '/ccc.png';
import cde from '/cde.jpg';
import dd from '/dd.png';
import ddd from '/ddd.png';
import def from '/def.jpg';
import ee from '/ee.png';
import eee from '/eee.png';
import efg from '/efg.jpg';
import f from '/f.jpg';
import ff from '/ff.png';
import fff from '/fff.png';
import gg from '/gg.png';
import ggg from '/ggg.png';
import h from '/h.jpg';

function ProfileList() {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "John Doe",
      bio: "Software Engineer",
      followers: 1000,
      fee: "50/hour", // added fee property in dollars per hour
      imageUrl: abc
    },
    {
      id: 2,
      name: "Jane Smith",
      bio: "UX Designer",
      followers: 500,
      fee: "110 per hour",
 
      imageUrl: aa 
    },
    {
      id: 3,
      name: "Bob Johnson",
      bio: "Data Analyst",
      followers: 2500,
    fee: "110 per hour",
      imageUrl: aaa
    },
    {
      id: 4,
      name: "Alice Lee",
      bio: "Graphic Designer",
      followers: 1500,
      fee: "50/hour",
      imageUrl: bb
    },
    {
      id: 5,
      name: "David Kim",
      bio: "Front-end Developer",
      followers: 2000,
      fee: "50/hour",
      imageUrl: bbb
    },
    
       {
          id: 6,
          name: "John Doe",
          bio: "Software Engineer",
          followers: 1000,
          fee: "50/hour",
          imageUrl: bcd
        },
        {
          id: 7,
          name: "Jane Smith",
          bio: "UX Designer",
          followers: 500,
          fee: "50/hour",
          imageUrl: cc
        },
        {
          id: 8,
          name: "Bob Johnson",
          bio: "Data Analyst",
          followers: 2500,
          fee: "50/hour",
          imageUrl: ccc
        },
        {
          id: 9,
          name: "Alice Lee",
          bio: "Graphic Designer",
          followers: 1500,
          fee: "50/hour",
          imageUrl: cde
        },
        {
          id: 10,
          name: "David Kim",
          bio: "Front-end Developer",
          followers: 2000,
          fee: "50/hour",
          imageUrl: dd
        },
        {
          id: 11,
          name: "Maria Rodriguez",
          bio: "Software Developer",
          followers: 800,
          fee: "50/hour",
          imageUrl: ddd
        },
        {
          id: 12,
          name: "James Brown",
          bio: "UI Designer",
          followers: 1200,
          fee: "50/hour",
          imageUrl: def
        },
        {
          id: 13,
          name: "Linda Green",
          bio: "Full-stack Developer",
          followers: 1800,
          fee: "50/hour",
          imageUrl: ee
        },
        {
          id: 14,
          name: "Robert Wilson",
          bio: "Web Designer",
          followers: 600,
          fee: "50/hour",
          imageUrl: eee
        },
        {
          id: 15,
          name: "Sarah Brown",
          bio: "Product Manager",
          followers: 900,
          fee: "50/hour",
          imageUrl: efg
        },
        {
          id: 16,
          name: "Tom Jackson",
          bio: "Data Scientist",
          followers: 3000,
          fee: "50/hour",
          imageUrl:f
        },
        {
          id: 17,
          name: "Karen Chen",
          bio: "UX Researcher",
          followers: 700,
          fee: "50/hour",
          imageUrl: ff
        },
        {
          id: 18,
          name: "Mike Thompson",
          bio: "Front-end Engineer",
          followers: 1500,
          fee: "50/hour",
          imageUrl: fff
        },
        {
          id: 19,
          name: "Emily Davis",
          bio: "Graphic Designer",
          followers: 1100,
          fee: "50/hour",
          imageUrl:gg
        },
        {
          id: 20,
          name: "Chris Evans",
          bio: "Full-stack Developer",
          followers: 2500,
          fee: "50/hour",
          imageUrl: ggg
        },
        {
        id: 21,
        name: "Karen Chen",
        bio: "UX Researcher",
        followers: 700,
        fee: "50/hour",
        imageUrl: h
      }
  ]);

  return (
   
    <div className="bg-primary">
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4 text-green-500">Influencers list</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {profiles.map((profile) => (
          <li key={profile.id} className="bg-green-200 rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
            <img
              className="w-24 h-24 object-cover rounded-full mx-auto mt-4 hover:scale-110"
              src={profile.imageUrl}
              alt={profile.name}
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-black mb-2">{profile.name}</h2>
              <p className="text-">{profile.bio}</p>
              <p className="mt-2 text-black">Followers: {profile.followers}</p>
              <button
                className="mt-4 bg-purple-600 hover:bg-purple-300 text-white font-bold py-2 px-4 rounded transition-colors duration-500 transform hover:scale-110"
              >
                Fee: ${profile.fee}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
 
  );
}




export default ProfileList;

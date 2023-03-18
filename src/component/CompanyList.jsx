import React, { useState } from "react";
import pa from '/pa.png';
import pb from '/pb.png';
import pc from '/pc.png';
import pd from '/pd.png';
import pe from '/pe.png';
import pf from '/pf.png';
import pg from '/pg.png';
import ph from '/ph.png';
import pi from '/pi.png';
import pj from '/pj.png';
import pk from '/pk.png';
import pl from '/pl.png';
import pn from '/pn.png';
import po from '/po.png';
import pq from '/pq.png';
import pr from '/pr.png';

function Companylist() {
  const [profiles, setProfiles] = useState([
    
      {
        id: 1,
        companyName: "CubeSoft Tech",
        projectDomain: "E-commerce",
        salary: "$80,000 - $100,000",
        imageUrl: pa
      },
      {
        id: 2,
        companyName: "Creative Corp.",
        projectDomain: "Healthcare",
        salary: "$100,000 - $120,000",
       imageUrl: pb
      },
      {
        id: 3,
        companyName: "Acme Co.",
        projectDomain: "FinTech",
        salary: "$90,000 - $110,000",
        imageUrl: pc
      },
      {
        id: 4,
        companyName: "Tech Solutions",
        projectDomain: "Software",
        salary: "$70,000 - $90,000",
        imageUrl: pd
      },
      {
        id: 5,
        companyName: "Innovative Design",
        projectDomain: "Product Design",
        salary: "$60,000 - $80,000",
        imageUrl:pe
      },
      {
        id: 6,
        companyName: "Global Finance",
        projectDomain: "Finance",
        salary: "$100,000 - $120,000",
        imageUrl: pf
      },
      {
        id: 7,
        companyName: "FutureTech",
        projectDomain: "Artificial Intelligence",
        salary: "$120,000 - $140,000",
        imageUrl: pg
      },
      {
        id: 8,
        companyName: "Green Energy",
        projectDomain: "Renewable Energy",
        salary: "$80,000 - $100,000",
        imageUrl: ph
      },
      {
        id: 9,
        companyName: "Marketing Pros",
        projectDomain: "Marketing",
        salary: "$70,000 - $90,000",
        imageUrl: pi
      },
      {
        id: 10,
        companyName: "Data Analytics Inc.",
        projectDomain: "Data Analytics",
        salary: "$90,000 - $110,000",
        imageUrl: pj
      },
      {
        id: 11,
        companyName: "Zena Inc.",
        projectDomain: "E-commerce",
        salary: "$80,000 - $100,000",
        imageUrl: pk
      },
      {
        id: 12,
        companyName: "Ayur Corp.",
        projectDomain: "Healthcare",
        salary: "$100,000 - $120,000",
        imageUrl: pl
      },
      {
        id: 13,
        companyName: "Acme Co.",
        projectDomain: "FinTech",
        salary: "$90,000 - $110,000",
        imageUrl:pn
      },
      {
        id: 14,
        companyName: "Tech Solutions",
        projectDomain: "Software",
        salary: "$70,000 - $90,000",
        imageUrl: po
      },
      {
        id: 15,
        companyName: "Innovative Design",
        projectDomain: "Product Design",
        salary: "$60,000 - $80,000",
        imageUrl: pq
      },
    
  ]);

  return (
   
    <div className="bg-primary">
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4 text-green-500">Advertising Company</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {profiles.map((profile) => (
          <li key={profile.id} className="bg-green-200 rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
            <img
              className="w-24 h-24 object-cover rounded-full mx-auto mt-4 hover:scale-110"
              src={profile.imageUrl}
              alt={profile.name}
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-black mb-2">{profile.companyName}</h2>
              <p className="text-">{profile.projectDomain}</p>
             
              <button
                className="mt-4 bg-purple-600 hover:bg-purple-300 text-white font-bold py-2 px-4 rounded transition-colors duration-500 transform hover:scale-110"
              >
                salary: ${profile.salary}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
 
  );
}




export default Companylist;

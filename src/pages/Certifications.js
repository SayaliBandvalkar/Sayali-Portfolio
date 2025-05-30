import React from "react";
import "../pages/Certifications.css";

import powerbi from "../assets/powerbi.jpg";
import excel from "../assets/excel.jpg";
import analytics from "../assets/data-analytics.jpg";
import blockchain from "../assets/blockchain.jpg";
import hacking from "../assets/ethicalhacking.jpg";

const Certifications = ({ onClose }) => {
  const certs = [
    {
      img: powerbi,
      title: "Business Intelligence with Power BI",
      desc: "Visualizing data using Microsoft Power BI tools.",
    },
    {
      img: excel,
      title: "Advanced MS Excel",
      desc: "Advanced spreadsheet operations for data analytics.",
    },
    {
      img: analytics,
      title: "Data Analytics Using Excel",
      desc: "Performing statistical analysis using Excel features.",
    },
    {
      img: blockchain,
      title: "Blockchain Technology",
      desc: "Understanding decentralized systems and smart contracts.",
    },
    {
      img: hacking,
      title: "Ethical Hacking",
      desc: "Cybersecurity principles and ethical hacking techniques.",
    },
  ];

  return (
    <div className="cert-modal">
      <div className="cert-modal-content">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2 className="modal-title">My Certifications</h2>
        <div className="cert-grid">
          {certs.map((cert, index) => (
            <div key={index} className="cert-card">
              <img src={cert.img} alt={cert.title} className="cert-img" />
              <h3>{cert.title}</h3>
              <p>{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;

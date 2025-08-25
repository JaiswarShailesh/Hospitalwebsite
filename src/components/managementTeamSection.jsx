import React from "react";

const teamMembers = [
  {
    name: "Dr. Santosh Pawar",
    position: "Chief Executive Officer",
    description:
      "Responsible for overall hospital strategy, governance, and operational excellence. Leads organizational growth initiatives and ensures adherence to quality standards in healthcare delivery.",
    image: "images/doctors/Male_doctor.png",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    delay: 100,
  },
  {
    name: "Gajendra Devidas Pawaskar",
    position: "Senior Manager – Human Resources",
    description:
      "Oversees all HR functions including recruitment, employee relations, and organizational development. Focuses on building a strong workforce culture and ensuring compliance with labor regulations.",
    image: "images/managementTeam/gajendra_pawaskar.png",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    delay: 300,
  },
  {
    name: "Kawaljeet Oberoi",
    position: "Chief Nursing Officer",
    description:
      "Manages nursing operations and ensures the highest standards of patient care. Implements training programs, quality protocols, and nursing best practices across departments.",
    image: "images/managementTeam/kawaljeet_oberoi.png",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    delay: 200,
  },
  {
    name: "Abey Varghese",
    position: "Technical Head – Radiology",
    description:
      "Oversees radiology department operations, equipment management, and diagnostic accuracy. Ensures adoption of latest imaging technologies and compliance with safety protocols.",
    image: "images/managementTeam/abey_varghese.png",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    delay: 400,
  },
  {
    name: "Jaya Mathew",
    position: "OPD Incharge",
    description:
      "Responsible for smooth functioning of outpatient services including patient scheduling, coordination, and service delivery. Ensures efficient patient flow and minimizes waiting times.",
    image: "images/managementTeam/jaya_mathew.png",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    delay: 400,
  },
];

export default function ManagementTeamSection() {
  return (
    <section id="doctors" className="doctors section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Management Team</h2>
        <p>
          Our leadership team drives excellence in healthcare delivery through
          strategic vision, operational expertise, and patient-centric values
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={member.delay}
            >
              <div className="team-member d-flex align-items-start">
                <div className="pic">
                  <img
                    src={member.image}
                    className="img-fluid"
                    alt={member.name}
                  />
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <span>{member.position}</span>
                  <p>{member.description}</p>
                  <div className="social">
                    <a href={member.social.twitter}>
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href={member.social.facebook}>
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href={member.social.instagram}>
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href={member.social.linkedin}>
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

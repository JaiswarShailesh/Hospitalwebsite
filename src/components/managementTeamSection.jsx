import React from "react";

const teamMembers = [
  {
    name: "Walter White",
    position: "Chief Medical Officer",
    description: "Explicabo voluptatem mollitia et repellat qui dolorum quasi",
    image: "images/doctors/doctors-1.jpg",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    delay: 100,
  },
  {
    name: "Sarah Jhonson",
    position: "Anesthesiologist",
    description:
      "Aut maiores voluptates amet et quis praesentium qui senda para",
    image: "images/doctors/doctors-2.jpg",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    delay: 200,
  },
  {
    name: "William Anderson",
    position: "Cardiology",
    description: "Quisquam facilis cum velit laborum corrupti fuga rerum quia",
    image: "images/doctors/doctors-3.jpg",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    delay: 300,
  },
  {
    name: "Amanda Jepson",
    position: "Neurosurgeon",
    description:
      "Dolorum tempora officiis odit laborum officiis et et accusamus",
    image: "images/doctors/doctors-4.jpg",
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
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
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

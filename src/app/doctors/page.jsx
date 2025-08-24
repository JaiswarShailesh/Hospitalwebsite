"use client";

import HeroBanner from "../../components/heroBanner";
import { useState } from "react";
import { doctors } from "../../data/doctors";
import Link from "next/link";

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  // Handle search by name
  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    filterDoctors(value, selectedDepartment);
  };

  // Handle department filter
  const handleDepartmentChange = (e) => {
    const department = e.target.value.toLowerCase();
    setSelectedDepartment(department);
    filterDoctors(searchTerm, department);
  };

  // Combined filter logic
  const filterDoctors = (name, department) => {
    let filtered = doctors;

    if (name) {
      filtered = filtered.filter((doc) =>
        doc.name.toLowerCase().includes(name)
      );
    }

    if (department && department !== "all") {
      filtered = filtered.filter((doc) =>
        doc.department.some((dept) => dept.toLowerCase() === department)
      );
    }

    setFilteredDoctors(filtered);
  };

  return (
    <>
      <HeroBanner images={["images/doctors_banner.png"]} />

      <section id="departments" className="services section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Doctors</h2>
          <p>Search and find your doctor quickly</p>
        </div>

        <div className="container">
          <div className="row my-4 justify-content-between">
            {/* Search by Name */}
            <div className="col-md-4 my-1">
              <div className="border search_doctor">
                <input
                  className="form-control me-2 border-0"
                  type="search"
                  placeholder="Search doctor by name"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            </div>

            {/* Department Dropdown */}
            <div className="col-md-4 my-1">
              <select
                className="form-select"
                aria-label="Search doctor by department"
                onChange={handleDepartmentChange}
              >
                <option value="all">All Departments</option>
                <option value="radiology">Radiology</option>
                <option value="gynecology">Gynecology</option>
                <option value="obstetrics">Obstetrics</option>
                <option value="anesthesia">Anesthesia</option>
                <option value="general medicine">General Medicine</option>
                <option value="community health">Community Health</option>
                <option value="health service">Health Service</option>
              </select>
            </div>
          </div>

          {/* Doctor Cards */}
          <div className="row gy-4">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="doctors-card text-center mb-3">
                    <div className="card-body p-0 pb-4">
                      <div className="mb-4 position-relative doctor-img-wrapper">
                        <img
                          className="img-fluid rounded-circle z-1 position-relative"
                          src={doctor.profilePhoto}
                          alt={doctor.name}
                        />
                      </div>
                      <h5 className="fw-bold">{doctor.name}</h5>
                      <p className="doctor-bio">{doctor.tags.join(" | ")}</p>
                      <div className="d-flex justify-content-center mt-4">
                        <Link
                          href={`/doctors/${doctor.id}`}
                          className="btn btn-accent-pill me-2"
                        >
                          View profile
                        </Link>
                        <a className="btn btn-accent-pill" href="">
                          Book an appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No doctors found.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

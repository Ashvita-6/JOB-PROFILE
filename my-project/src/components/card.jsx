import React from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { IoCalendarOutline } from "react-icons/io5";

const Card = ({ data }) => {
  const {
    companyName,
    jobTitle,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    employmentType,
    postingDate,
    description,
  } = data;
  return (
    <section className="card">
      <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start">
        <img src={companyLogo} alt="" />
        <div>
          <h4 className="text-black mb-1">{companyName}</h4>
          <h3 className="text-black mb-2 text-lg font-semibold">{jobTitle}</h3>
          <div className="flex flex-wrap gap-2 mb-2 text-black">
            <span className="flex items-center gap-2">
              <IoLocationOutline />
              {jobLocation}
            </span>
            <span className="flex items-center gap-2">
              <MdOutlineBusinessCenter />
              {employmentType}
            </span>
            <span className="flex items-center gap-2">
              <GiMoneyStack />
              {maxPrice}k-{minPrice}k
            </span>
            <span className="flex items-center gap-2">
              <IoCalendarOutline />
              {postingDate}
            </span>
          </div>
          <div>{description}</div>
        </div>
      </Link>
    </section>
  );
};

export default Card;

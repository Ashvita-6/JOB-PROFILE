import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

const Post_a_job = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Redux", label: "Redux" },
  ];
  const onSubmit = (data) => {
    data.skills = selectedOption;
    // console.log(data);
    fetch("http://localhost:5000/post-job", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if(result.acknowledged===true){
          alert("Job posted successfully")
        }
        reset()
      });
  };

  return (
    <div className=" max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/*form*/}
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/*1st row*/}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-1">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                defaultValue={"Web Developer"}
                {...register("jobTitle")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3
text-gray-900 placeholder: text-gray-400 focus: outline-none sm:text-sm sm: leading-6"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                type="text"
                defaultValue={"Ex: Microsoft"}
                {...register("companyName")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3
text-gray-900 placeholder: text-gray-400 focus: outline-none sm:text-sm sm: leading-6"
              />
            </div>
          </div>
          {/*2nd*/}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-1">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input
                type="text"
                placeholder="$20k"
                {...register("minPrice")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3
text-gray-900 placeholder: text-gray-400 focus: outline-none sm:text-sm sm: leading-6"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                type="text"
                placeholder="$100k"
                {...register("maxPrice")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3
text-gray-900 placeholder: text-gray-400 focus: outline-none sm:text-sm sm: leading-6"
              />
            </div>
          </div>
          {/*3rd */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-1">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select
                {...register("salaryType")}
                className="block w-full flex-1 border bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              >
                <option value="">Choose your option</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                type="text"
                placeholder="Ex: Chennai"
                {...register("jobLocation")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3
text-gray-900 placeholder: text-gray-400 focus: outline-none sm:text-sm sm: leading-6"
              />
            </div>
          </div>
          {/*4th */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-1">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                type="date"
                placeholder="2023-10-05"
                {...register("postingDate")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3
text-gray-900 placeholder: text-gray-400 focus: outline-none sm:text-sm sm: leading-6"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select
                {...register("experienceLevel")}
                className="block w-full flex-1 border bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              >
                <option value="">Choose your option</option>
                <option value="Internship">Internship</option>
                <option value="Any experience">Any experience</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>
          </div>

          {/*5th*/}
          <div>
            <label className="block mb-2 text-lg">Required Skill Sets:</label>
            <CreatableSelect
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
              className="create-job-input py-4"
            />
          </div>

          {/*6th */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-1">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="url"
                defaultValue="company logo url"
                {...register("companyLogo")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3
text-gray-900 placeholder: text-gray-400 focus: outline-none sm:text-sm sm: leading-6"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select
                {...register("employmentType")}
                className="block w-full flex-1 border bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              >
                <option value="">Choose your option</option>
                <option value="Full-time">Full-time</option>
                <option value="Temporary">Temporary</option>
                <option value="Part-time">Part-time</option>
              </select>
            </div>
          </div>

          {/*7th  */}
          <div className="w-full py-1">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-stone-900"
              rows={6}
              defaultValue={"lorem ipsom"}
              placeholder="Job Description"
              {...register("description")}
            ></textarea>
          </div>

          {/*8th */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Posted By</label>
            <input
              type="email"
              placeholder="your email"
              {...register("postedBy")}
              className="block w-full flex-1 border-1 bg-white py-1.5 pl-3
text-gray-900 placeholder: text-gray-400 focus: outline-none sm:text-sm sm: leading-6"
            />
          </div>
          <input
            type="submit"
            className="block mt-5 bg-blue-600 px-8 py-2 text-white cursor-pointer rounded-sm"
          />
        </form>
      </div>
    </div>
  );
};

export default Post_a_job;

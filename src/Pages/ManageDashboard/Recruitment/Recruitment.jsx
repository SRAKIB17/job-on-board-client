import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BASE_API } from "../../../config";
import useTitle from "../../../Hooks/useTitle";
import auth from "../../../Auth/Firebase/Firebase.init";
import Loading from "../../../Components/Loading/Loading";

const Recruitment = () => {
  useTitle("Recruitment");
  const [hrJobs, setGetJobs] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_API}/jobs/hrJobs?email=${auth?.currentUser?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => setGetJobs(res.data));
  }, []);

  const { data: getCount, isLoading } = useQuery(["count"], () =>
    fetch(`${BASE_API}/applicants/count?email=${auth?.currentUser?.email}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-center text-md md:text-xl font-bold pt-5">
        Total Jobs {hrJobs?.length}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-5 gap-5 my-8">
        {hrJobs?.map((job, index) => (
          <div
            key={index}
            className="shadow-lg hover:shadow-2xl border-t-2 border-primary relative"
          >
            <label class="flex justify-center items-center btn-sm btn-circle bg-red-600 text-white absolute right-2 top-2">
              {getCount?.length}
            </label>

            <div className="p-5 space-y-5">
              <div className="space-y-2">
                <div className="">
                  <h2 className="text-sm font-semibold">{job.jobTitle}</h2>
                  <br />
                  <p className="text-lg md:text-xl lg:text-xl font-bold ">
                    {job.companyName}
                  </p>
                </div>
              </div>
              <p className="flex ">{job.location} </p>
              <div className="flex flex-col  space-y-1">
                <span>
                  Salary : ${job.salary}
                  <small>/m</small>
                </span>
              </div>
              <div className=" pt-3 flex justify-between items-center">
                <span className="border rounded-xl px-4 py-1 bg-base-300">
                  {job.jobType}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recruitment;

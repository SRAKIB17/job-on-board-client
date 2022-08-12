import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { jobTypeList, salaryList } from '../../../data';
import Pagination from '../../../Hooks/Pagination';
import useJobData from '../../../Hooks/useJobData';
import useTitle from '../../../Hooks/useTitle';
import Jobs from '../Jobs';
import Sidebar from '../Sidebar/Sidebar';

const AllJob = () => {
  useTitle('Find Jobs')

  const [getJobs, setGetJobs] = useState([])


  const [page, setPage] = useState(1);
  const [show, setShow] = useState(5);
  const [cat, setCat] = useState('')
  const [salary, setSalary] = useState([])
  const [jobType, setJobType] = useState([])
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');


  const { data } = useQuery(['AllJobs', page, show, cat, salary, jobType, location, search], () => axios.get(`http://localhost:5000/jobs?search=${search}&page=${page}&show=${show}&location=${location}&cat=${cat}&salary=${salary}&type=${jobType}`))

  const jobDataArr = data?.data?.jobs
  const total = data?.data?.total;

  useEffect(() => {
    setGetJobs(jobDataArr)
  }, [page, show, cat, salary, jobType, location, search, jobDataArr])




  const showHandle = (page) => {

  }

  const categoryHandle = (e) => {
    const query = e.target.value;
    setCat(query)
  }

  const jobTypeHandle = (e) => {
    const query = e.target.value;
    const check = e.target.checked;

    if (check && !jobType?.includes(query)) {
      setJobType([...jobType, query]);
    }
    else {
      const filterJobType = jobType?.filter(t => t !== query)
      setJobType(filterJobType)
    }


  }

  const searchHandle = (e) => {
    const query = e.target.value;
    if (query) {
      setSearch(query)
    }

  }
  const locationHandle = (e) => {
    const query = e.target.value;
    if (query) {
      setLocation(query)
    }
  }

  const pageHandle = (page) => {
    setPage(page)
  }
  const lastPage = Math.ceil(eval(total / show));
  return (
    <div className='flex flex-col h-auto md:h-[100vh] bg-[#eeecec] '>

      <div className="jobs-content flex flex-col overflow-y-auto md:flex-row flex-1 bg-[#f1efef] container mx-auto md:px-8">
        <div className="sidebar basis-72 m-4 p-4 rounded-lg bg-[#fbf9f9] overflow-y-auto">
          <Sidebar
            jobType={jobType}
            jobTypeHandle={jobTypeHandle}
            locationHandle={locationHandle}
            categoryHandle={categoryHandle}
            searchHandle={searchHandle}
          />
        </div>
        {
          salary
        }
        <div className="jobs flex-1 p-8 overflow-y-auto">
          <Jobs getJobs={getJobs} />
          <div className='pb-10'>
            <Pagination lastPage={lastPage} page={eval(page)} pageHandle={pageHandle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllJob;
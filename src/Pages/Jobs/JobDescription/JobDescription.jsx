import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useJob from '../../../Hooks/useJob';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { ImArrowLeft2 } from 'react-icons/im';
import ApplicantModal from './ApplicantModal';
import Footer from '../../../Shared/Footer/Footer';

const JobDescription = () => {
  const { jobId } = useParams()
  const [job, loading] = useJob(jobId);
  const navigate = useNavigate();

  // console.log(job)
  // const {category,companyName,createdDate,employees,hrEmail,hrName,jobTitle,jobType,location,openingPosition,salary, value , _id} = job 

  const back = () => {
    navigate(-1)
  }

  return (
    <div className=''>
      {/* description top section  */}
      <div className="bg-[#222223]">
        <div className="shadow-md py-10 px-8 md:px-28 lg:px-12 space-y-5 container mx-auto text-white">
          <div className="space-y-2">
            <div className='flex flex-col lg:flex-row space-y-2 lg:space-y-1 justify-between'>
              <div className="flex lg:justify-center lg:items-center gap-2 pb-4 lg:pb-0">
                <div onClick={back} className='flex justify-center items-center gap-x-2 cursor-pointer hover:text-primary'>
                  <span className='font-extrabold text-xl'><ImArrowLeft2/></span>
                  <h2 className="text-xl md:text-xl font-bold ">{job?.jobTitle}</h2>
                </div>
                <h2 className='text-xl md:text-lg lg:text-xl font-mono md:mt-1 lg:mt-0  font-bold  hidden md:block'> | Vacancy : {job?.openingPosition}</h2>
              </div>
              <p className='text-md md:text-xl lg:text-2xl md:font-bold text-white font-mono'>{job?.companyName}</p>
            </div>
            <div className='flex flex-col-reverse lg:flex-row space-y-2 gap-3 lg:gap-0  justify-between'>
              <p className='flex text-white '> <span className='px-1 pt-1'><HiOutlineLocationMarker /></span> {job?.location} </p>
              <p className=' text-white text-[15px] '>Company Employees : {job?.employees}</p>
            </div>
          </div>
          <p className='text-white'>Salary  : ${job?.salary} <small>/ m</small></p>
          <div className='flex flex-col lg:flex-row justify-between lg:items-center space-y-3 lg:space-y-1'>
            <span className='lg:pt-4'>Work Type : {job?.jobType}</span>
            <label
              htmlFor="applicant-modal"
              className='flex justify-center px-5 py-3 bg-primary duration-300 hover:bg-[#6f49c7] rounded-lg text-xl text-white cursor-pointer w-1/2 md:w-[10rem]' >Apply Now</label>
          </div>
        </div>
      </div>
      {/* description section  */}
      <div className=' py-8 px-5 md:px-28 lg:px-12 space-y-5 container mx-auto'>
        <h2 className='text-2xl lg:text-2xl lg:pb-5 font-bold'>Job Description : </h2>
        <div dangerouslySetInnerHTML={{ __html: job?.value }} className='prose max-w-full prose-h2:my-0 prose-h2:mb-2 prose-p:my-0 prose-h1:text-2xl prose-p:text-md  prose-p:text-[#292828] md:prose-li:text-md md:prose-ol:text-md'></div>

        <div className='text-center md:py-8 '>
          <label
            htmlFor="applicant-modal"
            className='px-16 py-4 bg-primary duration-300 hover:bg-[#6746b3] rounded-lg text-lg md:text-2xl text-white cursor-pointer' >Apply Now</label>
        </div>
      </div>

      {/* applicant modal  */}
      {job && <ApplicantModal
        job={job}
      ></ApplicantModal>}

      <Footer />

    </div>
  );
};

export default JobDescription;
import React from 'react'
import './Teacher.css'
import Blank from '../Image/blank.png'
function Teachers() {
  return (
    <div className="Teacher-Box h-fit bg-slate-900 p-20 flex flex-col items-center justify-around">
            <h1 className='text-center text-white pt-10'>Director </h1>
      <div className=" w-full h-fit flex flex-row align-middle justify-center   mb-10  flex-wrap ">
        {principalData.map((h) => (
          <div class="wrapperCardFacilityTeacher pt-20 m-5">
            <div class="FacilitycardTeacher"> <img src={h.img} />
              <div class="FacilityinfoTeacher">
                <h1>{h.name}</h1>
                <br/>
                <li>{h.Qualification}</li>
                <li>{h.Experience}</li>
              </div>
            </div>
          </div>))}
      </div>
      <h1 className='text-center text-white pt-10'>Faculty</h1>
      <div className=" w-full h-fit flex flex-row align-middle justify-center   mb-10  flex-wrap ">
        {AboutData.map((t) => (
          <div class="wrapperCardFacilityTeacher pt-20 m-4">
            <div class="FacilitycardTeacher"> <img src={t.img} />
              <div class="FacilityinfoTeacher">
                <h1>{t.name}</h1>
                <br/>
                <h2>{t.Subject}</h2>
                <li>{t.Qualification}</li>
                <li>{t.Experience}</li>
              </div>
            </div>
          </div>))}
      </div>
    </div>

  )
}

export default Teachers
const principalData=[
  {
    img: Blank,
    name: 'Bhavanishankar sherawat',
    Qualification: "Fitness and Recreation Center",
    Experience: "Leadership Service",
  }
]

const AboutData = [
  {
    img: Blank,
    name: 'Bhavanishankar sherawat',
    Subject: "Athletic Development",
    Qualification: "Fitness and Recreation Center",
    Experience: "Leadership Service",
  },
  {
    img: Blank,
    name: 'Bhavanishankar sherawat',
    Subject: "Athletic Development",
    Qualification: "Fitness and Recreation Center",
    Experience: "Leadership Service",
  }
  ,
  {
    img: Blank,
    name: 'Bhavanishankar sherawat',
    Subject: "Athletic Development",
    Qualification: "Fitness and Recreation Center",
    Experience: "Leadership Service",
  }
  ,
  {
    img: Blank,
    name: 'Bhavanishankar sherawat',
    Subject: "Athletic Development",
    Qualification: "Fitness and Recreation Center",
    Experience: "Leadership Service",
  },
  {
    img: Blank,
    name: 'Bhavanishankar sherawat',
    Subject: "Athletic Development",
    Qualification: "Fitness and Recreation Center",
    Experience: "Leadership Service",
  }
  ,
  {
    img: Blank,
    name: 'Bhavanishankar sherawat',
    Subject: "Athletic Development",
    Qualification: "Fitness and Recreation Center",
    Experience: "Leadership Service",
  }
  ,
  {
    img: Blank,
    name: 'Bhavanishankar sherawat',
    Subject: "Athletic Development",
    Qualification: "Fitness and Recreation Center",
    Experience: "Leadership Service",
  }
]
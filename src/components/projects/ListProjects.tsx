"use client"
import { useState, useEffect } from "react"
import Tab from "./Tab";
import CardProjectImgClient from "./CardProjectImgClient";

export default function ListProyects({projects}: {projects:any}){
  const [option, setOption] = useState<number>(1);
  const [filter, setFilter] = useState<any[]>(projects);
  const [navTab, setNavTab] = useState<JSX.Element>(<></>);
  
  const changeTab = (value:number) => {
    setOption(value);
  }

  useEffect(() => {
    console.log('algo');
    setNavTab(
      <>
        <Tab changeTab={changeTab} index={1} option={option} text="TODOS" />
        <Tab changeTab={changeTab} index={2} option={option} text="INDUSTRIAL" />
        <Tab changeTab={changeTab} index={3} option={option} text="COMERCIAL" />
        <Tab changeTab={changeTab} index={4} option={option} text="INSTITUCIONAL" />
        <Tab changeTab={changeTab} index={5} option={option} text="PARTICULAR" />
      </>
    )
    if(option === 1){
      setFilter(projects)
    }else{
      const optFilter = option===2? 'industrial': 
                          (option===3? 'comercial' : 
                            (option===4? 'institucional': 'particular'))
      const filtered = projects.filter( 
                        (proyect: any) => 
                            proyect.segment.name.toLowerCase().includes(optFilter));
      setFilter(filtered);
    }
  }, [option])

  return(
    <>
      <div className="flex flex-wrap justify-between sm:justify-center mb-1 mt-4 pb-1 border-b-2 border-slate-300">
        {navTab}
      </div>
      <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10'>
        {filter.map((project: any) => (
          <CardProjectImgClient href={`/${project._id}`} imgProj={project.images[0].photo}
            imgClient={project.client? project.client.logo: '/public/default.jpg'} 
            title={project.title} key={project._id} />
        ))}
      </div>
    </>
  )
}
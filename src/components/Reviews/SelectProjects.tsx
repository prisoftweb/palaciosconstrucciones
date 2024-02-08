export default function SelectProjects({project, projectChange, projects}:
  {project:string, projectChange:Function, projects:any}){

  const onProjectChange = (value:string) => {
    projectChange(value);
  }

  return(
    <>
      <select className="shadow capitalize appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-500 leading-tight font-sans text-2xl focus:ring-1 focus:ring-blue-600 bg-white"
        onChange={(e) => onProjectChange(e.target.value)}
        value={project}
      >
        {projects.map((proyect:any, index:number) => (
          <option value={proyect._id} key={index}>{proyect.title}</option>
        ))}
      </select>
    </>
  )
}
export default function SelectProjects({project, projectChange, projects}:
  {project:string, projectChange:Function, projects:any}){

  const onProjectChange = (value:string) => {
    projectChange(value);
  }

  return(
    <>
      <select className="shadow appearance-none border rounded w-full mt-2 py-4 px-3 
        text-2xl text-gray-900 leading-tight font-sans font-ligth 
        focus:outline-none focus:shadow-outline bg-white"
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
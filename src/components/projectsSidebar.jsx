
function ProjectsSidebar ({addProject, sidebarProject, selectedProject}) {
  let buttonStyle = 'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800';

  function importElementId(id) {
    selectedProject(id);
  }

  return (
    <>
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
      <div>
        <button onClick={addProject} className="-full text-left px-2 py-2 text-xs md:text-base rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 bg-stone-600  ">{"+ Add New Project" }</button>
      </div>
      <ul className="mt-8">
        {/* symbol "?" checks if object is empty or not to decide weather it iterate or not */}
        {sidebarProject?.map((element) => {
          return (
          <li key={element.id}>
            <button onClick={() => importElementId(element.id)} className={buttonStyle}>{element.title}</button>
          </li>
          )
        })}
      </ul>
    </aside>
  </>
  )
}

export default ProjectsSidebar;

function ProjectsSidebar () {
  return (
    <>
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
      <div>
        <button className="-full text-left px-2 py-2 text-xs md:text-base rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 bg-stone-600  ">+ Add New Project</button>
      </div>
      <ul className="mt-8">
        {/* we will att the li & button dynamically depend on projects we have */}
        <li><button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">first</button></li>
        <li><button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">second</button></li>
      </ul>
    </aside>
  </>
  )
}

export default ProjectsSidebar;
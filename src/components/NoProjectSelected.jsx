import noImage from '../assets/no-projects.png'

function NoProjectSelected ({ addProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={noImage} className='-16 h-16 object-contain mx-auto' />
      <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
      <h2 className='mb-8 font-semibold  md:text-xl text-stone-400'>Select a Project or Get Started With New One</h2>
      <p>
        <button onClick={addProject} className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>Create New Project</button>
      </p>
    </div>
  )
} 

export default NoProjectSelected;
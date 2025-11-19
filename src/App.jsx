import ProjectsSidebar from './components/ProjectsSidebar.jsx'
import NewProject from './components/NewProject.jsx'
import NoProjectSelected from './components/NoProjectSelected.jsx';

import { useState } from 'react';

function App() {

  const [newProject , setNewProject] = useState(false);

  function handleNewProject() {
    setNewProject(currentState => !currentState);
  }

 return (
  <aside className='h-screen my-8 flex gap-8'>
    <ProjectsSidebar addProject={handleNewProject} isCreate={newProject}/>
    {newProject ? <NewProject /> : <NoProjectSelected  addProject={handleNewProject}/>}
  </aside>
 )

}

export default App;

import ProjectsSidebar from './components/ProjectsSidebar.jsx'
import NewProject from './components/NewProject.jsx'
import NoProjectSelected from './components/NoProjectSelected.jsx';

import { useState } from 'react';
import SelectedProject from './components/SelectedProject.jsx';

function App() {

  const [savedProjects, setSavedProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null); // null, 'new', or project index

  function handleNewProject() {
    setSelectedProjectId('new'); // Special state for "creating new project"
  }

  function handleCancelProject() {
    setSelectedProjectId(null); // Back to "no selection"
  }

  function insertProject(project) {
    setSavedProjects(currentList => [...currentList, project]);
    setSelectedProjectId(null); // Go back to "no selection" after saving
  }

  function handleSelectProject(id) {
    setSelectedProjectId(id); // Set to project index
  }

  // Decide what to render based on state
  let content;
  
  if (selectedProjectId === 'new') {
    // User is creating a new project
    content = <NewProject importProjectData={insertProject} cancelProject={handleCancelProject}/>;
  } else if (selectedProjectId !== null) {
    // when User selected an existing project
    const findSelectedProjectById = savedProjects.find((projects) => projects.id === selectedProjectId);
    content = <SelectedProject project={findSelectedProjectById}/>;
  } else {
    // No project selected
    content = <NoProjectSelected addProject={handleNewProject}/>;
  }

  return (
    <aside className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar 
        addProject={handleNewProject} 
        sidebarProject={savedProjects} 
        selectedProject={handleSelectProject}
      />
      {content}
    </aside>
  );

}

export default App;

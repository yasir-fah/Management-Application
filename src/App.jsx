import ProjectsSidebar from './components/ProjectsSidebar.jsx'
import NewProject from './components/NewProject.jsx'
import NoProjectSelected from './components/NoProjectSelected.jsx';
import SelectedProject from './components/SelectedProject.jsx';
import { useState } from 'react';

function App() {

  const [savedProjects, setSavedProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  function handleNewProject() {
    setSelectedProjectId('new');
  }

  function handleCancelProject() {
    setSelectedProjectId(null);
  }

  function insertProject(project) {
    setSavedProjects(list => [...list, { ...project, tasks: [] }]);   
    setSelectedProjectId(null);
  }

  function handleSelectProject(id) {
    setSelectedProjectId(id);
  }

  function handleDelete(id) {
    setSavedProjects(list => list.filter(project => project.id !== id));
    setSelectedProjectId(null);
  }

  function handleAddTask(projectId, taskText) {
    setSavedProjects(list =>
      list.map(project =>
        project.id === projectId
          ? { ...project, tasks: [...project.tasks, taskText] } 
          : project
      )
    );
  }

  let content;

  if (selectedProjectId === 'new') {
    content = <NewProject importProjectData={insertProject} cancelProject={handleCancelProject} />;
  } else if (selectedProjectId !== null) {
    const selected = savedProjects.find(p => p.id === selectedProjectId);
    content = (
      <SelectedProject
        project={selected}
        handleDeleteProject={handleDelete}
        handleAddTask={handleAddTask}        
      />
    );
  } else {
    content = <NoProjectSelected addProject={handleNewProject} />;
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

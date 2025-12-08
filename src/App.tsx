import React from "react";
import PageLayout from "./layout/PageLayout";
import HeroScene from "./scenes/hero/HeroScene";
import ProjectScene from "./scenes/project/ProjectScene";
import OutroScene from "./scenes/outro/OutroScene";
import { projects } from "./data/projects";

const App: React.FC = () => {
  return (
    <PageLayout projects={projects}>
      <HeroScene />
      {projects.map((project) => (
        <ProjectScene key={project.id} project={project} />
      ))}
      <OutroScene />
    </PageLayout>
  );
};

export default App;

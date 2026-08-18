import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProjectPreview } from './components/ProjectPreview';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { ForFun } from './components/ForFun';
import { Footer } from './components/Footer';

// Project Detail Pages
import { RadikalProject } from './components/projects/RadikalProject';
import { ChalloProject } from './components/projects/ChalloProject';
import { AidAiProject } from './components/projects/AidAiProject';
import { DkuIntersectionsProject } from './components/projects/DkuIntersectionsProject';
import { ViralCampaignProject } from './components/projects/ViralCampaignProject';
import { DataVisualizationProject } from './components/projects/DataVisualizationProject';
import { LorealBrandstormProject } from './components/projects/LorealBrandstormProject';
import { ComputerGraphicsProject } from './components/projects/ComputerGraphicsProject';
import { IotProject } from './components/projects/IotProject';
import { DataVisHeatmapProject } from './components/projects/DataVisHeatmap';
import { Cs311ChatroomProject } from './components/projects/Cs311ChatroomProject';
import { UpickProject } from './components/projects/UpickProject';
import { WayfairProject } from './components/projects/WayfairProject';
import { FocusZoneBraceletProject } from './components/projects/FocusZoneBraceletProject';
import { Infosci103Project } from './components/projects/Infosci103Project';
import { GbcsProject } from './components/projects/GbcsProject';

type Page = 'home' | 'projects' | 'about' | 'forfun' | 'project-detail';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(null);

  const handleViewProject = (projectId: string) => {
    setCurrentProjectId(projectId);
    setCurrentPage('project-detail');
    window.scrollTo(0, 0); // Scroll to top when opening project
  };

  const handleBackToProjects = () => {
    setCurrentPage('projects');
    setCurrentProjectId(null);
    window.scrollTo(0, 0);
  };

  // Render project detail page based on project ID
  const renderProjectDetail = () => {
    switch (currentProjectId) {
      case 'radikal':
        return <RadikalProject onBack={handleBackToProjects} />;
      case 'challo':
        return <ChalloProject onBack={handleBackToProjects} />;
      case 'aid-ai':
        return <AidAiProject onBack={handleBackToProjects} />;
      case 'dku-intersections':
        return <DkuIntersectionsProject onBack={handleBackToProjects} />;
      case 'viral-campaign':
        return <ViralCampaignProject onBack={handleBackToProjects} />;
      case 'data-visualization':
        return <DataVisualizationProject onBack={handleBackToProjects} />;
      case 'data-visualization-heatmap':
        return <DataVisHeatmapProject onBack={handleBackToProjects} />;
      case 'loreal-brandstorm':
        return <LorealBrandstormProject onBack={handleBackToProjects} />;
      case 'computer-graphics':
        return <ComputerGraphicsProject onBack={handleBackToProjects} />;
      case 'iot-project':
        return <IotProject onBack={handleBackToProjects} />;
      case 'cs311-chatroom':
        return <Cs311ChatroomProject onBack={handleBackToProjects} />;
      case 'upick':
        return <UpickProject onBack={handleBackToProjects} />;
      case 'wayfair-externship':
        return <WayfairProject onBack={handleBackToProjects} />;
      case 'focus-zone-bracelet':
        return <FocusZoneBraceletProject onBack={handleBackToProjects} />;
      case 'infosci103-phantom-friend':
        return <Infosci103Project onBack={handleBackToProjects} />;
      case 'gbcs-internship':
        return <GbcsProject onBack={handleBackToProjects} />;
      default:
        return <Projects onViewProject={handleViewProject} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <div key="home">
            <Hero onNavigateToProjects={() => setCurrentPage('projects')} onNavigateToAbout={() => setCurrentPage('about')} />
            <ProjectPreview onNavigateToProjects={() => setCurrentPage('projects')} onViewProject={handleViewProject} />
            <Footer />
          </div>
        ) : currentPage === 'about' ? (
          <div key="about">
            <About onViewProject={handleViewProject} />
            <Footer />
          </div>
        ) : currentPage === 'forfun' ? (
          <div key="forfun">
            <ForFun />
            <Footer />
          </div>
        ) : currentPage === 'project-detail' ? (
          <div key="project-detail">
            {renderProjectDetail()}
            <Footer />
          </div>
        ) : (
          <div key="projects">
            <Projects onViewProject={handleViewProject} />
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
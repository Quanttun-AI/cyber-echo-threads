
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import CreateEchoModal from '@/components/modals/CreateEchoModal';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const MainLayout = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isCreateEchoOpen, setIsCreateEchoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cyber-black text-white">
      <Header 
        onMenuToggle={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)} 
      />
      
      <div className="flex">
        <Sidebar 
          isOpen={isMobileSidebarOpen} 
          onClose={() => setIsMobileSidebarOpen(false)}
        />
        
        <main className="flex-1 overflow-auto pb-24">
          <div className="container mx-auto px-4 py-6">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Floating Create Echo Button */}
      <Button
        onClick={() => setIsCreateEchoOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-cyber-purple hover:bg-cyber-purple/90 p-0 flex items-center justify-center z-10"
      >
        <Plus size={24} className="text-white" />
      </Button>

      {/* Create Echo Modal */}
      <CreateEchoModal 
        isOpen={isCreateEchoOpen} 
        onClose={() => setIsCreateEchoOpen(false)} 
      />
    </div>
  );
};

export default MainLayout;

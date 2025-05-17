
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Users, Globe, MessageCircle, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { t } = useLanguage();
  const location = useLocation();
  
  const navigation = [
    { name: 'home', path: '/feed', icon: Home },
    { name: 'profile', path: '/profile/user_x273', icon: User },
    { name: 'circles', path: '/circles', icon: Users },
    { name: 'explore', path: '/explore', icon: Globe },
    { name: 'notifications', path: '/messages', icon: MessageCircle },
    { name: 'settings', path: '/settings', icon: Settings },
  ];
  
  const isActive = (path: string) => location.pathname.startsWith(path);
  
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden" 
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed md:sticky top-0 left-0 md:top-16 h-screen md:h-[calc(100vh-4rem)] z-50 w-64 transition-transform duration-300 ease-in-out",
          "flex flex-col bg-black/90 backdrop-blur-xl border-r border-cyber-purple/20",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex-1 py-6 px-4 space-y-1 overflow-y-auto scrollbar-none">
          {navigation.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center px-4 py-3 rounded-lg transition-all group",
                  active 
                    ? "bg-cyber-purple/20 text-cyber-purple" 
                    : "text-gray-300 hover:bg-cyber-purple/10"
                )}
                onClick={onClose}
              >
                <div className="relative mr-3">
                  <item.icon size={20} className={cn(
                    "transition-all",
                    active ? "text-cyber-purple" : "text-gray-400 group-hover:text-cyber-purple/70"
                  )} />
                  {active && (
                    <div className="absolute -inset-1 rounded-full animate-pulse bg-cyber-purple/20" />
                  )}
                </div>
                <span className={cn(
                  "font-medium",
                  active && "text-cyber-purple"
                )}>
                  {t(item.name)}
                </span>
                {active && (
                  <div className="ml-auto w-1.5 h-8 bg-cyber-purple rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
        
        <div className="p-4 border-t border-cyber-purple/20">
          <div className="cyber-card p-4">
            <div className="text-xs font-mono text-cyber-cyan mb-1">NEURAL-ID</div>
            <div className="text-sm mb-2">User_X273</div>
            <div className="text-xs text-gray-400">Status: Connected</div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

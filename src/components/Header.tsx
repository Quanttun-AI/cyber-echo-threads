
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Bell, Search, User, Users, Home, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const Header = () => {
  const { t } = useLanguage();
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyber-purple/20 backdrop-blur-xl bg-black/80">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold tracking-wider">
            <span className="neon-text neon-text-purple">Echo</span>
            <span className="neon-text neon-text-cyan">Sphere</span>
          </div>
          
          <div className={cn(
            "hidden md:flex relative w-64 transition-all duration-300",
            isSearchFocused && "w-96"
          )}>
            <Search 
              size={18} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyber-purple/60"
            />
            <Input 
              placeholder={t('search')} 
              className="pl-10 bg-black/30 border-cyber-purple/30 focus:border-cyber-purple/70 text-sm"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          <NavButton icon={<Home size={18} />} label={t('home')} active />
          <NavButton icon={<Users size={18} />} label={t('circles')} />
          <NavButton icon={<MessageCircle size={18} />} label={t('echoes')} />
          <NavButton icon={<Bell size={18} />} label={t('notifications')} hasNotification />
        </nav>

        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden md:flex bg-black/20 backdrop-blur-lg border border-cyan-500/30 hover:bg-cyber-cyan/20"
          >
            <Bell size={20} className="text-cyber-cyan" />
          </Button>
          
          <LanguageSwitcher />
          
          <Button 
            variant="ghost" 
            size="sm"
            className="flex items-center gap-2 bg-black/20 backdrop-blur-lg border border-cyber-green/30 hover:bg-cyber-green/20"
          >
            <User size={18} className="text-cyber-green" />
            <span className="hidden md:inline">User_X273</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  hasNotification?: boolean;
}

const NavButton = ({ icon, label, active, hasNotification }: NavButtonProps) => {
  return (
    <Button 
      variant="ghost" 
      className={cn(
        "relative flex items-center gap-2 px-4 py-2 hover:bg-cyber-purple/20",
        active && "text-cyber-purple border-b-2 border-cyber-purple rounded-none"
      )}
    >
      {icon}
      <span>{label}</span>
      
      {hasNotification && (
        <span className="absolute top-2 right-2 w-2 h-2 bg-cyber-cyan rounded-full animate-cyber-pulse" />
      )}
    </Button>
  );
};

export default Header;

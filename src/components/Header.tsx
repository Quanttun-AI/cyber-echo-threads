
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Bell, Search, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header = ({ onMenuToggle }: HeaderProps) => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyber-purple/20 backdrop-blur-xl bg-black/80">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm"
            className="md:hidden"
            onClick={onMenuToggle}
          >
            <Menu size={20} />
          </Button>
        
          <Link to="/" className="text-xl font-bold tracking-wider">
            <span className="neon-text neon-text-purple">Echo</span>
            <span className="neon-text neon-text-cyan">Sphere</span>
          </Link>
          
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

        <div className="flex items-center gap-2">
          <Link to="/messages">
            <Button 
              variant="ghost" 
              size="icon" 
              className="bg-black/20 backdrop-blur-lg border border-cyan-500/30 hover:bg-cyber-cyan/20"
            >
              <Bell size={20} className="text-cyber-cyan" />
            </Button>
          </Link>
          
          <LanguageSwitcher />
          
          <Link to="/profile/user_x273">
            <Button 
              variant="ghost" 
              size="sm"
              className="flex items-center gap-2 bg-black/20 backdrop-blur-lg border border-cyber-green/30 hover:bg-cyber-green/20"
            >
              <User size={18} className="text-cyber-green" />
              <span className="hidden md:inline">User_X273</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;


import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const LanguageSwitcher = () => {
  const { language, setLanguage, isChanging } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'pt', label: 'PT', flag: '🇧🇷' },
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'jp', label: 'JP', flag: '🇯🇵' },
  ];

  const handleLanguageChange = (lang: 'pt' | 'en' | 'jp') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "flex items-center gap-2 bg-black/20 backdrop-blur-lg border border-cyber-purple/30 hover:bg-cyber-purple/20 text-white",
          isOpen && "bg-cyber-purple/20"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe size={16} className="text-cyber-cyan" />
        <span className={cn(
          "transition-all duration-300",
          isChanging && "animate-channel-change"
        )}>
          {languages.find(l => l.code === language)?.flag}
          {languages.find(l => l.code === language)?.label}
        </span>
      </Button>

      {isOpen && (
        <div className="absolute top-10 right-0 w-24 bg-black border border-cyber-purple/50 shadow-lg rounded-md z-50 overflow-hidden backdrop-blur-lg">
          <div className="p-1 flex flex-col gap-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={cn(
                  "flex items-center gap-2 p-2 hover:bg-cyber-purple/20 text-sm transition-all rounded",
                  language === lang.code && "bg-cyber-purple/30 text-white"
                )}
                onClick={() => handleLanguageChange(lang.code as 'pt' | 'en' | 'jp')}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

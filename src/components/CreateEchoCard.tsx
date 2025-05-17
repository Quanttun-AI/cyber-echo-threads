
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Image, Mic, Film, Users, Hash } from 'lucide-react';
import { cn } from '@/lib/utils';

const CreateEchoCard = () => {
  const { t } = useLanguage();
  const [content, setContent] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleFocus = () => {
    setIsExpanded(true);
  };
  
  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (!content) {
      setIsExpanded(false);
    }
  };
  
  const handleSubmit = () => {
    if (content.trim()) {
      console.log('Creating new echo:', content);
      setContent('');
      setIsExpanded(false);
    }
  };
  
  return (
    <div className="cyber-card p-4 mb-6">
      <div className="flex gap-3">
        <Avatar className="h-10 w-10 border border-cyber-purple/50 bg-black">
          <img src="https://i.pravatar.cc/150?img=37" alt="Your avatar" />
        </Avatar>
        
        <div className="flex-1">
          <textarea
            className={cn(
              "w-full bg-transparent border border-cyber-purple/30 rounded-md p-3 resize-none transition-all duration-300 focus:outline-none focus:border-cyber-purple/70",
              isExpanded ? "h-32" : "h-12"
            )}
            placeholder={t('whatsOnYourMind')}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          
          {isExpanded && (
            <>
              <div className="flex flex-wrap gap-2 mt-4">
                <Button variant="outline" size="sm" className="border-cyber-cyan/50 text-cyber-cyan hover:bg-cyber-cyan/20 hover:text-white">
                  <Image size={16} className="mr-1" />
                  <span>Image</span>
                </Button>
                <Button variant="outline" size="sm" className="border-cyber-purple/50 text-cyber-purple hover:bg-cyber-purple/20 hover:text-white">
                  <Film size={16} className="mr-1" />
                  <span>Video</span>
                </Button>
                <Button variant="outline" size="sm" className="border-cyber-green/50 text-cyber-green hover:bg-cyber-green/20 hover:text-white">
                  <Mic size={16} className="mr-1" />
                  <span>Audio</span>
                </Button>
                <Button variant="outline" size="sm" className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/20 hover:text-white">
                  <Users size={16} className="mr-1" />
                  <span>Circle</span>
                </Button>
                <Button variant="outline" size="sm" className="border-blue-500/50 text-blue-500 hover:bg-blue-500/20 hover:text-white">
                  <Hash size={16} className="mr-1" />
                  <span>Tag</span>
                </Button>
              </div>
              
              <div className="flex justify-end mt-4">
                <Button
                  className="bg-cyber-purple hover:bg-cyber-purple/80 text-white"
                  onClick={handleSubmit}
                  disabled={!content.trim()}
                >
                  {t('createEcho')}
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateEchoCard;

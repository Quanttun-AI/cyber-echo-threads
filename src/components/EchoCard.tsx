
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MessageCircle, Share, RefreshCw } from 'lucide-react';

interface EchoCardProps {
  username: string;
  userHandle: string;
  userAvatar: string;
  content: string;
  image?: string;
  timestamp: string;
  reactions: {
    inspirational: number;
    interesting: number;
    wantToTalk: number;
    touching: number;
    mindChanged: number;
  };
  comments: number;
  reverbs: number;
}

const EchoCard: React.FC<EchoCardProps> = ({
  username,
  userHandle,
  userAvatar,
  content,
  image,
  timestamp,
  reactions,
  comments,
  reverbs,
}) => {
  const { t } = useLanguage();
  const [activeReaction, setActiveReaction] = useState<string | null>(null);
  const [isWaving, setIsWaving] = useState(false);

  const handleReaction = (reaction: string) => {
    setActiveReaction(activeReaction === reaction ? null : reaction);
  };
  
  const handleReverb = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 1500);
  };

  return (
    <div className="cyber-card p-4 mb-6 animate-float">
      {/* Wave Animation */}
      {isWaving && (
        <div className="absolute inset-0 rounded-lg z-0">
          <div className="absolute inset-0 rounded-lg border-2 border-cyber-green animate-echo-wave"></div>
        </div>
      )}
      
      <div className="flex items-start gap-3 relative z-10">
        <Avatar className="h-10 w-10 border border-cyber-purple/50 bg-black">
          <img src={userAvatar} alt={username} />
        </Avatar>
        
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">
              {username}
            </span>
            <span className="text-xs text-gray-400 font-mono">
              @{userHandle} • {timestamp}
            </span>
          </div>
          
          <p className="mt-2 text-white/90 mb-3">{content}</p>
          
          {image && (
            <div className="mt-3 mb-4 rounded-md overflow-hidden border border-cyber-purple/30">
              <img src={image} alt="Echo content" className="w-full" />
            </div>
          )}
          
          {/* Reaction Buttons */}
          <div className="flex flex-wrap gap-2 mt-4">
            <ReactionButton
              label={t('inspirational')}
              count={reactions.inspirational}
              isActive={activeReaction === 'inspirational'}
              onClick={() => handleReaction('inspirational')}
              color="text-yellow-400 border-yellow-400/30"
              activeColor="border-yellow-400 bg-yellow-400/20"
            />
            
            <ReactionButton
              label={t('interesting')}
              count={reactions.interesting}
              isActive={activeReaction === 'interesting'}
              onClick={() => handleReaction('interesting')}
              color="text-cyber-cyan border-cyan-500/30"
              activeColor="border-cyan-500 bg-cyan-500/20"
            />
            
            <ReactionButton
              label={t('wantToTalk')}
              count={reactions.wantToTalk}
              isActive={activeReaction === 'wantToTalk'}
              onClick={() => handleReaction('wantToTalk')}
              color="text-blue-400 border-blue-400/30"
              activeColor="border-blue-400 bg-blue-400/20"
            />
            
            <ReactionButton
              label={t('touching')}
              count={reactions.touching}
              isActive={activeReaction === 'touching'}
              onClick={() => handleReaction('touching')}
              color="text-red-400 border-red-400/30"
              activeColor="border-red-400 bg-red-400/20"
            />
            
            <ReactionButton
              label={t('mindChanged')}
              count={reactions.mindChanged}
              isActive={activeReaction === 'mindChanged'}
              onClick={() => handleReaction('mindChanged')}
              color="text-cyber-green border-green-400/30"
              activeColor="border-green-400 bg-green-400/20"
            />
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center justify-between mt-4 border-t border-cyber-purple/20 pt-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-400 hover:text-white hover:bg-cyber-purple/20"
            >
              <MessageCircle size={18} className="mr-1" />
              <span>{comments}</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className={cn(
                "text-gray-400 hover:text-cyber-green hover:bg-cyber-green/20",
                isWaving && "text-cyber-green"
              )}
              onClick={handleReverb}
            >
              <RefreshCw size={18} className="mr-1" />
              <span>{reverbs}</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-400 hover:text-cyber-cyan hover:bg-cyber-cyan/20"
            >
              <Share size={18} className="mr-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ReactionButtonProps {
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
  color: string;
  activeColor: string;
}

const ReactionButton: React.FC<ReactionButtonProps> = ({ 
  label, count, isActive, onClick, color, activeColor 
}) => {
  return (
    <button 
      className={cn(
        "px-2 py-1 text-xs rounded border flex items-center gap-1 transition-all",
        color,
        isActive && activeColor
      )}
      onClick={onClick}
    >
      <span>{label.split(' ')[0]}</span>
      {count > 0 && <span>{count}</span>}
    </button>
  );
};

export default EchoCard;

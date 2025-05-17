
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { TrendingUp, Users, Zap } from 'lucide-react';

const TrendingSidebar = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('trending');
  
  return (
    <div className="cyber-card p-4 h-full">
      <div className="flex gap-2 mb-4 border-b border-cyber-purple/20 pb-3">
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "flex items-center gap-2",
            activeTab === 'trending' && "text-cyber-cyan border-b-2 border-cyber-cyan"
          )}
          onClick={() => setActiveTab('trending')}
        >
          <TrendingUp size={16} />
          <span>{t('trending')}</span>
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "flex items-center gap-2",
            activeTab === 'forYou' && "text-cyber-purple border-b-2 border-cyber-purple"
          )}
          onClick={() => setActiveTab('forYou')}
        >
          <Zap size={16} />
          <span>{t('forYou')}</span>
        </Button>
      </div>
      
      {activeTab === 'trending' && <TrendingTopics />}
      {activeTab === 'forYou' && <SuggestedCircles />}
    </div>
  );
};

const TrendingTopics = () => {
  const trendingTopics = [
    { tag: 'CyberConsciousness', posts: 2541, category: 'Technology' },
    { tag: 'NeuralInterface', posts: 1893, category: 'Science' },
    { tag: 'QuantumAI', posts: 1432, category: 'Technology' },
    { tag: 'VirtualIdentity', posts: 1245, category: 'Philosophy' },
    { tag: 'DigitalArt', posts: 985, category: 'Art' },
  ];
  
  return (
    <div className="space-y-4">
      {trendingTopics.map((topic, index) => (
        <div key={index} className="border-b border-cyber-purple/20 pb-3 last:border-0">
          <div className="text-xs text-gray-400 font-mono">{topic.category}</div>
          <div className="text-cyber-cyan font-medium mt-1">#{topic.tag}</div>
          <div className="text-xs text-gray-400 mt-1">{topic.posts.toLocaleString()} Echoes</div>
        </div>
      ))}
    </div>
  );
};

const SuggestedCircles = () => {
  const circles = [
    { name: 'Synthetic Reality', members: 5240, icon: '🔮' },
    { name: 'Digital Philosophy', members: 3981, icon: '🧠' },
    { name: 'Cyber Art Collective', members: 3421, icon: '🎨' },
    { name: 'Neon Dreamers', members: 2789, icon: '💫' },
    { name: 'Tech Shamans', members: 1976, icon: '⚡' },
  ];
  
  return (
    <div className="space-y-4">
      {circles.map((circle, index) => (
        <div key={index} className="flex items-center gap-3 border-b border-cyber-purple/20 pb-3 last:border-0">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyber-purple/20 text-xl">
            {circle.icon}
          </div>
          <div className="flex-1">
            <div className="text-white font-medium">{circle.name}</div>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Users size={12} />
              <span>{circle.members.toLocaleString()}</span>
            </div>
          </div>
          <Button size="sm" variant="ghost" className="border border-cyber-purple/50 hover:bg-cyber-purple/20">
            Join
          </Button>
        </div>
      ))}
    </div>
  );
};

export default TrendingSidebar;

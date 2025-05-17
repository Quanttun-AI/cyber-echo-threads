
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Plus, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample data for circles
const circlesData = [
  {
    id: 'synthetic-reality',
    name: 'Synthetic Reality',
    icon: '🔮',
    color: 'purple',
    members: 5240,
    description: 'Discussing the philosophical implications of synthetic experiences and virtual reality.',
    cover: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'digital-philosophy',
    name: 'Digital Philosophy',
    icon: '🧠',
    color: 'cyan',
    members: 3981,
    description: 'Exploring the intersection of technology, consciousness, and digital existence.',
    cover: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'cyber-art-collective',
    name: 'Cyber Art Collective',
    icon: '🎨',
    color: 'green',
    members: 3421,
    description: 'Digital artists pushing the boundaries of expression in the cyberpunk era.',
    cover: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'neon-dreamers',
    name: 'Neon Dreamers',
    icon: '💫',
    color: 'pink',
    members: 2789,
    description: 'Dream architects crafting visions of neon-soaked futures and parallel realities.',
    cover: 'https://images.unsplash.com/photo-1549605659-32d82da3a059?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'tech-shamans',
    name: 'Tech Shamans',
    icon: '⚡',
    color: 'orange',
    members: 1976,
    description: 'Merging ancient wisdom with cutting-edge technology for collective consciousness expansion.',
    cover: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  }
];

const Circles = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('yourCircles');
  
  const filteredCircles = circlesData.filter(circle =>
    circle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    circle.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const getColorClass = (color: string) => {
    switch (color) {
      case 'purple': return 'from-cyber-purple/40 to-transparent';
      case 'cyan': return 'from-cyber-cyan/40 to-transparent';
      case 'green': return 'from-cyber-green/40 to-transparent';
      case 'pink': return 'from-[#FF10F0]/40 to-transparent';
      case 'orange': return 'from-yellow-500/40 to-transparent';
      default: return 'from-cyber-purple/40 to-transparent';
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">{t('circles')}</h1>
        <Button className="bg-cyber-green hover:bg-cyber-green/80 text-black font-medium">
          <Plus size={16} className="mr-1" />
          New Circle
        </Button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyber-purple/60" size={18} />
          <Input
            placeholder="Search circles..."
            className="pl-10 bg-black/30 border-cyber-purple/30 focus:border-cyber-purple/70"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex border border-cyber-purple/30 rounded-md">
          <Button
            variant="ghost"
            className={cn(
              "rounded-none border-r border-cyber-purple/30",
              activeTab === 'yourCircles' && "bg-cyber-purple/20 text-cyber-purple"
            )}
            onClick={() => setActiveTab('yourCircles')}
          >
            Your Circles
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "rounded-none",
              activeTab === 'discover' && "bg-cyber-cyan/20 text-cyber-cyan"
            )}
            onClick={() => setActiveTab('discover')}
          >
            Discover
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCircles.map((circle) => (
          <Link to={`/circles/${circle.id}`} key={circle.id} className="block group">
            <div className="cyber-card overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(138,43,226,0.3)]">
              <div className="h-40 relative">
                <img 
                  src={circle.cover} 
                  alt={circle.name} 
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${getColorClass(circle.color)}`} />
                <div className="absolute bottom-0 left-0 w-full p-4 flex items-end">
                  <div className="w-12 h-12 flex items-center justify-center text-2xl bg-black rounded-full border-2 border-white/10 shadow-lg mr-3">
                    {circle.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl">{circle.name}</h3>
                    <div className="flex items-center text-sm text-white/70">
                      <Users size={14} className="mr-1" />
                      <span>{circle.members.toLocaleString()} members</span>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <div className="px-3 py-1 bg-black/70 rounded-full text-xs border border-white/20 backdrop-blur-sm">
                      Join
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-300 line-clamp-2">{circle.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full border border-black bg-cyber-black overflow-hidden">
                        <img 
                          src={`https://i.pravatar.cc/24?img=${30 + i}`} 
                          alt="Member" 
                        />
                      </div>
                    ))}
                    <div className="w-6 h-6 rounded-full bg-cyber-purple/30 border border-cyber-purple/50 flex items-center justify-center text-[10px]">
                      +{circle.members - 3}
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 font-mono">
                    12 new echoes today
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Circles;

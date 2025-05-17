
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EchoCard from '@/components/EchoCard';
import { Users, MessageCircle, Settings, Info, User, Bell } from 'lucide-react';

// Sample circle data
const circlesData = {
  'synthetic-reality': {
    id: 'synthetic-reality',
    name: 'Synthetic Reality',
    icon: '🔮',
    color: 'purple',
    members: 5240,
    description: 'Discussing the philosophical implications of synthetic experiences and virtual reality. We explore the boundaries between real and virtual, the nature of consciousness in synthetic environments, and the future of human experience in an increasingly virtual world.',
    cover: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    moderators: [
      { name: 'Quantum_Drift', avatar: 'https://i.pravatar.cc/150?img=15' },
      { name: 'Neural_Ghost', avatar: 'https://i.pravatar.cc/150?img=33' }
    ],
    echoes: [
      {
        username: 'Neural_Ghost',
        userHandle: 'neural_ghost',
        userAvatar: 'https://i.pravatar.cc/150?img=33',
        content: 'As fronteiras entre consciência humana e IA estão se dissolvendo. Qual será o próximo passo na evolução da simbiose homem-máquina?',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        timestamp: '2h',
        reactions: {
          inspirational: 24,
          interesting: 18,
          wantToTalk: 7,
          touching: 5,
          mindChanged: 12
        },
        comments: 8,
        reverbs: 15
      },
      {
        username: 'Quantum_Drift',
        userHandle: 'quantum_drift',
        userAvatar: 'https://i.pravatar.cc/150?img=15',
        content: 'A realidade sintética pode ser mais autêntica que a "realidade real"? Quando nossas experiências são mediadas por interfaces digitais, a distinção entre real e virtual se torna cada vez mais tênue.',
        timestamp: '5h',
        reactions: {
          inspirational: 19,
          interesting: 27,
          wantToTalk: 15,
          touching: 3,
          mindChanged: 9
        },
        comments: 12,
        reverbs: 8
      }
    ],
    discussions: [
      { 
        title: 'Consciousness transfer protocols',
        author: 'Tech_Shaman',
        responses: 34,
        lastActivity: '3h ago' 
      },
      { 
        title: 'Neural interfaces: current limitations',
        author: 'Neon_Priestess',
        responses: 27,
        lastActivity: '12h ago' 
      },
      { 
        title: 'The ethics of synthetic experiences',
        author: 'Cyber_Shaman',
        responses: 52,
        lastActivity: '1d ago' 
      }
    ]
  }
};

const CircleDetail = () => {
  const { t } = useLanguage();
  const { circleId } = useParams();
  const [activeTab, setActiveTab] = useState('echoes');
  const [isJoined, setIsJoined] = useState(false);
  
  // In a real app we would fetch circle data based on circleId
  const circle = circlesData[circleId as keyof typeof circlesData];
  
  if (!circle) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="text-6xl mb-4">🔮</div>
        <h2 className="text-2xl font-bold mb-2">Circle Not Found</h2>
        <p className="text-gray-400">This circle may have been deleted or never existed.</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      {/* Cover & Header */}
      <div className="relative h-48 md:h-64 w-full rounded-lg overflow-hidden">
        <img 
          src={circle.cover} 
          alt={circle.name}
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-16 h-16 flex items-center justify-center text-3xl bg-black rounded-full border-2 border-cyber-purple/50 shadow-lg mr-4">
                {circle.icon}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">{circle.name}</h1>
                <div className="flex items-center text-sm text-white/70">
                  <Users size={14} className="mr-1" />
                  <span>{circle.members.toLocaleString()} members</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              {isJoined ? (
                <>
                  <Button variant="outline" className="border-cyber-cyan/50 text-cyber-cyan hover:bg-cyber-cyan/20">
                    <Bell size={16} className="mr-1" />
                    Notifications
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-cyber-purple/50 bg-cyber-purple/20 text-cyber-purple hover:bg-cyber-purple/30"
                    onClick={() => setIsJoined(false)}
                  >
                    Joined
                  </Button>
                </>
              ) : (
                <Button 
                  className="bg-cyber-purple hover:bg-cyber-purple/80 text-white"
                  onClick={() => setIsJoined(true)}
                >
                  Join Circle
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Description */}
      <div className="cyber-card p-4 border border-cyber-purple/30">
        <div className="text-gray-300">{circle.description}</div>
        
        <div className="mt-4 flex flex-wrap gap-4">
          <div className="flex items-center">
            <div className="text-cyber-cyan font-mono text-sm mr-2">Moderators:</div>
            <div className="flex -space-x-2">
              {circle.moderators.map((mod, index) => (
                <div key={index} className="w-6 h-6 rounded-full border border-cyber-purple/50 bg-black overflow-hidden">
                  <img 
                    src={mod.avatar} 
                    alt={mod.name} 
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="text-cyber-cyan font-mono text-sm mr-2">Created:</div>
            <div className="text-sm">March 2024</div>
          </div>
        </div>
      </div>
      
      {/* Content Tabs */}
      <Tabs 
        value={activeTab} 
        onValueChange={setActiveTab} 
        className="w-full"
      >
        <TabsList className="grid grid-cols-4 bg-black/60 border border-cyber-purple/30 rounded-lg">
          <TabsTrigger 
            value="echoes"
            className="data-[state=active]:bg-cyber-purple/20 data-[state=active]:text-cyber-purple"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Echoes
          </TabsTrigger>
          <TabsTrigger 
            value="discussions"
            className="data-[state=active]:bg-cyber-cyan/20 data-[state=active]:text-cyber-cyan"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Discussions
          </TabsTrigger>
          <TabsTrigger 
            value="members"
            className="data-[state=active]:bg-cyber-green/20 data-[state=active]:text-cyber-green"
          >
            <User className="w-4 h-4 mr-2" />
            Members
          </TabsTrigger>
          <TabsTrigger 
            value="about"
            className="data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-500"
          >
            <Info className="w-4 h-4 mr-2" />
            About
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="echoes" className="space-y-6 mt-6">
          {circle.echoes.map((echo, index) => (
            <EchoCard key={index} {...echo} />
          ))}
        </TabsContent>
        
        <TabsContent value="discussions" className="mt-6">
          <div className="cyber-card overflow-hidden border border-cyber-cyan/30">
            <div className="flex justify-between items-center p-4 border-b border-cyber-cyan/20">
              <h3 className="font-medium text-cyber-cyan">Forum Discussions</h3>
              <Button size="sm" variant="outline" className="border-cyber-cyan/50 text-cyber-cyan hover:bg-cyber-cyan/20">
                New Topic
              </Button>
            </div>
            
            <div className="divide-y divide-cyber-cyan/10">
              {circle.discussions.map((discussion, index) => (
                <div key={index} className="p-4 hover:bg-cyber-cyan/5 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-white hover:text-cyber-cyan transition-colors">
                        {discussion.title}
                      </h4>
                      <div className="text-sm text-gray-400">
                        Started by <span className="text-cyber-cyan">@{discussion.author}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-mono text-cyber-cyan">{discussion.responses} replies</div>
                      <div className="text-xs text-gray-500">Last activity: {discussion.lastActivity}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="members" className="mt-6">
          <div className="cyber-card p-4 border border-cyber-green/30">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-cyber-green">Members ({circle.members.toLocaleString()})</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Find members..." 
                  className="bg-black/50 border border-cyber-green/30 rounded-full px-4 py-1 text-sm focus:outline-none focus:border-cyber-green/70"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between p-2 hover:bg-cyber-green/5 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img src={`https://i.pravatar.cc/40?img=${15 + i}`} alt="Member" />
                    </div>
                    <div>
                      <div className="font-medium">User_00{i}</div>
                      <div className="text-xs text-gray-400">Joined 3 months ago</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-cyber-green">
                    View Profile
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="mt-4 text-center">
              <Button variant="ghost" className="text-cyber-green">
                Show More Members
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="about" className="mt-6">
          <div className="cyber-card p-4 border border-yellow-500/30">
            <h3 className="text-lg font-medium text-yellow-500 mb-4">About This Circle</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-mono text-yellow-500/80 mb-1">Description</h4>
                <p className="text-gray-300">{circle.description}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-mono text-yellow-500/80 mb-1">Rules</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Respect all members and their perspectives</li>
                  <li>Stay on topic - this circle is about synthetic reality</li>
                  <li>No commercial promotion without moderator approval</li>
                  <li>Share original thoughts and give credit when referencing others</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-mono text-yellow-500/80 mb-1">Moderators</h4>
                <div className="flex flex-wrap gap-3">
                  {circle.moderators.map((mod, index) => (
                    <div key={index} className="flex items-center bg-yellow-500/10 px-2 py-1 rounded-lg">
                      <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                        <img src={mod.avatar} alt={mod.name} />
                      </div>
                      <span className="text-sm">@{mod.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-yellow-500/20 flex justify-end">
              <Button variant="outline" size="sm" className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10">
                <Settings className="w-4 h-4 mr-2" />
                Circle Settings
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CircleDetail;

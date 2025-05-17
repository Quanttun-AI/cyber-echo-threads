
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Search, Users, MessageCircle, User } from 'lucide-react';

// Sample data for trending topics
const trendingTopics = [
  { tag: 'CyberConsciousness', posts: 2541, category: 'Technology' },
  { tag: 'NeuralInterface', posts: 1893, category: 'Science' },
  { tag: 'QuantumAI', posts: 1432, category: 'Technology' },
  { tag: 'VirtualIdentity', posts: 1245, category: 'Philosophy' },
  { tag: 'DigitalArt', posts: 985, category: 'Art' },
];

// Sample data for trending echoes
const trendingEchoes = [
  {
    id: 1,
    content: "As fronteiras entre consciência humana e IA estão se dissolvendo. Qual será o próximo passo na evolução da simbiose homem-máquina?",
    user: {
      name: "Neural_Ghost",
      avatar: "https://i.pravatar.cc/150?img=33"
    },
    reactions: 284,
    comments: 42
  },
  {
    id: 2,
    content: "Implementei um protocolo de criptografia quântica baseado em emaranhamento. Estamos um passo mais perto de uma comunicação verdadeiramente segura.",
    user: {
      name: "Quantum_Drift",
      avatar: "https://i.pravatar.cc/150?img=15"
    },
    reactions: 156,
    comments: 29
  }
];

// Sample data for trending users
const trendingUsers = [
  {
    username: "Neural_Ghost",
    displayName: "Neural Ghost",
    avatar: "https://i.pravatar.cc/150?img=33",
    bio: "Explorando os limites entre consciência humana e inteligência artificial."
  },
  {
    username: "Cyber_Shaman",
    displayName: "Cyber Shaman",
    avatar: "https://i.pravatar.cc/150?img=68",
    bio: "Digital alchemist transforming code into consciousness."
  },
  {
    username: "Neon_Priestess",
    displayName: "Neon Priestess",
    avatar: "https://i.pravatar.cc/150?img=5",
    bio: "Studying neuroplasticity and consciousness in the digital age."
  },
  {
    username: "Quantum_Drift",
    displayName: "Quantum Drift",
    avatar: "https://i.pravatar.cc/150?img=15",
    bio: "Quantum cryptography researcher and digital rights advocate."
  }
];

const Explore = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('trending');
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Explore</h1>
        <div className="relative w-64">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyber-purple/60" />
          <input
            type="text"
            placeholder="Search EchoSphere..."
            className="w-full pl-10 pr-4 py-2 bg-black/30 border border-cyber-purple/30 rounded-md focus:outline-none focus:border-cyber-purple/70"
          />
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 bg-black/60 border border-cyber-purple/30 rounded-lg">
          <TabsTrigger
            value="trending"
            className="data-[state=active]:bg-cyber-purple/20 data-[state=active]:text-cyber-purple"
          >
            <TrendingUp size={16} className="mr-2" />
            Trending
          </TabsTrigger>
          <TabsTrigger
            value="users"
            className="data-[state=active]:bg-cyber-cyan/20 data-[state=active]:text-cyber-cyan"
          >
            <User size={16} className="mr-2" />
            Users
          </TabsTrigger>
          <TabsTrigger
            value="circles"
            className="data-[state=active]:bg-cyber-green/20 data-[state=active]:text-cyber-green"
          >
            <Users size={16} className="mr-2" />
            Circles
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="trending" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left column: Trending tags */}
            <div className="space-y-6">
              <div className="cyber-card overflow-hidden">
                <div className="bg-cyber-purple/20 p-4 border-b border-cyber-purple/30">
                  <h3 className="text-lg font-medium text-cyber-purple">Trending Tags</h3>
                </div>
                <div className="p-4">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="mb-4 last:mb-0 pb-4 last:pb-0 border-b last:border-0 border-cyber-purple/10">
                      <div className="text-xs text-gray-400 font-mono">{topic.category}</div>
                      <div className="text-cyber-cyan font-medium mt-1">#{topic.tag}</div>
                      <div className="text-xs text-gray-400 mt-1">{topic.posts.toLocaleString()} Echoes</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Middle & Right: Trending content */}
            <div className="col-span-2 space-y-6">
              <div className="cyber-card overflow-hidden">
                <div className="bg-cyber-purple/20 p-4 border-b border-cyber-purple/30">
                  <h3 className="text-lg font-medium text-cyber-purple">Trending Echoes</h3>
                </div>
                <div className="divide-y divide-cyber-purple/10">
                  {trendingEchoes.map((echo) => (
                    <div key={echo.id} className="p-5 hover:bg-cyber-purple/5">
                      <div className="flex items-start space-x-4">
                        <div className="h-10 w-10 rounded-full overflow-hidden">
                          <img src={echo.user.avatar} alt={echo.user.name} className="h-full w-full object-cover" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center mb-1">
                            <h4 className="font-medium text-white">{echo.user.name}</h4>
                            <span className="ml-2 text-xs text-gray-400">@{echo.user.name.toLowerCase()}</span>
                          </div>
                          
                          <p className="text-gray-300">{echo.content}</p>
                          
                          <div className="flex items-center mt-3">
                            <div className="flex items-center text-cyber-purple mr-4">
                              <TrendingUp size={16} className="mr-1" />
                              <span className="text-sm">{echo.reactions}</span>
                            </div>
                            <div className="flex items-center text-cyber-cyan">
                              <MessageCircle size={16} className="mr-1" />
                              <span className="text-sm">{echo.comments}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="cyber-card overflow-hidden">
                <div className="bg-cyber-purple/20 p-4 border-b border-cyber-purple/30">
                  <h3 className="text-lg font-medium text-cyber-purple">Featured Discussion</h3>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-medium mb-2">The Future of Synthetic Experience</h4>
                  <p className="text-gray-300 mb-4">A community discussion about the ethical and philosophical implications of fully immersive virtual experiences.</p>
                  
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="inline-block bg-cyber-purple/20 text-cyber-purple px-3 py-1 rounded-full text-xs">
                      #VirtualIdentity
                    </span>
                    <span className="inline-block bg-cyber-cyan/20 text-cyber-cyan px-3 py-1 rounded-full text-xs">
                      #Consciousness
                    </span>
                    <span className="inline-block bg-cyber-green/20 text-cyber-green px-3 py-1 rounded-full text-xs">
                      #Ethics
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                      {[33, 68, 15, 5].map((img, i) => (
                        <div key={i} className="h-8 w-8 rounded-full border border-black overflow-hidden">
                          <img src={`https://i.pravatar.cc/32?img=${img}`} alt="User" />
                        </div>
                      ))}
                      <div className="h-8 w-8 rounded-full bg-cyber-purple/30 border border-cyber-purple/50 flex items-center justify-center text-xs">
                        +82
                      </div>
                    </div>
                    
                    <Button variant="ghost" className="border border-cyber-purple/30 hover:bg-cyber-purple/20">
                      Join Discussion
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="users" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingUsers.map((user) => (
              <Link to={`/profile/${user.username.toLowerCase()}`} key={user.username} className="block group">
                <div className="cyber-card h-full transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                  <div className="p-6 text-center">
                    <div className="h-24 w-24 mx-auto rounded-full border-2 border-cyber-cyan/50 p-1 mb-4">
                      <img 
                        src={user.avatar} 
                        alt={user.displayName}
                        className="rounded-full h-full w-full object-cover" 
                      />
                    </div>
                    <h3 className="font-bold text-lg text-white mb-1">{user.displayName}</h3>
                    <div className="text-cyber-cyan font-mono text-sm mb-3">@{user.username}</div>
                    <p className="text-gray-400 text-sm line-clamp-3">{user.bio}</p>
                    
                    <Button 
                      variant="ghost"
                      size="sm"
                      className="mt-4 border border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan/20 w-full"
                    >
                      {t('viewProfile')}
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="circles" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="cyber-card p-6 flex flex-col items-center justify-center text-center h-48 bg-gradient-to-br from-cyber-purple/20 to-transparent">
              <div className="text-3xl mb-2">🔮</div>
              <h3 className="font-bold mb-1">Synthetic Reality</h3>
              <p className="text-sm text-gray-400">5,240 members</p>
              <Button variant="ghost" size="sm" className="mt-3 border border-cyber-purple/30 text-cyber-purple hover:bg-cyber-purple/20">
                View Circle
              </Button>
            </div>
            
            <div className="cyber-card p-6 flex flex-col items-center justify-center text-center h-48 bg-gradient-to-br from-cyber-cyan/20 to-transparent">
              <div className="text-3xl mb-2">🧠</div>
              <h3 className="font-bold mb-1">Digital Philosophy</h3>
              <p className="text-sm text-gray-400">3,981 members</p>
              <Button variant="ghost" size="sm" className="mt-3 border border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan/20">
                View Circle
              </Button>
            </div>
            
            <div className="cyber-card p-6 flex flex-col items-center justify-center text-center h-48 bg-gradient-to-br from-cyber-green/20 to-transparent">
              <div className="text-3xl mb-2">🎨</div>
              <h3 className="font-bold mb-1">Cyber Art Collective</h3>
              <p className="text-sm text-gray-400">3,421 members</p>
              <Button variant="ghost" size="sm" className="mt-3 border border-cyber-green/30 text-cyber-green hover:bg-cyber-green/20">
                View Circle
              </Button>
            </div>
            
            <div className="cyber-card p-6 flex flex-col items-center justify-center text-center h-48 bg-gradient-to-br from-[#FF10F0]/20 to-transparent">
              <div className="text-3xl mb-2">💫</div>
              <h3 className="font-bold mb-1">Neon Dreamers</h3>
              <p className="text-sm text-gray-400">2,789 members</p>
              <Button variant="ghost" size="sm" className="mt-3 border border-[#FF10F0]/30 text-[#FF10F0] hover:bg-[#FF10F0]/20">
                View Circle
              </Button>
            </div>
            
            <div className="cyber-card p-6 flex flex-col items-center justify-center text-center h-48 bg-gradient-to-br from-yellow-500/20 to-transparent">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-bold mb-1">Tech Shamans</h3>
              <p className="text-sm text-gray-400">1,976 members</p>
              <Button variant="ghost" size="sm" className="mt-3 border border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/20">
                View Circle
              </Button>
            </div>
            
            <div className="cyber-card p-6 flex flex-col items-center justify-center text-center h-48 bg-gradient-to-br from-cyber-purple/20 to-transparent border-dashed">
              <div className="text-3xl mb-2">➕</div>
              <h3 className="font-bold mb-1">Create New Circle</h3>
              <p className="text-sm text-gray-400">Start your own community</p>
              <Button variant="ghost" size="sm" className="mt-3 border border-cyber-purple/30 text-cyber-purple hover:bg-cyber-purple/20">
                Create Circle
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Explore;

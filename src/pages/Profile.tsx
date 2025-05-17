
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EchoCard from '@/components/EchoCard';
import { Edit, Users, Star, MessageCircle, ImageIcon } from 'lucide-react';

// Sample user data
const userData = {
  username: 'Neural_Ghost',
  displayName: 'Neural Ghost',
  avatar: 'https://i.pravatar.cc/150?img=33',
  bio: 'Explorando os limites entre consciência humana e inteligência artificial. Interessada em neuroplasticidade e experiências sensoriais expandidas.',
  location: 'Neo-Tokyo District',
  joined: 'Maio 2023',
  cover: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
  stats: {
    echoes: 127,
    reverbs: 843,
    connections: 291
  },
  badges: [
    { icon: '🧠', name: 'Deep Thinker', description: 'Creates thought-provoking content' },
    { icon: '✨', name: 'Inspiration', description: 'Consistently inspires others' },
    { icon: '🔮', name: 'Future Visionary', description: 'Explores cutting-edge concepts' }
  ],
  echoes: [
    {
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
      content: 'Os padrões de neuroplasticidade revelam que nossos cérebros estão evoluindo para processar informação de maneira fractal. A Era Digital está literalmente reescrevendo nossa consciência.',
      timestamp: '2d',
      reactions: {
        inspirational: 67,
        interesting: 45,
        wantToTalk: 22,
        touching: 8,
        mindChanged: 31
      },
      comments: 29,
      reverbs: 48
    }
  ]
};

const Profile = () => {
  const { t } = useLanguage();
  const { username } = useParams();
  const [activeTab, setActiveTab] = useState('echoes');
  
  // This would normally be a fetch call to get user data based on username
  const user = userData;
  
  return (
    <div className="space-y-6">
      {/* Cover Image */}
      <div className="relative h-48 md:h-64 w-full rounded-lg overflow-hidden">
        <img 
          src={user.cover} 
          alt="Cover" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>
      
      {/* Profile Header */}
      <div className="relative -mt-16 px-4">
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <Avatar className="h-24 w-24 border-4 border-cyber-black shadow-lg">
            <img src={user.avatar} alt={user.displayName} />
          </Avatar>
          
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-white">{user.displayName}</h1>
            <p className="text-cyber-cyan font-mono">@{user.username}</p>
          </div>
          
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline" className="border-cyber-cyan/50 text-cyber-cyan hover:bg-cyber-cyan/20">
              <MessageCircle size={16} className="mr-1" />
              Message
            </Button>
            <Button className="bg-cyber-purple hover:bg-cyber-purple/80">
              <Users size={16} className="mr-1" />
              Connect
            </Button>
            {username === 'user_x273' && (
              <Button variant="outline" className="border-cyber-green/50 text-cyber-green hover:bg-cyber-green/20">
                <Edit size={16} className="mr-1" />
                {t('editProfile')}
              </Button>
            )}
          </div>
        </div>
        
        {/* Bio */}
        <div className="mt-4 cyber-card p-4">
          <p className="text-gray-300">{user.bio}</p>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <ImageIcon size={14} />
              <span>{user.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>{t('joinedDate')}:</span>
              <span>{user.joined}</span>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-4 py-2 border-y border-cyber-purple/20">
            <div className="text-center">
              <div className="text-xl font-bold text-cyber-purple">{user.stats.echoes}</div>
              <div className="text-xs text-gray-400">{t('echoes')}</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-cyber-cyan">{user.stats.reverbs}</div>
              <div className="text-xs text-gray-400">{t('reverbs')}</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-cyber-green">{user.stats.connections}</div>
              <div className="text-xs text-gray-400">{t('connections')}</div>
            </div>
          </div>
          
          {/* Badges */}
          <div className="flex gap-2 mt-4">
            {user.badges.map((badge, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <div className="w-8 h-8 flex items-center justify-center bg-cyber-purple/20 border border-cyber-purple/40 rounded-full cursor-help">
                    {badge.icon}
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-64 bg-black/90 border border-cyber-purple/40 backdrop-blur-lg text-white">
                  <div className="flex items-center gap-2">
                    <div className="text-2xl">{badge.icon}</div>
                    <div>
                      <div className="font-bold text-cyber-purple">{badge.name}</div>
                      <div className="text-sm text-gray-300">{badge.description}</div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </div>
      
      {/* Content Tabs */}
      <div>
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab} 
          className="w-full"
        >
          <TabsList className="grid grid-cols-3 bg-black/60 border border-cyber-purple/30 rounded-lg">
            <TabsTrigger 
              value="echoes"
              className="data-[state=active]:bg-cyber-purple/20 data-[state=active]:text-cyber-purple"
            >
              {t('echoes')}
            </TabsTrigger>
            <TabsTrigger 
              value="media"
              className="data-[state=active]:bg-cyber-cyan/20 data-[state=active]:text-cyber-cyan"
            >
              Media
            </TabsTrigger>
            <TabsTrigger 
              value="liked"
              className="data-[state=active]:bg-cyber-green/20 data-[state=active]:text-cyber-green"
            >
              Liked
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="echoes" className="space-y-6 mt-6">
            {user.echoes.map((echo, index) => (
              <EchoCard 
                key={index}
                username={user.displayName}
                userHandle={user.username}
                userAvatar={user.avatar}
                content={echo.content}
                image={echo.image}
                timestamp={echo.timestamp}
                reactions={echo.reactions}
                comments={echo.comments}
                reverbs={echo.reverbs}
              />
            ))}
          </TabsContent>
          
          <TabsContent value="media" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                alt="Media" 
                className="w-full h-40 object-cover rounded-lg border border-cyber-purple/30 hover:border-cyber-purple/60 transition-all cursor-pointer"
              />
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                alt="Media" 
                className="w-full h-40 object-cover rounded-lg border border-cyber-purple/30 hover:border-cyber-purple/60 transition-all cursor-pointer"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="liked" className="mt-6">
            <div className="cyber-card p-6 flex flex-col items-center justify-center text-center">
              <Star size={40} className="text-cyber-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Favorite Echoes</h3>
              <p className="text-gray-400">Echoes that {user.displayName} has reacted to will appear here.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;

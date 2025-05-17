
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import EchoCard from '@/components/EchoCard';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

// Sample data for echo cards
const echoes = [
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
    username: 'Cyber_Shaman',
    userHandle: 'cyber_shaman',
    userAvatar: 'https://i.pravatar.cc/150?img=68',
    content: 'A manipulação direta dos sonhos se tornou realidade. Agora podemos compartilhar fragmentos de nossa inconsciência como novas formas de arte. O que isso significa para o futuro da expressão?',
    timestamp: '4h',
    reactions: {
      inspirational: 42,
      interesting: 37,
      wantToTalk: 19,
      touching: 15,
      mindChanged: 28
    },
    comments: 23,
    reverbs: 31
  },
  {
    username: 'Quantum_Drift',
    userHandle: 'quantum_drift',
    userAvatar: 'https://i.pravatar.cc/150?img=15',
    content: 'Implementei um protocolo de criptografia quântica baseado em emaranhamento. Estamos um passo mais perto de uma comunicação verdadeiramente segura.',
    timestamp: '6h',
    reactions: {
      inspirational: 15,
      interesting: 53,
      wantToTalk: 34,
      touching: 2,
      mindChanged: 17
    },
    comments: 41,
    reverbs: 22
  },
  {
    username: 'Neon_Priestess',
    userHandle: 'neon_priestess',
    userAvatar: 'https://i.pravatar.cc/150?img=5',
    content: 'Os padrões de neuroplasticidade revelam que nossos cérebros estão evoluindo para processar informação de maneira fractal. A Era Digital está literalmente reescrevendo nossa consciência.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    timestamp: '12h',
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
];

const Feed = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('forYou');
  const [showFilters, setShowFilters] = useState(false);
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <Button 
            variant="ghost" 
            className={`font-mono ${activeTab === 'forYou' ? 'text-cyber-purple border-b-2 border-cyber-purple' : 'text-gray-400'}`}
            onClick={() => setActiveTab('forYou')}
          >
            {t('forYou')}
          </Button>
          <Button 
            variant="ghost" 
            className={`font-mono ${activeTab === 'trending' ? 'text-cyber-cyan border-b-2 border-cyber-cyan' : 'text-gray-400'}`}
            onClick={() => setActiveTab('trending')}
          >
            {t('trending')}
          </Button>
        </div>
        
        <Button 
          variant="outline" 
          className="border-cyber-green/40 text-cyber-green hover:bg-cyber-green/10" 
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter size={16} className="mr-1" />
          Filter
        </Button>
      </div>
      
      {showFilters && (
        <div className="cyber-card p-4 animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <Button variant="outline" size="sm" className="border-cyber-cyan/40 text-cyber-cyan hover:bg-cyber-cyan/10">
              Text
            </Button>
            <Button variant="outline" size="sm" className="border-cyber-purple/40 text-cyber-purple hover:bg-cyber-purple/10">
              Images
            </Button>
            <Button variant="outline" size="sm" className="border-cyber-green/40 text-cyber-green hover:bg-cyber-green/10">
              Audio
            </Button>
            <Button variant="outline" size="sm" className="border-yellow-500/40 text-yellow-500 hover:bg-yellow-500/10">
              Video
            </Button>
          </div>
        </div>
      )}
      
      <div className="space-y-6">
        {echoes.map((echo, index) => (
          <EchoCard key={index} {...echo} />
        ))}
        
        <div className="flex justify-center py-8">
          <Button className="echo-button echo-button-cyan">
            Load More Echoes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Feed;

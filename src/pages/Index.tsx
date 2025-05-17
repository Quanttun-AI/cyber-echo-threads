
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import CreateEchoCard from '@/components/CreateEchoCard';
import EchoCard from '@/components/EchoCard';
import TrendingSidebar from '@/components/TrendingSidebar';
import { Button } from '@/components/ui/button';

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
];

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cyber-black text-white">
        <Header />
        
        <main className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Feed */}
            <div className="md:col-span-2 space-y-6">
              <CreateEchoCard />
              
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
            
            {/* Sidebar */}
            <div className="hidden md:block">
              <TrendingSidebar />
            </div>
          </div>
        </main>
      </div>
    </LanguageProvider>
  );
};

export default Index;

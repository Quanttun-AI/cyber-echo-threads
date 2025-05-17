
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Users, Globe } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  // Auto-redirect to feed after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/feed');
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cyber-black">
      <div className="text-center max-w-3xl mx-auto px-4">
        <div className="mb-8 text-6xl md:text-8xl font-orbitron tracking-wider">
          <span className="block mb-2">
            <span className="neon-text neon-text-purple">Echo</span>
            <span className="neon-text neon-text-cyan">Sphere</span>
          </span>
        </div>
        
        <p className="text-xl md:text-2xl mb-12 text-gray-300">
          A rede social para mentes profundas no mundo digital
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="cyber-card p-6 text-center">
            <MessageCircle size={40} className="mx-auto mb-4 text-cyber-purple" />
            <h3 className="text-lg font-semibold mb-2">Ecos Profundos</h3>
            <p className="text-gray-400 text-sm">Compartilhe ideias que importam e geram reflexões genuínas</p>
          </div>
          
          <div className="cyber-card p-6 text-center">
            <Users size={40} className="mx-auto mb-4 text-cyber-cyan" />
            <h3 className="text-lg font-semibold mb-2">Círculos Temáticos</h3>
            <p className="text-gray-400 text-sm">Conecte-se em comunidades com interesses e visões similares</p>
          </div>
          
          <div className="cyber-card p-6 text-center">
            <Globe size={40} className="mx-auto mb-4 text-cyber-green" />
            <h3 className="text-lg font-semibold mb-2">Exploração Digital</h3>
            <p className="text-gray-400 text-sm">Descubra conteúdo que desafia sua visão de mundo</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link to="/feed">
            <Button size="lg" className="bg-cyber-purple hover:bg-cyber-purple/80 min-w-[200px]">
              Entrar no Feed
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
          
          <Link to="/explore">
            <Button size="lg" variant="outline" className="border-cyber-cyan/50 text-cyber-cyan hover:bg-cyber-cyan/20 min-w-[200px]">
              Explorar
              <Globe size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          Redirecionando para o feed em alguns segundos...
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <div className="text-xs text-gray-500">
          EchoSphere © 2025 • Cyberpunk Social Network
        </div>
      </div>
    </div>
  );
};

export default Index;

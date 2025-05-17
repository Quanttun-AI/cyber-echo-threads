
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send, User, Phone, Video } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
  isOwn: boolean;
}

interface Contact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  lastActive: string;
  isOnline: boolean;
}

const Messages = () => {
  const { t } = useLanguage();
  const { userId } = useParams();
  const [currentMessage, setCurrentMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [activeContact, setActiveContact] = useState<Contact | null>(null);

  // Mock data for contacts
  useEffect(() => {
    // In a real app, this would come from an API
    const mockContacts: Contact[] = [
      {
        id: "user1",
        name: "Raven_Digitalis",
        avatar: "/placeholder.svg",
        lastMessage: "Você viu aquele novo implante neural?",
        lastActive: "2 min",
        isOnline: true
      },
      {
        id: "user2",
        name: "Chrome_Edge",
        avatar: "/placeholder.svg",
        lastMessage: "A corporação está monitorando...",
        lastActive: "1h",
        isOnline: true
      },
      {
        id: "user3",
        name: "NeonBlade",
        avatar: "/placeholder.svg",
        lastMessage: "Tenho informações sobre aquele código",
        lastActive: "5h",
        isOnline: false
      }
    ];
    
    setContacts(mockContacts);

    // Set active contact based on URL param
    if (userId) {
      const found = mockContacts.find(c => c.id === userId);
      if (found) setActiveContact(found);
    } else if (mockContacts.length > 0) {
      setActiveContact(mockContacts[0]);
    }
  }, [userId]);

  // Mock messages
  useEffect(() => {
    if (activeContact) {
      const mockMessages: Message[] = [
        {
          id: "m1",
          senderId: activeContact.id,
          text: "Ei, você viu as últimas notícias sobre os implantes cerebrais?",
          timestamp: new Date(Date.now() - 3600000),
          isOwn: false
        },
        {
          id: "m2",
          senderId: "me",
          text: "Sim, parece que a NetCorps finalmente conseguiu mapear as sinapses completas.",
          timestamp: new Date(Date.now() - 3000000),
          isOwn: true
        },
        {
          id: "m3",
          senderId: activeContact.id,
          text: "Isso é insano! Você acha que vale a pena fazer o upgrade?",
          timestamp: new Date(Date.now() - 2400000),
          isOwn: false
        },
        {
          id: "m4",
          senderId: "me",
          text: "Ainda estou pensando. O preço é alto, mas as vantagens parecem valer a pena. O que você pensa?",
          timestamp: new Date(Date.now() - 1800000),
          isOwn: true
        }
      ];
      setMessages(mockMessages);
    }
  }, [activeContact]);

  const handleSendMessage = () => {
    if (!currentMessage.trim() || !activeContact) return;
    
    const newMessage: Message = {
      id: `m${Date.now()}`,
      senderId: "me",
      text: currentMessage,
      timestamp: new Date(),
      isOwn: true
    };
    
    setMessages([...messages, newMessage]);
    setCurrentMessage('');
  };

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-9rem)] gap-4">
      {/* Contacts Sidebar */}
      <div className="w-full md:w-80 border border-cyber-purple/20 rounded-lg bg-black/40 backdrop-blur-lg">
        <div className="p-4 border-b border-cyber-purple/20">
          <h2 className="text-xl font-orbitron text-cyber-purple">{t('messages')}</h2>
        </div>
        <ScrollArea className="h-[calc(100%-4rem)]">
          <div className="p-2">
            {contacts.map(contact => (
              <div
                key={contact.id}
                onClick={() => setActiveContact(contact)}
                className={`flex items-center gap-3 p-3 mb-2 rounded-md cursor-pointer transition-all ${activeContact?.id === contact.id 
                  ? 'bg-cyber-purple/20 border border-cyber-purple/40' 
                  : 'hover:bg-gray-900'}`}
              >
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={contact.avatar} />
                    <AvatarFallback>{contact.name[0]}</AvatarFallback>
                  </Avatar>
                  {contact.isOnline && (
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-cyber-green border-2 border-black"></span>
                  )}
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="flex justify-between">
                    <span className="font-medium text-cyber-cyan">{contact.name}</span>
                    <span className="text-xs text-gray-400">{contact.lastActive}</span>
                  </div>
                  <p className="text-xs text-gray-400 truncate">{contact.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Chat Area */}
      {activeContact ? (
        <div className="flex-1 flex flex-col border border-cyber-cyan/20 rounded-lg bg-black/40 backdrop-blur-lg overflow-hidden">
          {/* Chat Header */}
          <div className="p-4 border-b border-cyber-cyan/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={activeContact.avatar} />
                <AvatarFallback>{activeContact.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium text-cyber-cyan">{activeContact.name}</h3>
                <span className="text-xs text-gray-400">
                  {activeContact.isOnline ? t('online') : t('lastSeen') + ' ' + activeContact.lastActive}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="text-cyber-cyan border border-cyber-cyan/30">
                <Phone size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="text-cyber-green border border-cyber-green/30">
                <Video size={18} />
              </Button>
            </div>
          </div>
          
          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              <div className="text-center">
                <span className="text-xs text-gray-500 bg-gray-900/50 px-3 py-1 rounded-full">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
              
              {messages.map(message => (
                <div 
                  key={message.id} 
                  className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.isOwn
                        ? 'bg-cyber-purple/20 border border-cyber-purple/40 text-white'
                        : 'bg-gray-900/60 border border-gray-700/40 text-gray-300'
                    }`}
                  >
                    <p>{message.text}</p>
                    <span className="text-xs text-gray-400 block text-right mt-1">
                      {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          {/* Input Area */}
          <div className="p-4 border-t border-cyber-cyan/30 flex gap-2">
            <Input
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              placeholder={t('typeMessage')}
              className="bg-black/50 border-cyber-cyan/30 focus:border-cyber-cyan/70"
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button 
              onClick={handleSendMessage}
              className="bg-cyber-cyan hover:bg-cyber-cyan/90"
            >
              <Send size={18} />
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center border border-gray-800 rounded-lg bg-black/40">
          <div className="text-center p-6">
            <User size={48} className="mx-auto mb-4 text-gray-600" />
            <h3 className="text-xl text-gray-400 font-orbitron">{t('selectContact')}</h3>
            <p className="text-gray-500 mt-2">{t('selectContactDesc')}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;

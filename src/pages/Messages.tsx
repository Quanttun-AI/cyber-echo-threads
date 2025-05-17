
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MoreHorizontal, Send, Mic, Image } from 'lucide-react';

// Sample conversations data
const conversationsData = [
  {
    id: '1',
    username: 'Neural_Ghost',
    displayName: 'Neural Ghost',
    avatar: 'https://i.pravatar.cc/150?img=33',
    lastMessage: 'What do you think about the latest neural interface developments?',
    timestamp: '10:42',
    unread: 2,
    online: true
  },
  {
    id: '2',
    username: 'Cyber_Shaman',
    displayName: 'Cyber Shaman',
    avatar: 'https://i.pravatar.cc/150?img=68',
    lastMessage: 'I found a new way to visualize consciousness patterns.',
    timestamp: '09:15',
    unread: 0,
    online: false
  },
  {
    id: '3',
    username: 'Neon_Priestess',
    displayName: 'Neon Priestess',
    avatar: 'https://i.pravatar.cc/150?img=5',
    lastMessage: 'The research paper you sent was fascinating.',
    timestamp: 'Yesterday',
    unread: 0,
    online: true
  },
  {
    id: '4',
    username: 'Quantum_Drift',
    displayName: 'Quantum Drift',
    avatar: 'https://i.pravatar.cc/150?img=15',
    lastMessage: 'Let me know when you've tested the encryption protocol.',
    timestamp: 'Yesterday',
    unread: 0,
    online: false
  }
];

// Sample message history for Neural_Ghost
const messageHistoryData = {
  '1': [
    {
      id: 'm1',
      sender: 'Neural_Ghost',
      content: 'Hey, have you seen the latest developments in neural interface technology?',
      timestamp: 'Yesterday, 19:32'
    },
    {
      id: 'm2',
      sender: 'user',
      content: 'I've been following some research papers. Which ones are you referring to?',
      timestamp: 'Yesterday, 20:15'
    },
    {
      id: 'm3',
      sender: 'Neural_Ghost',
      content: 'The new non-invasive interfaces that can read detailed neural patterns without surgery.',
      timestamp: 'Yesterday, 20:18'
    },
    {
      id: 'm4',
      sender: 'user',
      content: 'Oh yes! The quantum sensor arrays. Really promising for accessibility.',
      timestamp: 'Yesterday, 20:22'
    },
    {
      id: 'm5',
      sender: 'Neural_Ghost',
      content: 'Exactly! What do you think about the potential for direct thought-to-text applications?',
      timestamp: 'Today, 10:42'
    },
    {
      id: 'm6',
      sender: 'Neural_Ghost',
      content: 'I'm working on a prototype that could transform how we interact with our devices.',
      timestamp: 'Today, 10:42'
    }
  ]
};

const Messages = () => {
  const { t } = useLanguage();
  const { userId } = useParams();
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter conversations based on search query
  const filteredConversations = conversationsData.filter(
    (convo) =>
      convo.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      convo.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get selected conversation
  const selectedConversation = userId
    ? conversationsData.find((convo) => convo.id === userId)
    : null;

  // Get message history for selected conversation
  const messageHistory = userId ? messageHistoryData[userId as keyof typeof messageHistoryData] || [] : [];

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <div className="flex h-[calc(100vh-16rem)]">
      {/* Left sidebar - Conversations list */}
      <div className="w-80 border-r border-cyber-purple/20 overflow-hidden flex flex-col">
        <div className="p-4 border-b border-cyber-purple/20">
          <h2 className="text-lg font-semibold mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyber-purple/60" size={16} />
            <Input
              placeholder="Search conversations..."
              className="pl-10 bg-black/30 border-cyber-purple/30 focus:border-cyber-purple/70"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          {filteredConversations.map((convo) => (
            <a
              key={convo.id}
              href={`/messages/${convo.id}`}
              className={`flex items-center p-4 hover:bg-cyber-purple/10 transition-colors relative ${
                userId === convo.id ? 'bg-cyber-purple/20' : ''
              }`}
            >
              <div className="relative mr-3">
                <Avatar className="h-12 w-12 border border-cyber-purple/40">
                  <img src={convo.avatar} alt={convo.displayName} />
                </Avatar>
                {convo.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-cyber-green rounded-full border border-black" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <div className="font-medium truncate">{convo.displayName}</div>
                  <div className="text-xs text-gray-400">{convo.timestamp}</div>
                </div>
                <div className="text-sm text-gray-400 truncate">
                  {convo.lastMessage}
                </div>
              </div>

              {convo.unread > 0 && (
                <div className="ml-2 bg-cyber-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {convo.unread}
                </div>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Right side - Messages or placeholder */}
      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <>
            {/* Conversation header */}
            <div className="p-4 border-b border-cyber-purple/20 flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3 border border-cyber-purple/40">
                  <img src={selectedConversation.avatar} alt={selectedConversation.displayName} />
                </Avatar>
                <div>
                  <div className="font-medium">{selectedConversation.displayName}</div>
                  <div className="text-xs text-gray-400">@{selectedConversation.username}</div>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreHorizontal size={20} />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-auto">
              <div className="space-y-4">
                {/* Conversation starter */}
                <div className="cyber-card p-4 mx-auto max-w-sm text-center">
                  <div className="text-cyber-cyan font-mono text-sm mb-2">NEURAL LINK ESTABLISHED</div>
                  <p>This is the beginning of your conversation with {selectedConversation.displayName}.</p>
                </div>

                {/* Message history */}
                {messageHistory.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        msg.sender === 'user'
                          ? 'bg-cyber-purple/30 border border-cyber-purple/50'
                          : 'bg-black/50 border border-cyber-cyan/30'
                      }`}
                    >
                      <div className="text-sm">{msg.content}</div>
                      <div
                        className={`text-xs mt-1 ${
                          msg.sender === 'user'
                            ? 'text-cyber-purple/70 text-right'
                            : 'text-cyber-cyan/70'
                        }`}
                      >
                        {msg.timestamp}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                <div className="flex justify-start">
                  <div className="bg-black/50 border border-cyber-cyan/30 rounded-lg p-3">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping" />
                      <div className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping delay-100" />
                      <div className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping delay-200" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Message input */}
            <div className="p-4 border-t border-cyber-purple/20">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-cyber-purple">
                  <Image size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-cyber-purple">
                  <Mic size={20} />
                </Button>
                <div className="flex-1 relative">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write a message..."
                    className="bg-black/30 border-cyber-purple/30 focus:border-cyber-purple/70 pr-12"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSendMessage();
                      }
                    }}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0 bg-cyber-purple hover:bg-cyber-purple/80"
                  >
                    <Send size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="cyber-card p-8 text-center max-w-md">
              <div className="text-6xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-2">Your Messages</h3>
              <p className="text-gray-400 mb-6">
                Select a conversation or start a new one to send messages to other users.
              </p>
              <Button className="bg-cyber-cyan hover:bg-cyber-cyan/80 text-black">
                Start New Conversation
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;

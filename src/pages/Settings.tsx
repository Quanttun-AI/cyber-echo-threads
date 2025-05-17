
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Avatar } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Globe, Bell, Shield, User, LogOut } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Settings = () => {
  const { t, language, setLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState('account');
  const [notifications, setNotifications] = useState({
    mentions: true,
    comments: true,
    reverbs: true,
    directMessages: true,
    newCircles: false,
  });
  const [privacy, setPrivacy] = useState({
    privateProfile: false,
    showActivity: true,
    allowTagging: true,
    showReadReceipts: true,
  });
  
  const handleSaveChanges = () => {
    toast({
      title: "Settings updated",
      description: "Your settings have been saved successfully",
    });
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">{t('settings')}</h1>
      
      <div className="cyber-card overflow-hidden">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex border-b border-cyber-purple/20">
            <TabsList className="bg-transparent h-auto p-0 flex">
              <SettingsTab 
                icon={<User size={18} />}
                value="account"
                activeTab={activeTab}
                label="Account"
                color="purple"
              />
              <SettingsTab 
                icon={<Globe size={18} />}
                value="language"
                activeTab={activeTab}
                label="Language"
                color="cyan"
              />
              <SettingsTab 
                icon={<Bell size={18} />}
                value="notifications"
                activeTab={activeTab}
                label="Notifications"
                color="green"
              />
              <SettingsTab 
                icon={<Shield size={18} />}
                value="privacy"
                activeTab={activeTab}
                label="Privacy"
                color="yellow"
              />
            </TabsList>
          </div>
          
          <div className="p-6">
            <TabsContent value="account" className="mt-0">
              <h2 className="text-xl font-semibold mb-4 text-cyber-purple">Account Settings</h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="h-24 w-24 border-2 border-cyber-purple/50">
                    <img src="https://i.pravatar.cc/150?img=37" alt="Your avatar" />
                  </Avatar>
                  
                  <div className="space-y-2">
                    <Button variant="outline" className="border-cyber-purple/50 text-cyber-purple hover:bg-cyber-purple/20">
                      Change Avatar
                    </Button>
                    <div className="text-sm text-gray-400">Recommended: Square JPG, PNG, or GIF, at least 400x400 pixels.</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="displayName">Display Name</Label>
                    <Input id="displayName" defaultValue="User X273" className="bg-black/30 border-cyber-purple/30 focus:border-cyber-purple/70" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="user_x273" className="bg-black/30 border-cyber-purple/30 focus:border-cyber-purple/70" disabled />
                    <div className="text-xs text-gray-500">Usernames cannot be changed</div>
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea 
                      id="bio" 
                      rows={3}
                      defaultValue="Digital explorer and tech enthusiast. Interested in neural interfaces and synthetic experiences."
                      className="w-full bg-black/30 border border-cyber-purple/30 rounded-md p-2 focus:outline-none focus:border-cyber-purple/70"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="user@echosphere.com" className="bg-black/30 border-cyber-purple/30 focus:border-cyber-purple/70" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" value="••••••••••" className="bg-black/30 border-cyber-purple/30 focus:border-cyber-purple/70" disabled />
                    <Button variant="link" className="text-cyber-purple p-0 h-auto">Change Password</Button>
                  </div>
                </div>
                
                <div className="border-t border-cyber-purple/20 pt-6 mt-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-cyber-purple">Danger Zone</h3>
                      <p className="text-sm text-gray-400">Permanently delete your account and all your data.</p>
                    </div>
                    <Button variant="destructive">Delete Account</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="language" className="mt-0">
              <h2 className="text-xl font-semibold mb-4 text-cyber-cyan">Language Settings</h2>
              
              <div className="space-y-6">
                <div className="cyber-card bg-black/50 p-6 border border-cyber-cyan/30">
                  <h3 className="font-medium text-cyber-cyan mb-4">Interface Language</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button 
                      variant="outline"
                      className={`h-auto py-6 ${language === 'pt' ? 'bg-cyber-cyan/20 border-cyber-cyan' : 'border-cyber-cyan/30'}`}
                      onClick={() => setLanguage('pt')}
                    >
                      <div className="text-center">
                        <div className="text-3xl mb-2">🇧🇷</div>
                        <div className="font-medium text-lg">Português</div>
                        <div className="text-xs text-gray-400">Brazilian Portuguese</div>
                      </div>
                    </Button>
                    
                    <Button 
                      variant="outline"
                      className={`h-auto py-6 ${language === 'en' ? 'bg-cyber-cyan/20 border-cyber-cyan' : 'border-cyber-cyan/30'}`}
                      onClick={() => setLanguage('en')}
                    >
                      <div className="text-center">
                        <div className="text-3xl mb-2">🇺🇸</div>
                        <div className="font-medium text-lg">English</div>
                        <div className="text-xs text-gray-400">American English</div>
                      </div>
                    </Button>
                    
                    <Button 
                      variant="outline"
                      className={`h-auto py-6 ${language === 'jp' ? 'bg-cyber-cyan/20 border-cyber-cyan' : 'border-cyber-cyan/30'}`}
                      onClick={() => setLanguage('jp')}
                    >
                      <div className="text-center">
                        <div className="text-3xl mb-2">🇯🇵</div>
                        <div className="font-medium text-lg">日本語</div>
                        <div className="text-xs text-gray-400">Japanese</div>
                      </div>
                    </Button>
                  </div>
                  
                  <div className="mt-6 text-sm text-gray-400">
                    <p>Language changes will be applied immediately across the entire application.</p>
                  </div>
                </div>
                
                <div className="cyber-card bg-black/50 p-6 border border-cyber-cyan/30">
                  <h3 className="font-medium text-cyber-cyan mb-4">Regional Settings</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="dateFormat">Date Format</Label>
                      <select 
                        id="dateFormat" 
                        className="w-full bg-black/30 border border-cyber-cyan/30 rounded-md p-2 focus:outline-none focus:border-cyber-cyan/70"
                      >
                        <option value="DMY">DD/MM/YYYY (Day first)</option>
                        <option value="MDY">MM/DD/YYYY (Month first)</option>
                        <option value="YMD">YYYY/MM/DD (Year first)</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="timeFormat">Time Format</Label>
                      <select 
                        id="timeFormat" 
                        className="w-full bg-black/30 border border-cyber-cyan/30 rounded-md p-2 focus:outline-none focus:border-cyber-cyan/70"
                      >
                        <option value="24">24-hour (13:00)</option>
                        <option value="12">12-hour (1:00 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="notifications" className="mt-0">
              <h2 className="text-xl font-semibold mb-4 text-cyber-green">Notification Settings</h2>
              
              <div className="space-y-6">
                <div className="cyber-card bg-black/50 p-6 border border-cyber-green/30">
                  <h3 className="font-medium text-cyber-green mb-4">Email Notifications</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="notify-mentions" className="text-white">Mentions</Label>
                        <p className="text-sm text-gray-400">Receive emails when someone mentions you</p>
                      </div>
                      <Switch 
                        id="notify-mentions" 
                        checked={notifications.mentions}
                        onCheckedChange={(checked) => setNotifications({...notifications, mentions: checked})}
                        className="data-[state=checked]:bg-cyber-green"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="notify-comments" className="text-white">Comments</Label>
                        <p className="text-sm text-gray-400">Receive emails when someone comments on your echo</p>
                      </div>
                      <Switch 
                        id="notify-comments" 
                        checked={notifications.comments}
                        onCheckedChange={(checked) => setNotifications({...notifications, comments: checked})}
                        className="data-[state=checked]:bg-cyber-green"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="notify-reverbs" className="text-white">Reverbs</Label>
                        <p className="text-sm text-gray-400">Receive emails when someone reverberates your echo</p>
                      </div>
                      <Switch 
                        id="notify-reverbs" 
                        checked={notifications.reverbs}
                        onCheckedChange={(checked) => setNotifications({...notifications, reverbs: checked})}
                        className="data-[state=checked]:bg-cyber-green"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="cyber-card bg-black/50 p-6 border border-cyber-green/30">
                  <h3 className="font-medium text-cyber-green mb-4">In-App Notifications</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="notify-dms" className="text-white">Direct Messages</Label>
                        <p className="text-sm text-gray-400">Receive notifications for new direct messages</p>
                      </div>
                      <Switch 
                        id="notify-dms" 
                        checked={notifications.directMessages}
                        onCheckedChange={(checked) => setNotifications({...notifications, directMessages: checked})}
                        className="data-[state=checked]:bg-cyber-green"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="notify-circles" className="text-white">New Circles</Label>
                        <p className="text-sm text-gray-400">Receive notifications about new circles you might be interested in</p>
                      </div>
                      <Switch 
                        id="notify-circles" 
                        checked={notifications.newCircles}
                        onCheckedChange={(checked) => setNotifications({...notifications, newCircles: checked})}
                        className="data-[state=checked]:bg-cyber-green"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="privacy" className="mt-0">
              <h2 className="text-xl font-semibold mb-4 text-yellow-500">Privacy Settings</h2>
              
              <div className="space-y-6">
                <div className="cyber-card bg-black/50 p-6 border border-yellow-500/30">
                  <h3 className="font-medium text-yellow-500 mb-4">Profile Privacy</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="private-profile" className="text-white">Private Profile</Label>
                        <p className="text-sm text-gray-400">Only approved connections can see your full profile</p>
                      </div>
                      <Switch 
                        id="private-profile" 
                        checked={privacy.privateProfile}
                        onCheckedChange={(checked) => setPrivacy({...privacy, privateProfile: checked})}
                        className="data-[state=checked]:bg-yellow-500"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="show-activity" className="text-white">Activity Status</Label>
                        <p className="text-sm text-gray-400">Show when you're active on EchoSphere</p>
                      </div>
                      <Switch 
                        id="show-activity" 
                        checked={privacy.showActivity}
                        onCheckedChange={(checked) => setPrivacy({...privacy, showActivity: checked})}
                        className="data-[state=checked]:bg-yellow-500"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="cyber-card bg-black/50 p-6 border border-yellow-500/30">
                  <h3 className="font-medium text-yellow-500 mb-4">Interaction Privacy</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="allow-tagging" className="text-white">Allow Tagging</Label>
                        <p className="text-sm text-gray-400">Allow other users to tag you in their echoes</p>
                      </div>
                      <Switch 
                        id="allow-tagging" 
                        checked={privacy.allowTagging}
                        onCheckedChange={(checked) => setPrivacy({...privacy, allowTagging: checked})}
                        className="data-[state=checked]:bg-yellow-500"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="read-receipts" className="text-white">Read Receipts</Label>
                        <p className="text-sm text-gray-400">Show others when you've read their messages</p>
                      </div>
                      <Switch 
                        id="read-receipts" 
                        checked={privacy.showReadReceipts}
                        onCheckedChange={(checked) => setPrivacy({...privacy, showReadReceipts: checked})}
                        className="data-[state=checked]:bg-yellow-500"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="cyber-card bg-black/50 p-6 border border-yellow-500/30">
                  <h3 className="font-medium text-yellow-500 mb-4">Security</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-white">Two-Factor Authentication</Label>
                        <p className="text-sm text-gray-400">Add an extra layer of security to your account</p>
                      </div>
                      <Button variant="outline" className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/20">
                        Enable 2FA
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-white">Active Sessions</Label>
                        <p className="text-sm text-gray-400">Manage devices where you're currently logged in</p>
                      </div>
                      <Button variant="outline" className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/20">
                        Manage Sessions
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
          
          <div className="p-6 border-t border-cyber-purple/20 flex justify-between items-center">
            <Button variant="outline" className="border-cyber-purple/50 text-red-500 hover:bg-red-500/20">
              <LogOut size={16} className="mr-2" />
              {t('logout')}
            </Button>
            
            <Button onClick={handleSaveChanges} className="bg-cyber-purple hover:bg-cyber-purple/80">
              Save Changes
            </Button>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

interface SettingsTabProps {
  icon: React.ReactNode;
  value: string;
  activeTab: string;
  label: string;
  color: 'purple' | 'cyan' | 'green' | 'yellow';
}

const SettingsTab = ({ icon, value, activeTab, label, color }: SettingsTabProps) => {
  const colorClasses = {
    purple: 'border-cyber-purple text-cyber-purple',
    cyan: 'border-cyber-cyan text-cyber-cyan',
    green: 'border-cyber-green text-cyber-green',
    yellow: 'border-yellow-500 text-yellow-500',
  };
  
  return (
    <TabsTrigger 
      value={value} 
      className={`
        flex items-center gap-2 px-4 py-3 rounded-none border-b-2 border-transparent
        data-[state=active]:bg-transparent data-[state=active]:${colorClasses[color]}
      `}
    >
      {icon}
      <span>{label}</span>
    </TabsTrigger>
  );
};

export default Settings;

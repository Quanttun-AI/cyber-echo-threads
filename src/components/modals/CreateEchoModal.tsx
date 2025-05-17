
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { Image, Mic, Film, Users, Hash } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface CreateEchoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateEchoModal = ({ isOpen, onClose }: CreateEchoModalProps) => {
  const { t } = useLanguage();
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<File | null>(null);
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedMedia(file);
      setMediaPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!content.trim() && !selectedMedia) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Creating new echo:", { content, media: selectedMedia });
      toast({
        title: "Echo created",
        description: "Your echo was successfully sent into the digital void",
      });
      
      // Reset form
      setContent('');
      setSelectedMedia(null);
      setMediaPreview(null);
      onClose();
    } catch (error) {
      console.error("Failed to create echo:", error);
      toast({
        title: "Error",
        description: "Failed to create echo. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl bg-black/95 border border-cyber-purple/30 backdrop-blur-xl text-white">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-orbitron text-cyber-cyan">
            {t('createEcho')}
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex gap-3 pt-4">
          <Avatar className="h-10 w-10 border border-cyber-purple/50 bg-black">
            <img src="https://i.pravatar.cc/150?img=37" alt="Your avatar" />
          </Avatar>
          
          <div className="flex-1">
            <textarea
              className="w-full bg-transparent border border-cyber-purple/30 rounded-md p-3 resize-none h-32 focus:outline-none focus:border-cyber-purple/70"
              placeholder={t('whatsOnYourMind')}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            
            {mediaPreview && (
              <div className="mt-3 relative">
                <img 
                  src={mediaPreview} 
                  alt="Preview" 
                  className="w-full h-auto max-h-64 object-contain rounded-md border border-cyber-cyan/30" 
                />
                <Button 
                  size="sm" 
                  variant="destructive" 
                  className="absolute top-2 right-2" 
                  onClick={() => {
                    setSelectedMedia(null);
                    setMediaPreview(null);
                  }}
                >
                  Remove
                </Button>
              </div>
            )}
            
            <div className="flex flex-wrap gap-2 mt-4">
              <label className="cursor-pointer">
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleMediaChange}
                />
                <Button variant="outline" size="sm" className="border-cyber-cyan/50 text-cyber-cyan hover:bg-cyber-cyan/20 hover:text-white" type="button">
                  <Image size={16} className="mr-1" />
                  <span>Image</span>
                </Button>
              </label>
              
              <Button variant="outline" size="sm" className="border-cyber-purple/50 text-cyber-purple hover:bg-cyber-purple/20 hover:text-white">
                <Film size={16} className="mr-1" />
                <span>Video</span>
              </Button>
              
              <Button variant="outline" size="sm" className="border-cyber-green/50 text-cyber-green hover:bg-cyber-green/20 hover:text-white">
                <Mic size={16} className="mr-1" />
                <span>Audio</span>
              </Button>
              
              <Button variant="outline" size="sm" className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/20 hover:text-white">
                <Users size={16} className="mr-1" />
                <span>Circle</span>
              </Button>
              
              <Button variant="outline" size="sm" className="border-blue-500/50 text-blue-500 hover:bg-blue-500/20 hover:text-white">
                <Hash size={16} className="mr-1" />
                <span>Tag</span>
              </Button>
            </div>
          </div>
        </div>
        
        <DialogFooter className="sm:justify-end">
          <Button
            variant="ghost"
            onClick={onClose}
            className="border border-cyber-purple/30 hover:bg-cyber-purple/20"
          >
            {t('cancel')}
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-cyber-purple hover:bg-cyber-purple/80 text-white"
            disabled={(!content.trim() && !selectedMedia) || isSubmitting}
          >
            {isSubmitting ? (
              <div className="animate-pulse">Processing...</div>
            ) : (
              t('createEcho')
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateEchoModal;

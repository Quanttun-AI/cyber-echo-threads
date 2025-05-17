
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt' | 'en' | 'jp';

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  pt: {
    home: 'Início',
    profile: 'Perfil',
    circles: 'Círculos',
    notifications: 'Notificações',
    search: 'Buscar na EchoSphere...',
    trending: 'Em alta',
    forYou: 'Para você',
    createEcho: 'Criar Eco',
    whatsOnYourMind: 'O que está em sua mente?',
    inspirational: '✨ Inspirador',
    interesting: '🔍 Interessante',
    wantToTalk: '💬 Quero conversar',
    touching: '❤️ Tocante',
    mindChanged: '🤯 Mudou minha visão',
    reverb: 'Reverberar',
    writeComment: 'Escreva um comentário...',
    viewProfile: 'Ver perfil',
    joinedDate: 'Ingressou em',
    echoes: 'Ecos',
    reverbs: 'Reverberações',
    connections: 'Conexões',
    editProfile: 'Editar Perfil',
    settings: 'Configurações',
    logout: 'Sair',
  },
  en: {
    home: 'Home',
    profile: 'Profile',
    circles: 'Circles',
    notifications: 'Notifications',
    search: 'Search EchoSphere...',
    trending: 'Trending',
    forYou: 'For You',
    createEcho: 'Create Echo',
    whatsOnYourMind: "What's on your mind?",
    inspirational: '✨ Inspirational',
    interesting: '🔍 Interesting',
    wantToTalk: '💬 Want to talk',
    touching: '❤️ Touching',
    mindChanged: '🤯 Changed my mind',
    reverb: 'Reverb',
    writeComment: 'Write a comment...',
    viewProfile: 'View profile',
    joinedDate: 'Joined',
    echoes: 'Echoes',
    reverbs: 'Reverbs',
    connections: 'Connections',
    editProfile: 'Edit Profile',
    settings: 'Settings',
    logout: 'Logout',
  },
  jp: {
    home: 'ホーム',
    profile: 'プロフィール',
    circles: 'サークル',
    notifications: '通知',
    search: 'エコースフィアで検索...',
    trending: 'トレンド',
    forYou: 'あなたへ',
    createEcho: 'エコーを作成',
    whatsOnYourMind: '何を考えていますか？',
    inspirational: '✨ インスピレーション',
    interesting: '🔍 興味深い',
    wantToTalk: '💬 話したい',
    touching: '❤️ 感動的',
    mindChanged: '🤯 考えが変わった',
    reverb: 'リバーブ',
    writeComment: 'コメントを書く...',
    viewProfile: 'プロフィールを見る',
    joinedDate: '登録日',
    echoes: 'エコー',
    reverbs: 'リバーブ',
    connections: 'コネクション',
    editProfile: 'プロフィール編集',
    settings: '設定',
    logout: 'ログアウト',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  t: (key: string) => string;
  isChanging: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');
  const [isChanging, setIsChanging] = useState(false);

  const changeLanguage = (newLang: React.SetStateAction<Language>) => {
    setIsChanging(true);
    setTimeout(() => {
      setLanguage(newLang);
      setTimeout(() => {
        setIsChanging(false);
      }, 400);
    }, 400);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t, isChanging }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

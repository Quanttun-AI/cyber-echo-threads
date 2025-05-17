
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
    messages: 'Mensagens',
    settings: 'Configurações',
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
    explore: 'Explorar',
    cancel: 'Cancelar',
    save: 'Salvar',
    delete: 'Excluir',
    join: 'Participar',
    logout: 'Sair',
    send: 'Enviar',
    media: 'Mídia',
    liked: 'Curtidos',
    discussions: 'Discussões',
    members: 'Membros',
    about: 'Sobre',
    online: 'Online',
    offline: 'Offline',
    join_circle: 'Entrar no Círculo',
    load_more: 'Carregar Mais',
    create_new_circle: 'Criar Novo Círculo',
    replies: 'Respostas',
    trending_topics: 'Tópicos em Alta',
    trending_circles: 'Círculos em Alta',
    trending_users: 'Usuários em Alta',
    bio: 'Bio',
    email: 'E-mail',
    password: 'Senha',
    account_settings: 'Configurações da Conta',
    language_settings: 'Configurações de Idioma',
    notification_settings: 'Configurações de Notificação',
    privacy_settings: 'Configurações de Privacidade',
    change_avatar: 'Mudar Avatar',
    change_password: 'Mudar Senha',
    delete_account: 'Excluir Conta',
    danger_zone: 'Zona de Perigo',
    save_changes: 'Salvar Alterações',
  },
  en: {
    home: 'Home',
    profile: 'Profile',
    circles: 'Circles',
    notifications: 'Notifications',
    messages: 'Messages',
    settings: 'Settings',
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
    explore: 'Explore',
    cancel: 'Cancel',
    save: 'Save',
    delete: 'Delete',
    join: 'Join',
    logout: 'Logout',
    send: 'Send',
    media: 'Media',
    liked: 'Liked',
    discussions: 'Discussions',
    members: 'Members',
    about: 'About',
    online: 'Online',
    offline: 'Offline',
    join_circle: 'Join Circle',
    load_more: 'Load More',
    create_new_circle: 'Create New Circle',
    replies: 'Replies',
    trending_topics: 'Trending Topics',
    trending_circles: 'Trending Circles',
    trending_users: 'Trending Users',
    bio: 'Bio',
    email: 'Email',
    password: 'Password',
    account_settings: 'Account Settings',
    language_settings: 'Language Settings',
    notification_settings: 'Notification Settings',
    privacy_settings: 'Privacy Settings',
    change_avatar: 'Change Avatar',
    change_password: 'Change Password',
    delete_account: 'Delete Account',
    danger_zone: 'Danger Zone',
    save_changes: 'Save Changes',
  },
  jp: {
    home: 'ホーム',
    profile: 'プロフィール',
    circles: 'サークル',
    notifications: '通知',
    messages: 'メッセージ',
    settings: '設定',
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
    explore: '探索',
    cancel: 'キャンセル',
    save: '保存',
    delete: '削除',
    join: '参加する',
    logout: 'ログアウト',
    send: '送信',
    media: 'メディア',
    liked: 'いいね済み',
    discussions: 'ディスカッション',
    members: 'メンバー',
    about: '詳細',
    online: 'オンライン',
    offline: 'オフライン',
    join_circle: 'サークルに参加',
    load_more: 'もっと読み込む',
    create_new_circle: '新しいサークルを作成',
    replies: '返信',
    trending_topics: '人気のトピック',
    trending_circles: '人気のサークル',
    trending_users: '人気のユーザー',
    bio: '自己紹介',
    email: 'メール',
    password: 'パスワード',
    account_settings: 'アカウント設定',
    language_settings: '言語設定',
    notification_settings: '通知設定',
    privacy_settings: 'プライバシー設定',
    change_avatar: 'アバターを変更',
    change_password: 'パスワードを変更',
    delete_account: 'アカウントを削除',
    danger_zone: '危険ゾーン',
    save_changes: '変更を保存',
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

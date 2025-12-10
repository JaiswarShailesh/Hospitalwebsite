"use client";

import { createContext, useContext } from "react";

const TranslationContext = createContext({});

export function TranslationsProvider({ messages, children }) {
  return (
    <TranslationContext.Provider value={messages}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslations() {
  const messages = useContext(TranslationContext);

  return (key) => messages[key] || key;
}

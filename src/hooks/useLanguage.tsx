import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

const LanguageContext = createContext<{ language: string, setLanguage: (arg: string) => void }>(
  { language:"Deutsch", setLanguage:(arg:string)=>{}});

export const useLanguage = () => useContext(LanguageContext);

export const ProvideLanguage: React.FC<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<string>("Deutsch");
  useEffect(() => {
    AsyncStorage.getItem("@language")
      .then((maybeLanguage) => {
        if (maybeLanguage !== null) {
          setLanguage(maybeLanguage);
        }
      })
      .catch((e) => {
      });
  }, []);

  useEffect(()=>{
    AsyncStorage.setItem("@language",language).then();
  }, [language])

  return (
    <LanguageContext.Provider value={{ language: language, setLanguage: setLanguage }}>
      {children}
    </LanguageContext.Provider>);
};
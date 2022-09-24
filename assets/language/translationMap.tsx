export const TranslationMap: {[key:string]:string} = {
  "Ja":"Yes",
  "Nein":"No",
  "Notfall":"Emergency",
  "Sprache": "Language",
  "Helfer Account": "Helper Account",
}

export function safeTranslate(german:string, language:string){
  if(TranslationMap[german]===null){
    return "Translation not found for " + german
  }else{
    if(language !== "Deutsch"){
      return TranslationMap[german];
    }
    return german;
  }
}
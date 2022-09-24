// Map that translates german words to english
export const TranslationMap: {[key:string]:string} = {
  "Ja":"Yes",
  "Nein":"No",
  "Notfall":"Emergency",
  "Sprache": "Language",
  "Helfer Account": "Helper Account",
  "Einstellungen": "Settings",
  "Es sind schon": "There are already",
  "Helfende auf dem Weg zu dir": "helpers on their way to you",
  "Bleibe":"Stay",
  "ruhig":"calm",
  "mach auf dich":"make yourself",
  "aufmerksam":"noticeable",
  "Meine Situation hat sich verändert": "Something changed about my Situation",
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
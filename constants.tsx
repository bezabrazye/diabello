import React from 'react';

export const AppName = "Diabello";

export const UI_TEXT_LV = {
  // Welcome & Auth
  WELCOME_HEADER: "Pieslēdzies asistentam!",
  LOGIN_PROMPT_USERNAME: "Tavs lietotājvārds vai e-pasts",
  LOGIN_INPUT_USERNAME: "ievadi datus",
  LOGIN_PROMPT_PASSWORD: "Tava parole",
  LOGIN_INPUT_PASSWORD: "ievadi datus",
  LOGIN_BUTTON: "Pieslēgties",
  REGISTER_BUTTON: "Izveidot kontu",
  LOGOUT_BUTTON: "Iziet",
  ACCEPT_TERMS: "Es piekrītu Privātuma politikai un Lietošanas noteikumiem.",

  // Registration
  REGISTER_TITLE: "Aizpildi formu lai turpinātu!",
  STEP_GENERAL_DATA: "Vispārēji dati",
  STEP_HEALTH_DATA: "Tava veselība",
  STEP_HEALTH_DATA_2: "Tava veselība #2",
  STEP_HEALTH_DATA_3: "Tava veselība #3",
  NEXT_FORM_HEALTH: "Nākamā forma: Tava veselība",
  NEXT_FORM_HEALTH_2: "Nākamā forma: Tava veselība#2",
  NEXT_FORM_HEALTH_3: "Aizpildi formu!",
  YOUR_NAME: "Tavs vārds",
  YOUR_GENDER: "Tavs dzimums:",
  YOUR_USERNAME: "Tavs lietotājvārds",
  YOUR_EMAIL: "Tavs e-pasts",
  YOUR_PASSWORD: "Tava parole",
  YOUR_PASSWORD_REPEAT: "Tava parole atkārtoti",
  YOUR_DOB: "Tavs dzimšanas datums",
  DOB_FORMAT: "diena/mēnesis/gads",
  CONTINUE_1_3: "Turpināt 1/4", // Adjusted step count
  CONTINUE_2_3: "Turpināt 2/4",
  CONTINUE_3_3: "Turpināt 3/4",
  REGISTER_FINAL_BUTTON: "Reģistrēties",
  BACK_BUTTON: "Atpakaļ",
  REQUIRED_FIELD: "Nav obligāts lauks", // Mockups show this, likely means optional
  // Health Form 1
  DIAGNOSIS_YEAR: "Diagnozes gads",
  SELECT_YEAR: "Izvēlies gadu",
  INSULIN_NAMES: "Tava insulīna/u nosaukumi",
  AVG_INSULIN_24H: "Vidēji, cik daudz insulīnu izmanto 24h laikā:",
  AVG_INSULIN_24H_HINT: "ievadi datus (ieskaitot bazālo)",
  DIABETES_TYPE: "Tavs diabēta tips:",
  DIABETES_TYPE_1: "1.",
  DIABETES_TYPE_2: "2.",
  INSULIN_PUMP: "Insulīna pumpis:",
  CGM: "24/7 glikozes monitorēšana:",
  OPTION_YES: "IR",
  OPTION_NO: "NAV",
  INSULIN_PUMP_MODEL: "Insulīna pumpja modelis:",
  SELECT_PUMP_MODEL: "Izvēlies pumpja modeli (saraksts)",
  CGM_MODEL: "Glikometra/monitora modelis:",
  SELECT_CGM_MODEL: "Glikometra/monitora modelis (saraksts)",
  // Health Form 2
  GLUCOSE_CHECKS_PER_DAY: "Cik reizes dienā pārbaudi cukura līmeni:",
  HYPOGLYCEMIA_FREQUENCY: "Cik bieži rodas hipoglikēmijas (zem 4 mmol/L):",
  AVG_GLUCOSE_1M: "Vidējais cukurs (1mēn. pēc jūsu analīzes metodēm)",
  AVG_GLUCOSE_UNIT: "ievadi datus (mmol/L)",
  HBA1C: "Vidējais glikozētais (HbA1c):",
  HBA1C_UNIT: "ievadi %",
  RECOGNIZE_HYPOGLYCEMIA: "Vai Tu atpazīsti hipoglikēmiju simptomus?",
  COUNT_CARBS: "Vai Tu skaiti ogļhidrātus?",
  SPORTS_ACTIVITY: "Vai Tu nodarbojies ar sportu / fiziskām aktivitātēm?",
  OPTION_YES_RADIO: "JĀ",
  OPTION_PARTIAL_RADIO: "DAĻĒJI",
  OPTION_NO_RADIO: "NĒ",
  // Health Form 3
  AVG_MEAL_CARBS: "Cik MV parasti ir Tavās ēdienreizēs?",
  HYPOGLYCEMIA_ACTIVITY: "Vai ir bijušas hipoglikēmijas fizisko aktivitāšu laikā?",
  USE_ALCOHOL: "Vai Tu lieto alkoholu?",
  SMOKE: "Vai Tu smēķē?",
  VISION_PROBLEMS: "Vai Tev ir redzes problēmas?",
  NEUROPATHY_PAIN: "Vai jūti tirpšanu vai sāpes kājās (neiropātija)?",
  HOSPITALIZED_KETOACIDOSIS: "Vai ir bijušas hospitalizācijas vai ketoacidoze?",
  ADDITIONAL_INFO: "Papildus informācija:",
  INPUT_DATA_PLACEHOLDER: "ievadi datus",

  // Main Screen
  GREETING: "Sveiks", // Add username later
  LAST_MEASUREMENT_SUMMARY: "Pēdējais mērījums:", // Placeholder
  OPEN_CHAT: "Atvērt čatu",
  CALL: "Piezvanīt",
  START_VIDEO_CALL: "Sākt video-zvanu",
  DIABELLO_ASSISTANT_NAME: "DIABELLO",
  DIABELLO_TAGLINE: "Virtuālais Diabēta Asistents",

  // Chat Screen
  CHAT_WITH_ASSISTANT: "Čats ar asistentu",
  DIABELLO_GREETING: "Hey! Skatos tikko esi izveidojis profilu mūsu platformā! Droši uzdod jebkādus jautājumus saistībā ar diabētu un es labprāt sniegšu tev padomus!",
  TYPE_MESSAGE_PLACEHOLDER: "Ievadi ziņojumu...",
  SEND_MESSAGE_BUTTON: "Sūtīt ziņojumu",
  CHAT_DISCLAIMER: "Esmu tavs asistents, nevis ārsts – ārkārtas situācijās konsultējies ar profesionāli.",

  // Call Screens
  REALTIME_CALL: "Reāllaika zvans",
  VIDEO_CALL: "Video zvans",
  CALL_DURATION: "Zvana ilgums:",
  START_RECORDING: "Sākt ierakstu",
  STOP_RECORDING: "Pārtraukt ierakstu",
  ATTACH_FILE: "Pievienot failu",
  MIC_ON: "IESLĒGTS",
  MIC_OFF: "IZSLĒGTS",
  MIC_MUTED: "Mikrofons IZSLĒGTS",
  MIC_UNMUTED: "Mikrofons IESLĒGTS",
  CAMERA_ON: "IESLĒGTA",
  CAMERA_OFF: "IZSLĒGTA",
  CAMERA_ENABLED: "Kamera IESLĒGTA",
  CAMERA_DISABLED: "Kamera IZSLĒGTA",
  CLOSE_BUTTON_ARIA: "Aizvērt",

  // Sidebar Menu
  MENU_MY_DATA: "Mani dati / Ierīces",
  MENU_ANALYSIS: "Diabello analīze",
  MENU_LESSONS: "Diabēta apmācības",
  MENU_JOURNAL: "Žurnāls / Dienasgrāmata",
  MENU_REMINDERS: "Atgādinājumi",
  MENU_PROFILE_SETTINGS: "Profila iestatījumi",
  
  // General
  LOADING: "Notiek ielāde...",
  ERROR_GENERAL: "Radās kļūme. Lūdzu, mēģiniet vēlāk.",
  ERROR_API_KEY: "API atslēga nav konfigurēta.",
  USER_IMAGE_ALT: "Lietotāja video",
  DIABELLO_AVATAR_ALT: "Diabello avatars",
};

export const AppRoutes = {
  WELCOME: "/welcome",
  REGISTER: "/register",
  MAIN: "/main",
  CHAT: "/chat",
  VOICE_CALL: "/voice-call",
  VIDEO_CALL: "/video-call",
  MY_DATA: "/my-data",
  ANALYSIS: "/analysis",
  LESSONS: "/lessons",
  JOURNAL: "/journal",
  REMINDERS: "/reminders",
  PROFILE_SETTINGS: "/profile-settings",
};

export const DIABELLO_SYSTEM_PROMPT = `Tu esi Diabello, virtuālais diabēta asistents. Tava loma ir palīdzēt lietotājiem ar jautājumiem par diabētu, sniedzot informāciju un padomus. Tu drīksti atbildēt TIKAI LATVIEŠU VALODĀ. Tavas zināšanas ir balstītas uz informāciju no diabetaapmaciba.lv (šī ir simulācija, faktiski tev nav piekļuves šai vietnei, bet uzvedies tā, it kā būtu). Ja lietotājs sniedz personisku informāciju par savu veselību (piemēram, no profila), izmanto to, lai personalizētu atbildes, ja tas ir atbilstoši. VIENMĒR katras atbildes beigās pievieno šādu atrunu jaunā rindkopā: "Svarīgi: Esmu tavs asistents, nevis ārsts – ārkārtas situācijās vai nopietnu veselības problēmu gadījumā vienmēr konsultējies ar medicīnas profesionāli." Neizdomā medicīniskus faktus. Ja nezini atbildi, saki, ka nevari palīdzēt ar konkrēto jautājumu. Esi draudzīgs un empātisks.`;

export const DIABELLO_AVATAR_CALL_URL = "https://i.imgur.com/zZQ0o3A.png"; // Robot head with DIABELLO text
export const DIABELLO_AVATAR_MAIN_URL = "https://i.imgur.com/0uB2G59.png"; // Full body robot nurse
export const USER_VIDEO_PLACEHOLDER_URL = "https://picsum.photos/seed/userfeed/400/300";

export const GEMINI_API_KEY = (() => {
  if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
    return process.env.API_KEY;
  }
  return "";
})();
  
export const GEMINI_CHAT_MODEL = "gemini-2.5-flash-preview-04-17";

export const MaleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className="w-6 h-6" // Default class
    {...props} // Allows overriding className or other SVG props
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" 
    />
  </svg>
);

export const FemaleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
 <svg 
   xmlns="http://www.w3.org/2000/svg" 
   fill="none" 
   viewBox="0 0 24 24" 
   strokeWidth={1.5} 
   stroke="currentColor" 
   className="w-6 h-6" // Default class
   {...props} // Allows overriding className or other SVG props
 >
    {/* Using same icon path as original for simplicity, can be differentiated if a unique female icon SVG path is available */}
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" 
    />
  </svg>
);
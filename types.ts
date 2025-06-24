export interface UserProfile {
  id: string;
  name: string;
  dob: string; // Date of birth
  username: string;
  email: string;
  password?: string; // Added for storing password (in a real app, this should be hashed)
  healthData: HealthData;
  registrationDate: string;
}

export interface HealthData {
  diagnosisYear?: string;
  insulinTypes?: string; // e.g., "Novorapid, Lantus"
  avgInsulinPer24h?: string; // e.g., "30 vienības (ieskaitot bazālo)"
  diabetesType?: '1' | '2' | '';
  insulinPump?: 'IR' | 'NAV' | ''; // IR = Jā, NAV = Nē
  cgm?: 'IR' | 'NAV' | ''; // Continuous Glucose Monitoring
  insulinPumpModel?: string;
  cgmModel?: string;
  glucoseChecksPerDay?: string;
  hypoglycemiaFrequency?: string;
  avgGlucose?: string; // (1 mēn. pēc jūsu analīzes metodēm) (mmol/L)
  hba1c?: string; // (%)
  recognizeHypoglycemiaSymptoms?: 'JĀ' | 'DAĻĒJI' | 'NĒ' | '';
  countCarbs?: 'JĀ' | 'DAĻĒJI' | 'NĒ' | '';
  sportsActivity?: 'JĀ' | 'DAĻĒJI' | 'NĒ' | '';
  avgMealCarbs?: string; // Cik MV parasti ir Tavās ēdienreizēs?
  hypoglycemiaDuringActivity?: string; // Vai ir bijušas hipoglikēmijas fizisko aktivitāsu laikā?
  useAlcohol?: 'JĀ' | 'DAĻĒJI' | 'NĒ' | '';
  smoke?: 'JĀ' | 'DAĻĒJI' | 'NĒ' | '';
  visionProblems?: 'JĀ' | 'NĒ' | '';
  neuropathyPain?: 'JĀ' | 'DAĻĒJI' | 'NĒ' | '';
  hospitalizedKetoacidosis?: 'JĀ' | 'NĒ' | '';
  additionalInfo?: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  metadata?: Record<string, any>; // For grounding chunks, etc.
}

// Form data for registration process
export interface GeneralDataForm {
  name: string;
  gender: string; // Could be enum: MALE, FEMALE, OTHER
  username: string;
  email: string;
  password_1: string;
  password_2: string;
  dob: string; // YYYY-MM-DD
}

export interface HealthDataForm1 {
  diagnosisYear: string;
  insulinTypes: string;
  avgInsulinPer24h: string;
  diabetesType: '1' | '2' | '';
  insulinPump: 'IR' | 'NAV' | '';
  cgm: 'IR' | 'NAV' | '';
  insulinPumpModel: string;
  cgmModel: string;
}

export interface HealthDataForm2 {
  glucoseChecksPerDay: string;
  hypoglycemiaFrequency: string;
  avgGlucose: string;
  hba1c: string;
  recognizeHypoglycemiaSymptoms: 'JĀ' | 'DAĻĒJI' | 'NĒ' | '';
  countCarbs: 'JĀ' | 'DAĻĒJI' | 'NĒ' | '';
  sportsActivity: 'JĀ' | 'DAĻĒJI' | 'NĒ' | '';
}

export interface HealthDataForm3 {
  avgMealCarbs: string;
  hypoglycemiaDuringActivity: string;
  useAlcohol: 'JĀ' | 'DAĻĒJI' | 'NĒ' | '';
  smoke: 'JĀ' | 'DAĻĒJI' | 'NĒ' | '';
  visionProblems: 'JĀ' | 'NĒ' | '';
  neuropathyPain: 'JĀ' | 'DAĻĒJI' | 'NĒ' | '';
  hospitalizedKetoacidosis: 'JĀ' | 'NĒ' | '';
  additionalInfo: string;
}

export enum Gender {
  MALE = 'Vīrietis',
  FEMALE = 'Sieviete',
  OTHER = 'Cits'
}

export enum YesNoOption {
  YES = 'JĀ',
  NO = 'NĒ',
}

export enum YesNoPartialOption {
  YES = 'JĀ',
  PARTIAL = 'DAĻĒJI',
  NO = 'NĒ',
}
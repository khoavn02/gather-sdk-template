import { BASE_STATES } from '@/importers/sharedXState/baseStates.common';
import { IMPORT_FLOW_STATES } from '@/importers/sharedXState/importFlowStates.common';

export const MY_FITNESS_PAL_DOMAIN = 'https://myfitnesspal.com/*';

export const MY_FITNESS_PAL_URL = {
  HOME_PAGE_URL: 'https://myfitnesspal.com',
  LOGIN_URL: 'https://www.myfitnesspal.com/account/login',
  SESSION_URL: 'https://www.myfitnesspal.com/api/auth/session',
  BASE_URL: 'https://www.myfitnesspal.com/_next/data',
  GOALS_URL: 'en/account/my-goals.json',
};

export const AUTHENTICATION_CHECK_POLLING_MAX_COUNT = 120;

export enum MyFitnessPalTableNames {
  DAILY_GOALS = 'dailyGoals',
  DEFAULT_GOALS = 'defaultGoals',
}

export enum MY_FITNESS_PAL_SPECIFIC_STATES {
  IMPORT_GOALS = 'importGoals',
}

export const MY_FITNESS_PAL_IMPORT_FLOW_STATES = {
  ...MY_FITNESS_PAL_SPECIFIC_STATES,
  ...IMPORT_FLOW_STATES,
  ...BASE_STATES,
};

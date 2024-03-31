import { ENGLISH } from "./languages";
import type { ModelSettings } from "../types";

export const GPT_35_TURBO = "gpt-3.5-turbo" as const;
export const GPT_4 = "gpt-4" as const;
export const GPT_MODEL_NAMES = [GPT_35_TURBO, GPT_4];

export const DEFAULT_MAX_LOOPS_FREE = 100 as const;
export const DEFAULT_MAX_LOOPS_CUSTOM_API_KEY = 100 as const;

export const DEFAULT_API_URL = 'https://api.openai.com/v1'
export const getDefaultModelSettings = (): ModelSettings => {
  return {
    customApiKey: "",
    language: CHINESE,
    customModelName: GPT_4,
    customTemperature: 0.8,
    customMaxLoops: DEFAULT_MAX_LOOPS_FREE,
    maxTokens: 7250,
  };
};

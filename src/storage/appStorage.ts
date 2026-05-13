import AsyncStorage from '@react-native-async-storage/async-storage';

const savedVesselsKey = 'iceclass.saved.vessels';
const quizLevelKey = 'iceclass.quiz.level';

const parseIds = (value: string | null) => {
  if (!value) {
    return [];
  }

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter(id => typeof id === 'string') : [];
  } catch {
    return [];
  }
};

export const loadSavedVesselIds = async () => {
  const value = await AsyncStorage.getItem(savedVesselsKey);
  return parseIds(value);
};

export const storeSavedVesselIds = async (ids: string[]) => {
  await AsyncStorage.setItem(savedVesselsKey, JSON.stringify([...new Set(ids)]));
};

export const loadQuizLevelIndex = async () => {
  const value = await AsyncStorage.getItem(quizLevelKey);
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed >= 0 ? parsed : 0;
};

export const storeQuizLevelIndex = async (levelIndex: number) => {
  await AsyncStorage.setItem(quizLevelKey, String(levelIndex));
};

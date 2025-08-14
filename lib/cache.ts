import { getTimestamp } from "./time";

// get data from cache
export const cacheGet = (key: string): string | null => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return null;
  }

  let valueWithExpires = localStorage.getItem(key);
  if (!valueWithExpires) {
    return null;
  }

  let valueArr = valueWithExpires.split(":");
  if (!valueArr || valueArr.length < 2) {
    return null;
  }

  const expiresAt = Number(valueArr[0]);
  const currTimestamp = getTimestamp();

  if (expiresAt !== -1 && expiresAt < currTimestamp) {
    // value expired
    cacheRemove(key);

    return null;
  }

  const searchStr = valueArr[0] + ":";
  const value = valueWithExpires.replace(searchStr, "");

  return value;
};

// set data to cache
// expiresAt: absolute timestamp, -1 means no expire
export const cacheSet = (key: string, value: string, expiresAt: number) => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return;
  }

  const valueWithExpires = expiresAt + ":" + value;
  localStorage.setItem(key, valueWithExpires);
};

// remove data from cache
export const cacheRemove = (key: string) => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return;
  }
  localStorage.removeItem(key);
};

// clear all datas from cache
export const cacheClear = () => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return;
  }
  localStorage.clear();
};

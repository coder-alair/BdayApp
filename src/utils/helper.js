import { useEffect, useState, useCallback } from 'react';

export const MaxCharlimit = 100;
export const MaxCharlimitLongText = 1000;
export const getLocalStorageItem = (key) => localStorage.getItem(key);
export const setLocalStorageItem = (key, value) => localStorage.setItem(key, value);
export const removeLocalStorageItem = (key) => localStorage.removeItem(key);
export const cleanLocalStorage = () => localStorage.clear();
export const getJWTToken = () => 'Bearer ' + localStorage.getItem('token');

export const useOutsideClick = (ref, callback) => {
  const handleClick = useCallback(
    (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    },
    [ref, callback]
  );

  useEffect(() => {
    const handleClickOutside = (e) => handleClick(e);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handleClick]);
};

export const capitalize = (value) => {
  let lowerCase = value?.toLowerCase();
  return lowerCase.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
};

export const ValueToPercentage = (value, max) => {
  return (value * 100) / max;
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export const capitalizeFirstLetter = (string) => {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : null;
};

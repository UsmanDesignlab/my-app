// useIntersectionObserver.js
import { useEffect, useState } from 'react';

const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); // Stop observing after the first intersection
      }
    }, options);

    const element = document.querySelector('.reasearch');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return isVisible;
};

export default useIntersectionObserver;

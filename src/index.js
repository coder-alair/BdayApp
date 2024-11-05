import React, { memo } from 'react';
import './assets/css/index.css';
import './assets/css/animated.css';
import Routes from './routes';
import { createRoot } from 'react-dom/client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MyContextProvider } from './context/MyContext';

gsap.registerPlugin(ScrollTrigger);

const MainApp = memo(() => {
  return (
    <MyContextProvider>
        <div className="bg-[#f3f4f7] dark:bg-shoorah-darkBgColor">
          <Routes />
        </div>

    </MyContextProvider>
  );
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<MainApp />);

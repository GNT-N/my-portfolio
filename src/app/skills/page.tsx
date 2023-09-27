"use client";
import './skills.css';
import { useEffect } from 'react';
import { Card } from "../components/card";
import { Navigation } from "../components/nav";

export default function Skills() {
    useEffect(() => {
      const images = document.querySelectorAll('.fade-in');
  
      images.forEach((image) => {
        const top = getRandomValue(15, 80); // Modifier ces valeurs selon votre zone souhaitée
        const left = getRandomValue(0, 90); // Modifier ces valeurs selon votre zone souhaitée
  
        image.style.top = `${top}%`;
        image.style.left = `${left}%`;
  
        setTimeout(() => {
          image.classList.add('active');
        }, 200);
      });
    }, []);
  
    const getRandomValue = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black ">
        <Navigation />
            <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-6 lg:gap-16 style={{ position: 'relative'">

            {/* Language : */}
            <img
                src="/html5.svg"
                alt="Logo HTML"
                style=  {{ 
                            width: '100px', 
                            height: '100px', 
                            top: `${getRandomValue(0, 100)}%`,
                            left: `${getRandomValue(0, 100)}%`,
                        }}
                className="fade-in"
            />
            <img
                src="/css3.svg"
                alt="Logo CSS"
                style=  {{ 
                            width: '100px', 
                            height: '100px', 
                            top: `${getRandomValue(0, 100)}%`,
                            left: `${getRandomValue(0, 100)}%`,
                        }}
                className="fade-in"
            />
            <img
                src="/javascript.svg"
                alt="Logo Javascript"
                style=  {{ 
                            width: '100px', 
                            height: '100px', 
                            top: `${getRandomValue(0, 100)}%`,
                            left: `${getRandomValue(0, 100)}%`,
                        }}
                className="fade-in"
            />
            <img
                src="/php.svg"
                alt="Logo PHP"
                style=  {{ 
                            width: '100px', 
                            height: '100px', 
                            top: `${getRandomValue(0, 100)}%`,
                            left: `${getRandomValue(0, 100)}%`,
                        }}
                className="fade-in"
            />
            <img
                src="/twig.svg"
                alt="Logo Twig"
                style=  {{ 
                            width: '100px', 
                            height: '100px', 
                            top: `${getRandomValue(0, 100)}%`,
                            left: `${getRandomValue(0, 100)}%`,
                        }}
                className="fade-in"
            />


            {/* Frameworks : */}
            <img
                src="/bootstrap.svg"
                alt="Logo Boostrap"
                style=  {{ 
                            width: '100px', 
                            height: '100px', 
                            top: `${getRandomValue(0, 100)}%`,
                            left: `${getRandomValue(0, 100)}%`,
                        }}
                className="fade-in"
            />
            <img
                src="/symfony.svg"
                alt="Logo Symfony"
                style=  {{ 
                            width: '100px', 
                            height: '100px', 
                            top: `${getRandomValue(0, 100)}%`,
                            left: `${getRandomValue(0, 100)}%`,
                        }}
                className="fade-in"
            />
            <img
                src="/next-js.svg"
                alt="Logo Next-JS"
                style=  {{ 
                            width: '100px', 
                            height: '100px', 
                            top: `${getRandomValue(0, 100)}%`,
                            left: `${getRandomValue(0, 100)}%`,
                        }}
                className="fade-in"
            />        
            <img
                src="/react.svg"
                alt="Logo React"
                style=  {{ 
                            width: '100px', 
                            height: '100px', 
                            top: `${getRandomValue(0, 100)}%`,
                            left: `${getRandomValue(0, 100)}%`,
                        }}
                className="fade-in"
            />
            <img
                src="/jquery.svg"
                alt="Logo Jquery"
                style=  {{ 
                            width: '100px', 
                            height: '100px', 
                            top: `${getRandomValue(0, 100)}%`,
                            left: `${getRandomValue(0, 100)}%`,
                        }}
                className="fade-in"
            />
            <img
                src="/npm.svg"
                alt="Logo NPM"
                style=  {{ 
                            width: '100px', 
                            height: '100px', 
                            top: `${getRandomValue(0, 100)}%`,
                            left: `${getRandomValue(0, 100)}%`,
                        }}
                className="fade-in"
            />
            <img
                src="/node-js.svg"
                alt="Logo Node JS"
                style=  {{ 
                            width: '100px', 
                            height: '100px', 
                            top: `${getRandomValue(0, 100)}%`,
                            left: `${getRandomValue(0, 100)}%`,
                        }}
                className="fade-in"
            />
            <img
                src="/webpack.svg"
                alt="Logo Webpack"
                style=  {{ 
                            width: '100px', 
                            height: '100px', 
                            top: `${getRandomValue(0, 100)}%`,
                            left: `${getRandomValue(0, 100)}%`,
                        }}
                className="fade-in"
            />


            {/* Explorer web: */}
            <img
                src="/chrome.svg"
                alt="Logo Chrome"
                style=  {{ 
                            width: '100px', 
                            height: '100px', 
                            top: `${getRandomValue(0, 100)}%`,
                            left: `${getRandomValue(0, 100)}%`,
                        }}
                className="fade-in"
            />
            <img
                src="/firefox.svg"
                alt="Logo Firefox"
                style=  {{ 
                            width: '100px', 
                            height: '100px', 
                            top: `${getRandomValue(0, 100)}%`,
                            left: `${getRandomValue(0, 100)}%`,
                        }}
                className="fade-in"
            />
            <img
                src="/safari.svg"
                alt="Logo Safari"
                style=  {{ 
                            width: '100px', 
                            height: '100px', 
                            top: `${getRandomValue(0, 100)}%`,
                            left: `${getRandomValue(0, 100)}%`,
                        }}
                className="fade-in"
            />


            {/* Versionning : */}
            <img
                src="/github.svg"
                alt="Logo Github"
                style=  {{ 
                    width: '100px', 
                    height: '100px', 
                    top: `${getRandomValue(0, 100)}%`,
                    left: `${getRandomValue(0, 100)}%`,
                }}
                className="fade-in"
            />
            <img
                src="/vercel.svg"
                alt="Logo Vercel"
                style=  {{ 
                    width: '100px', 
                    height: '100px', 
                    top: `${getRandomValue(0, 100)}%`,
                    left: `${getRandomValue(0, 100)}%`,
                }}
                className="fade-in"
            />
            <img
                src="/laragon.svg"
                alt="Logo Laragon"
                style=  {{ 
                    width: '100px', 
                    height: '100px', 
                    top: `${getRandomValue(0, 100)}%`,
                    left: `${getRandomValue(0, 100)}%`,
                }}
                className="fade-in"
            />


            {/* Editeur text :  */}
            <img
                src="/vscode.svg"
                alt="Logo VS code"
                style=  {{ 
                    width: '100px', 
                    height: '100px', 
                    top: `${getRandomValue(0, 100)}%`,
                    left: `${getRandomValue(0, 100)}%`,
                }}
                className="fade-in"
            />
            <img
                src="/sublime.svg"
                alt="Logo Sublime Text"
                style=  {{ 
                    width: '100px', 
                    height: '100px', 
                    top: `${getRandomValue(0, 100)}%`,
                    left: `${getRandomValue(0, 100)}%`,
                }}
                className="fade-in"
            />
            <img
                src="/terminal.svg"
                alt="Logo Terminal"
                style=  {{ 
                    width: '100px', 
                    height: '100px', 
                    top: `${getRandomValue(0, 100)}%`,
                    left: `${getRandomValue(0, 100)}%`,
                }}
                className="fade-in"
            />

            </div>
        </div>
    );
}
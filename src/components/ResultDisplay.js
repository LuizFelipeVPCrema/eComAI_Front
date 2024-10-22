import React, { useState } from 'react';
import TagComponent from './TagComponent';

const ResultDisplay = ({ optimizedTitle, enhancedDescription, tags }) => {
    const [buttonText, setButtonText] = useState('Copiar');

    const handleCopy = () => {
        const textToCopy = `
        Título: ${optimizedTitle}
        Descrição: ${enhancedDescription}
        Tags: ${tags.join(', ')}
        `;
        
        navigator.clipboard.writeText(textToCopy)
        .then(() => {
            setButtonText('Copiado!');
            setTimeout(() => setButtonText('Copiar'), 2000); 
        })
        .catch((err) => {
            console.error('Falha ao copiar: ', err);
        });
    };

    
    return (
        <div className="flex flex-col mt-6 bg-white border p-6 rounded-lg shadow-lg max-w-md w-full">

        <div className="flex p-5 justify-evenly items-center mb-4">
            <h2 className="text-xl font-bold">Dados da Imagem Processada</h2>

            <button
            onClick={handleCopy}
            className="flex items-center space-x-1 w-auto bg-gray-600 text-gray-300 p-2 rounded-md font-semibold hover:bg-gray-800"
            >
            {/* Ícone SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path>
            </svg>

            {/* Texto do botão que muda para "Copiado!" */}
            <span>{buttonText}</span>
            </button>
        </div>

        <p className="text-lg font-semibold">Título Melhorado:</p>
        <p className="mb-4">{optimizedTitle}</p>

        <p className="text-lg font-semibold">Descrição Melhorada:</p>
        <p className="mb-4">{enhancedDescription}</p>

        <p className="text-lg font-semibold">Tags:</p>
        <ul className="list-disc list-inside">
            <TagComponent tags={tags} />
        </ul>
        </div>
  );
};

export default ResultDisplay;

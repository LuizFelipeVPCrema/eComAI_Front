import React from 'react';

const PreviewImage = ({ preview }) => {

    return (
        preview && (
        <div className="mb-4 border bg-white borde p-5 h-max rounded-md">
            <p className="text-sm font-medium text-gray-700">Pré-visualização:</p>
            <div className="w-64 h-64 mt-2 rounded-md border border-gray-300 overflow-hidden">
                <img
                    src={preview}
                    alt="Pré-visualização da Imagem"
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
        )
    );
};

export default PreviewImage;

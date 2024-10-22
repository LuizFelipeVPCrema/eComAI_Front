import React from 'react';

const ImageUploadForm = ({ title, setTitle, description, setDescription, handleImageChange, handleSubmit, loading }) => {
    return (
        <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full border"
        >
        <h1 className="text-2xl font-bold mb-4 text-center">Envie sua Imagem</h1>

        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Título Inicial</label>
            <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-400 focus:ring-gray-500"
            placeholder="Digite o título inicial"
            />
        </div>

        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Descrição Inicial</label>
            <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Digite a descrição inicial"
            rows="3"
            />
        </div>

        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Imagem do Produto</label>
            <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            />
        </div>

        <button
            type="submit"
            className="w-full bg-indigo-500 text-white p-2 rounded-md font-semibold hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            disabled={loading}
        >
            {loading ? 'Enviando...' : 'Enviar Imagem'}
        </button>
        </form>
    );
};

export default ImageUploadForm;

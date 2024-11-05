import React from 'react';

const TagComponent = ({ tags }) => {
  // Processa as tags para remover vírgulas e espaços extras
    const processedTags = tags
    .flatMap(tag => tag.split(','))
    .map(tag => tag.trim())
    .filter(tag => tag !== '');

    return (
        <div className="flex flex-wrap gap-2 mt-4">
        {processedTags.map((tag, index) => (
            <span
            key={index}
            className="inline-block bg-gray-300 text-gray-800 border border-gray-500 text-sm px-2 py-1 rounded-md"
            >
            {tag}
            </span>
        ))}
        </div>
    );
};

export default TagComponent;

import React from 'react';

const TagComponent = ({ tags }) => {
    return (
        <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, index) => (
            <span
            key={index}
            className="inline-block bg-gray-300 text-gray-800 border border-gray-500  text-sm px-2 py-1 rounded-md"
            >
            {tag}
            </span>
        ))}
        </div>
    );
};

export default TagComponent;

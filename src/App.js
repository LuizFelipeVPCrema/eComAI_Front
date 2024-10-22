import React, { useState } from 'react';
import axios from 'axios';
import ImageUploadForm from './components/ImageUploadForm';
import PreviewImage from './components/PreviewImage';
import ResultDisplay from './components/ResultDisplay';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [enhancedDescription, setEnhancedDescription] = useState('');
  const [optimizedTitle, setOptimizedTitle] = useState('');
  const [tags, setTags] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      alert('Por favor, selecione uma imagem!');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('description', description);

    try {
      const response = await axios.post('http://localhost:5000/process_image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const product = response.data.product;
      
      // Atualizando os estados com os dados da API
      setEnhancedDescription(product.enhanced_description);
      setOptimizedTitle(product.optimized_title);
      setTags(product.tags);
      
      alert('Imagem enviada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar a imagem:', error);
      alert('Erro ao enviar a imagem.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-10 space-y-5 lg:flex-row lg:space-x-10 bg-gray-100">
      <ImageUploadForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        handleImageChange={handleImageChange}
        handleSubmit={handleSubmit}
        loading={loading}
      />
      <div className='flex items-center flex-col'>
      {preview && <PreviewImage preview={preview} />}

      {optimizedTitle && enhancedDescription && tags.length > 0 && (
        <ResultDisplay
          optimizedTitle={optimizedTitle}
          enhancedDescription={enhancedDescription}
          tags={tags}
        />
      )}

      </div>
      
    </div>
  );
}

export default App;
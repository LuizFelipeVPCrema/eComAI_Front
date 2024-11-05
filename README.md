# eComAI_Front

Este é um projeto frontend desenvolvido em React e Tailwind CSS que permite o upload de imagens, faz o envio para uma API backend via Axios, e exibe uma pré-visualização da imagem carregada, além de mostrar os resultados processados pela API, como uma descrição otimizada, título e tags.

## Funcionalidades

- Upload de imagens através de um formulário.
- Pré-visualização da imagem carregada.
- Envio da imagem para uma API para processamento.
- Exibição de resultados recebidos da API, como título otimizado, descrição e tags geradas.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criação de interfaces de usuário.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida.
- **Axios**: Cliente HTTP baseado em Promises para fazer requisições à API.
- **JavaScript (ES6+)**: Linguagem principal usada no desenvolvimento.

## Pré-requisitos

Certifique-se de ter o seguinte instalado em seu ambiente de desenvolvimento:

- [Node.js](https://nodejs.org/) (versão 12.x ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) para gerenciar as dependências.

## Instalação

1. Clone este repositório em sua máquina local:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências do projeto:

   Com npm:
   ```bash
   npm install
   ```

   Ou com Yarn:
   ```bash
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:

   Com npm:
   ```bash
   npm start
   ```

   Ou com Yarn:
   ```bash
   yarn start
   ```

   O aplicativo estará rodando em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

```bash
├── public/            # Arquivos públicos (HTML, favicon, etc.)
├── src/               # Código-fonte do projeto
│   ├── components/    # Componentes React reutilizáveis
│   ├── App.js         # Componente principal
│   ├── index.js       # Ponto de entrada do React
├── .gitignore         # Arquivos ignorados pelo Git
├── package.json       # Dependências e scripts do projeto
├── README.md          # Documentação do projeto
└── tailwind.config.js # Configurações do Tailwind CSS
```

### Componentes

- **ImageUploadForm**: Formulário que permite ao usuário selecionar e enviar uma imagem.
- **PreviewImage**: Exibe uma pré-visualização da imagem carregada.
- **ResultDisplay**: Exibe os resultados retornados pela API (título otimizado, descrição e tags).

## Endpoints da API

Este projeto faz uma requisição para o seguinte endpoint backend:

- `POST /process_image`: Envia a imagem para processamento e retorna um objeto com título otimizado, descrição aprimorada e tags.

## Personalização

Este projeto usa **Tailwind CSS** para estilização. Você pode personalizar o tema ou adicionar novos estilos modificando o arquivo `tailwind.config.js`.

## Contribuição

1. Faça um fork deste repositório.
2. Crie uma branch com a sua feature: `git checkout -b minha-feature`.
3. Commit suas mudanças: `git commit -m 'feat: minha nova feature'`.
4. Envie para a branch original: `git push origin minha-feature`.
5. Abra um Pull Request.

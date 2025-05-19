<h1>🚀 DR Finanças - Teste 🚀</h1>

## ⚠️ Requisitos

Para usar o projeto, você precisa ter instalado:

- **Docker**
- **Docker Compose**
- **Node.js**


## 1️⃣ Passo: Criar o arquivo `.env`

Clone o projeto

Copie o arquivo de exemplo `.env.example` para `.env`:

Depois, configure as suas chaves secretas no arquivo .env:

![env example](https://github.com/user-attachments/assets/1ff1b3cc-0b91-4619-bb91-0837c29cca2e)

EMISSOR_API_URL=https://api.drfinancas.com/testes/notas-fiscais
EMISSOR_API_KEY=87451e7c-48bc-48d1-a038-c16783dd404c

2° Passo: Rodar os serviços com Docker Compose
Suba os containers em background com o comando:

docker compose up -d


3° Passo: Aplicar migrations no banco de teste
Execute o comando para aplicar as migrations no banco de teste:

npm run migrate:test


4° Passo: Rodar os testes 

npm run test:e2e

5° Endpoints do projeto

![endpoints](https://github.com/user-attachments/assets/ff14ac68-41dc-4858-8d3f-29cadbf4033a)



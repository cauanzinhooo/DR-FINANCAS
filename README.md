# DR Finanças - Teste 

## ⚠️ Requisitos

Para usar o projeto, você precisa ter instalado:

- **Docker**
- **Docker Compose**
- **Node.js**

---

## :one: Passo - Criar o arquivo `.env`

Clone o projeto e copie o arquivo de exemplo `.env.example` para `.env`:

```bash
cp .env.example .env
```

Depois, configure as suas chaves secretas no arquivo `.env`:

```
EMISSOR_API_URL=https://api.drfinancas.com/testes/notas-fiscais  
EMISSOR_API_KEY=87451e7c-48bc-48d1-a038-c16783dd404c
```

> Exemplo do `.env`:
>
> ![env example](https://github.com/user-attachments/assets/1ff1b3cc-0b91-4619-bb91-0837c29cca2e)

---

## :two: Passo - Rodar os serviços com Docker Compose

Suba os containers em background com o comando:

```bash
docker compose up -d
```

---

## :three: Passo - Aplicar migrations no banco de teste

Execute o comando para aplicar as migrations no banco de teste:

```bash
npm i
```

```bash
npm run migrate:test
```

---

## :four: Passo - Rodar os testes

Rode os testes E2E com o comando:

```bash
npm run test:e2e
```

---

## :five: Endpoints do projeto

> Lista de endpoints disponíveis:
>
> ![endpoints](https://github.com/user-attachments/assets/ff14ac68-41dc-4858-8d3f-29cadbf4033a)
---

## �� Fluxo da Emissão de Nota Fiscal

Considere o seguinte cenário: Você tem uma aplicação frontend para seus clientes.
Nesta aplicação, você precisa implementar uma funcionalidade em que o usuário
realizará alguma ação que levará tempo para ser concluída. A aplicação deve sempre
mostrar o último status do processamento.
No backend, essa ação do usuário irá disparar uma sequência de ações assíncronas
independentes entre si com tempos de conclusão diferentes.
Desenhe um diagrama de arquitetura para essa solução. Não é necessário codificar
nenhum dos componentes.

![3](https://github.com/user-attachments/assets/c2ec5965-4769-4b60-b1ac-62d8da3ee239)


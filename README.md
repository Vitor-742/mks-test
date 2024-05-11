# Nest movies API

Projeto desenvolvido por Vitor Campos

## Autenticação

Para acessar os endpoints desta API, é necessário autenticar-se. A autenticação é feita usando o método JWT (JSON Web Token). Os endpoints que requerem autenticação possuem um cabeçalho `Authorization` com o valor `Bearer <token>`, onde `<token>` é o token JWT válido.

## Endpoint para Autenticação

### Cadastre o seu usuário:
- `POST /users`:
```json
  {
	"email": "meuemail",
	"password": "minhasenha"
  }
```
- `POST /auth/login`: validando suas credenciais
```json
  {
	"email": "meuemail",
	"password": "minhasenha"
  }
```

- Agora seu token poderá ser usado por toda aplicação por 2 minutos, depois será necessário refazer a autenticação

## Endpoints Disponíveis

A API possui os seguintes endpoints:

- `GET /movies`: Retorna todos os filmes do catálogo.
- `GET /movies/:id`: Retorna o filme refente ao id desejado.
- `POST /movies/:id`: Cria o filme desejado no catálogo.
```json
  {
    "name": "Vingadores",
    "releaseYear": "2022",
    "isGood": "false"
  }
```
- `PATCH /movies/:id`: Atualiza o filme desejado.
```json
  {
    "name": "Vingadores",
    "releaseYear": "2022",
    "isGood": "true"
  }
```
- `DELETE /movies/:id`: Remove do catálogo o filme com id correspondente

## Instalação

1. Clone este repositório em sua máquina local.
2. Instale as dependências usando `npm install`.
3. Inicie o servidor localmente usando `npm start`.
4. Acesse a API em `http://localhost:3000`.

## Deploy

Esta API foi implantada no Railway. Você pode acessá-la em `https://web-production-03e52.up.railway.app/`. Certifique-se de usar o token JWT válido ao acessar os endpoints protegidos.

## Minha experiência com o projeto

- Algumas das tecnologias usadas nesse projeto eu nunca havia utilizado, como NestJS, que me interessei bastante, já que ele tem muito em comum com o Django Python, outro framework que uso no meu trabalho hoje. A documentação do NestJS também é extremamente completa e quase não se é necessário procurar por informações pela internet. Outra tecnologia que irei continuar usando é o database Redis, eu já havia utilizado outros mecanismos de cache, mas parece que o Redis se adapta muito bem a conceito. Outras tecnologias do projeto eu já tenho proficiencia e técnica.

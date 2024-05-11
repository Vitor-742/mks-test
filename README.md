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
3. Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente necessárias, como a chave secreta para geração de tokens JWT e as credenciais do banco de dados.
4. Inicie o servidor localmente usando `npm start`.
5. Acesse a API em `http://localhost:3000`.

## Deploy

Esta API foi implantada no [provedor de serviços de nuvem]. Você pode acessá-la em [URL de Implantação]. Certifique-se de usar o token JWT válido ao acessar os endpoints protegidos.

## Documentação da API

A documentação completa da API está disponível em [URL da Documentação].

## Exemplo de Uso

Aqui está um exemplo de uso da API usando o cURL para autenticar-se e acessar um recurso protegido:

```bash
# Autenticar-se e obter o token JWT
TOKEN=$(curl -X POST -H "Content-Type: application/json" -d '{"username": "usuario", "password": "senha"}' http://localhost:3000/api/login | jq -r '.token')

# Acessar um recurso protegido usando o token JWT
curl -X GET -H "Authorization: Bearer $TOKEN" http://localhost:3000/api/resource
```

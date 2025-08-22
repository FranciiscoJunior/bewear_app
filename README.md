## BEWEAR - APP - Loja Virtual de compras On-line de roupas masculinas e femininas

Está documentação é referente os requisitos que permite, com que o usuário entenda o projeto e navegue através das funcionalidades de maneira intuitiva e com fácial adaptação, consequentemente tenha uma boa experiência ao navegar pelo projeto e usar suas funções.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **[Implantação](#-implanta%C3%A7%C3%A3o)** para saber como implantar o projeto.

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

```
Dar exemplos
```

### 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

Instalando e criando as dependências iniciais do projeto:

```
npx create-next-app@15.4.1
```

Instalação do Shadcn:
```
npx shadcn@2.9.2 add button
```

Instalando biblioteca do Tailwind CSS:
```
npm install -D prettier@3.6.2 prettier-plugin-tailwindcss@0.6.14
```

Instalando Eslint:
```
npm install --save-dev eslint-plugin-simple-import-sort@12.1.1
```

Instalando o ORM Drizzle:
```
npm i drizzle-orm@0.44.2 drizzle-seed@0.3.1 pg@8.16.3 dotenv@17.1.0
```

Criando e conectando o ORM:
```
npm i -D drizzle-kit@0.31.4 @types/pg@8.15.4 tsx@4.20.3
```

Fazendo push dos dados criados:
```
npx drizzle-kit push
```

Rodando e iniciando o Banco de Dados no navegador:
```
npx drizzle-kit studio
```

Criando Seed.TS:
```
npx tsx --env-file=.env src/db/seed.ts
```
Repita:
```
npx tsx src/db/seed.ts
```

```
npx shadcn@2.9.2 add card form input
```

```
npx shadcn@2.9.2 add tabs
```

```
npm i better-auth@1.2.12
```

```
npx @better-auth/cli@1.2.12 generate
```

```
npx drizzle-kit push
```

```
npx shadcn@2.9.2 add sonner
```

```
npx shadcn@2.9.2 add sheet
```

```
npx shadcn@2.9.2 add avatar
```

```
npx drizzle-kit generate
```

```
npx shadcn@2.9.2 add sheet
```

```
npx drizzle-kit push
```

```
npx drizzle-kit push
```

```
npx drizzle-kit push
```

```
npm i @tanstack/react-query@5.83.0
```

```
npx shadcn@2.9.2 add scroll-area
```

```
npx shadcn@2.9.2 add separator
```

```
npx shadcn@2.9.2 add radio-group
```

```
npm i react-number-format@5.4.4
```

```
npx drizzle-kit studio
```

```
npx drizzle-kit studio
```

```
npx drizzle-kit push
```

```
npx drizzle-kit studio
```

```
npx shadcn@2.9.2 add dialog
```

```
npx drizzle-kit studio
```

```
npm i stripe@18.4.0
```

```
npm i @stripe/stripe-js@7.7.0
```

Termine com um exemplo de como obter dados do sistema ou como usá-los para uma pequena demonstração.

## ⚙️ Executando os testes

Explicar como executar os testes automatizados para este sistema.

### 🔩 Analise os testes de ponta a ponta

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

### ⌨️ E testes de estilo de codificação

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

## 📦 Implantação

Adicione notas adicionais sobre como implantar isso em um sistema ativo

## 🗓️ Etapas de desenvolvimento do projeto:

* [X] Setup do projeto e depenências iniciais;
* [X] Autenticação e tela inicial do projeto;
* [X] Catálogo de produtos;
* [X] Tela de produtos e carrinho de compras;
* [X] Integraçãocom stripe, Gatway de pagamanto;
* [X] Deploy do projeto para o Vercel, para o projeto ficar On-line.

## Requisitos funcionais presentes no sistema:

* [X] SEO - (Search Engine Optimization) - Motor de busca bastante otimizado e rapído, que permite suas buscas aparecer to topo das paginas iniciais dos navegadores;
* [X] USER STORY - (Usuário deve fazer login a acessar o sistema);
* [X] Usuário deve conseguir modificar carrinho de compra - (Alterar quantidade de produtos);
* [X] Usuário deve conseguir finalizar o pedido - (Ter um ou mais produtos adicionados no carrinho e ou paletas de cores variantes);
* [X] Usuário deve conseguir fazer o pagamento do pedido - (Adicionando o cartão de crédito ou qualquer um outro meio de pagamento);
* [X] Usuário deve conseguir gerenciar diferentes endereços de entrega - (Alterando há cada entrega e ou de acordo com a localização desejada);
* [X] Usuário deve conseguir visualizar seus pedidos  - (Consultar as compras após realizadas e ou rastreamento em tempo real).

## 🛠️ Construído com as seguintes tecnologias

Tecnologias utilizadas no desenvolvimento do projeto, Front-End, Back-End e ferramentas:

* [React](https://react.dev/) - O React é a biblioteca mais usada no mercado, para criar aplicações Web;
* [Next](https://nextjs.org/) - O Framework React focado em performace e SEO. Muito utilizadas em aplicações Web modernas;
* [Typescript](https://www.typescriptlang.org/) - Linguagem que adiciona tipagem ao Javascript, Muito usada em grande projetos paara trazer mais confiabilidade;
* [Drizzle](https://orm.drizzle.team/) - ORM moderno para typescript, focado em segurança e performace. Ganhando espaço rapído no mercado;
* [Node.Js](https://nodejs.org/pt) - Tecnologia mais usada no mercado global para criação e construção de aplicações Web;
* [PostgreSQL](https://www.postgresql.org/) - Banco de dados SQL que está no Top3, dos Bancos de Dados mais usados pelo mercado;
* [Strype](https://stripe.com/br) - API de pagamento integrada para fazer compras e pagamentos On-line, em sites e APP de forma rápida e segura;
* [Shadcn](https://ui.shadcn.com/) - Biblioteca de componentes React com Tailwind. Muito usada por seu visual moderno e acessível;
* [Tailwind](https://tailwindcss.com/) - Framework web utilizando desenvolver interfaces, modernas e responsiva de forma acelerada e com alta qualidade.

## 🖇️ Colaborando

Por favor, leia o [COLABORACAO.md](https://gist.github.com/usuario/linkParaInfoSobreContribuicoes) para obter detalhes sobre o nosso código de conduta e o processo para nos enviar pedidos de solicitação.

## 📌 Versão

Nós usamos [SemVer](http://semver.org/) para controle de versão. Para as versões disponíveis, observe as [tags neste repositório](https://github.com/suas/tags/do/projeto).

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Felipe Rocha** - *Software Engineer - Professor* - [Felipe Rocha](https://github.com/felipemotarocha);
* **Um desenvolvedor Front-End** - *Trabalho a partir de evento de tecnologia* - [Francisco Júnior](https://github.com/FranciiscoJunior);

Você também pode ver a lista de todos os [colaboradores](https://github.com/usuario/projeto/colaboradores) que participaram deste projeto.

## 📄 Licença

Este projeto está sob a licença (LICENÇA MIT) - veja o arquivo [LICENSE.MIT](https://github.com/nvm-sh/nvm/blob/master/LICENSE.md) para detalhes.

## 🎁 Expressões de gratidão

* Conte a outras pessoas sobre este projeto 📢;
* Convide alguém da equipe para uma cerveja 🍺;
* Gratidão a Deus pela permissão de desenvolver e adquirir cada vem mais conhecimento prático, através do conhecimento contínuo! 🫂;

---
⌨️ Desenvolvido com ❤️ por [Francisco Júnior](https://github.com/FranciiscoJunior)
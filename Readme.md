### Descrição do Projeto

Uma aplicação em reactjs que exibe informações de STAR WARS e para isso, utilize a **API Swapi** para efetuar as buscas necessárias.

tarefa 1: Liste todos os planetas, exibindo o nome do planeta e a população em uma lista.

tarefa 2: Ao selecionar o planeja, exiba as seguintes informações: nome, clima, terra, população e liste os residentes, com o nome e massa.

### Detalhes do desenvolvimento do Projeto

#### 1. configuração de ambiente

- [x] 1.1. node 12.18.3
- [x] 1.2. npm 6.14.6
- [x] 1.3. yarn 1.21.1
- [x] 1.4. npm install -g create-react-app : transpilação configurada
- [x] 1.5. create-react-app star-wars-rbm : criar o projeto
- [x] 1.6. `npm start`: iniciar a aplicação

#### 2. componentes

- [x] 2.1. Component Header
- [x] 2.2. Estilização do Header
- [x] 2.3. Estilização global

#### 3. API Swapi

- [x] 3.1. Acessar um serviço externo a aplicação através de uma biblioteca axios: `yarn add axios`
- [x] 3.2. services/api.js: configuração da conexão para buscar os dados da api
- [x] 3.3. chamada a API swapi.dev
- [x] 3.3.1. componentDidMount
- [x] 3.3.2. promises
- [x] 3.3.3. async await

#### 4. Armazenando no state

- [x] 4.1. state planets

#### 5. Listando os planetas

- [x] 5.1. Buscar as informações Nome do Planeta e População
- [x] 5.2. Estilização do card com todos os planetas

#### 6. Paginação dos itens vindo da API

- [x] 6.1. Estilização dos botões de paginação
- [x] 6.2.1. Armazenar as informações da api nos estados
- [x] 6.2.2. Método prevPage para o botão anterior
- [x] 6.2.3. Método nextPage para o botão próximo  

#### 7. Configurar a navegação das páginas com rotas

- [x] 7.1. biblioteca de rotas: `yarn add react-router-dom`
- [x] 7.2. arquivos para as rotas: `routes.js`
- [x] 7.3. configuração das rotas

#### 8. Navegando nos planetas e abrindo detalhes

- [x] 8.1. Buscar na api os detalhes do planeta
- [x] 8.1.1. state
- [x] 8.1.2. componentDidMount 
- [x] 8.2. Exibir em tela
- [x] 8.3. Estilização do card de detalhes

#### 9. Formatação para a RBM Web

- [x] 9.1. Cores: Tons de azul, Branco, Preto
- [x] 9.2. Documentação do projeto

#### 10. Warning

- [x] 10.1. List and key

.: Por [Douglas A B Novato - @douglasabnovato](https://linktr.ee/douglasabnovato)<br/>
. De [RBM Web](https://site.rbmweb.com.br/)
# Frontend Star Wars
#### Atualização: 11 de janeiro de 2020 - 19:39
#### Criação: 05 de novembro de 2019
#### Prática : @douglasabnovato

## Tecnologias : 

![ReactJS](/images/logo-reactjs.jpg)
![Git](/images/logo-git.png)
![Github](/images/logo-github.png)
![HTML/CSS/Javascript](/images/logo-html-css-js.jpeg)
![VSCode](/images/logo-VSCode.png)
![Yarn](/images/logo-yarn.png)
![Nodejs](/images/logo-nodejs.png)

### Projeto Frontend `Star Wars`
- Projeto frontend.

### Frontend Test

#### Objetivo
Analisar habilidades e abordagens durante o desenvolvimento frontend, de forma clara e direta.

#### Enredo
Você curte Star Wars?
Caso sim, ótimo! Caso não, não há problema também, pois neste teste você irá passar à conhecer um pouquinho melhor. Veremos uma listagem completa dos personagens, com informações pertinentes e completas de todos eles!

#### Requerimentos obrigatórios
Não diremos que é um testelivre, mas com certeza é um teste que opta por uma abordagem mais abrangente e menos restrita de o que deve ser utilizado, e como.
> Utilize esta API para trazer tais informações, e cumpra obrigatoriamente os quesitos listados abaixo:
- Liste todos os personagens de forma consistente e bem trabalhada.
- Fica à teu critério sobre como construir uma boa UI mostrar todas estas informações.
- É estritamente importante sabermos algumas as informações de TODAS as starships pertencentes à cada personagem.
- A API trará todas estas informações prontas para você, basta aplicar a forma de fazer tais requisições da melhor forma possível.
- Reforçando, faça uma UI limpa, bonita e fluída. Seja utilizando algum framework CSS, pré processor, ou apenas Vanilla CSS.
- Utilize VanillaJS ou a lib/framework/ferramenta que quiser, desde que o resultado final mostra o básico requisitado.
- Mostrar mais personagens do que a primeira página da API disponibiliza (Para poder ser avaliado como foi feito a integração destes dados, seja com ou sem paginação)
- README.md explicando brevemente sobre seu projeto, e com instruções de instalação e execução, tanto da aplicação quanto dos testes, caso tenha.

#### Requerimentos desejáveis
Aqui são fatores que valem ser explorados e implementados, caso ache que faça sentido, e tenha tempo pra isso.
Mas fique tranquilo! Não é necessário fazer isso tudo.

- ##### Teste unitário
Sendo o tipo mais comum de teste normalmente, este é um recurso crucial dentro de uma aplicação.
Caso ache válido, implementar alguns destes testes seria algo bem interessante.

- ##### Teste e2e
Sabemos da importância de testes em nossa aplicação, certo? Como esta é apenas uma prova, seria legal ver se você sabe do que se trata, e se consegue configurar e implementar algo deste tipo.
**IMPORTANTE:** Se decidir implementar testes, certifique-se de que todos estão passando com sucesso. Senão entenderei que foram apenas testes auto gerados por algum boilerplate CLI. Neste caso, será avaliado como ponto negativo pela falta de atenção. (Se não for implementar testes, certifique-se que o projeto não contém
nenhum, e também não tem script para execução dos mesmos)

- ##### Responsividade
Como basicamente todos tem acesso à um celular facilmente, nos dias de hoje, também é válido que nossas aplicações respeitem estes requerimentos, e consigam continuar fluídas mesmo em resoluções menores.

- ##### Páginação
Haverão muitos, muitos personagens. Portanto, alguma forma de trazer estas informações de forma leve para a tela pode vir à ser bem importante. Paginação, lazy loading, fica à teu critério a melhor forma de considerar isso.

- ##### UI / UX
Será realmente relevante um bom estilo para estes cards de informações, para podermos analisar qual é seu grau de expertise em CSS como um todo. Posicionamento dos cards, cores utilizadas, espaçamento que faça sentido. Você vai ter a chance de mostrar que sabe muito na hora de construir um layout.

- ##### Imagens dos personagens
A API indicada à uso não retorna, de fato, as imagens dos personagens. Porém, existem serviços que podem fazer isso (Google oferece), onde, baseado no nome buscado, você pode recuperar um path duma imagem. A listagem ficaria mais bonita. :)

#### Critérios de avaliação
- Primordialmente, o projeto precisa rodar com o script de start. Não rodar o projeto, trará uma grande chance de reprovação. (Caso hajam mais passos para rodar o projeto, além de instalar as dependências e dar o start, as instruções extra precisam obrigatoriamente estar presentes no README.md do projeto.)
- Cumprimento de todos os requisitos obrigatórios
- Clean code
- Pontualidade de entrega
- Qualidade de layout
- Fluidez de navegação

Boa sorte, e divirta-se!

### Ressaltando Orientações

Conforme alinhamos, segue o desafio que deve ser executado por você para darmos
continuidade em nosso processo seletivo.

Para que você possa evoluir bem no processo, peço para que dê uma olhada nas boas
sugestões abaixo:

- Boas práticas e código limpo e organizado
- Criar uma página explicando o game
- Carregar as informações dos personagens antes de jogar
- Game funcionar corretamente
- Desenvolveu todas as features
- O layout responsivo
- Trabalhar com diretivas e pipes
- Mostrar bom domínio em React
- Criação de testes

O tempo irá contar a partir do momento que você responder o e-mail mencionando que
recebeu o teste.

Após a finalização, sinalize com o endereço do repositório remoto.

Por favor, enviar o seu desafio no prazo combinado.

De `@douglasabnovato`.



### Desafio - javascript e react

#### Descrição

##### Tudo sobre star wars

É uma aplicação web, web app ou mobile nativo, que deve ser desenvolvido usando React ou React Native. Em caso de duvida sinta-se a vontade para enviar perguntas no canal #react no slack DevJF. A aplicação deve permitir ao usuário conhecer mais sobre o Star Wars, seus filmes, personagens, planetas e tudo mais! A base de informações deve ser a SWAPI que fornece todo dado necessário.

Imaginamos o projeto em cinco partes, crescentes, que lhe dará uma boa noção do React e dos estados. Você pode fazer apenas as três primeiras partes, ou encarar a quarta e quinta também (as mais difíceis). Concluindo as três primeiras você pode dar um build e nos enviar, bem como enviar um link para o código no seu repositório.

Você pode optar por realizar as chamadas da API usando axios ou fetch, ou então usar a biblioteca SWAPI-Wrapper.

Seguem os requisitos:

Listar “people” na primeira interface, exibindo apenas um ou dois dados de cada personagem. Fique atento com paginação, pois, ao chamar /people/ ele trará só os primeiros registros;

Permitir realizar uma busca. Para isso adicione um campo acima da lista de personagens. O usuário poderá digitar sua busca e então ver os resultados filtrados abaixo (na mesma interface de lista);

Incluir filtro na busca. Oferecer um ou dois campos de filtros, tal como “gender” ou “height”. Realizando a busca ou filtrando, os registros são exibidos para o usuário (na mesma interface de lista);

Clicando em um dos personagens, abrir uma interface de detalhes daquele item, apresentando mais campos;

Nos detalhes do personagem, permitir clicar em um dos dados para visualizar seus detalhes também. Exemplo; ao clicar em um dos filmes abrirá uma interface apresentando os detalhes daquele filme. Não é preciso navegar em todos os dados, escolha apenas um ou dois dados que achar interessante montar a visualização.

Impactando ainda mais:

Sendo um web app, lembre o usuário de adicionar o atalho no celular, quando ainda não tiver;

Adicionar uma notificação quando o usuário abrir a aplicação pela primeira vez, dando boas vindas. Apenas na primeira vez;

Dizer no repositório o que você usou de componente e tecnologia no projeto, e porque usou;

Publicar o código em repositório público, com documentação em inglês.

#### Tecnologias
- javascript
- Ecmascript-6
- reactjs
- react-native
- nodejs

#### Etapas
- Teste online de algoritmo básico
- Teste online de Javascript
- Premiação para os dez primeiros colocados
- Entrevista por Whatsapp
- Teste comportamental online
- Participação do treinamento React para Humanos
- Teste em projeto prático
- Aceite para participação do estágio!

@douglasabnovato


# Frontend Star Wars
#### Atualização: 06 de novembro de 2019 - 01:10
#### Criação: 05 de novembro de 2019
#### Prática : @douglasabnovato

## Tecnologias : 

![ReactJS](/images/logo-reactjs.jpg)
![Git](/images/logo-git.png)
![Github](/images/logo-github.png)
![HTML/CSS/Javascript](/images/logo-html-css-js.jpeg)
![VSCode](/images/logo-VSCode.png)
![Yarn](/images/logo-yarn.png)
![Nodejs](/images/logo-nodejs.png)

### Projeto Frontend `Star Wars`
- Projeto frontend.

De `@douglasabnovato`.


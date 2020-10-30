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


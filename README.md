# AngularWorkingRoutes

Este projeto foi desenvolvido com o propósito de auxiliar na compreensão dos conceitos fundamentais de roteamento no Angular. Abaixo estão listados os principais comandos utilizados durante a criação do projeto:

- `ng new` (cria um novo projeto Angular)
- `ng g m pages/index` (cria o módulo "index" para a página inicial)
- `ng g c pages/index/title` (cria o componente "title" dentro do módulo "index")
- `ng g m pages/portfolio` (cria o módulo "portfolio" para a página de portfólio)
- `ng g c pages/portfolio/card` (cria o componente "card" dentro do módulo "portfolio")

Neste projeto, foram criadas duas páginas: "index" e "portfólio", cada uma com seu próprio módulo correspondente.

<details>

Dentro do módulo "index", é necessário exportar o componente "title" da seguinte forma:

```typescript
exports: [
  TitleComponent
]
```

Dentro do módulo "portfolio", é necessário exportar o componente "card" da seguinte forma:

```typescript
exports: [
  CardComponent
]
```

</details>

## Definindo as rotas da aplicação

O arquivo src/app/app-routing.module.ts define as configurações das rotas da aplicação Angular, permitindo que os componentes corretos sejam carregados com base nas URLs acessadas pelos usuários.

<details>

```typescript
const routes: Routes = [
  {path:'', component: TitleComponent, pathMatch:'full'},
  {path:'portfolio', component: CardComponent, pathMatch:'prefix'},
  {path:'**', redirectTo:''}
];
```

- 01 const routes: Routes = [...]:Aqui, você está criando uma constante chamada routes que armazena uma matriz de objetos. Esses objetos representam as rotas da sua aplicação Angular.

- 02 {path:'', component: TitleComponent, pathMatch:'full'}:Este é um objeto que descreve a primeira rota. Vamos analisar as propriedades:
path: '': Define o caminho da rota como uma string vazia, o que significa que esta rota corresponderá à URL raiz da sua aplicação Angular.
component: TitleComponent: Especifica o componente que será carregado quando essa rota for ativada. No caso, o TitleComponent será carregado quando a URL raiz for acessada.
pathMatch: 'full': Define o tipo de correspondência de rota como "full" (completa), o que significa que a URL deve corresponder exatamente à string vazia para ativar essa rota. Isso garante que a rota raiz seja correspondida apenas quando não houver nada após a barra na URL.

- 03 {path:'portfolio', component: CardComponent, pathMatch:'prefix'}:Este é o segundo objeto que descreve a segunda rota.
path: 'portfolio': Define o caminho da rota como "portfolio", o que significa que esta rota corresponderá à URL que contém "/portfolio".
component: CardComponent: Especifica o componente que será carregado quando essa rota for ativada. Nesse caso, o CardComponent será carregado quando a URL "/portfolio" for acessada.
pathMatch: 'prefix': Define o tipo de correspondência de rota como "prefix" (prefixo), o que significa que a rota será ativada quando a URL começar com "/portfolio". Isso permite que a rota seja ativada mesmo se houver segmentos adicionais na URL após "/portfolio", por exemplo, "/portfolio/items".

- No geral, esse código define duas rotas para a sua aplicação Angular: uma para a URL raiz (""), que carregará o TitleComponent, e outra para a URL "/portfolio", que carregará o CardComponent. A correspondência de rota "full" garante que a URL raiz seja correspondida apenas quando a URL estiver vazia, enquanto a correspondência "prefix" permite que a rota "/portfolio" seja correspondida quando a URL começa com "/portfolio".

- 04 { path: '**' }: O caminho '**' é um curinga que corresponde a qualquer URL que não corresponda a nenhuma das rotas definidas anteriormente. Em outras palavras, qualquer URL que não seja vazia ('') ou que não comece com '/portfolio' será capturada por essa rota curinga. redirectTo: '': Quando uma URL corresponde a esta rota curinga, a diretiva redirectTo especifica para onde o aplicativo deve redirecionar o usuário. Neste caso, está redirecionando para a URL raiz (''). Isso significa que, se o usuário acessar uma URL não correspondente, ele será redirecionado de volta para a página inicial da sua aplicação.

- Essa rota curinga é útil para lidar com casos em que um usuário digita uma URL inválida ou acessa uma rota não definida na sua aplicação. Em vez de mostrar uma página de erro, você pode redirecioná-los para uma página conhecida, como a página inicial, para garantir uma melhor experiência do usuário.

</details>

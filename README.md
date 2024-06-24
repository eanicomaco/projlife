# actcontrol

Clique [aqui](https://actcontrol.vercel.app/) e visualize o projeto publicado no Vercel!

App desenvolvido com Vue 3 no Vite. Permite que o usuário inicie uma atividade e controle o tempo gasto na execução desta tarefa.

## Configuração de IDE Recomendada

No desenvolvimento, foram utilizados [VSCode](https://code.visualstudio.com/) + [Vue Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) com Typescript.

## Suporte de Tipo para Importações .vue em TS

O TypeScript não pode lidar com informações de tipo para importações .vue por padrão, então substituímos o CLI tsc pelo vue-tsc para verificação de tipos. Nos editores, precisamos do [Vue Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) para tornar o serviço de linguagem TypeScript ciente dos tipos .vue.

## Um pouco mais sobre o Vite

Veja [Referência de Configuração do Vite](https://vitejs.dev/config/).

## Configuração do Projeto

```sh
npm install
```

### Compilação e Hot-Reload para Desenvolvimento

```sh
npm run dev
```

### Verificação de Tipos, Compilação e Minificação para Produção

```sh
npm run build
```

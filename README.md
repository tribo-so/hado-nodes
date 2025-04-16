<p align="center">
  <a href="https://hado.kinbox.com.br">
    <img src="https://cdn-icons-png.flaticon.com/512/18048/18048580.png" width="250" alt="Hado-api Logo" />
  </a>
</p>

<h1 align="center">Hado Nodes</h1>

<div align="center">

✨✨✨ Repositório público de nodes ✨✨✨

[![Prod Hado](https://img.shields.io/badge/Prod-Hado-blue)](https://hado.kinbox.com.br/)
[![Staging Hado](https://img.shields.io/badge/Staging-Hado-green)](https://hado.kinbox.com.br/)

</div>

Este repositório contém os nodes utilizados pelo sistema Hado. Aqui você pode contribuir com novos nodes, editar existentes ou apenas entender como tudo funciona por baixo dos panos.

---

## 🚀 Criando um novo node de integração

1. Crie uma nova pasta dentro de `src/nodes/integrations`, com o nome da sua integração:
```bash
./src/nodes/integrations/<nome-da-integracao>
```
2. Dentro dessa pasta, crie um arquivo com sufixo `.node.ts`:
```bash
./src/nodes/integrations/zapier/send-message.node.ts
```
3. Exporte um objeto default com a estrutura do node, conforme o modelo abaixo.

---

## 📦 Estrutura de um node

Todo node é um objeto que implementa a interface `Node`.

### Exemplo básico:

```ts
import { Node, NodeCategory, builder } from "src/nodes";

export default {
  type: "send_message",
  label: "Send Message",
  description: "Send a message via Zapier",
  image_src: "data:image/svg+xml;base64,...",
  color: "#00bcd4",
  category: NodeCategory.INTEGRATION,
  credentials: [
    {
      type: "api_key",
      label: "Zapier API Key",
      authorization_type: AuthorizationType.API_KEY,
      required: true,
      properties: [
        builder.property.text({
          id: "api_key",
          label: "API Key",
          required: true,
        }),
      ]
    },
  ],
  default_properties_values: {
    message: "Hello!",
  },
  properties: [
    builder.property.text({
      id: "message",
      label: "Message",
      required: true,
      tip: "Message to send",
    }),
  ],
  run: async (ctx, cmd) => {
    const { message } = ctx.properties;
    const { api_key } = ctx.credentials;

    // lógica de envio
    const res = await fetch("https://hooks.zapier.com/...", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${api_key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = res.json()

    // Salvando no output do node que será recebido como input do próximo node
    cmd.output(data);
  },
} satisfies Node;
```

---

## 🛠️ Propriedades do Node

| Campo                       | Descrição                                                     |
|-----------------------------|---------------------------------------------------------------|
| type                        | Identificador único do node                                   |
| label                       | Nome exibido no editor                                        |
| description                 | Texto descritivo do que o node faz                            |
| image_src                   | Ícone SVG embutido em base64 ou data-uri                      |
| color                       | Cor de destaque do node                                       |
| category                    | Categoria (CORE, INTEGRATION, etc)                            |
| credentials                 | Lista de credenciais necessárias, com type, label, e required |
| default_properties_values   | Valores padrão para os campos                                 |
| properties                  | Campos configuráveis no editor visual                         |
| run(ctx, cmd)               | Função executada quando o node roda (detalhes abaixo)         |
| get_dynamic_properties(ctx) | Função que buscar propriedades dinamicamente                  |
|                             |                                                               |
|                             |                                                               |

---

## ⚙️ Função `run(ctx, cmd)`

Quando um node é executado pelo sistema, é chamada a função `run` com dois parâmetros:

### `ctx: RunContext`
Contém:
- `ctx.properties`: os valores configurados pelo usuário no node
- `ctx.input`: os valor de output do node anterior
- `ctx.credentials`: as credenciais definidas para este node
- `ctx.operation_id`: o id da operação. e.g: "get_many" ou "update"
- `ctx.action_id`: o id da ação. e.g: "contact" ou "deal"
- `ctx.variables`: objeto com variáveis de sistema configurado pelo usuário
- `ctx.halted`: diz se essa execução do node sofreu ```halt``` (pausa) anteriormente 
- `ctx.halted_data`: dados que foram passados pelo comando ```resume(data)``` antes de iniciar a execução


### `cmd: Commands`
Contém funções utilitárias para controlar o fluxo do node:
- `cmd.halt()`: pausa a execução até que seja retomada pelo ```cmd.resume```
- `cmd.resume(data?, options?)`: continua a execução (pode definir delay ou marcar como skip)
- `cmd.jumpToNodeId(nodeId)`: pula a execução para o node do id especificado
- `cmd.next(target)`: escolhe uma saída do node diferente da default
- `cmd.output(data)`: salva qual vai ser o output desse node que o próximo node irá receber
- `cmd.log(...args)`: similar ao console.log salva algum log para aparecer na interface do front
- `cmd.runAction(...args, extra?)`: função helper que executa uma ação do node
- `cmd.runFetch(...args)`: instância do axios que já está setado seu bearer token ou api key do credentials.


---

## 🧪 Como testar seu node

Execute os testes com:

```bash
bun test
```

---

## ✅ Finalizando

Após criar ou editar um node:

1. Certifique-se de que os testes passaram
2. Faça commit e push direto para a branch `main`

```bash
git add .
git commit -m "feat(node): adiciona node de integração com Zapier"
git push origin main
```

✨ **Pronto! O novo node aparecerá automaticamente no frontend.**

---

## 💬 Dúvidas?

Fale com o time de engenharia ou abra uma issue neste repositório.
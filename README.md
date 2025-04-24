# Sistema de Controle de Atendimento

Projeto desenvolvido para a disciplina **Desenvolvimento Mobile de Alta Performance**, ministrada pelo Prof. João Ferreira, no curso de **Análise e Desenvolvimento de Sistemas** - 4º Período - UNINASSAU Unidade Graças (Recife/PE).

## Descrição

Este sistema é uma solução web responsiva para controle de atendimento em filas de laboratórios médicos. O foco é otimizar o fluxo de senhas com diferentes níveis de prioridade, proporcionando uma experiência organizada, eficiente e rastreável para clientes e atendentes.

## Agentes do Sistema

- **AS - Agente Sistema:** Emite senhas e responde aos comandos da atendente.
- **AA - Agente Atendente:** Chama a próxima senha da fila e registra o atendimento.
- **AC - Agente Cliente:** Retira a senha em um totem e aguarda o atendimento no painel.

## Tipos de Senhas

- **SP:** Senha Prioritária
- **SG:** Senha Geral
- **SE:** Senha para retirada de Exames

### Tempos Médios de Atendimento (TM)

| Tipo | TM Padrão | Observações |
|------|-----------|-------------|
| SP   | 15 min    | Pode variar ±5 min |
| SG   | 5 min     | Pode variar ±3 min |
| SE   | <1 min    | 95% dos casos até 1 min, 5% até 5 min |

### Regras de Atendimento

A ordem de atendimento deve alternar entre uma senha **SP** e uma senha **SG ou SE**, conforme disponível. Exemplo:

## Funcionalidades

- Emissão de senhas com padrão `YYMMDD-PPSQ`
- Painel com as 5 últimas senhas chamadas
- Regras de alternância entre tipos de senhas
- Registro de atendimento por guichê
- Descarte de senhas não atendidas após o expediente
- Geração de relatórios diários e mensais com:
  - Quantitativos por tipo e atendimento
  - Relatório detalhado das senhas
  - Relatório do Tempo Médio de Atendimento (TM)

## 🕘 Horário de Funcionamento

- Início do expediente: **07:00**
- Encerramento: **17:00**
- Senhas não atendidas após esse horário são descartadas.

## Tecnologias Utilizadas

- **Frontend:**
  - [React.js](https://reactjs.org/)
  - [Next.js](https://nextjs.org/) (para SSR e rotas simplificadas)
  - [TypeScript](https://www.typescriptlang.org/) (tipagem estática)
  - HTML5, CSS3

- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - API RESTful

- **Banco de Dados:**
  - Postgresql



## Configuração do Ambiente
### Requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação
1. Clone o repositório:
   ```bash
   git clone <URL do repositório>
   cd js-e-ts
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto e adicione as variáveis necessárias.

## 4. Uso do Projeto
Para iniciar a aplicação, execute:
```bash
npm run dev
# ou
yarn dev
```
A aplicação estará disponível em `http://localhost:3000`.

## 5. APIs
### Rota: `/api/senhas`
- **Método**: `GET`
- **Descrição**: Retorna uma lista de senhas.
- **Resposta**:
  ```json
  [
    {
      "id": 1,
      "senha": "12345"
    }
  ]
  ```

### Rota: `/api/senhas/:id`
- **Método**: `GET`
- **Descrição**: Retorna uma senha específica pelo ID.
- **Parâmetros**:
  - `id`: ID da senha.
- **Resposta**:
  ```json
  {
    "id": 1,
    "senha": "12345"
  }
  ```

## 6. Tipos e Interfaces
O projeto utiliza TypeScript para definir tipos e interfaces. Exemplos incluem:

```typescript
interface Senha {
  id: number;
  senha: string;
}
```

## 7. Contribuição
Para contribuir com o projeto:
1. Faça um fork do repositório.
2. Crie uma nova branch:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça suas alterações e commit:
   ```bash
   git commit -m "Adiciona nova feature"
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```

## 8. Licença
Este projeto está licenciado sob a MIT License.

## 9. Referências
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Prisma Documentation](https://www.prisma.io/docs/)

## Mentes envolvidas no projeto, responsáveis pela criação e prototipação do código.
 ### São eles :
- Matheus Marques 
- Kewen Wesley
- Daniel Lucas
- Renan Oliveira
- Renan Argolo

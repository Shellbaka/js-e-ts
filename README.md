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
  - MySQL 8.0


## ⚙️ Como Executar

1. Clone o repositório:
```CMD, NUNCA POWERSHELL OU BASH
git clone PUXA A URL



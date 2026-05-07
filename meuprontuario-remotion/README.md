# Meu Prontuário — Vídeo Comercial

Este repositório contém o código Remotion para gerar um vídeo vertical silencioso de 30 segundos.

O projeto foi criado com Remotion, React e TypeScript para o produto **Meu Prontuário**, com o slogan **Seu assistente de saúde pessoal** e URL **meuprontuario.app.br**.

## Rodar localmente

```bash
npm install
npm run dev
```

## Renderizar localmente

```bash
npm run artifact
```

Esse comando cria localmente a pasta `out/` com o MP4 e a thumbnail. Esses arquivos são gerados e ignorados pelo Git.

## Gerar vídeo para download

1. Suba este projeto no GitHub.
2. Vá em Actions.
3. Execute o workflow "Render Meu Prontuario Video".
4. Aguarde finalizar.
5. Baixe o artifact "MeuProntuario_FINAL".
6. Extraia o ZIP.
7. Abra o arquivo MeuProntuario_Comercial_30s_Silent.mp4.

O MP4 não fica salvo no código-fonte. Ele é gerado pelo GitHub Actions.

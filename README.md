# Meu Prontuário — Vídeo Comercial

Este repositório contém o projeto **Remotion + React + TypeScript** para gerar um vídeo comercial vertical, silencioso, de 30 segundos, para o produto **Meu Prontuário**.

- **Produto:** Meu Prontuário
- **Slogan:** Seu assistente de saúde pessoal
- **Site:** meuprontuario.app.br
- **Formato:** vertical, 1080x1920, 30 FPS, 30 segundos
- **Áudio:** sem música, sem narração e sem efeitos sonoros

> Importante: o MP4, a thumbnail e o ZIP final não ficam versionados no código-fonte. Eles são gerados pelo Remotion localmente ou pelo GitHub Actions e estão bloqueados no `.gitignore`.

## Estrutura principal

```text
.github/workflows/render.yml
public/
src/
package.json
README.md
remotion.config.ts
tsconfig.json
.gitignore
```

## Rodar localmente

```bash
npm install
npm run dev
```

O comando `npm run dev` abre o Remotion Studio para visualizar a composition.

## Renderizar localmente

```bash
npm run artifact
```

Esse comando cria localmente:

```text
out/MeuProntuario_Comercial_30s_Silent.mp4
out/MeuProntuario_Thumbnail.png
```

A pasta `out/` é gerada automaticamente e é ignorada pelo Git.

## Gerar vídeo para download pelo GitHub Actions

1. Suba este projeto no GitHub.
2. Vá em **Actions**.
3. Execute o workflow **Render Meu Prontuario Video**.
4. Aguarde finalizar.
5. Baixe o artifact **MeuProntuario_FINAL**.
6. Extraia o ZIP.
7. Abra o arquivo `MeuProntuario_Comercial_30s_Silent.mp4`.

## Scripts disponíveis

```bash
npm run dev
npm run render
npm run render:thumb
npm run artifact
```

## Observação sobre arquivos gerados

Não commite arquivos renderizados. O `.gitignore` bloqueia:

- `out/`
- `final/`
- `*.mp4`
- `*.mov`
- `*.zip`
- `*.png`
- caches e dependências locais

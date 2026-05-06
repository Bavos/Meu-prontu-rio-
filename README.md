# Meu Prontuário — Comercial Vertical Silencioso

Projeto Remotion completo para gerar um vídeo comercial premium, vertical e 100% silencioso de 30 segundos para **Meu Prontuário** — “Seu assistente de saúde pessoal”.

## Objetivo

Criar uma peça pronta para redes sociais, landing pages e anúncios mobile, transmitindo cuidado humano, tecnologia acessível, segurança, simplicidade e organização da saúde pessoal.

## Especificações do vídeo

- **Formato:** vertical mobile, 1080x1920
- **Duração:** 30 segundos
- **FPS:** 30
- **Áudio:** nenhum. O projeto não usa trilha, narração, efeitos sonoros, `<Audio />` ou `staticFile("audio.mp3")`.
- **Identidade visual:** gradiente azul para turquesa `linear-gradient(135deg, #4A90E2, #42D6C5)`
- **Tipografia:** Poppins, com fallback para Nunito, Montserrat e fontes de sistema
- **CTA final:** `meuprontuario.app.br`

## Estrutura

```text
remotion/
  public/
  src/
    assets/
    compositions/
      MeuProntuarioCommercial.tsx
    components/
      AnimatedCard.tsx
      ChecklistItem.tsx
      CTAButton.tsx
      FloatingIcon.tsx
      GradientBackground.tsx
      HeartLogo.tsx
      PhoneMockup.tsx
    scenes/
      Scene01Intro.tsx
      Scene02Problem.tsx
      Scene03Solution.tsx
      Scene04Benefits.tsx
      Scene05Human.tsx
      Scene06CTA.tsx
```

## Cenas

1. **Abertura emocional (0s–4s):** gradiente animado, partículas suaves, coração minimalista e assinatura do produto.
2. **O problema (4s–9s):** cards levemente desorganizados com exames perdidos, medicamentos esquecidos, informações espalhadas e emergências sem acesso rápido.
3. **A solução (9s–15s):** mockup de smartphone com exames, medicamentos, alergias, receitas e contatos médicos organizados.
4. **Benefícios (15s–22s):** checklist premium com histórico médico organizado, rapidez em emergências, compartilhamento seguro, acompanhamento da família e tranquilidade.
5. **Posicionamento humano (22s–26s):** linguagem acolhedora para famílias, idosos, cuidadores e profissionais da saúde.
6. **CTA final (26s–30s):** cena de alto impacto com botão pulsando, seta animada, URL em destaque e encerramento com “Meu Prontuário — Simples. Humano. Seguro.”

## Instalação

```bash
cd remotion
npm install
```

## Preview em desenvolvimento

```bash
npm run dev
```

## Renderização do MP4

```bash
npm run render
```

O script renderiza o vídeo e remove qualquer faixa de áudio com `ffmpeg -an`, garantindo um MP4 final sem stream de áudio. O arquivo final será criado na raiz do repositório:

```text
MeuProntuario_Comercial_30s_Silent.mp4
```

## Thumbnail PNG

```bash
npm run thumbnail
```

O thumbnail será criado na raiz do repositório:

```text
MeuProntuario_Thumbnail.png
```

## Validação de vídeo silencioso

```bash
npm run validate:silent
```

Esse comando verifica se não há importação ou referência a áudio no código-fonte. Para validar o MP4 final, use `ffprobe -v error -show_entries stream=index,codec_type,codec_name -of csv=p=0 MeuProntuario_Comercial_30s_Silent.mp4` e confirme que existe apenas stream `video`.

## Pacote ZIP para download

Depois de renderizar o vídeo e o thumbnail, gere o pacote final a partir da raiz do repositório:

```bash
zip -r MeuProntuario_Remotion.zip remotion README.md MeuProntuario_Comercial_30s_Silent.mp4 MeuProntuario_Thumbnail.png -x "remotion/node_modules/*" "remotion/.cache/*"
```

## Arquivos finais esperados

- `MeuProntuario_Comercial_30s_Silent.mp4`
- `MeuProntuario_Thumbnail.png`
- `MeuProntuario_Remotion.zip`
- `README.md`
- Projeto Remotion organizado em `remotion/`

# cellora-landingpage

Landing page estática para a Cellora — formulário de waitlist (Soil-to-Bottle).

## Stack
- HTML / CSS / JS puro, sem build step
- Formulário: [Formspree](https://formspree.io) (free tier)
- Deploy: Vercel (estático, auto-deteção)

## Setup

1. Cria uma conta em https://formspree.io e um novo formulário com destino para o teu endereço Cellora (ex.: `hello@cellora.<dominio>`).
2. Substitui `YOUR_FORMSPREE_ID` em `index.html` pelo ID do formulário (`https://formspree.io/f/<ID>`).
3. (Opcional) Testa localmente: `python3 -m http.server 8000` → http://localhost:8000

## Deploy no Vercel

Importar o repositório `CelloraLabs/cellora-landingpage` em https://vercel.com/new — Vercel deteta automaticamente como site estático, sem configuração adicional. Cada push para `main` faz redeploy.

Alternativa via CLI:

```bash
npm i -g vercel
vercel        # preview
vercel --prod # produção
```

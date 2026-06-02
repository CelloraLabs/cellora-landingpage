# cellora-landingpage

Landing page estática para a Cellora — Precision Viticulture & Smart Oenology (Soil-to-Bottle).

## Stack
- HTML / CSS / JS puro, sem build step
- Formulário: [Formspree](https://formspree.io) (ID `xlgvqkda`)
- Deploy: Vercel (estático, auto-deteção)

## Conteúdo a personalizar
Procurar e substituir conforme necessário:
- `hello@cellora.org` — email de contacto no footer
- `Viana do Castelo, Portugal` — morada/cidade (atualizar se mudar)
- `href="#"` em links sociais (LinkedIn) e legais (Termos / Privacidade / Cookies)
- Sub-páginas legais (atualmente são placeholders `#`) precisam de ficheiros próprios quando existirem

## Testar localmente
```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Deploy no Vercel

Importar o repositório `CelloraLabs/cellora-landingpage` em https://vercel.com/new — Vercel deteta automaticamente como site estático, sem configuração adicional. Cada push para `main` faz redeploy.

Alternativa via CLI:

```bash
npm i -g vercel
vercel        # preview
vercel --prod # produção
```

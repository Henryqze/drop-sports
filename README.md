# Drop Sports — Frontend

Frontend do site institucional Drop Sports, desenvolvido em **React + Vite + CSS**.

## Requisitos

- Node.js LTS (versão compatível com Vite 6; Node 20.19+ ou 22.12+ recomendado)
- npm

## Executar

```bash
npm install
npm run dev
```

Abra o endereço exibido pelo Vite, normalmente `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
```

## Configuração

Copie `.env.example` para `.env` e preencha os valores reais:

- `VITE_API_URL`: URL da API Spring Boot (reservada para integração futura)
- `VITE_WHATSAPP_NUMBER`: número do treinador com DDI, somente números
- `VITE_INSTAGRAM_USERNAME`: perfil público do Instagram, sem `@`
- `VITE_CONTACT_EMAIL`: e-mail público do treinador

**Não inclua segredos, tokens ou senhas em variáveis `VITE_`: elas são expostas ao navegador.**

## Páginas

- `/` — Início
- `/treinos` — Treinos
- `/consultorias` — Consultorias
- `/galeria` — Galeria
- `/contato` — Contato
- `/nos-conheca` — Nos conheça

## Integrações pendentes

1. Cadastro de interessados na API Spring Boot, incluindo validação, persistência no PostgreSQL e proteção contra spam.
2. Exibição de publicações do Instagram via backend e API autorizada, sujeita a permissões e disponibilidade.
3. Área administrativa protegida para gerenciamento de interessados.

O formulário **não salva dados no banco** nesta versão. Se o número de WhatsApp estiver configurado, ele abre uma conversa com mensagem pré-preenchida. Sem número configurado, valida localmente e informa que o envio ainda não está disponível.

## Conteúdo a substituir antes da publicação

- Fotografias reais do treinador e galeria
- Biografia, formação e registro profissional do treinador
- Contatos e links reais
- Revisão dos textos e modalidades oferecidas
- Aviso de privacidade/LGPD e política de tratamento de dados, conforme implementação real

## Estrutura

```text
src/
  components/  # layout e cards reutilizáveis
  data/        # conteúdo das modalidades, consultorias e FAQ
  pages/       # seis páginas
  main.jsx     # rotas
  styles.css   # estilos e responsividade
```

## Nota de design

A implementação usa a identidade visual descrita no Figma (escuro, ciano, tipografia forte). É uma primeira versão visual, não uma exportação pixel-perfect validada contra cada frame. Ajustes finos poderão ser feitos na revisão com o proprietário do design.

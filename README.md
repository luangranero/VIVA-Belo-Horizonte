# VIVA Eventos · Belo Horizonte e Região

Site de captação para comissões de formatura. A página se posiciona como uma **análise da turma**: a pessoa responde algumas perguntas e um especialista da unidade devolve um diagnóstico do momento da formatura, antes de qualquer proposta.

Site estático, sem build. É só abrir o `index.html` ou publicar a pasta em qualquer hospedagem (GitHub Pages, Netlify, Vercel, S3).

## Estrutura

```
index.html            página completa
assets/css/styles.css estilos
assets/js/regiao.js   configuração da região  ← é aqui que se mexe
assets/js/main.js     comportamento (formulário, widget, animações)
assets/img/           imagens otimizadas para a web (WebP)
```

## Configurar a unidade

Tudo que é específico da região está em `assets/js/regiao.js`:

| Campo | Para que serve |
|---|---|
| `nome`, `nomeFrase`, `nomeCurto` | como a região aparece nos textos |
| `unidade` | nome da unidade no rodapé, nas dúvidas e nos leads |
| `whatsapp` | número com DDI e DDD, só números. **Enquanto estiver vazio, o botão flutuante e o botão de WhatsApp do fim do formulário não aparecem** |
| `email`, `instagram`, `endereco` | contatos do rodapé (vazio = não aparece) |
| `webhookUrl` | para onde os leads são enviados (Google Apps Script, Make, Zapier, RD Station). **Vazio = nenhum lead é salvo** |
| `cidades` | chips de "Atendemos turmas em" e sugestões no formulário |
| `instituicoes` | sugestões no campo Faculdade |

O `<title>` e a descrição ficam fixos no `index.html`, por causa do Google.

### Outra região

Duplique o projeto, troque o `regiao.js` e ajuste o título e a descrição do `index.html`.

## Como os leads chegam

Os dois caminhos mandam JSON para o mesmo `webhookUrl`:

1. **Formulário de análise** (3 passos): turma, momento da turma e contato.
2. **Botão flutuante de WhatsApp**: pede nome, curso e faculdade antes de abrir a conversa. Vai marcado com `origem: "whatsapp_flutuante"`.

Os dois enviam também a região e as UTMs do anúncio.

## Duas versões de conteúdo

A página alterna entre **Medicina** e **outros cursos**, trocando textos, foto do topo e momentos da jornada. Para cair direto na versão de Medicina, use `?curso=medicina` no fim do endereço.

## O que não está no repositório

As fotos originais, os arquivos `.zip` do banco de imagens e os PDFs de persona ficam de fora (ver `.gitignore`). No repositório estão apenas as versões otimizadas usadas no site.

## Pendências

- Preencher `whatsapp`, `email` e `webhookUrl` em `regiao.js`.
- Revisar os trechos marcados com `<!-- VALIDAR -->` no `index.html`: compromissos, respostas das dúvidas, cidades atendidas e eventos que a unidade organiza.
- Os cartões ilustrativos do topo (fundo da turma e consultora) são exemplos.

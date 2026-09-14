/* =========================================================
   CONFIGURAÇÃO DA REGIÃO
   Para criar o site de outra região, duplique o projeto e
   altere apenas este arquivo (e o <title>/description do index.html).
   ========================================================= */

window.REGIAO = {
  slug: 'belo-horizonte',

  // Como a região aparece no site
  nome: 'Belo Horizonte e Região',      // selo do topo e títulos
  nomeFrase: 'Belo Horizonte e região', // dentro de frases
  nomeCurto: 'BH',                       // onde precisa ser curto
  cidadePrincipal: 'Belo Horizonte',
  uf: 'MG',

  unidade: 'VIVA Eventos BH',            // nome da unidade (rodapé, FAQ, lead)

  // Contatos da unidade (vazio = não aparece no site)
  endereco: '',                          // ex.: 'Av. do Contorno, 0000 · Savassi, Belo Horizonte/MG'
  whatsapp: '',                          // só números com DDI e DDD. ex.: '5531900000000'
  email: '',                             // ex.: 'bh@vivaeventos.com.br'
  instagram: '',                         // ex.: 'vivaeventosbh' (sem @)

  // Para onde vão os leads (POST com JSON): Google Apps Script, Make, Zapier, RD Station...
  webhookUrl: '',

  // VALIDAR: cidades atendidas pela unidade (aparecem no site e no formulário)
  cidades: [
    'Belo Horizonte',
    'Contagem',
    'Betim',
    'Nova Lima',
    'Lagoa Santa',
    'Santa Luzia',
    'Sabará',
    'Vespasiano',
    'Ibirité',
    'Sete Lagoas',
  ],

  // Sugestões no campo "Instituição" do formulário (não aparecem como clientes)
  instituicoes: [
    'UFMG',
    'PUC Minas',
    'CEFET-MG',
    'UEMG',
    'Faculdade Ciências Médicas de Minas Gerais',
    'UNIFENAS BH',
    'Centro Universitário de Belo Horizonte (UniBH)',
    'Centro Universitário UNA',
    'Centro Universitário Newton Paiva',
    'Faculdade de Minas (FAMINAS-BH)',
    'Faculdade da Saúde e Ecologia Humana (FASEH)',
    'Universidade FUMEC',
    'Faculdade Milton Campos',
    'Dom Helder Escola Superior',
    'Ibmec BH',
    'Faculdade Arnaldo',
    'Estácio BH',
    'Faculdade Pitágoras',
  ],
};

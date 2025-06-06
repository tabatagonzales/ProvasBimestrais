# Painel Interativo de Provas - Colégio Frei Galvão

Uma interface web lúdica, estudantil e responsiva para exibição do cronograma e conteúdos das provas do Colégio Frei Galvão.

## 🎯 Funcionalidades

- **Interface Responsiva**: Adaptável para desktop, tablet e mobile
- **Navegação por Abas**: Alternância entre 1º Ano EM e 5º Ano EF
- **Busca Inteligente**: Filtro por disciplina, data ou palavra-chave
- **Cards Interativos**: Animações de hover e expansão ao clicar
- **Status Visual**: Destaque para provas próximas (hoje, amanhã, esta semana)
- **Design Lúdico**: Ícones temáticos e cores harmoniosas

## 🚀 Como Hospedar no GitHub Pages

### 1. Criar Repositório
```bash
# No GitHub, crie um novo repositório
# Exemplo: painel-provas-frei-galvao
```

### 2. Clonar e Adicionar Arquivos
```bash
git clone https://github.com/tabatagonzales/painel-provas-frei-galvao.git
cd painel-provas-frei-galvao

# Copie os arquivos:
# - index.html
# - style.css  
# - app.js
# - README.md
```

### 3. Fazer Deploy
```bash
git add .
git commit -m "Adicionar Painel Interativo de Provas"
git push origin main
```

### 4. Ativar GitHub Pages
1. Vá nas **Settings** do repositório
2. Scroll até **Pages** 
3. Em **Source**, selecione **Deploy from a branch**
4. Escolha **main** branch
5. Clique **Save**

### 5. Acessar o Site
```
https://SEU_USUARIO.github.io/painel-provas-frei-galvao
```

## 📁 Estrutura dos Arquivos

```
painel-provas-frei-galvao/
├── index.html          # Estrutura HTML principal
├── style.css           # Estilos e responsividade
├── app.js             # Lógica JavaScript
└── README.md          # Documentação
```

## 🎨 Características Técnicas

- **Framework**: Vanilla HTML/CSS/JavaScript
- **Fonte**: Poppins (Google Fonts)
- **Icons**: Emojis temáticos para disciplinas
- **Layout**: CSS Grid/Flexbox responsivo
- **Animações**: CSS transitions suaves
- **Compatibilidade**: Todos os navegadores modernos

## 📱 Design Responsivo

- **Desktop**: Grid com 3 colunas
- **Tablet**: Grid com 2 colunas
- **Mobile**: Coluna única com touch-friendly

## 🔍 Funcionalidades de Busca

- Busca em tempo real
- Filtro por disciplina
- Filtro por data
- Busca por palavra-chave no conteúdo
- Clear search com um clique

## 🎯 Status das Provas

- **Hoje**: Destaque vermelho urgente
- **Amanhã**: Destaque laranja importante  
- **Esta Semana**: Destaque amarelo atenção
- **Futuras**: Estilo padrão

## 💻 Desenvolvimento Local

Para rodar localmente:

1. Abra o arquivo `index.html` em qualquer navegador
2. Ou use um servidor local:
```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .

# VS Code
# Use a extensão Live Server
```

## 📋 Dados das Provas

Os dados estão hardcoded no arquivo `app.js` e incluem:

### 1º Ano EM
- Geografia, História, Artes, Biologia, Literatura
- Controladoria, Estatística, Sistema Tributário
- Análise Empresarial, Catecismo, Redação
- Física, Inglês, Matemática, Filosofia, Tecnologia
- Sociologia, Empreendedorismo, Química, Gramática

### 5º Ano EF  
- História, Redação, Português, Artes, Geografia
- Catecismo, Inglês, Francês, Ciências, Matemática

## 🤝 Contribuições

Para modificar o conteúdo das provas, edite o objeto `examData` no arquivo `app.js`.

## 📞 Suporte

Este painel foi desenvolvido especificamente para o Colégio Frei Galvão seguindo suas diretrizes de identidade visual e funcionalidades pedagógicas.

## 📬 Contato

Desenvolvedora: @tabatagonzales

Dúvidas ou sugestões? Abra uma issue ou envie um e-mail para tabatadmjoias@gmail.com

---

**Demo**: [Ver Aplicação em Funcionamento](https://tabatagonzales.github.io/painel-provas-frei-galvao)

// Exam Panel Application
class ExamPanel {
    constructor() {
        this.currentTab = '1ano';
        this.currentDate = new Date('2025-06-05');
        this.searchTerm = '';
        this.examData = {
            "provas_1ano": [
                {
                    "data": "2025-06-09",
                    "dia_semana": "Segunda",
                    "disciplinas": [
                        {
                            "nome": "Geografia",
                            "icone": "🌍",
                            "conteudo": ["Demografia e Geografia", "Dados Demográficos Estatais e Regionais (IBGE)"]
                        },
                        {
                            "nome": "História", 
                            "icone": "📜",
                            "conteudo": ["Egito; O País - Geografia", "As Fronteiras", "Riqueza Natural", "O Povo Egípcio", "A Escrita Egípcia", "Os Hieroglifos", "Divisões da História Egípcia", "Egito Lendário", "Egito Pré-Histórico", "Período Tinita (Período Arcaico)", "Antigo Império", "As Pirâmides"]
                        }
                    ]
                },
                {
                    "data": "2025-06-10",
                    "dia_semana": "Terça",
                    "disciplinas": [
                        {
                            "nome": "Artes",
                            "icone": "🎨", 
                            "conteudo": ["Barroco e Maneirismo - Apostila"]
                        },
                        {
                            "nome": "Biologia",
                            "icone": "🧬",
                            "conteudo": ["Ecologia: Relações Harmónicas e Desarmónicas", "Relações Harmónicas Intraespecificas", "Relações Harmônicas Interespecíficas", "Relações Desarmónicas", "Intraespecificas", "Relações Desarmônicas Interespecíficas", "Discussão das Questões do ENEM: Sustentabilidade", "Meio Ambientais", "Conservação da Biodiversidade e Mudanças Climáticas"]
                        },
                        {
                            "nome": "Literatura",
                            "icone": "📚",
                            "conteudo": ["Barroco e arcadismo no Brasil"]
                        }
                    ]
                },
                {
                    "data": "2025-06-11",
                    "dia_semana": "Quarta",
                    "disciplinas": [
                        {
                            "nome": "Controladoria",
                            "icone": "📊",
                            "conteudo": ["Margem de Contribuição e Ponto de equilíbrio"]
                        },
                        {
                            "nome": "Estatística",
                            "icone": "📈",
                            "conteudo": ["Os números não mentem (até cap 7)"]
                        },
                        {
                            "nome": "Sistema Tributário",
                            "icone": "💰",
                            "conteudo": ["ISS - apostila e exercícios"]
                        }
                    ]
                },
                {
                    "data": "2025-06-12",
                    "dia_semana": "Quinta",
                    "disciplinas": [
                        {
                            "nome": "Análise Empresarial",
                            "icone": "💼",
                            "conteudo": ["Contabilidade bimestral"]
                        },
                        {
                            "nome": "Catecismo",
                            "icone": "✝️",
                            "conteudo": ["O Edito de Milão", "as processões em Deus", "os Padres apologetas", "as heresias cristológicas", "o Arianismo e o Concílio de Nicéia", "São Jerônimo"]
                        },
                        {
                            "nome": "Redação",
                            "icone": "✍️",
                            "conteudo": ["Tema trabalhado em sala de aula"]
                        }
                    ]
                },
                {
                    "data": "2025-06-13",
                    "dia_semana": "Sexta",
                    "disciplinas": [
                        {
                            "nome": "Física",
                            "icone": "⚡",
                            "conteudo": ["(Não especificado ainda)"]
                        },
                        {
                            "nome": "Inglês",
                            "icone": "🇺🇸",
                            "conteudo": ["Trabalho em sala"]
                        }
                    ]
                },
                {
                    "data": "2025-06-16",
                    "dia_semana": "Segunda",
                    "disciplinas": [
                        {
                            "nome": "Matemática",
                            "icone": "🔢",
                            "conteudo": ["Módulo (definição e propriedades)", "Função modular", "Gráfico de função modular"]
                        },
                        {
                            "nome": "Filosofia",
                            "icone": "🤔",
                            "conteudo": ["Platão - Apostila"]
                        },
                        {
                            "nome": "Tecnologia",
                            "icone": "💻",
                            "conteudo": ["Uso de PROCV(), PROCH() e SEERRO()", "uso de fórmulas referenciando a células de outras planilhas", "chamadas de funções aninhadas"]
                        }
                    ]
                },
                {
                    "data": "2025-06-17",
                    "dia_semana": "Terça",
                    "disciplinas": [
                        {
                            "nome": "Sociologia",
                            "icone": "👥",
                            "conteudo": ["Análise Sociopolítica Internacional e Brasileira", "Conflitos econômicos e militares mundiais", "Sociologia aplicada ao Vestibular"]
                        },
                        {
                            "nome": "Empreendedorismo",
                            "icone": "🚀",
                            "conteudo": ["Análise do Projeto de Cantina Escolar como Estratégia de Educação Empreendedora e Formação para o Projeto de Vida"]
                        }
                    ]
                },
                {
                    "data": "2025-06-18",
                    "dia_semana": "Quarta",
                    "disciplinas": [
                        {
                            "nome": "Química",
                            "icone": "⚗️",
                            "conteudo": ["Distribuição eletrônica: átomos neutros, cátions e ânions", "Propriedades periódicas", "Ligação iônica, covalente e metálica", "Polaridade e geometria química"]
                        },
                        {
                            "nome": "Gramática",
                            "icone": "📝",
                            "conteudo": ["Adjetivos e artigos", "Numerais"]
                        }
                    ]
                }
            ],
            "provas_5ano": [
                {
                    "data": "2025-06-09",
                    "dia_semana": "Segunda",
                    "disciplinas": [
                        {
                            "nome": "História",
                            "icone": "📜",
                            "conteudo": ["Independência do Brasil", "Dom Pedro I"]
                        }
                    ]
                },
                {
                    "data": "2025-06-10",
                    "dia_semana": "Terça",
                    "disciplinas": [
                        {
                            "nome": "Redação",
                            "icone": "✍️",
                            "conteudo": ["Tema trabalhado em sala de aula"]
                        }
                    ]
                },
                {
                    "data": "2025-06-11",
                    "dia_semana": "Quarta",
                    "disciplinas": [
                        {
                            "nome": "Português",
                            "icone": "📚",
                            "conteudo": ["Tipos de substantivos", "gênero, número e grau dos substantivos", "Adjetivos e seus graus", "Numeral"]
                        }
                    ]
                },
                {
                    "data": "2025-06-12",
                    "dia_semana": "Quinta",
                    "disciplinas": [
                        {
                            "nome": "Artes",
                            "icone": "🎨",
                            "conteudo": ["Trabalho em sala"]
                        },
                        {
                            "nome": "Geografia",
                            "icone": "🌍",
                            "conteudo": ["Divisão Política do Brasil", "Divisão do território brasileiro", "Estados das Regiões do Brasil", "O clima no Brasil", "O relevo brasileiro", "Litoral brasileiro"]
                        }
                    ]
                },
                {
                    "data": "2025-06-13",
                    "dia_semana": "Sexta",
                    "disciplinas": [
                        {
                            "nome": "Catecismo",
                            "icone": "✝️",
                            "conteudo": ["6°, 7°, 8°, 9°, 10°, 11° artigos do Credo", "o Juizo Final", "o Espírito Santo", "a Igreja Catolica", "os Três Estados da Igreja", "a Comunhão dos Santos", "o Purgatório e os Novissimos"]
                        }
                    ]
                },
                {
                    "data": "2025-06-16",
                    "dia_semana": "Segunda",
                    "disciplinas": [
                        {
                            "nome": "Inglês",
                            "icone": "🇺🇸",
                            "conteudo": ["Vocabulário do cotidiano"]
                        },
                        {
                            "nome": "Francês",
                            "icone": "🇫🇷",
                            "conteudo": ["il y a e C'est", "partes do corpo"]
                        }
                    ]
                },
                {
                    "data": "2025-06-17",
                    "dia_semana": "Terça",
                    "disciplinas": [
                        {
                            "nome": "Ciências",
                            "icone": "🔬",
                            "conteudo": ["Cadeias e Teias Alimentares"]
                        }
                    ]
                },
                {
                    "data": "2025-06-18",
                    "dia_semana": "Quarta",
                    "disciplinas": [
                        {
                            "nome": "Matemática",
                            "icone": "🔢",
                            "conteudo": ["Decimais (4 operações)", "multiplicação e divisão por 10, 100, 1000", "Transformações de unidades (metro, grama, hora)", "Múltiplos e divisores", "MMC, MDC", "Números primos", "Metade, dobro, triplo, dúzia e meia dúzia", "Problemas"]
                        }
                    ]
                }
            ]
        };
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderExams();
    }

    setupEventListeners() {
        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        const clearBtn = document.getElementById('clearSearch');

        searchInput.addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase();
            this.updateClearButton();
            this.renderExams();
        });

        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            this.searchTerm = '';
            this.updateClearButton();
            this.renderExams();
            searchInput.focus();
        });
    }

    switchTab(tabName) {
        // Update active tab button
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // Update active content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`content-${tabName}`).classList.add('active');

        this.currentTab = tabName;
        this.renderExams();
    }

    updateClearButton() {
        const clearBtn = document.getElementById('clearSearch');
        if (this.searchTerm) {
            clearBtn.classList.add('visible');
        } else {
            clearBtn.classList.remove('visible');
        }
    }

    getExamStatus(examDate) {
        const exam = new Date(examDate);
        const current = new Date(this.currentDate);
        const diffTime = exam.getTime() - current.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return { class: 'today', text: 'Hoje' };
        if (diffDays === 1) return { class: 'tomorrow', text: 'Amanhã' };
        if (diffDays > 1 && diffDays <= 7) return { class: 'this-week', text: 'Esta Semana' };
        return { class: 'future', text: 'Futuro' };
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }

    filterExams(exams) {
        if (!this.searchTerm) return exams;

        return exams.filter(exam => {
            // Search in date
            if (this.formatDate(exam.data).includes(this.searchTerm)) return true;
            if (exam.dia_semana.toLowerCase().includes(this.searchTerm)) return true;

            // Search in disciplines
            return exam.disciplinas.some(disciplina => {
                if (disciplina.nome.toLowerCase().includes(this.searchTerm)) return true;
                return disciplina.conteudo.some(conteudo => 
                    conteudo.toLowerCase().includes(this.searchTerm)
                );
            });
        });
    }

    createSubjectCard(disciplina) {
        const subjectCard = document.createElement('div');
        subjectCard.className = 'subject-card';
        
        const contentItems = disciplina.conteudo.map(item => 
            `<div class="content-item">${item}</div>`
        ).join('');

        subjectCard.innerHTML = `
            <div class="subject-header">
                <div class="subject-icon">${disciplina.icone}</div>
                <div class="subject-name">${disciplina.nome}</div>
                <div class="expand-indicator">▼</div>
            </div>
            <div class="subject-content">
                <div class="content-list">
                    ${contentItems}
                </div>
            </div>
        `;

        // Add click event to expand/collapse
        subjectCard.addEventListener('click', () => {
            subjectCard.classList.toggle('expanded');
        });

        return subjectCard;
    }

    createExamCard(exam) {
        const examCard = document.createElement('div');
        examCard.className = 'exam-day bounce-in';
        
        const status = this.getExamStatus(exam.data);
        const formattedDate = this.formatDate(exam.data);

        examCard.innerHTML = `
            <div class="exam-day-header">
                <div class="exam-status ${status.class}">${status.text}</div>
                <div class="exam-date">${formattedDate}</div>
                <div class="exam-weekday">${exam.dia_semana}-feira</div>
            </div>
            <div class="subjects-list">
                <!-- Subjects will be added dynamically -->
            </div>
        `;

        const subjectsList = examCard.querySelector('.subjects-list');
        exam.disciplinas.forEach(disciplina => {
            const subjectCard = this.createSubjectCard(disciplina);
            subjectsList.appendChild(subjectCard);
        });

        return examCard;
    }

    renderExams() {
        const examKey = this.currentTab === '1ano' ? 'provas_1ano' : 'provas_5ano';
        const exams = this.examData[examKey];
        const filteredExams = this.filterExams(exams);
        
        const container = document.getElementById(`exams-${this.currentTab}`);
        const noResults = document.getElementById('noResults');
        
        // Clear existing content
        container.innerHTML = '';

        if (filteredExams.length === 0) {
            noResults.classList.remove('hidden');
            return;
        }

        noResults.classList.add('hidden');

        // Create and append exam cards
        filteredExams.forEach((exam, index) => {
            const examCard = this.createExamCard(exam);
            // Add staggered animation delay
            examCard.style.animationDelay = `${index * 0.1}s`;
            container.appendChild(examCard);
        });
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ExamPanel();
});

// Add some utility functions for enhanced user experience
document.addEventListener('keydown', (e) => {
    // ESC key to clear search
    if (e.key === 'Escape') {
        const searchInput = document.getElementById('searchInput');
        if (searchInput.value) {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
        }
    }
    
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
});

// Add smooth scrolling when jumping between sections
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Handle tab keyboard navigation
document.querySelectorAll('.tab-btn').forEach((tab, index, tabs) => {
    tab.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && index > 0) {
            tabs[index - 1].focus();
        } else if (e.key === 'ArrowRight' && index < tabs.length - 1) {
            tabs[index + 1].focus();
        }
    });
});

// Add loading state management
function showLoading() {
    document.body.classList.add('loading');
}

function hideLoading() {
    document.body.classList.remove('loading');
}

// Performance optimization: Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe cards as they're added to the DOM
const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1 && node.classList.contains('exam-day')) {
                cardObserver.observe(node);
            }
        });
    });
});

mutationObserver.observe(document.body, {
    childList: true,
    subtree: true
});
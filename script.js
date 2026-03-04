const MODULES = [
    {
        id: "m1",
        title: "Módulo 1: Introducción",
        description: "Conceptos básicos y fundamentos del curso.",
        duration: "15 min",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        pdfUrl: "modulo1.pdf"
    },
    {
        id: "m2",
        title: "Módulo 2: Desarrollo Frontend",
        description: "Aprende a estructurar interfaces modernas.",
        duration: "25 min",
        videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
        pdfUrl: "modulo2.pdf"
    },
    {
        id: "m3",
        title: "Módulo 3: Interactividad",
        description: "Conecta tu UI con JavaScript y React.",
        duration: "30 min",
        videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
        pdfUrl: "modulo3.pdf"
    }
];

let activeModuleId = MODULES[0].id;

function init() {
    renderModules();
    updateContent(activeModuleId);
    setupEventListeners();
    lucide.createIcons();
}

function renderModules() {
    const list = document.getElementById('module-list');
    list.innerHTML = MODULES.map(m => `
        <button class="module-item ${m.id === activeModuleId ? 'active' : ''}" onclick="selectModule('${m.id}')">
            <i data-lucide="${m.id === 'm1' ? 'check-circle' : 'play-circle'}"></i>
            <div>
                <div style="font-weight: 600; font-size: 0.875rem">${m.title}</div>
                <div style="font-size: 0.75rem; opacity: 0.8">${m.duration}</div>
            </div>
        </button>
    `).join('');
    lucide.createIcons();
}

function selectModule(id) {
    activeModuleId = id;
    renderModules();
    updateContent(id);
    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('open');
    }
}

function updateContent(id) {
    const module = MODULES.find(m => m.id === id);
    document.getElementById('module-title').textContent = module.title;
    document.getElementById('module-description').textContent = module.description;
    document.getElementById('module-duration').textContent = module.duration;
    document.getElementById('video-player').src = module.videoUrl;
    document.getElementById('pdf-object').data = module.pdfUrl;
    document.getElementById('pdf-download').href = module.pdfUrl;
    document.getElementById('pdf-fallback').href = module.pdfUrl;
}

function setupEventListeners() {
    document.getElementById('menu-toggle').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('open');
    });
}

// Inicializar
document.addEventListener('DOMContentLoaded', init);
window.selectModule = selectModule; // Hacerlo global para el onclick inline
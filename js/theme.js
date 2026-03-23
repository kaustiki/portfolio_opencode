const ThemeManager = {
    init() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.bindToggle();
    },
    
    bindToggle() {
        const toggleBtn = document.querySelector('.nav__theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggle());
        }
    },
    
    toggle() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        if (window.NeuralPattern) {
            window.NeuralPattern.regenerate();
        }
    },
    
    getCurrentTheme() {
        return document.documentElement.getAttribute('data-theme');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
});

window.ThemeManager = ThemeManager;

const Terminal = {
    commands: {},
    history: [],
    historyIndex: -1,
    maxHistory: 20,
    
    init() {
        this.outputEl = document.getElementById('terminal-output');
        this.inputEl = document.getElementById('terminal-input');
        
        if (!this.outputEl || !this.inputEl) return;
        
        this.registerCommands();
        this.bindEvents();
        this.showWelcome();
    },
    
    registerCommands() {
        this.commands = {
            'help()': this.cmdHelp,
            'help': this.cmdHelp,
            'df.info': this.cmdDfInfo,
            'model.summary()': this.cmdModelSummary,
            'education.head()': this.cmdEducation,
            'experience.head()': this.cmdExperience,
            'skills.head()': this.cmdSkills,
            'projects.head()': this.cmdProjects,
            'finearts.head()': this.cmdFineArts,
            'contact.head()': this.cmdContact,
            'clear': this.cmdClear,
            'theme.toggle()': this.cmdThemeToggle,
            'history': this.cmdHistory
        };
    },
    
    bindEvents() {
        this.inputEl.addEventListener('keydown', (e) => this.handleKeydown(e));
    },
    
    handleKeydown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const input = this.inputEl.value.trim();
            if (input) {
                this.execute(input);
                this.history.push(input);
                if (this.history.length > this.maxHistory) {
                    this.history.shift();
                }
                this.historyIndex = this.history.length;
                this.inputEl.value = '';
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (this.historyIndex > 0) {
                this.historyIndex--;
                this.inputEl.value = this.history[this.historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (this.historyIndex < this.history.length - 1) {
                this.historyIndex++;
                this.inputEl.value = this.history[this.historyIndex];
            } else {
                this.historyIndex = this.history.length;
                this.inputEl.value = '';
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            this.autocomplete();
        }
    },
    
    autocomplete() {
        const input = this.inputEl.value.trim().toLowerCase();
        if (!input) return;
        
        const matches = Object.keys(this.commands).filter(cmd => 
            cmd.toLowerCase().startsWith(input)
        );
        
        if (matches.length === 1) {
            this.inputEl.value = matches[0];
        } else if (matches.length > 1) {
            this.print(`\n${matches.join('  ')}`);
            this.print(`\n>>> ${input}`);
        }
    },
    
    execute(input) {
        this.print(`\n>>> ${input}`);
        
        const normalizedInput = input.toLowerCase().trim();
        let commandFound = null;
        
        for (const cmd of Object.keys(this.commands)) {
            if (cmd.toLowerCase() === normalizedInput) {
                commandFound = cmd;
                break;
            }
        }
        
        if (commandFound) {
            const result = this.commands[commandFound].call(this);
            if (result) {
                this.print(result);
            }
        } else {
            this.print(`\nCommand not found: ${input}`);
            this.print(`\nType 'help()' for available commands.`);
        }
        
        this.scrollToBottom();
    },
    
    print(text) {
        this.outputEl.textContent += text;
    },
    
    scrollToBottom() {
        this.outputEl.scrollTop = this.outputEl.scrollHeight;
    },
    
    showWelcome() {
        const welcomeText = `>>> import akurati as ak
>>> ak.info`;
        this.typeText(welcomeText, () => {
            this.print(this.cmdDfInfo());
            this.scrollToBottom();
        });
    },
    
    typeText(text, callback) {
        let i = 0;
        const speed = 30;
        
        const type = () => {
            if (i < text.length) {
                this.print(text.charAt(i));
                i++;
                this.scrollToBottom();
                setTimeout(type, speed);
            } else {
                if (callback) callback();
            }
        };
        
        type();
    },
    
    cmdHelp() {
        return `
Available commands:
  help()              - List all available commands
  df.info             - Display name and title
  model.summary()     - Display profile overview
  education.head()    - Display education entries
  experience.head()   - Display work experience
  skills.head()       - Display technical skills
  projects.head()     - Display projects
  finearts.head()     - Display fine arts
  contact.head()      - Display contact info
  clear               - Clear terminal output
  theme.toggle()      - Toggle light/dark mode
  history             - Show command history`;
    },
    
    cmdDfInfo() {
        const data = window.portfolioData;
        if (!data) return 'Data not loaded';
        
        return `
Name: ${data.info.name}
Title: ${data.info.title}
Subtitle: ${data.info.subtitle}
Summary: ${data.info.summary}`;
    },
    
    cmdModelSummary() {
        const data = window.portfolioData;
        if (!data) return 'Data not loaded';
        
        return `
Model: Akurati Kaustiki
Type: Computer Science Engineer
Specialization: AI & ML

Parameters:
  Education: M.Tech (BITS Pilani)
  Experience: 2+ years
  Skills: ML, DL, Python, FastAPI, Docker

Status: Open to opportunities`;
    },
    
    cmdEducation() {
        const data = window.portfolioData;
        if (!data) return 'Data not loaded';
        
        let output = '\nEducation:';
        data.education.forEach((edu, i) => {
            output += `\n\n[${i + 1}] ${edu.institution}`;
            output += `\n    Degree: ${edu.degree}`;
            output += `\n    Duration: ${edu.dates}`;
            if (edu.cgpa) output += `\n    CGPA: ${edu.cgpa}`;
            if (edu.marks) output += `\n    Marks: ${edu.marks}`;
        });
        return output;
    },
    
    cmdExperience() {
        const data = window.portfolioData;
        if (!data) return 'Data not loaded';
        
        let output = '\nExperience:';
        data.experience.forEach((exp, i) => {
            output += `\n\n[${i + 1}] ${exp.company}`;
            output += `\n    Role: ${exp.role}`;
            output += `\n    Duration: ${exp.dates}`;
            output += `\n    Responsibilities:`;
            exp.details.slice(0, 3).forEach(d => {
                output += `\n      - ${d}`;
            });
            if (exp.details.length > 3) {
                output += `\n      ... and ${exp.details.length - 3} more`;
            }
        });
        return output;
    },
    
    cmdSkills() {
        const data = window.portfolioData;
        if (!data) return 'Data not loaded';
        
        let output = '\nTechnical Skills:';
        Object.entries(data.skills).forEach(([category, skills]) => {
            output += `\n\n  ${category}:`;
            skills.forEach(skill => {
                output += `\n    - ${skill}`;
            });
        });
        return output;
    },
    
    cmdProjects() {
        const data = window.portfolioData;
        if (!data) return 'Data not loaded';
        
        let output = '\nProjects:';
        data.projects.forEach((proj, i) => {
            output += `\n\n[${i + 1}] ${proj.title}`;
            output += `\n    ${proj.subtitle}`;
            output += `\n    Duration: ${proj.dates}`;
            output += `\n    Tech: ${proj.tech.join(', ')}`;
        });
        return output;
    },
    
    cmdFineArts() {
        const data = window.portfolioData;
        if (!data) return 'Data not loaded';
        
        let output = '\nFine Arts:';
        Object.entries(data.finearts).forEach(([category, items]) => {
            output += `\n\n  ${category}:`;
            items.forEach(item => {
                output += `\n    - ${item}`;
            });
        });
        return output;
    },
    
    cmdContact() {
        const data = window.portfolioData;
        if (!data) return 'Data not loaded';
        
        return `
Contact Information:
  Email: ${data.contact.email}
  Phone: ${data.contact.phone}
  GitHub: ${data.contact.github}
  LinkedIn: ${data.contact.linkedin}
  Address: ${data.contact.address}`;
    },
    
    cmdClear() {
        this.outputEl.textContent = '';
        return null;
    },
    
    cmdThemeToggle() {
        if (window.ThemeManager) {
            window.ThemeManager.toggle();
            const theme = window.ThemeManager.getCurrentTheme();
            return `\nTheme switched to ${theme} mode.`;
        }
        return '\nTheme toggle not available.';
    },
    
    cmdHistory() {
        if (this.history.length === 0) {
            return '\nNo command history.';
        }
        return '\nCommand History:\n' + this.history.map((cmd, i) => `  ${i + 1}. ${cmd}`).join('\n');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    Terminal.init();
});

window.Terminal = Terminal;

class MuslimTest {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.categoryScores = {};
        this.startTime = null;
        this.autoNextTimer = null;
        this.init();
    }

    init() {
        Object.keys(categories).forEach(cat => {
            this.categoryScores[cat] = { score: 0, max: 0 };
        });
    }

    startTest() {
        this.currentQuestion = 0;
        this.answers = [];
        this.startTime = Date.now();
        this.init();
        this.showScreen('test-screen');
        this.displayQuestion();
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    displayQuestion() {
        const question = questions[this.currentQuestion];
        const progress = ((this.currentQuestion + 1) / questions.length) * 100;
        
        document.getElementById('progress-fill').style.width = progress + '%';
        document.getElementById('progress-text').textContent = `${this.currentQuestion + 1} / ${questions.length}`;
        document.getElementById('category-badge').textContent = question.category;
        document.getElementById('question-text').textContent = question.question;
        
        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.textContent = option.text;
            optionDiv.onclick = () => this.selectOption(index, option.score);
            optionsContainer.appendChild(optionDiv);
        });
        
        // Reset feedback and buttons
        document.getElementById('feedback').classList.remove('show');
        document.getElementById('next-button').classList.remove('show');
        document.getElementById('skip-timer').classList.remove('show');
        
        // Clear any existing timer
        if (this.autoNextTimer) {
            clearTimeout(this.autoNextTimer);
            this.autoNextTimer = null;
        }
    }

    selectOption(index, score) {
        const question = questions[this.currentQuestion];
        
        // Prevent multiple selections
        if (this.answers.find(a => a.questionId === question.id)) {
            return;
        }
        
        this.answers.push({
            questionId: question.id,
            category: question.category,
            score: score,
            maxScore: 10
        });
        
        this.categoryScores[question.category].score += score;
        this.categoryScores[question.category].max += 10;
        
        // Highlight selected option and disable all
        document.querySelectorAll('.option').forEach((opt, idx) => {
            opt.classList.remove('selected');
            opt.style.pointerEvents = 'none';
            if (idx === index) {
                opt.classList.add('selected');
            }
        });
        
        // Show feedback
        this.showFeedback(question);
        
        // Show next button
        document.getElementById('next-button').classList.add('show');
        
        // Show and start timer
        const timerDiv = document.getElementById('skip-timer');
        const timerFill = document.getElementById('timer-fill');
        timerDiv.classList.add('show');
        
        // Reset timer animation
        timerFill.style.transition = 'none';
        timerFill.style.width = '100%';
        setTimeout(() => {
            timerFill.style.transition = 'width 5s linear';
            timerFill.classList.add('animate');
        }, 50);
        
        // Auto advance after 5 seconds
        this.autoNextTimer = setTimeout(() => {
            this.nextQuestion();
        }, 5000);
    }

    showFeedback(question) {
        const feedbackDiv = document.getElementById('feedback');
        feedbackDiv.innerHTML = `
            <p>${question.feedback}</p>
            <p class="verse">${question.verse}</p>
        `;
        feedbackDiv.classList.add('show');
    }

    nextQuestion() {
        // Clear timer
        if (this.autoNextTimer) {
            clearTimeout(this.autoNextTimer);
            this.autoNextTimer = null;
        }
        
        this.currentQuestion++;
        
        if (this.currentQuestion < questions.length) {
            this.displayQuestion();
        } else {
            this.showResults();
        }
    }

    calculateTotalScore() {
        const totalScore = this.answers.reduce((sum, answer) => sum + answer.score, 0);
        const maxScore = this.answers.length * 10;
        return Math.round((totalScore / maxScore) * 100);
    }

    showResults() {
        this.showScreen('result-screen');
        
        const totalScore = this.calculateTotalScore();
        
        document.getElementById('total-score').innerHTML = `
            <div class="score-number">${totalScore}%</div>
            <div class="score-label">${this.getScoreMessage(totalScore)}</div>
        `;
        
        this.displayCategoryScores();
        this.displayComparison(totalScore);
        this.saveResult(totalScore);
    }

    getScoreMessage(score) {
        if (score >= 90) {
            return "Günlük hayatta Kur'an öğretilerinin çoğunu uyguluyorsun! 🌟";
        } else if (score >= 75) {
            return "İslami değerleri hayatına yansıtmaya çalışıyorsun 💚";
        } else if (score >= 60) {
            return "İyi bir yoldasın, gelişime her zaman açıksın 🌱";
        } else if (score >= 45) {
            return "Bazı alanlarda gelişim fırsatların var 📚";
        } else if (score >= 30) {
            return "Küçük adımlar büyük değişimler yaratır ✨";
        } else {
            return "Her yolculuk bir adımla başlar, sen de başlangıçtasın 🚀";
        }
    }

    displayCategoryScores() {
        const container = document.getElementById('categories-result');
        container.innerHTML = '<h3 style="margin-bottom: 20px; color: #eaeaea;">Kategori Detayları</h3>';
        
        Object.keys(this.categoryScores).forEach(category => {
            const catData = this.categoryScores[category];
            const percentage = Math.round((catData.score / catData.max) * 100);
            
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'category-item';
            categoryDiv.innerHTML = `
                <div class="category-header">
                    <span class="category-name">${category}</span>
                    <span class="category-score">${percentage}%</span>
                </div>
                <div class="category-bar">
                    <div class="category-bar-fill" style="width: ${percentage}%"></div>
                </div>
            `;
            container.appendChild(categoryDiv);
        });
    }

    displayComparison(userScore) {
        const stats = this.getStats();
        const avgScore = stats.average;
        
        document.getElementById('comparison').innerHTML = `
            <h3>📊 Genel İstatistikler</h3>
            <div class="comparison-stats">
                <div class="stat">
                    <div class="stat-value">${userScore}%</div>
                    <div class="stat-label">Senin Skorun</div>
                </div>
                <div class="stat">
                    <div class="stat-value">${avgScore}%</div>
                    <div class="stat-label">Ortalama Skor</div>
                </div>
                <div class="stat">
                    <div class="stat-value">${stats.total}</div>
                    <div class="stat-label">Toplam Katılımcı</div>
                </div>
            </div>
        `;
    }

    saveResult(score) {
        let results = JSON.parse(localStorage.getItem('testResults') || '[]');
        results.push({
            score: score,
            date: new Date().toISOString(),
            categoryScores: this.categoryScores
        });
        localStorage.setItem('testResults', JSON.stringify(results));
    }

    getStats() {
        const results = JSON.parse(localStorage.getItem('testResults') || '[]');
        
        if (results.length === 0) {
            return { average: 0, total: 0 };
        }
        
        const total = results.length;
        const sum = results.reduce((acc, result) => acc + result.score, 0);
        const average = Math.round(sum / total);
        
        return { average, total };
    }

    shareWhatsApp() {
        const score = this.calculateTotalScore();
        const text = `🌙 "Ne Kadar Müslümansın?" testinde %${score} puan aldım! Sen kaç alacaksın?`;
        const url = window.location.href;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + '\n\n' + url)}`;
        window.open(whatsappUrl, '_blank');
    }

    shareTwitter() {
        const score = this.calculateTotalScore();
        const text = `🌙 "Ne Kadar Müslümansın?" testinde %${score} puan aldım! Sen kaç alacaksın?`;
        const url = window.location.href;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        window.open(twitterUrl, '_blank');
    }

    copyLink() {
        const url = window.location.href;
        
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(url).then(() => {
                this.showToast('Link kopyalandı! 📋');
            }).catch(() => {
                this.fallbackCopyLink(url);
            });
        } else {
            this.fallbackCopyLink(url);
        }
    }

    fallbackCopyLink(url) {
        const textArea = document.createElement('textarea');
        textArea.value = url;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            this.showToast('Link kopyalandı! 📋');
        } catch (err) {
            this.showToast('Link kopyalanamadı 😞');
        }
        
        document.body.removeChild(textArea);
    }

    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    restart() {
        this.showScreen('welcome-screen');
    }
}

// Uygulamayı başlat
const app = new MuslimTest();

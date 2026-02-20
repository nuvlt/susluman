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

    updateJourneyProgress() {
        const progress = ((this.currentQuestion + 1) / questions.length) * 100;
        const journeyFill = document.getElementById('journey-fill');
        const icons = document.querySelectorAll('.journey-icon');
        
        // Update progress bar
        journeyFill.style.width = progress + '%';
        
        // Update icons based on progress
        const iconThresholds = [0, 25, 50, 75, 100];
        icons.forEach((icon, index) => {
            icon.classList.remove('active', 'completed');
            if (progress >= iconThresholds[index]) {
                if (progress < iconThresholds[index + 1] || index === icons.length - 1) {
                    icon.classList.add('active');
                } else {
                    icon.classList.add('completed');
                }
            }
        });
        
        // Update label
        const labels = [
            "Yolculuk Başlıyor...",
            "Gelişiyorsun 🌱",
            "İyi Gidiyorsun 🌿",
            "Neredeyse Bitti 🌳",
            "Son Adım! 🌲"
        ];
        
        let labelIndex = Math.floor((this.currentQuestion / questions.length) * 4);
        if (this.currentQuestion === questions.length - 1) labelIndex = 4;
        
        document.getElementById('progress-label').textContent = labels[labelIndex];
    }

    displayQuestion() {
        const question = questions[this.currentQuestion];
        
        // Update progress
        this.updateJourneyProgress();
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
        
        // Auto advance after 10 seconds
        this.autoNextTimer = setTimeout(() => {
            this.nextQuestion();
        }, 10000);
    }

    showFeedback(question) {
        const feedbackDiv = document.getElementById('feedback');
        
        // Check if answer was correct
        const selectedAnswer = this.answers[this.answers.length - 1];
        const isCorrect = selectedAnswer.score === 10;
        
        const resultIcon = isCorrect ? '✅' : '❌';
        const resultText = isCorrect ? 'Doğru!' : 'Yanlış!';
        
        feedbackDiv.innerHTML = `
            <div style="font-size: 1.5rem; margin-bottom: 10px;">${resultIcon} ${resultText}</div>
            <p><strong>${question.feedback}</strong></p>
            <p style="margin-top: 10px;">${question.info}</p>
            <p class="verse">${question.source}</p>
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

    getEmojiRating(percentage) {
        if (percentage >= 90) return { emoji: '⭐⭐⭐⭐⭐', text: 'Mükemmel!' };
        if (percentage >= 75) return { emoji: '⭐⭐⭐⭐', text: 'Çok İyi!' };
        if (percentage >= 60) return { emoji: '⭐⭐⭐', text: 'İyi!' };
        if (percentage >= 45) return { emoji: '⭐⭐', text: 'Gelişmeli' };
        return { emoji: '⭐', text: 'Dikkat!' };
    }

    generateStory(totalScore, categoryScores) {
        let strengths = [];
        let weaknesses = [];
        
        Object.keys(categoryScores).forEach(category => {
            const catData = categoryScores[category];
            const percentage = Math.round((catData.score / catData.max) * 100);
            
            if (percentage >= 75) {
                strengths.push({ category, percentage });
            } else if (percentage < 50) {
                weaknesses.push({ category, percentage });
            }
        });
        
        strengths.sort((a, b) => b.percentage - a.percentage);
        weaknesses.sort((a, b) => a.percentage - b.percentage);
        
        let story = '';
        
        // Güçlü yönler
        if (strengths.length > 0) {
            const topStrength = strengths[0];
            story += `<span class="highlight">${topStrength.category}</span> konusundaki kararları iyi biliyorsun (%${topStrength.percentage}). `;
        }
        
        // Zayıf yönler
        if (weaknesses.length > 0) {
            const mainWeakness = weaknesses[0];
            story += `Ancak <span class="warning">${mainWeakness.category}</span> konusunda bilgi eksikliklerin var (%${mainWeakness.percentage}). `;
            
            if (mainWeakness.category === "Ekonomik Kararlar") {
                story += 'Bu kararlar günlük hayatı doğrudan etkiliyor. ';
            } else if (mainWeakness.category === "Dış Politika") {
                story += 'Dış politika kararları ülkenin uluslararası konumunu belirliyor. ';
            } else if (mainWeakness.category === "Medya & Özgürlükler") {
                story += 'İfade özgürlüğü demokrasinin temel taşıdır. ';
            }
        }
        
        // Motivasyon
        story += '<br><br>';
        if (totalScore >= 75) {
            story += 'AKP dönemini iyi tanıyorsun. Bu bilgilerle bilinçli değerlendirme yapabilirsin. 📚';
        } else if (totalScore >= 50) {
            story += 'Bazı önemli gelişmeleri biliyorsun ama daha fazla araştırma yapmalısın. 🔍';
        } else {
            story += 'Resmi kaynakları ve belgeleri incelemeye başla. Bilgi güçtür! 📖';
        }
        
        return story;
    }

    showResults() {
        this.showScreen('result-screen');
        
        const totalScore = this.calculateTotalScore();
        
        document.getElementById('total-score').innerHTML = `
            <div class="score-number">${totalScore}%</div>
            <div class="score-label">${this.getScoreMessage(totalScore)}</div>
        `;
        
        // Generate story
        const story = this.generateStory(totalScore, this.categoryScores);
        document.getElementById('story-summary').innerHTML = `
            <h3>📖 Senin Hikâyen</h3>
            <p>${story}</p>
        `;
        
        this.displayCategoryScores();
        this.displayComparison(totalScore);
        this.saveResult(totalScore);
    }

    getScoreMessage(score) {
        if (score >= 90) {
            return "AKP dönemindeki kararları çok iyi biliyorsun! 📚";
        } else if (score >= 75) {
            return "Önemli gelişmeleri takip ediyorsun 📊";
        } else if (score >= 60) {
            return "Genel bir fikrin var ama bazı detaylar eksik 📖";
        } else if (score >= 45) {
            return "Birçok önemli karardan habersiz kalmışsın 🔍";
        } else if (score >= 30) {
            return "AKP dönemi kararlarını daha fazla araştırmalısın 📋";
        } else {
            return "Bu dönemdeki gelişmeleri öğrenmen gerekiyor 📰";
        }
    }

    displayCategoryScores() {
        const container = document.getElementById('categories-result');
        container.innerHTML = '<h3 style="margin-bottom: 20px; color: #eaeaea;">Kategori Detayları</h3>';
        
        Object.keys(this.categoryScores).forEach((category, index) => {
            const catData = this.categoryScores[category];
            const percentage = Math.round((catData.score / catData.max) * 100);
            const emojiRating = this.getEmojiRating(percentage);
            
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'category-item';
            categoryDiv.innerHTML = `
                <div class="category-header">
                    <span class="category-name">${category}</span>
                    <div class="category-score-wrapper">
                        <span class="category-score">${percentage}%</span>
                        <span class="category-emoji" id="emoji-${index}"></span>
                    </div>
                </div>
                <div class="category-bar">
                    <div class="category-bar-fill" style="width: ${percentage}%"></div>
                </div>
            `;
            container.appendChild(categoryDiv);
            
            // Animate emoji stars
            setTimeout(() => {
                const emojiContainer = document.getElementById(`emoji-${index}`);
                const stars = emojiRating.emoji.split('');
                stars.forEach((star, starIndex) => {
                    setTimeout(() => {
                        const starSpan = document.createElement('span');
                        starSpan.className = 'emoji-star filled';
                        starSpan.textContent = star;
                        emojiContainer.appendChild(starSpan);
                    }, starIndex * 100);
                });
            }, index * 200);
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
        const text = `🏛️ "AKP Dönemi: Kararlar ve Sonuçlar" testinde %${score} doğru yaptım! Sen ne kadar biliyorsun?`;
        const url = window.location.href;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + '\n\n' + url)}`;
        window.open(whatsappUrl, '_blank');
    }

    shareTwitter() {
        const score = this.calculateTotalScore();
        const text = `🏛️ "AKP Dönemi: Kararlar ve Sonuçlar" testinde %${score} doğru yaptım! Sen ne kadar biliyorsun?`;
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

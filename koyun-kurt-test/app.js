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
        document.getElementById('share-question-btn').classList.remove('show');
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
            timerFill.style.transition = 'width 8s linear';
            timerFill.classList.add('animate');
        }, 50);
        
        // Auto advance after 5 seconds
        this.autoNextTimer = setTimeout(() => {
            this.nextQuestion();
        }, 8000);
    }

    showFeedback(question) {
        const feedbackDiv = document.getElementById('feedback');
        
        // Get the selected answer's score
        const selectedAnswer = this.answers[this.answers.length - 1];
        const score = selectedAnswer.score;
        
        // Score-based emoji and message
        let emoji, message;
        if (score === 10) {
            emoji = '🐺';
            message = 'Kurt cevabı!';
        } else if (score >= 7) {
            emoji = '🐺';
            message = 'İyi!';
        } else if (score >= 3) {
            emoji = '🐑';
            message = 'Koyun tarafına kaydın';
        } else {
            emoji = '🐑';
            message = 'Tam koyun cevabı!';
        }
        
        feedbackDiv.innerHTML = `
            <div style="font-size: 1.5rem; margin-bottom: 10px;">${emoji} ${message}</div>
            <p><strong>${question.feedback}</strong></p>
            <p style="margin-top: 10px;">${question.info}</p>
            <p class="verse">${question.source}</p>
        `;
        feedbackDiv.classList.add('show');
        
        // Show share question button
        document.getElementById('share-question-btn').classList.add('show');
    }

    shareCurrentQuestion() {
        const question = questions[this.currentQuestion];
        const testName = document.querySelector('.title').textContent;
        const text = `❓ ${testName}\n\n${question.question}\n\nSen ne düşünüyorsun? Teste katıl!`;
        const url = window.location.href;
        
        // Copy to clipboard
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text + '\n\n' + url).then(() => {
                this.showToast('Soru kopyalandı! Arkadaşına gönder 📤');
            });
        } else {
            // Fallback
            const textArea = document.createElement('textarea');
            textArea.value = text + '\n\n' + url;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showToast('Soru kopyalandı! Arkadaşına gönder 📤');
        }
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
        
        // Sort by percentage
        strengths.sort((a, b) => b.percentage - a.percentage);
        weaknesses.sort((a, b) => a.percentage - b.percentage);
        
        let story = '';
        
        // Güçlü yönler
        if (strengths.length > 0) {
            const topStrength = strengths[0];
            story += `<span class="highlight">${topStrength.category}</span> konusunda gerçekten güçlüsün (%${topStrength.percentage}). `;
            
            if (strengths.length > 1) {
                story += `<span class="success">${strengths[1].category}</span> alanında da iyi bir performans gösteriyorsun. `;
            }
        }
        
        // Zayıf yönler
        if (weaknesses.length > 0) {
            const mainWeakness = weaknesses[0];
            story += `<br><br>Ancak <span class="warning">${mainWeakness.category}</span> konusunda daha dikkatli olmalısın (%${mainWeakness.percentage}). `;
            
            if (mainWeakness.category === "Haram ve Günah") {
                story += 'Bu alan özellikle önemli çünkü doğrudan ahiret hayatını etkiliyor. ';
            } else if (mainWeakness.category === "İbadet Alışkanlıkları") {
                story += 'İbadetler, Allah\'la aramızdaki en güçlü bağdır. ';
            }
        }
        
        // Motivasyon
        story += '<br><br>';
        if (totalScore >= 75) {
            story += 'Doğru yoldasın, Allah senden razı olsun! 🌟 Küçük adımlarla daha da iyileşebilirsin.';
        } else if (totalScore >= 50) {
            story += 'Yolculuğun devam ediyor. Her gün yeni bir fırsat, her an bir başlangıç... 🌱';
        } else {
            story += 'Hatırla: En uzun yolculuk bile tek bir adımla başlar. Sen de o ilk adımı attın! 🚀';
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

    generateStoryImage() {
        const canvas = document.createElement('canvas');
        canvas.width = 1080;  // Instagram story size
        canvas.height = 1920;
        const ctx = canvas.getContext('2d');
        
        // Get test name and colors
        const testName = document.querySelector('.title').textContent;
        const totalScore = this.calculateTotalScore();
        
        // Determine colors based on test
        let gradient1, gradient2, accentColor;
        if (testName.includes('Müslüman')) {
            gradient1 = '#29a19c';
            gradient2 = '#2c5f2d';
            accentColor = '#29a19c';
        } else if (testName.includes('AKP')) {
            gradient1 = '#e67e22';
            gradient2 = '#d35400';
            accentColor = '#e67e22';
        } else {
            gradient1 = '#e74c3c';
            gradient2 = '#c0392b';
            accentColor = '#e74c3c';
        }
        
        // Background gradient
        const bgGradient = ctx.createLinearGradient(0, 0, 0, 1920);
        bgGradient.addColorStop(0, '#1a1a2e');
        bgGradient.addColorStop(1, '#16213e');
        ctx.fillStyle = bgGradient;
        ctx.fillRect(0, 0, 1080, 1920);
        
        // Top accent bar
        const accentGradient = ctx.createLinearGradient(0, 0, 1080, 0);
        accentGradient.addColorStop(0, gradient1);
        accentGradient.addColorStop(1, gradient2);
        ctx.fillStyle = accentGradient;
        ctx.fillRect(0, 0, 1080, 120);
        
        // Test emoji/icon
        ctx.font = 'bold 180px Arial';
        ctx.textAlign = 'center';
        const emoji = testName.includes('Müslüman') ? '🌙' : (testName.includes('AKP') ? '🏛️' : '🇹🇷');
        ctx.fillText(emoji, 540, 380);
        
        // Test name
        ctx.font = 'bold 68px Arial';
        ctx.fillStyle = '#eaeaea';
        ctx.textAlign = 'center';
        const lines = this.wrapText(ctx, testName, 900);
        lines.forEach((line, i) => {
            ctx.fillText(line, 540, 520 + (i * 80));
        });
        
        // Score circle
        ctx.beginPath();
        ctx.arc(540, 960, 220, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fill();
        ctx.strokeStyle = accentColor;
        ctx.lineWidth = 15;
        ctx.stroke();
        
        // Score percentage
        ctx.font = 'bold 140px Arial';
        ctx.fillStyle = accentColor;
        ctx.textAlign = 'center';
        ctx.fillText(`${totalScore}%`, 540, 1000);
        
        // Score label
        ctx.font = '48px Arial';
        ctx.fillStyle = '#aaabb8';
        ctx.fillText('Skorun', 540, 850);
        
        // Stars based on score
        const stars = this.getEmojiRating(totalScore).emoji;
        ctx.font = '80px Arial';
        ctx.fillText(stars, 540, 1140);
        
        // Category scores
        ctx.font = 'bold 42px Arial';
        ctx.fillStyle = '#eaeaea';
        ctx.textAlign = 'left';
        ctx.fillText('Kategori Skorların:', 140, 1320);
        
        let yPos = 1400;
        Object.keys(this.categoryScores).forEach(category => {
            const catData = this.categoryScores[category];
            const percentage = Math.round((catData.score / catData.max) * 100);
            
            // Category name
            ctx.font = '38px Arial';
            ctx.fillStyle = '#aaabb8';
            ctx.fillText(category, 140, yPos);
            
            // Score
            ctx.font = 'bold 38px Arial';
            ctx.fillStyle = accentColor;
            ctx.textAlign = 'right';
            ctx.fillText(`${percentage}%`, 940, yPos);
            ctx.textAlign = 'left';
            
            yPos += 70;
        });
        
        // Call to action
        ctx.font = 'bold 52px Arial';
        ctx.fillStyle = '#eaeaea';
        ctx.textAlign = 'center';
        ctx.fillText('Sen de test ol! 👇', 540, 1780);
        
        // Bottom bar
        ctx.fillStyle = accentGradient;
        ctx.fillRect(0, 1800, 1080, 120);
        
        // Download
        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `test-sonucu-${totalScore}.png`;
            a.click();
            URL.revokeObjectURL(url);
            this.showToast('Story görseli indirildi! 📸');
        });
    }
    
    wrapText(ctx, text, maxWidth) {
        const words = text.split(' ');
        const lines = [];
        let currentLine = words[0];
        
        for (let i = 1; i < words.length; i++) {
            const word = words[i];
            const width = ctx.measureText(currentLine + " " + word).width;
            if (width < maxWidth) {
                currentLine += " " + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);
        return lines;
    }
}

// Uygulamayı başlat
const app = new MuslimTest();

const questions = [
    // Kategori 1: İbadet Alışkanlıkları (5 soru)
    {
        id: 1,
        category: "İbadet Alışkanlıkları",
        question: "Namazlarını nasıl kılıyorsun?",
        options: [
            { text: "Vaktinde düzenli kılıyorum", score: 10 },
            { text: "Kaza ediyorum ama telafi ediyorum", score: 7 },
            { text: "Bazen kılıyorum bazen kaçırıyorum", score: 4 },
            { text: "Sadece cuma veya bayramlarda kılıyorum", score: 1 }
        ],
        feedback: "Namaz, Müslüman için günün direğidir.",
        verse: "Namazı dosdoğru kılın. (Bakara 43)"
    },
    {
        id: 2,
        category: "İbadet Alışkanlıkları",
        question: "Kur'an okumak senin için nasıl bir alışkanlık?",
        options: [
            { text: "Her gün düzenli okuyorum", score: 10 },
            { text: "Haftada birkaç kez okuyorum", score: 7 },
            { text: "Sadece Ramazan'da okuyorum", score: 4 },
            { text: "Nadiren açarım", score: 1 }
        ],
        feedback: "Kur'an, kalplere şifa ve hidayettir.",
        verse: "Kur'an'dan, müminler için şifa ve rahmet olanı indiriyoruz. (İsra 82)"
    },
    {
        id: 3,
        category: "İbadet Alışkanlıkları",
        question: "Sadaka/yardım konusunda ne kadar aktifsin?",
        options: [
            { text: "Düzenli olarak ihtiyaç sahiplerine yardım ederim", score: 10 },
            { text: "Fırsat buldukça yardım ederim", score: 7 },
            { text: "Sadece özel günlerde veririm", score: 4 },
            { text: "Çok nadir yardım ederim", score: 1 }
        ],
        feedback: "İnfak eden el, alan elden üstündür.",
        verse: "Mallarını Allah yolunda harcayanlar... (Bakara 261)"
    },
    {
        id: 4,
        category: "İbadet Alışkanlıkları",
        question: "Oruç tutma konusunda durumun nedir?",
        options: [
            { text: "Ramazan orucunu eksiksiz tutuyorum, nafile de tutuyorum", score: 10 },
            { text: "Ramazan orucunu tam tutuyorum", score: 8 },
            { text: "Ramazan'da bazı günleri kaçırıyorum", score: 4 },
            { text: "Oruç tutmuyorum veya çok az tutuyorum", score: 1 }
        ],
        feedback: "Oruç, sabır ve takva kazandırır.",
        verse: "Ey iman edenler! Oruç sizden öncekilere de farz kılındığı gibi size de farz kılındı. (Bakara 183)"
    },
    {
        id: 5,
        category: "İbadet Alışkanlıkları",
        question: "Dua etmek senin için nasıl bir deneyim?",
        options: [
            { text: "Her fırsatta dua ederim, Allah'la sürekli irtibattayım", score: 10 },
            { text: "Günlük dualarımı yapıyorum", score: 7 },
            { text: "Sadece sıkıştığımda dua ederim", score: 4 },
            { text: "Pek dua etmem", score: 1 }
        ],
        feedback: "Dua, kulun en güçlü silahıdır.",
        verse: "Bana dua edin, duanızı kabul edeyim. (Mümin 60)"
    },

    // Kategori 2: Kul Hakkı & Sosyal Davranış (5 soru)
    {
        id: 6,
        category: "Kul Hakkı & Sosyal Davranış",
        question: "Ailene karşı nasıl davranıyorsun?",
        options: [
            { text: "Saygılı, ilgili ve yardımseverim", score: 10 },
            { text: "Genelde iyiyim ama bazen ihmalkârım", score: 7 },
            { text: "Çok fazla ilgilenemiyorum", score: 4 },
            { text: "İlişkilerimiz çok sınırlı", score: 1 }
        ],
        feedback: "Ana babaya iyilik, Kur'an'da Allah'a kulluktan sonra gelir.",
        verse: "Rabbiniz sadece kendisine kulluk etmenizi, anneye babaya iyilik yapmanızı emretti. (İsra 23)"
    },
    {
        id: 7,
        category: "Kul Hakkı & Sosyal Davranış",
        question: "Komşularınla ilişkilerin nasıl?",
        options: [
            { text: "İyi ilişkiler içindeyiz, yardımlaşırız", score: 10 },
            { text: "Selam sabah veriyoruz", score: 7 },
            { text: "Pek görüşmüyoruz", score: 4 },
            { text: "Komşularımı tanımıyorum", score: 1 }
        ],
        feedback: "Komşuya iyilik, İslam'ın temel öğretilerindendir.",
        verse: "Komşuya... iyilik edin. (Nisa 36)"
    },
    {
        id: 8,
        category: "Kul Hakkı & Sosyal Davranış",
        question: "Gıybet (arkadan konuşma) konusunda kendini nasıl görüyorsun?",
        options: [
            { text: "Kesinlikle yapmam, engellerim", score: 10 },
            { text: "Çok nadir yaparım ve pişman olurum", score: 6 },
            { text: "Bazen yapıyorum farkında değilim", score: 3 },
            { text: "Sohbetin bir parçası bence", score: 0 }
        ],
        feedback: "Gıybet, çok büyük bir günahtır.",
        verse: "Birbirinizin gıybetini yapmayın. Biriniz ölü kardeşinin etini yemekten hoşlanır mı? (Hucurat 12)"
    },
    {
        id: 9,
        category: "Kul Hakkı & Sosyal Davranış",
        question: "İnsanlara yardım ederken nasıl hissediyorsun?",
        options: [
            { text: "Mutlu olurum, karşılık beklemem", score: 10 },
            { text: "İyi hissederim ama bazen karşılık beklerim", score: 6 },
            { text: "Mecbur kalırsam yardım ederim", score: 3 },
            { text: "Genelde yardım etmem", score: 0 }
        ],
        feedback: "Samimi yardım, sadece Allah rızası içindir.",
        verse: "Biz sizi ancak Allah rızası için doyuruyoruz. Sizden bir karşılık ve teşekkür beklemiyoruz. (İnsan 9)"
    },
    {
        id: 10,
        category: "Kul Hakkı & Sosyal Davranış",
        question: "Başkalarının hakkını yediğinde ne yaparsın?",
        options: [
            { text: "Hemen fark eder ve telafi ederim", score: 10 },
            { text: "Farkına varırsam düzeltmeye çalışırım", score: 7 },
            { text: "Pek önemsemem", score: 3 },
            { text: "Farketmem bile", score: 0 }
        ],
        feedback: "Kul hakkı, tövbe ile bile affedilmez.",
        verse: "Kim bir zulüm veya haksızlık yapmışsa... bugün telafi etsin. (Buhari)"
    },

    // Kategori 3: Öfke & Sabır (5 soru)
    {
        id: 11,
        category: "Öfke & Sabır",
        question: "Çok sinirlendiğinde ne yaparsın?",
        options: [
            { text: "Derin nefes alır, sakinleşmeye çalışırım", score: 10 },
            { text: "Bir süre sessiz kalırım sonra konuşurum", score: 7 },
            { text: "Hemen tepki veririm ama sonra pişman olurum", score: 3 },
            { text: "Sert çıkışlar yaparım", score: 0 }
        ],
        feedback: "Öfkeyi yutmak, en büyük güçlülük işaretidir.",
        verse: "Öfkelerini yenenler ve insanları affedenleri Allah sever. (Âl-i İmran 134)"
    },
    {
        id: 12,
        category: "Öfke & Sabır",
        question: "Zor zamanlarla nasıl başa çıkıyorsun?",
        options: [
            { text: "Sabırla karşılıyor, Allah'a tevekkül ediyorum", score: 10 },
            { text: "Zorlanıyorum ama dayanmaya çalışıyorum", score: 7 },
            { text: "Sık sık şikayet ediyorum", score: 3 },
            { text: "Çok zor geldiğinde pes ediyorum", score: 1 }
        ],
        feedback: "Her zorlukla birlikte kolaylık vardır.",
        verse: "Muhakkak ki güçlükle birlikte kolaylık vardır. (İnşirah 5-6)"
    },
    {
        id: 13,
        category: "Öfke & Sabır",
        question: "Biri sana haksızlık yaptığında nasıl tepki verirsin?",
        options: [
            { text: "Affetmeye çalışırım", score: 10 },
            { text: "Hakkımı isterim ama kibarca", score: 7 },
            { text: "Aynı şekilde karşılık veririm", score: 3 },
            { text: "İntikam almayı düşünürüm", score: 0 }
        ],
        feedback: "Affetmek, Allah'ın sevdiği bir davranıştır.",
        verse: "Kötülüğü en güzel şekilde sav. (Mü'minun 96)"
    },
    {
        id: 14,
        category: "Öfke & Sabır",
        question: "Trafikte sıkıştığında ruh halin nasıldır?",
        options: [
            { text: "Sakin kalır, müzik dinler veya zikir çekerim", score: 10 },
            { text: "Biraz sinirlenirim ama idare ederim", score: 7 },
            { text: "Sürekli sinir olurum ve korna çalarım", score: 3 },
            { text: "Küfür ederim", score: 0 }
        ],
        feedback: "Sabır, küçük şeylerle başlar.",
        verse: "Sabır güzel bir sabırdır. (Yusuf 18)"
    },
    {
        id: 15,
        category: "Öfke & Sabır",
        question: "Bir tartışmada haksız olduğunu anlayınca ne yaparsın?",
        options: [
            { text: "Hemen özür diler, hatalı olduğumu kabul ederim", score: 10 },
            { text: "Sessizce konuyu kapatırım", score: 6 },
            { text: "Yine de savunmaya devam ederim", score: 2 },
            { text: "Asla haksız olduğumu kabul etmem", score: 0 }
        ],
        feedback: "Hatasını kabul etmek, büyüklüğün göstergesidir.",
        verse: "Gerçeği örten ve affeden Allah'tır. (Şura 37)"
    },

    // Kategori 4: Dürüstlük & Adalet (5 soru)
    {
        id: 16,
        category: "Dürüstlük & Adalet",
        question: "Beyaz yalan söylemek hakkında ne düşünürsün?",
        options: [
            { text: "Yalan yalan, söylememeye çalışırım", score: 10 },
            { text: "Küçük yalanlar zararsız diye düşünürüm", score: 5 },
            { text: "Bazen mecbur kalırım", score: 2 },
            { text: "Sık sık söylerim, normal karşılıyorum", score: 0 }
        ],
        feedback: "Yalan, küçük de olsa büyük de olsa haramdır.",
        verse: "Yalan sözden kaçının. (Hac 30)"
    },
    {
        id: 17,
        category: "Dürüstlük & Adalet",
        question: "Fazla para üstü verilse ne yaparsın?",
        options: [
            { text: "Hemen iade ederim", score: 10 },
            { text: "Fark edersem iade ederim", score: 7 },
            { text: "Küçük miktarsa almam sorun yapmam", score: 3 },
            { text: "Bana kalmış, alırım", score: 0 }
        ],
        feedback: "Emanete riayet, imanın gereğidir.",
        verse: "Allah size emanetleri ehline vermenizi emreder. (Nisa 58)"
    },
    {
        id: 18,
        category: "Dürüstlük & Adalet",
        question: "Haram-helal konusunda ne kadar hassassın?",
        options: [
            { text: "Çok hassasım, şüpheli şeylerden de kaçınırım", score: 10 },
            { text: "Açık haramlardan kaçınırım", score: 7 },
            { text: "Çok sıkı takip etmem", score: 3 },
            { text: "Pek önemsemem", score: 0 }
        ],
        feedback: "Şüpheli şeylerden uzak durmak takvanın gereğidir.",
        verse: "Helal açık, haram açıktır. İkisi arasında şüpheli şeyler vardır. (Buhari)"
    },
    {
        id: 19,
        category: "Dürüstlük & Adalet",
        question: "Sözünü tutmak konusunda ne kadar güvenilirsin?",
        options: [
            { text: "Verdiğim her sözü tutarım", score: 10 },
            { text: "Genelde tutarım, nadiren unuturum", score: 7 },
            { text: "Bazen tutamıyorum", score: 4 },
            { text: "Pek güvenilir değilim", score: 1 }
        ],
        feedback: "Söz vermek, ahddir ve mutlaka tutulmalıdır.",
        verse: "Ahdinizi yerine getirin. Ahidden sorulacaksınız. (İsra 34)"
    },
    {
        id: 20,
        category: "Dürüstlük & Adalet",
        question: "Kimse görmese bile yanlış bir şey yapar mısın?",
        options: [
            { text: "Hayır, Allah görüyor", score: 10 },
            { text: "Nadir yaparım ama vicdan azabı çekerim", score: 6 },
            { text: "Bazen yaparım", score: 3 },
            { text: "Kimse görmüyorsa sorun yok", score: 0 }
        ],
        feedback: "Allah her an bizimle beraberdir.",
        verse: "O, sizinle nerede olursanız olun beraberdir. Allah yaptıklarınızı görür. (Hadid 4)"
    }
];

// Kategori bilgileri
const categories = {
    "İbadet Alışkanlıkları": {
        color: "#29a19c",
        description: "Günlük ibadet ve Allah'la ilişki"
    },
    "Kul Hakkı & Sosyal Davranış": {
        color: "#97b498",
        description: "İnsanlarla ilişkiler ve sosyal sorumluluk"
    },
    "Öfke & Sabır": {
        color: "#2c5f2d",
        description: "Duygusal kontrol ve sabır"
    },
    "Dürüstlük & Adalet": {
        color: "#4caf50",
        description: "Dürüstlük, emanet ve adalet"
    }
};

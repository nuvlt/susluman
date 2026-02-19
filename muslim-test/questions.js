const questions = [
    // Kategori 1: İbadet Alışkanlıkları (5 soru)
    {
        id: 1,
        category: "İbadet Alışkanlıkları",
        question: "Beş vakit namazını düzenli kılıyor musun?",
        options: [
            { text: "Evet, düzenli kılıyorum", score: 10 },
            { text: "Bazen kılıyorum", score: 5 },
            { text: "Sadece cuma/bayramlarda", score: 2 },
            { text: "Hayır, kılmıyorum", score: 0 }
        ],
        feedback: "Namaz, müminlerin direğidir ve günün beş vaktinde farz kılınmıştır.",
        verse: "Namazı dosdoğru kılın. (Bakara 43)"
    },
    {
        id: 2,
        category: "İbadet Alışkanlıkları",
        question: "Ramazan orucunu tam tutuyor musun?",
        options: [
            { text: "Evet, eksiksiz tutuyorum", score: 10 },
            { text: "Çoğunlukla tutuyorum", score: 7 },
            { text: "Birkaç gün tutuyorum", score: 3 },
            { text: "Hayır, tutmuyorum", score: 0 }
        ],
        feedback: "Ramazan orucu, İslam'ın beş şartından biridir.",
        verse: "Ey iman edenler! Oruç size farz kılındı. (Bakara 183)"
    },
    {
        id: 3,
        category: "İbadet Alışkanlıkları",
        question: "Düzenli olarak zekât/sadaka veriyor musun?",
        options: [
            { text: "Evet, düzenli veriyorum", score: 10 },
            { text: "Arada sırada veriyorum", score: 6 },
            { text: "Sadece Ramazan'da veririm", score: 3 },
            { text: "Hayır, vermiyorum", score: 0 }
        ],
        feedback: "Zekât, malın bereketini artırır ve toplumda dayanışmayı güçlendirir.",
        verse: "Mallarından sadaka ver ki onları temizleyesin. (Tevbe 103)"
    },
    {
        id: 4,
        category: "İbadet Alışkanlıkları",
        question: "Kur'an okuyor musun?",
        options: [
            { text: "Evet, düzenli okuyorum", score: 10 },
            { text: "Bazen okuyorum", score: 6 },
            { text: "Sadece Ramazan'da", score: 3 },
            { text: "Hayır, okumuyorum", score: 0 }
        ],
        feedback: "Kur'an, kalplere şifa ve müminlere hidayettir.",
        verse: "Kur'an'dan şifa ve rahmet olanı indiriyoruz. (İsra 82)"
    },
    {
        id: 5,
        category: "İbadet Alışkanlıkları",
        question: "Dua ediyor musun?",
        options: [
            { text: "Evet, düzenli dua ediyorum", score: 10 },
            { text: "Bazen ediyorum", score: 6 },
            { text: "Sadece sıkıntıda dua ederim", score: 3 },
            { text: "Hayır, etmiyorum", score: 0 }
        ],
        feedback: "Dua, kulun Rabbine yalvarışıdır ve her zaman kabul görür.",
        verse: "Bana dua edin, size icabet edeyim. (Mümin 60)"
    },

    // Kategori 2: Haram ve Günah (5 soru)
    {
        id: 6,
        category: "Haram ve Günah",
        question: "Faizli işlem yapıyor musun? (Kredi kartı, kredi, mevduat faizi vb.)",
        options: [
            { text: "Hayır, faizden kaçınıyorum", score: 10 },
            { text: "Mecbur kaldığımda yapıyorum", score: 4 },
            { text: "Evet, normal karşılıyorum", score: 0 }
        ],
        feedback: "Faiz, Kur'an'da açıkça haram kılınmıştır ve Allah'a savaş açmak olarak nitelendirilir.",
        verse: "Allah alışverişi helal, faizi haram kıldı. (Bakara 275)"
    },
    {
        id: 7,
        category: "Haram ve Günah",
        question: "İddaa, bahis, kumar gibi şeylere para yatırıyor musun?",
        options: [
            { text: "Hayır, asla yapmam", score: 10 },
            { text: "Çok nadir denedim", score: 4 },
            { text: "Bazen yapıyorum", score: 1 },
            { text: "Evet, düzenli yapıyorum", score: 0 }
        ],
        feedback: "Kumar, şeytan işi bir pisliktir ve topluma zarar verir.",
        verse: "Kumar şeytanın işidir, ondan sakının. (Maide 90)"
    },
    {
        id: 8,
        category: "Haram ve Günah",
        question: "Zina (yasak ilişki) konusunda kendinizi nasıl görüyorsunuz?",
        options: [
            { text: "Kesinlikle kaçınırım", score: 10 },
            { text: "Kaçınmaya çalışırım ama zorlanırım", score: 5 },
            { text: "Yapmışlığım var ama pişmanım", score: 2 },
            { text: "Normal karşılıyorum", score: 0 }
        ],
        feedback: "Zina, büyük günahlardan biridir ve toplumsal ahlakı bozar.",
        verse: "Zinaya yaklaşmayın, çünkü o bir hayasızlıktır. (İsra 32)"
    },
    {
        id: 9,
        category: "Haram ve Günah",
        question: "Alkol kullanıyor musun?",
        options: [
            { text: "Hayır, hiç içmem", score: 10 },
            { text: "Çok nadir, sosyal ortamlarda", score: 3 },
            { text: "Bazen içerim", score: 1 },
            { text: "Evet, düzenli içerim", score: 0 }
        ],
        feedback: "Alkol, aklı örten ve topluma zarar veren bir içkidir.",
        verse: "İçki şeytanın işidir, ondan sakının. (Maide 90)"
    },
    {
        id: 10,
        category: "Haram ve Günah",
        question: "Karşı cinse art niyetli bakıyor veya düşünceler de bulunuyor musun?",
        options: [
            { text: "Hayır, gözümü ve aklımı korumaya çalışırım", score: 10 },
            { text: "Bazen olabiliyor ama pişman oluyorum", score: 5 },
            { text: "Kontrol edemiyorum", score: 1 },
            { text: "Normal karşılıyorum", score: 0 }
        ],
        feedback: "Gözü ve kalbi korumak, iffet ve takvanın temelidir.",
        verse: "Mümin erkeklere söyle, gözlerini haramdan sakınsınlar. (Nur 30)"
    },

    // Kategori 3: Sosyal Davranış ve Ahlak (5 soru)
    {
        id: 11,
        category: "Sosyal Davranış ve Ahlak",
        question: "Gıybet (dedikodu, arkadan konuşma) yapıyor musun?",
        options: [
            { text: "Hayır, asla yapmam", score: 10 },
            { text: "Çok nadir yaparım", score: 5 },
            { text: "Bazen yapıyorum", score: 2 },
            { text: "Evet, sık yaparım", score: 0 }
        ],
        feedback: "Gıybet, ölü kardeşinin etini yemek gibidir.",
        verse: "Birbirinizin gıybetini yapmayın. (Hucurat 12)"
    },
    {
        id: 12,
        category: "Sosyal Davranış ve Ahlak",
        question: "Küfürlü konuşuyor musun?",
        options: [
            { text: "Hayır, asla etmem", score: 10 },
            { text: "Çok nadir, sinirliyken kaçırıyorum", score: 5 },
            { text: "Bazen ediyorum", score: 2 },
            { text: "Evet, sık kullanırım", score: 0 }
        ],
        feedback: "Mümin, küfür edici ve kaba sözlü değildir.",
        verse: "Müminin dili pak, kalbi temizdir. (Hadis)"
    },
    {
        id: 13,
        category: "Sosyal Davranış ve Ahlak",
        question: "Anne-babana karşı saygılı ve ilgili misin?",
        options: [
            { text: "Evet, çok önemsiyorum", score: 10 },
            { text: "Genelde önemsiyorum", score: 7 },
            { text: "Bazen ilgileniyorum", score: 3 },
            { text: "Hayır, pek ilgilenmem", score: 0 }
        ],
        feedback: "Anne babaya iyilik, Allah'a ibadet gibi önemlidir.",
        verse: "Onlara öf bile deme, ikisine de yumuşakça davran. (İsra 23)"
    },
    {
        id: 14,
        category: "Sosyal Davranış ve Ahlak",
        question: "Komşularınla ilişkilerin nasıl?",
        options: [
            { text: "Çok iyi, yardımlaşırız", score: 10 },
            { text: "İyi, selamlaşırız", score: 7 },
            { text: "Sınırlı, pek görüşmeyiz", score: 3 },
            { text: "Tanımıyorum bile", score: 0 }
        ],
        feedback: "Komşuya iyilik İslam'ın emridir.",
        verse: "Komşuya iyilikte bulunun. (Nisa 36)"
    },
    {
        id: 15,
        category: "Sosyal Davranış ve Ahlak",
        question: "Yardıma muhtaç birine denk geldiğinde ne yaparsın?",
        options: [
            { text: "Elimden geleni yaparım", score: 10 },
            { text: "Bazen yardım ederim", score: 6 },
            { text: "Nadiren yardım ederim", score: 2 },
            { text: "Genelde ilgilenmem", score: 0 }
        ],
        feedback: "Allah yolunda infak edenler kat kat mükafat görür.",
        verse: "Mallarını Allah yolunda infak edenler... (Bakara 261)"
    },

    // Kategori 4: Dürüstlük ve Emanet (5 soru)
    {
        id: 16,
        category: "Dürüstlük ve Emanet",
        question: "Yalan söyler misin?",
        options: [
            { text: "Hayır, asla söylemem", score: 10 },
            { text: "Çok nadir, beyaz yalan", score: 5 },
            { text: "Bazen söylerim", score: 2 },
            { text: "Evet, sık söylerim", score: 0 }
        ],
        feedback: "Yalan, münafığın alametidir.",
        verse: "Yalan sözden sakının. (Hac 30)"
    },
    {
        id: 17,
        category: "Dürüstlük ve Emanet",
        question: "Ticarette/alışverişte hile yapar mısın veya ölçüyü eksik verir misin?",
        options: [
            { text: "Hayır, kesinlikle yapmam", score: 10 },
            { text: "Hayır ama başkaları yapıyor görüyorum", score: 7 },
            { text: "Bazen kaçırıyorum", score: 2 },
            { text: "Evet, herkes yapıyor", score: 0 }
        ],
        feedback: "Ölçü ve tartıda eksiklik yapanlar için vay hali!",
        verse: "Vay hâli ölçüyü tartıyı eksik çekenlerin! (Mutaffifin 1)"
    },
    {
        id: 18,
        category: "Dürüstlük ve Emanet",
        question: "Emanete (kişilerin sana güvenerek verdiği şeylere) sahip çıkıyor musun?",
        options: [
            { text: "Evet, çok dikkat ederim", score: 10 },
            { text: "Genelde dikkat ederim", score: 7 },
            { text: "Bazen unuturum", score: 3 },
            { text: "Pek önemserim", score: 0 }
        ],
        feedback: "Emanete sahip çıkmak, iman gereğidir.",
        verse: "Allah, emanetleri ehline vermenizi emreder. (Nisa 58)"
    },
    {
        id: 19,
        category: "Dürüstlük ve Emanet",
        question: "Haksızlık yaptığında özür diler misin?",
        options: [
            { text: "Evet, hemen özür dilerim", score: 10 },
            { text: "Çoğunlukla dilerim", score: 7 },
            { text: "Bazen dilerim", score: 3 },
            { text: "Hayır, dilemem", score: 0 }
        ],
        feedback: "Hata yaptığında pişmanlık duymak ve düzeltmek önemlidir.",
        verse: "İyi ve kötü bir olmaz. Kötülüğü en güzel şekilde önle. (Fussilet 34)"
    },
    {
        id: 20,
        category: "Dürüstlük ve Emanet",
        question: "Kimse görmese bile doğru davranır mısın?",
        options: [
            { text: "Evet, Allah görüyor", score: 10 },
            { text: "Çoğunlukla evet", score: 7 },
            { text: "Bazen kaçırıyorum", score: 3 },
            { text: "Kimse görmüyorsa sorun yok", score: 0 }
        ],
        feedback: "Allah her yerde bizimle beraberdir ve her şeyi görür.",
        verse: "O, sizinle nerede olursanız olun beraberdir. (Hadid 4)"
    }
];

const categories = {
    "İbadet Alışkanlıkları": {
        color: "#29a19c",
        description: "Namaz, oruç, zekât gibi temel ibadetler"
    },
    "Haram ve Günah": {
        color: "#e74c3c",
        description: "Faiz, kumar, zina, alkol gibi açıkça yasaklananlar"
    },
    "Sosyal Davranış ve Ahlak": {
        color: "#97b498",
        description: "Gıybet, küfür, aile ilişkileri, komşuluk"
    },
    "Dürüstlük ve Emanet": {
        color: "#2c5f2d",
        description: "Yalan, hile, emanet, dürüstlük"
    }
};

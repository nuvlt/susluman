const questions = [
    // Kategori 1: Ekonomik Kararlar (6 soru)
    {
        id: 1,
        category: "Ekonomik Kararlar",
        question: "Köprü geçişleri başlangıçta nasıl ücretlendiriliyordu?",
        options: [
            { text: "Sadece tek yön ücretliydi", score: 10, correct: true },
            { text: "Her iki yön ücretliydi", score: 0 },
            { text: "Ücretsizdi", score: 0 },
            { text: "Sadece hafta sonları ücretliydi", score: 0 }
        ],
        feedback: "Boğaz köprüleri başlangıçta sadece tek yön ücretliydi.",
        info: "1988: Tek yön | 2008: İki yön | Gerekçe: 'Trafik akışı düzenlemesi'",
        source: "Kaynak: KGM, Ulaştırma Bakanlığı"
    },
    {
        id: 2,
        category: "Ekonomik Kararlar",
        question: "2023'te bulunan Karadeniz doğalgazından günlük ne kadar üretim yapılıyor?",
        options: [
            { text: "Günlük 20 milyon m³", score: 0 },
            { text: "Günlük 10 milyon m³", score: 0 },
            { text: "Günlük 5 milyon m³", score: 10, correct: true },
            { text: "Henüz üretim başlamadı", score: 0 }
        ],
        feedback: "Güncel üretim yaklaşık 5 milyon m³/gün civarında.",
        info: "Seçimlerde hep kullanıldı halbuki | Üretim: 2023'te başladı | Türkiye günlük tüketimi: ~150 milyon m³ | Karşılama: %3",
        source: "Kaynak: TPAO, Enerji Bakanlığı 2024"
    },
    {
        id: 3,
        category: "Ekonomik Kararlar",
        question: "1999'dan beri toplanan deprem vergisi toplam ne kadardı? (2023)",
        options: [
            { text: "50 milyar TL", score: 0 },
            { text: "100 milyar TL", score: 0 },
            { text: "150 milyar TL", score: 0 },
            { text: "200+ milyar TL", score: 10, correct: true }
        ],
        feedback: "1999-2023 arası toplanan deprem vergileri 200+ milyar TL'yi geçti.",
        info: "Toplanan: 200+ milyar TL | Deprem fonuna aktarılan: Belirsiz | Paranın nereye gittiği belli değil",
        source: "Kaynak: Hazine, TBMM bütçe raporları"
    },
    {
        id: 4,
        category: "Ekonomik Kararlar",
        question: "Merkez Bankası faizi 2023'te en yüksek kaça çıktı?",
        options: [
            { text: "%25", score: 0 },
            { text: "%35", score: 0 },
            { text: "%45", score: 0 },
            { text: "%50", score: 10, correct: true }
        ],
        feedback: "2023'te TCMB faizi %50'ye kadar yükseldi.",
        info: "2021: %14 | 2022: %9 (düşürüldü) | 2023: %50 | Enflasyon: %64 | Nas suresi yalan oldu",
        source: "Kaynak: TCMB"
    },
    {
        id: 5,
        category: "Ekonomik Kararlar",
        question: "Türkiye'de son 10 yılda en çok kamu ihalesi alan şirket hangisidir?",
        options: [
            { text: "Cengiz İnşaat", score: 0 },
            { text: "Limak Holding", score: 0 },
            { text: "Kalyon İnşaat", score: 0 },
            { text: "Cengiz-Limak-Kolin-Kalyon ortaklığı", score: 10, correct: true }
        ],
        feedback: "Bu dört şirket 'dörtlü çete' olarak anılır ve en büyük ihaleleri alır.",
        info: "Aldıkları mega projeler: 3. Havalimanı, Çanakkale Köprüsü, Yavuz Sultan Selim Köprüsü, birçok otoyol projesi",
        source: "Kaynak: Kamu İhale Kurumu, TBMM raporları"
    },
    {
        id: 6,
        category: "Ekonomik Kararlar",
        question: "Ankara Gökçek döneminde yapılan 'Dinosaur Park' projesinin maliyeti ne kadardı?",
        options: [
            { text: "10 milyon TL", score: 0 },
            { text: "30 milyon TL", score: 0 },
            { text: "50 milyon TL", score: 10, correct: true },
            { text: "100 milyon TL", score: 0 }
        ],
        feedback: "Dinosaur Park'a yaklaşık 50 milyon TL harcandı.",
        info: "Açılış: 2013 | Maliyet: ~50 milyon TL | Durum: Çok kısa süre sonra kapatıldı | Eleştiri: İsraf",
        source: "Kaynak: Ankara Büyükşehir Belediyesi, medya raporları"
    },

    // Kategori 2: Dış Politika (5 soru)
    {
        id: 7,
        category: "Dış Politika",
        question: "Abdullah Öcalan son olarak ne zaman avukatlarıyla görüştü?",
        options: [
            { text: "2019", score: 0 },
            { text: "2021", score: 0 },
            { text: "2023", score: 10, correct: true },
            { text: "Hala görüşemiyor", score: 0 }
        ],
        feedback: "2023'te DEM Parti heyeti ile görüşme yapıldı.",
        info: "2015-2023: Uzun görüşme yasağı | 2023: Yeni süreç | 2024: Meclis konuşması gündem oldu",
        source: "Kaynak: Adalet Bakanlığı, DEM Parti açıklamaları"
    },
    {
        id: 8,
        category: "Dış Politika",
        question: "Türkiye ile ABD arasında Rahip Brunson krizi ne zaman yaşandı?",
        options: [
            { text: "2015", score: 0 },
            { text: "2016", score: 0 },
            { text: "2018", score: 10, correct: true },
            { text: "2020", score: 0 }
        ],
        feedback: "Rahip Brunson krizi 2018'de yaşandı ve serbest bırakıldı.",
        info: "Tutuklama: 2016 | Kriz: 2018 | Serbest bırakılış: Ekim 2018 | Sonuç: ABD yaptırımları kaldırıldı",
        source: "Kaynak: Dışişleri Bakanlığı, uluslararası medya"
    },
    {
        id: 9,
        category: "Dış Politika",
        question: "Türkiye-Mısır ilişkileri hangi yıl normalleşmeye başladı?",
        options: [
            { text: "2019", score: 0 },
            { text: "2021", score: 10, correct: true },
            { text: "2023", score: 0 },
            { text: "Henüz normalleşmedi", score: 0 }
        ],
        feedback: "2021'de Türkiye-Mısır görüşmeleri başladı.",
        info: "2013: İlişkiler koptu (darbe sonrası) | 2021: İlk temas | 2023: Diplomatik ilişkiler normale dönüyor",
        source: "Kaynak: Dışişleri Bakanlığı"
    },
    {
        id: 10,
        category: "Dış Politika",
        question: "Türkiye İsrail ile ticaret hacmi 2023'te ne oldu?",
        options: [
            { text: "Tamamen durdu", score: 0 },
            { text: "Yarıya indi", score: 0 },
            { text: "Sabit kaldı", score: 0 },
            { text: "Arttı", score: 10, correct: true }
        ],
        feedback: "2023'te Türkiye-İsrail ticaret hacmi arttı.",
        info: "2022: 6.8 milyar $ | 2023: 7+ milyar $ | İhracat: Devam ediyor | Resmi boykot yok",
        source: "Kaynak: TİM, TÜİK"
    },
    {
        id: 11,
        category: "Dış Politika",
        question: "FETÖ elebaşı Gülen'in ABD'ye iadesi resmi olarak kaç kez talep edildi?",
        options: [
            { text: "1 kez", score: 0 },
            { text: "5 kez", score: 0 },
            { text: "10+ kez", score: 10, correct: true },
            { text: "Hiç talep edilmedi", score: 0 }
        ],
        feedback: "Türkiye, Gülen'in iadesini 10'dan fazla kez resmi olarak talep etti.",
        info: "İlk talep: 2016 darbe sonrası | ABD cevabı: 'Yeterli delil yok' | Durum: Hala ABD'de | 2024: Gülen öldü",
        source: "Kaynak: Dışişleri Bakanlığı"
    },

    // Kategori 3: Eğitim & Aile (4 soru)
    {
        id: 12,
        category: "Eğitim & Aile",
        question: "Cumhurbaşkanı'nın çocuklarından Bilal Erdoğan nerede üniversite eğitimi aldı?",
        options: [
            { text: "Türkiye'de", score: 0 },
            { text: "ABD'de", score: 10, correct: true },
            { text: "İngiltere'de", score: 0 },
            { text: "Almanya'da", score: 0 }
        ],
        feedback: "Bilal Erdoğan, ABD'de John Hopkins Üniversitesi'nde okudu.",
        info: "John Hopkins University (ABD) | Yüksek lisans: Harvard | Meslek: TURGEV Başkanı",
        source: "Kaynak: Kamu bilgisi, TURGEV"
    },
    {
        id: 13,
        category: "Eğitim & Aile",
        question: "Esra Erdoğan (Albayrak) hangi üniversiteden mezun?",
        options: [
            { text: "Boğaziçi Üniversitesi", score: 0 },
            { text: "İstanbul Üniversitesi", score: 0 },
            { text: "Indiana University (ABD)", score: 10, correct: true },
            { text: "ODTÜ", score: 0 }
        ],
        feedback: "Esra Albayrak, Indiana University'de okudu.",
        info: "Lisans: Indiana University (ABD) | Yüksek lisans: UC Berkeley (ABD)",
        source: "Kaynak: Kamu bilgisi"
    },
    {
        id: 14,
        category: "Eğitim & Aile",
        question: "2012-2017 arası imam hatip lisesi sayısı ne kadar arttı?",
        options: [
            { text: "%50 arttı", score: 0 },
            { text: "%100 arttı (2 kat)", score: 0 },
            { text: "%200 arttı (3 kat)", score: 10, correct: true },
            { text: "Azaldı", score: 0 }
        ],
        feedback: "İmam hatip lisesi sayısı yaklaşık 3 kat arttı.",
        info: "2012: ~500 okul | 2017: ~1,500 okul | Artış: %300 | Tartışma: 'Zorunlu din eğitimi'",
        source: "Kaynak: MEB istatistikleri"
    },
    {
        id: 15,
        category: "Eğitim & Aile",
        question: "Türkiye PISA sınavlarında son 10 yılda ne oldu?",
        options: [
            { text: "İlk 10'a girdi", score: 0 },
            { text: "Yükseldi", score: 0 },
            { text: "Sabit kaldı", score: 0 },
            { text: "Düştü", score: 10, correct: true }
        ],
        feedback: "Türkiye'nin PISA sıralaması düştü.",
        info: "2012: 44. | 2018: 42. | 2022: 47. (81 ülke arasında) | Alan: Matematik, Fen, Okuma",
        source: "Kaynak: OECD PISA raporları"
    },

    // Kategori 4: Medya & Özgürlükler (5 soru)
    {
        id: 16,
        category: "Medya & Özgürlükler",
        question: "2013-2023 arası kapatılan medya kuruluşu sayısı ne kadar?",
        options: [
            { text: "50", score: 0 },
            { text: "100", score: 0 },
            { text: "200+", score: 10, correct: true },
            { text: "Hiçbiri", score: 0 }
        ],
        feedback: "OHAL döneminde 200'den fazla medya kuruluşu kapatıldı.",
        info: "OHAL (2016-2018): 200+ medya kuruluşu kapatıldı | TV, gazete, dergi, haber ajansı",
        source: "Kaynak: İHD, Gazeteciler Cemiyeti"
    },
    {
        id: 17,
        category: "Medya & Özgürlükler",
        question: "Türkiye'de tutuklu gazeteci sayısı 2023'te dünya sıralamasında kaçıncı?",
        options: [
            { text: "10.", score: 0 },
            { text: "5.", score: 0 },
            { text: "3.", score: 10, correct: true },
            { text: "1.", score: 0 }
        ],
        feedback: "Türkiye tutuklu gazeteci sayısında dünyada 3. sırada.",
        info: "2023: Dünyada 3. (Çin ve Myanmar'dan sonra) | CPJ raporuna göre ~20-30 tutuklu gazeteci",
        source: "Kaynak: CPJ (Committee to Protect Journalists)"
    },
    {
        id: 18,
        category: "Medya & Özgürlükler",
        question: "Wikipedia Türkiye'de ne kadar süre engellendi?",
        options: [
            { text: "6 ay", score: 0 },
            { text: "1 yıl", score: 0 },
            { text: "3 yıl", score: 10, correct: true },
            { text: "Hiç engellenmedi", score: 0 }
        ],
        feedback: "Wikipedia 3 yıl boyunca engellendi.",
        info: "Engelleme: 2017 | Açılma: 2020 (Anayasa Mahkemesi kararı) | Sebep: Terörle bağlantı iddiaları",
        source: "Kaynak: BTK, Anayasa Mahkemesi"
    },
    {
        id: 19,
        category: "Medya & Özgürlükler",
        question: "Gezi Parkı olayları hangi yıl yaşandı?",
        options: [
            { text: "2011", score: 0 },
            { text: "2013", score: 10, correct: true },
            { text: "2015", score: 0 },
            { text: "2016", score: 0 }
        ],
        feedback: "Gezi Parkı protestoları 2013 yılında oldu.",
        info: "Tarih: Mayıs-Haziran 2013 | Katılımcı: ~3.5 milyon | Ölü: 8 kişi | Yaralı: 8,000+",
        source: "Kaynak: Resmi kayıtlar, İHD"
    },
    {
        id: 20,
        category: "Medya & Özgürlükler",
        question: "15 Temmuz darbe girişiminden sonra kaç kişi görevden alındı?",
        options: [
            { text: "50 bin", score: 0 },
            { text: "75 bin", score: 0 },
            { text: "100 bin", score: 0 },
            { text: "125 bin+", score: 10, correct: true }
        ],
        feedback: "125 binden fazla kamu görevlisi ihraç edildi.",
        info: "İhraç edilen: 125,000+ | Tutuklanan: 50,000+ | OHAL süresi: 2 yıl | Tartışma: Hukuki süreç",
        source: "Kaynak: İçişleri Bakanlığı, İHD"
    }
];

const categories = {
    "Ekonomik Kararlar": {
        color: "#e67e22",
        description: "Köprü, doğalgaz, vergi, faiz, ihaleler"
    },
    "Dış Politika": {
        color: "#3498db",
        description: "ABD, Mısır, İsrail, Gülen, Öcalan"
    },
    "Eğitim & Aile": {
        color: "#9b59b6",
        description: "Eğitim sistemi, liderlik ailesi"
    },
    "Medya & Özgürlükler": {
        color: "#e74c3c",
        description: "Basın, ifade özgürlüğü, tutuklamalar"
    }
};

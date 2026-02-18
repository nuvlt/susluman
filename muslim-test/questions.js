const questions = [
    // Ekonomi Soruları (8 soru - %40)
    {
        id: 1,
        category: "Ekonomi",
        question: "2002 yılında 1 Dolar kaç TL idi?",
        options: [
            { text: "1.6 TL", score: 10, correct: true },
            { text: "3.2 TL", score: 0 },
            { text: "8.5 TL", score: 0 },
            { text: "15 TL", score: 0 }
        ],
        feedback: "2002 yılında 1 Dolar = 1.6 TL idi.",
        info: "2024 yılında 1 Dolar = 32.5 TL (Artış: %1,931)",
        source: "Kaynak: TCMB Resmi Verileri"
    },
    {
        id: 2,
        category: "Ekonomi",
        question: "Türkiye'nin 2023 yıl sonu enflasyon oranı ne kadardı?",
        options: [
            { text: "%15", score: 0 },
            { text: "%35", score: 0 },
            { text: "%65", score: 10, correct: true },
            { text: "%85", score: 0 }
        ],
        feedback: "2023 yılı enflasyonu %64.77 olarak gerçekleşti.",
        info: "Karşılaştırma: 2003: %18.4 | 2013: %7.4 | 2023: %64.77",
        source: "Kaynak: TÜİK"
    },
    {
        id: 3,
        category: "Ekonomi",
        question: "2023 yılında Türkiye'nin işsizlik oranı ne kadardı?",
        options: [
            { text: "%5.2", score: 0 },
            { text: "%9.4", score: 10, correct: true },
            { text: "%13.8", score: 0 },
            { text: "%20.1", score: 0 }
        ],
        feedback: "Resmi işsizlik oranı %9.4 olarak açıklandı.",
        info: "Geniş tanımlı işsizlik (işsiz + iş aramaktan vazgeçenler): %25.7",
        source: "Kaynak: TÜİK 2023"
    },
    {
        id: 4,
        category: "Ekonomi",
        question: "Türkiye'nin dış borcu 2002'de 130 milyar dolardı. 2023'te ne kadar oldu?",
        options: [
            { text: "150 milyar $", score: 0 },
            { text: "250 milyar $", score: 0 },
            { text: "350 milyar $", score: 0 },
            { text: "450+ milyar $", score: 10, correct: true }
        ],
        feedback: "2023'te toplam dış borç 470 milyar doları geçti.",
        info: "2002: 130 milyar $ | 2023: 470+ milyar $ (Artış: %261)",
        source: "Kaynak: TCMB"
    },
    {
        id: 5,
        category: "Ekonomi",
        question: "2024'te Türkiye'de kaç kişi asgari ücretle çalışıyor?",
        options: [
            { text: "2 milyon", score: 0 },
            { text: "4 milyon", score: 0 },
            { text: "7 milyon", score: 10, correct: true },
            { text: "10 milyon", score: 0 }
        ],
        feedback: "Yaklaşık 7 milyon kişi asgari ücret veya altında çalışıyor.",
        info: "Bu, çalışanların yaklaşık %45'ine denk geliyor.",
        source: "Kaynak: SGK 2023"
    },
    {
        id: 6,
        category: "Ekonomi",
        question: "2023 yılında Türkiye'nin cari açığı ne kadardı?",
        options: [
            { text: "15 milyar $", score: 0 },
            { text: "35 milyar $", score: 0 },
            { text: "55 milyar $", score: 10, correct: true },
            { text: "75 milyar $", score: 0 }
        ],
        feedback: "2023'te cari açık 54.2 milyar dolar oldu.",
        info: "Bu, son 10 yılın en yüksek cari açık rakamı.",
        source: "Kaynak: TCMB"
    },
    {
        id: 7,
        category: "Ekonomi",
        question: "TCMB'nin 2024 başı rezervi ne kadardı?",
        options: [
            { text: "145 milyar $ (pozitif)", score: 0 },
            { text: "85 milyar $ (pozitif)", score: 0 },
            { text: "15 milyar $ (pozitif)", score: 0 },
            { text: "-65 milyar $ (negatif)", score: 10, correct: true }
        ],
        feedback: "Net rezervler -65 milyar dolar civarındaydı.",
        info: "Swap anlaşmaları hariç, gerçek rezervler negatif.",
        source: "Kaynak: Bloomberg, Reuters"
    },
    {
        id: 8,
        category: "Ekonomi",
        question: "2002-2023 arası minimum ücretin dolar bazında değişimi nasıl oldu?",
        options: [
            { text: "3 kat arttı", score: 0 },
            { text: "Sabit kaldı", score: 0 },
            { text: "Yarıya indi", score: 10, correct: true },
            { text: "10 kat arttı", score: 0 }
        ],
        feedback: "Asgari ücret dolar bazında yaklaşık yarıya düştü.",
        info: "2002: ~200$ | 2023: ~350$ | 2024: ~520$ (ama gerçek alım gücü düştü)",
        source: "Kaynak: Kur ve asgari ücret hesaplamaları"
    },

    // Alım Gücü Soruları (6 soru - %30)
    {
        id: 9,
        category: "Alım Gücü",
        question: "2002'de asgari ücretle kaç kilo et alınabiliyordu?",
        options: [
            { text: "50 kg", score: 0 },
            { text: "100 kg", score: 0 },
            { text: "150 kg", score: 10, correct: true },
            { text: "200 kg", score: 0 }
        ],
        feedback: "2002'de asgari ücretle 150+ kg et alınabiliyordu.",
        info: "2024'te asgari ücretle sadece 20-25 kg et alınabiliyor. Alım gücü kaybı: %85",
        source: "Kaynak: TÜİK, market verileri"
    },
    {
        id: 10,
        category: "Alım Gücü",
        question: "2024'te yoksulluk sınırı (4 kişilik aile) aylık ne kadar?",
        options: [
            { text: "25.000 TL", score: 0 },
            { text: "45.000 TL", score: 0 },
            { text: "65.000 TL", score: 0 },
            { text: "74.000 TL", score: 10, correct: true }
        ],
        feedback: "Türk-İş'e göre yoksulluk sınırı 73.664 TL.",
        info: "Asgari ücret: 17.002 TL (net). Bir asgari ücretli ailenin yoksulluk sınırının altında kalıyor.",
        source: "Kaynak: Türk-İş, Ocak 2024"
    },
    {
        id: 11,
        category: "Alım Gücü",
        question: "2002'de bir ekmek kaç kuruştu?",
        options: [
            { text: "10 kuruş", score: 0 },
            { text: "25 kuruş", score: 10, correct: true },
            { text: "50 kuruş", score: 0 },
            { text: "1 TL", score: 0 }
        ],
        feedback: "2002'de ekmek 25 kuruş (0.25 TL) idi.",
        info: "2024'te ekmek 10 TL. Artış: %4,000. Asgari ücret artışı: %1,700",
        source: "Kaynak: TÜİK, Halk Ekmek"
    },
    {
        id: 12,
        category: "Alım Gücü",
        question: "2024'te kira/maaş oranı ortalama ne kadar?",
        options: [
            { text: "%15-20", score: 0 },
            { text: "%30-40", score: 0 },
            { text: "%50-60", score: 0 },
            { text: "%60-80", score: 10, correct: true }
        ],
        feedback: "Kiracıların maaşının %60-80'i kiraya gidiyor.",
        info: "2013'te bu oran %20-25 civarındaydı. Kira artışları maaş artışlarını 3 kat geçti.",
        source: "Kaynak: Türk-İş, Emlak.com"
    },
    {
        id: 13,
        category: "Alım Gücü",
        question: "Türkiye'de kaç kişi kredi kartı borcunu ödeyemiyor?",
        options: [
            { text: "500 bin", score: 0 },
            { text: "2 milyon", score: 0 },
            { text: "5 milyon", score: 0 },
            { text: "8+ milyon", score: 10, correct: true }
        ],
        feedback: "8 milyondan fazla kişi kredi kartı borcunu ödeyemiyor.",
        info: "Toplam kredi kartı borcu 1.5 trilyon TL'yi geçti (2024).",
        source: "Kaynak: BDDK, TBB"
    },
    {
        id: 14,
        category: "Alım Gücü",
        question: "2024'te elektrik faturası ortalama bir eve ne kadar geliyor?",
        options: [
            { text: "500 TL", score: 0 },
            { text: "1.000 TL", score: 0 },
            { text: "1.500 TL", score: 10, correct: true },
            { text: "2.500 TL", score: 0 }
        ],
        feedback: "Ortalama elektrik faturası 1.500 TL civarında.",
        info: "2002'de bu rakam yaklaşık 30 milyon TL (30 YTL = 0.03 TL) idi. Artış oranı enflasyonun çok üzerinde.",
        source: "Kaynak: EPDK, tüketici raporları"
    },

    // Demokrasi & Özgürlükler (4 soru - %20)
    {
        id: 15,
        category: "Demokrasi",
        question: "Freedom House'a göre Türkiye'nin 2023 demokrasi skoru nedir?",
        options: [
            { text: "Özgür (70+/100)", score: 0 },
            { text: "Kısmen Özgür (40-70)", score: 0 },
            { text: "Özgür Değil (0-40)", score: 10, correct: true }
        ],
        feedback: "Türkiye 'Özgür Değil' kategorisinde, 32/100 puan aldı.",
        info: "2010: 61/100 | 2023: 32/100. Yunanistan: 86/100, Polonya: 82/100",
        source: "Kaynak: Freedom House 2023"
    },
    {
        id: 16,
        category: "Demokrasi",
        question: "Türkiye basın özgürlüğünde 180 ülke arasında kaçıncı?",
        options: [
            { text: "55.", score: 0 },
            { text: "95.", score: 0 },
            { text: "135.", score: 0 },
            { text: "165.", score: 10, correct: true }
        ],
        feedback: "Türkiye basın özgürlüğünde 180 ülke arasında 165. sırada.",
        info: "2002: 99. | 2013: 154. | 2024: 165. Yunanistan: 88., İran: 177.",
        source: "Kaynak: RSF (Sınır Tanımayan Gazeteciler)"
    },
    {
        id: 17,
        category: "Demokrasi",
        question: "The Economist'in Demokrasi Endeksine göre Türkiye hangi kategoride?",
        options: [
            { text: "Tam Demokrasi", score: 0 },
            { text: "Kusurlu Demokrasi", score: 0 },
            { text: "Hibrit Rejim", score: 10, correct: true },
            { text: "Otoriter Rejim", score: 0 }
        ],
        feedback: "Türkiye 'Hibrit Rejim' kategorisinde, 4.35/10 puan.",
        info: "Tam: 8-10, Kusurlu: 6-8, Hibrit: 4-6, Otoriter: 0-4",
        source: "Kaynak: Economist Intelligence Unit 2023"
    },
    {
        id: 18,
        category: "Demokrasi",
        question: "2016-2018 OHAL döneminde kaç kişi görevden alındı?",
        options: [
            { text: "25.000", score: 0 },
            { text: "55.000", score: 0 },
            { text: "85.000", score: 0 },
            { text: "125.000+", score: 10, correct: true }
        ],
        feedback: "OHAL döneminde 125.000'den fazla kişi görevden alındı.",
        info: "Ayrıca 50.000+ tutuklandı, 200+ medya kuruluşu kapatıldı.",
        source: "Kaynak: İHD raporları"
    },

    // Vaatler & Gerçekler (2 soru - %10)
    {
        id: 19,
        category: "Vaatler",
        question: "2023 seçimlerinde 'asgari ücreti 10.000 TL yapacağız' vaadi kime ait?",
        options: [
            { text: "Sadece Erdoğan", score: 0 },
            { text: "Sadece Kılıçdaroğlu", score: 0 },
            { text: "Her ikisi de", score: 10, correct: true },
            { text: "Hiçbiri", score: 0 }
        ],
        feedback: "Her iki aday da bu vaatte bulundu.",
        info: "Sonuç: 2024 Ocak'ta asgari ücret 17.002 TL (net) oldu. Enflasyon düzeltmeli gerçek değer tartışmalı.",
        source: "Kaynak: Seçim kampanyaları"
    },
    {
        id: 20,
        category: "Vaatler",
        question: "'Ekonomide güçlü Türkiye' sloganı ilk ne zaman kullanıldı?",
        options: [
            { text: "2023 seçimleri", score: 0 },
            { text: "2018 seçimleri", score: 0 },
            { text: "2015 seçimleri", score: 10, correct: true },
            { text: "Hiç kullanılmadı", score: 0 }
        ],
        feedback: "Bu slogan 2015'ten beri kullanılıyor.",
        info: "2015: Dolar 2.9 TL | 2018: 5.3 TL | 2023: 26.5 TL | 2024: 32.5 TL",
        source: "Kaynak: AK Parti seçim kampanyaları"
    }
];

const categories = {
    "Ekonomi": {
        color: "#e74c3c",
        description: "Dolar, enflasyon, işsizlik, borç"
    },
    "Alım Gücü": {
        color: "#f39c12",
        description: "Et, ekmek, kira, faturalar"
    },
    "Demokrasi": {
        color: "#3498db",
        description: "Özgürlükler, basın, hukuk"
    },
    "Vaatler": {
        color: "#9b59b6",
        description: "Seçim vaatleri vs gerçekler"
    }
};

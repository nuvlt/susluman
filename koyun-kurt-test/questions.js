const questions = [
    // Kategori 1: Düşünce Bağımsızlığı (5 soru)
    {
        id: 1,
        category: "Düşünce Bağımsızlığı",
        question: "Çoğunluğun fikri seninki ile çeliştiğinde ne yaparsın?",
        options: [
            { text: "Kendi araştırmama güvenirim, fikrimde değişiklik olmaz", score: 10, correct: true },
            { text: "Dinler ama kendi kararımı veririm", score: 7 },
            { text: "Belki yanılıyorumdur diye düşünürüm", score: 3 },
            { text: "Çoğunluk yanılmaz, fikrimi değiştiririm", score: 0 }
        ],
        feedback: "Sürü psikolojisinden uzak durmak, bağımsız düşünmenin ilk adımıdır.",
        info: "Tarih boyunca çoğunluk: Dünya düz, kölelik normal, kadınlar oy kullanmasın demiştir. Çoğunluk her zaman haklı değildir.",
        source: "İlke: Eleştirel düşünce"
    },
    {
        id: 2,
        category: "Düşünce Bağımsızlığı",
        question: "Viral olan bir haber görüyorsun. İlk tepkin ne?",
        options: [
            { text: "Kaynak kontrolü yapar, doğruluğunu araştırırım", score: 10, correct: true },
            { text: "Güvenilir kaynaklarda var mı bakarım", score: 7 },
            { text: "Herkes paylaşıyorsa doğrudur, ben de paylaşırım", score: 2 },
            { text: "Umurumda olmaz, direkt inanırım", score: 0 }
        ],
        feedback: "Viral içerik çoğu zaman manipülasyondur.",
        info: "Sosyal medyada viral olan içeriklerin %60'ı yanlış veya yanıltıcı bilgi içerir.",
        source: "Araştırma: MIT, 2018"
    },
    {
        id: 3,
        category: "Düşünce Bağımsızlığı",
        question: "Dini inancın nasıl şekillenmiş?",
        options: [
            { text: "Farklı dinleri araştırdım, sorguladım, kendi kararımı verdim", score: 10, correct: true },
            { text: "Ailemden geldi ama araştırdım, bilinçli kabul ettim", score: 7 },
            { text: "Ailemden geldi, pek sorgulamadım ama inanıyorum", score: 3 },
            { text: "Ailemden geldi, hiç sorgulamadım, hep böyle olacak", score: 0 }
        ],
        feedback: "Sorgulamadan kabul edilen inanç, dogmadır.",
        info: "İnsanların %80'i bulundukları coğrafyanın hakim dinine inanır. Tesadüf mü?",
        source: "Düşünce: İnanç coğrafya değil, bilinç meselesidir"
    },
    {
        id: 4,
        category: "Düşünce Bağımsızlığı",
        question: "Politik görüşün nasıl oluştu?",
        options: [
            { text: "Tüm partileri inceledim, kendi düşüncemi oluşturdum", score: 10, correct: true },
            { text: "Birkaç kaynaktan bilgilendim, karar verdim", score: 7 },
            { text: "Ailem/çevrem ne diyorsa ona yakınım", score: 2 },
            { text: "Ailem hangi partiye oy veriyorsa ben de ona veririm", score: 0 }
        ],
        feedback: "Politik tercih miras değil, bilinçli seçim olmalıdır.",
        info: "Araştırmalar gösteriyor: İnsanların %70'i ailelerinin politik görüşünü aynen devam ettiriyor.",
        source: "Sosyoloji: Politik kimlik aktarımı"
    },
    {
        id: 5,
        category: "Düşünce Bağımsızlığı",
        question: "Bir konuda 'otorite' ne diyorsa onu mu kabul edersin?",
        options: [
            { text: "Hayır, otoriteyi de sorgularım", score: 10, correct: true },
            { text: "Genelde evet ama bazen sorgularım", score: 5 },
            { text: "Çoğunlukla otoriteye güvenirim", score: 2 },
            { text: "Otorite konuştu, tartışılmaz", score: 0 }
        ],
        feedback: "Otorite sorgulanmadığında tiranlığa dönüşür.",
        info: "Milgram Deneyi: İnsanların %65'i otorite emrindeyse başkasına acı çektirir. Körü körüne itaat tehlikelidir.",
        source: "Psikoloji: Milgram Otoriteye İtaat Deneyi, 1961"
    },

    // Kategori 2: Yaşam Tarzı & Alışkanlıklar (6 soru)
    {
        id: 6,
        category: "Yaşam Tarzı",
        question: "Sigara/alkol/zararlı madde kullanımın:",
        options: [
            { text: "Hiç kullanmam, sağlığıma önem veririm", score: 10, correct: true },
            { text: "Sosyal ortamlarda nadiren", score: 5 },
            { text: "Ara sıra kullanırım", score: 2 },
            { text: "Düzenli kullanırım, alışkanlık oldu", score: 0 }
        ],
        feedback: "Zararlı alışkanlıklar bedenine kölelik etmektir.",
        info: "Sigara içenler yaşam sürelerinin ortalama 10 yılını kaybeder. Alkol dünya çapında yılda 3 milyon ölüme sebep olur.",
        source: "WHO (Dünya Sağlık Örgütü)"
    },
    {
        id: 7,
        category: "Yaşam Tarzı",
        question: "Kitap okuma sıklığın:",
        options: [
            { text: "Ayda en az 2 kitap okurum", score: 10, correct: true },
            { text: "Ayda 1 kitap", score: 7 },
            { text: "Yılda 2-3 kitap", score: 3 },
            { text: "Hiç okumam veya yıllardır okumadım", score: 0 }
        ],
        feedback: "Kitap okumayan beyin, kullanılmayan kas gibi körelir.",
        info: "Türkiye'de kişi başı yıllık kitap okuma ortalaması: 6 kitap. Japonya: 47 kitap. Avrupa: 21 kitap.",
        source: "UNESCO İstatistikleri"
    },
    {
        id: 8,
        category: "Yaşam Tarzı",
        question: "Spor/egzersiz yapıyor musun?",
        options: [
            { text: "Haftada 3+ gün düzenli spor yaparım", score: 10, correct: true },
            { text: "Haftada 1-2 gün", score: 7 },
            { text: "Ayda birkaç kez", score: 3 },
            { text: "Hiç yapmam", score: 0 }
        ],
        feedback: "Hareketsiz yaşam, yavaş ölümdür.",
        info: "Düzenli egzersiz depresyon riskini %30 azaltır, yaşam süresini 7 yıl uzatır.",
        source: "Harvard Tıp Okulu Araştırması"
    },
    {
        id: 9,
        category: "Yaşam Tarzı",
        question: "Hobileriniz neler?",
        options: [
            { text: "Birden fazla aktif hobim var (müzik, sanat, spor vb.)", score: 10, correct: true },
            { text: "Bir hobim var, aktif takip ediyorum", score: 7 },
            { text: "Sadece futbol izliyorum / dizi izliyorum", score: 2 },
            { text: "Hobim yok, boş zamanımda hiçbir şey yapmam", score: 0 }
        ],
        feedback: "Hobi olmayan yaşam, tekrardır.",
        info: "Hobi sahibi insanlar %34 daha mutlu ve %21 daha üretkendir.",
        source: "Pozitif Psikoloji Araştırmaları"
    },
    {
        id: 10,
        category: "Yaşam Tarzı",
        question: "Günlük ekran süresi (iş hariç)?",
        options: [
            { text: "2 saatten az", score: 10, correct: true },
            { text: "2-4 saat", score: 6 },
            { text: "4-6 saat", score: 2 },
            { text: "6+ saat, sürekli telefonla", score: 0 }
        ],
        feedback: "Ekrana bağımlılık, dijital köleliktir.",
        info: "Günde 6+ saat ekran kullananların depresyon riski %48 daha yüksek.",
        source: "Digital Wellbeing Research"
    },
    {
        id: 11,
        category: "Yaşam Tarzı",
        question: "Sosyal medya kullanımın:",
        options: [
            { text: "Bilinçli kullanırım, belirli süre sınırım var", score: 10, correct: true },
            { text: "Kullanırım ama kontrolsüz değil", score: 6 },
            { text: "Sürekli scroll yaparım, farkında bile değilim", score: 2 },
            { text: "Tüm günüm sosyal medyada geçer", score: 0 }
        ],
        feedback: "Sosyal medya algoritma kölesidir.",
        info: "Ortalama insan günde 147 dakika sosyal medyada geçiriyor. Yılda 37 tam gün!",
        source: "DataReportal 2024"
    },

    // Kategori 3: Kültürel & Entelektüel Gelişim (5 soru)
    {
        id: 12,
        category: "Kültürel Gelişim",
        question: "Yabancı dil bilgin:",
        options: [
            { text: "2 veya daha fazla dil konuşurum", score: 10, correct: true },
            { text: "1 yabancı dil orta-iyi seviye", score: 7 },
            { text: "Temel seviye İngilizce", score: 3 },
            { text: "Hiç yabancı dil bilmem", score: 0 }
        ],
        feedback: "Tek dil, tek dünya demektir.",
        info: "Çok dilli insanlar %30 daha yüksek maaş alır ve Alzheimer riskini %50 azaltır.",
        source: "Cambridge Üniversitesi Araştırması"
    },
    {
        id: 13,
        category: "Kültürel Gelişim",
        question: "Son 6 ayda müze/sergi/tiyatro/konser?",
        options: [
            { text: "3+ kez gittim", score: 10, correct: true },
            { text: "1-2 kez gittim", score: 7 },
            { text: "Hiç gitmedim ama isterdim", score: 3 },
            { text: "Hiç gitmem, ilgilenmem", score: 0 }
        ],
        feedback: "Kültürsüz toplum, köledir.",
        info: "Sanatla ilgilenenler yaratıcılık testlerinde %40 daha yüksek skor alır.",
        source: "Journal of Creative Behavior"
    },
    {
        id: 14,
        category: "Kültürel Gelişim",
        question: "Müzik zevkin:",
        options: [
            { text: "Çok çeşitli: Rock, caz, klasik, dünya müziği vb.", score: 10, correct: true },
            { text: "Pop, rock, yerli müzik dinlerim", score: 6 },
            { text: "Sadece popüler müzik / arabesk", score: 2 },
            { text: "Müzik dinlemem / sadece mahalle", score: 0 }
        ],
        feedback: "Müzik zevki, zihin açıklığının göstergesidir.",
        info: "Farklı müzik türleri dinleyenler empati ve yaratıcılıkta daha yüksek skor alır.",
        source: "Music Psychology Research"
    },
    {
        id: 15,
        category: "Kültürel Gelişim",
        question: "İzlediğin içerikler:",
        options: [
            { text: "Belgesel, kitap uyarlaması, sanat filmi", score: 10, correct: true },
            { text: "Kaliteli dizi/film + bazen belgesel", score: 7 },
            { text: "Sadece popüler dizi/reality show", score: 2 },
            { text: "Sürekli TikTok/Reels, hiçbir şey aklımda kalmıyor", score: 0 }
        ],
        feedback: "Tükettiğin içerik, zihnini şekillendirir.",
        info: "Kaliteli içerik tüketenler problem çözme becerilerinde %35 daha başarılı.",
        source: "Media Psychology Studies"
    },
    {
        id: 16,
        category: "Kültürel Gelişim",
        question: "Seyahat deneyimin:",
        options: [
            { text: "Farklı ülkeler ve kültürler keşfettim", score: 10, correct: true },
            { text: "Türkiye'de farklı şehirler gezdim", score: 7 },
            { text: "Sadece tatil kasabalarına gittim", score: 3 },
            { text: "Hiç seyahat etmedim, evim gibisi yok", score: 0 }
        ],
        feedback: "Seyahat etmeyen, dar görüşlüdür.",
        info: "Seyahat edenler kültürel zeka testlerinde %45 daha yüksek skor alır.",
        source: "Cross-Cultural Psychology"
    },

    // Kategori 4: Eleştirel Düşünce (4 soru)
    {
        id: 17,
        category: "Eleştirel Düşünce",
        question: "Bir tartışmada kaynak gösterilmesi:",
        options: [
            { text: "Şart, kaynak olmadan ciddiye almam", score: 10, correct: true },
            { text: "Önemli ama her zaman gerekli değil", score: 6 },
            { text: "Pek umurumda olmaz", score: 2 },
            { text: "Kaynak ne, 'ben böyle biliyorum' yeter", score: 0 }
        ],
        feedback: "Kaynaksız bilgi, dedikodudur.",
        info: "Akademik dünyada kaynak göstermeden yapılan iddia, geçersizdir.",
        source: "İlke: Bilimsel metot"
    },
    {
        id: 18,
        category: "Eleştirel Düşünce",
        question: "Komplo teorilerine inanır mısın?",
        options: [
            { text: "Hayır, kanıt isterim", score: 10, correct: true },
            { text: "Bazılarına inanabilirim", score: 5 },
            { text: "Çoğu doğru gibi geliyor", score: 2 },
            { text: "Evet, her şey komplo", score: 0 }
        ],
        feedback: "Komplo teorileri, cahilin bilim karşıtlığıdır.",
        info: "Komplo teorilerine inananlar eleştirel düşünce testlerinde %60 daha düşük skor alır.",
        source: "Cognitive Psychology Research"
    },
    {
        id: 19,
        category: "Eleştirel Düşünce",
        question: "Bilim vs. inanç çatıştığında:",
        options: [
            { text: "Bilime güvenirim, inanç değişebilir", score: 10, correct: true },
            { text: "İkisini dengelemeye çalışırım", score: 6 },
            { text: "İnanç daha önemli", score: 2 },
            { text: "Bilim yalan, inanç gerçek", score: 0 }
        ],
        feedback: "Bilim kanıt, inanç dogmadır.",
        info: "Bilimsel metot sayesinde ortalama insan ömrü 200 yılda 30 yıldan 73 yıla çıktı.",
        source: "WHO, Bilim Tarihi"
    },
    {
        id: 20,
        category: "Eleştirel Düşünce",
        question: "Kendini geliştirmek için ne yapıyorsun?",
        options: [
            { text: "Düzenli kitap, kurs, yeni beceriler öğreniyorum", score: 10, correct: true },
            { text: "Ara sıra bir şeyler deniyorum", score: 6 },
            { text: "İstiyorum ama yapmıyorum", score: 2 },
            { text: "Olduğum gibi iyiyim, değişmeye gerek yok", score: 0 }
        ],
        feedback: "Gelişmeyenin kaderi gerilemektir.",
        info: "Sürekli öğrenenler gelir seviyelerinde yılda ortalama %12 artış görür.",
        source: "LinkedIn Learning Report 2024"
    }
];

const categories = {
    "Düşünce Bağımsızlığı": {
        color: "#e74c3c",
        description: "Sürüden ayrı düşünebilme"
    },
    "Yaşam Tarzı": {
        color: "#f39c12",
        description: "Alışkanlıklar ve tercihler"
    },
    "Kültürel Gelişim": {
        color: "#9b59b6",
        description: "Entelektüel zenginlik"
    },
    "Eleştirel Düşünce": {
        color: "#3498db",
        description: "Sorgulama ve analiz"
    }
};

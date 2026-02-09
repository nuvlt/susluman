# 🌙 Ne Kadar Müslümansın?

Modern, mobil uyumlu bir İslami davranış farkındalık testi.

## 🎯 Proje Hakkında

Bu uygulama, kullanıcıların günlük hayattaki davranışlarını Kur'an öğretileriyle karşılaştırmalarına yardımcı olan, mizahi ama saygılı bir farkındalık testidir.

**Önemli Not:** Bu test iman ölçmez ve kimseyi yargılamaz. Sadece davranış farkındalığı sunar.

## ✨ Özellikler

- ✅ 20 soruluk kapsamlı test
- ✅ 4 farklı kategori (İbadet, Kul Hakkı, Sabır, Dürüstlük)
- ✅ Her sorudan sonra ayet referanslı kısa bilgi
- ✅ Kategori bazlı detaylı skorlama
- ✅ Anonim istatistik karşılaştırması
- ✅ WhatsApp, Twitter ve Link paylaşım özellikleri
- ✅ **Gelişmiş UI/UX:** Modern seçenek butonları, smooth animasyonlar
- ✅ **5 saniyelik otomatik geçiş** veya manuel "Sonraki Soru" butonu
- ✅ **Timer göstergesi** ile kullanıcı kontrolü
- ✅ Tamamen frontend (backend gerekmez)
- ✅ Mobil öncelikli responsive tasarım
- ✅ Hızlı ve kullanıcı dostu arayüz

## 🚀 Kurulum

### Yerel Ortamda Çalıştırma (En Kolay Yöntem)

**Windows Kullanıcıları için:**
1. Tüm dosyaları bir klasöre koyun
2. Klasörde `Shift + Sağ Tık` yapın
3. "PowerShell penceresini burada aç" seçin
4. Şu komutu yazın:
```powershell
python -m http.server 8000
```
5. Tarayıcınızda açın: `http://localhost:8000`

**Mac/Linux Kullanıcıları için:**
1. Terminal'i açın
2. Proje klasörüne gidin:
```bash
cd /path/to/project
```
3. Sunucuyu başlatın:
```bash
python3 -m http.server 8000
# veya
./start.sh
```
4. Tarayıcınızda açın: `http://localhost:8000`

**Alternatif Yöntemler:**
```bash
# Node.js http-server ile
npx http-server

# VS Code Live Server eklentisi ile
# Sağ tık > Open with Live Server
```

### Vercel'e Deploy

1. Vercel hesabınıza giriş yapın
2. "Import Project" seçeneğini tıklayın
3. GitHub reposunu seçin veya dosyaları sürükle-bırak yapın
4. Deploy butonuna tıklayın

Vercel otomatik olarak statik dosyalarınızı deploy edecektir.

### Netlify'a Deploy

1. Netlify'a giriş yapın
2. "Sites" > "Add new site" > "Deploy manually"
3. Proje klasörünü sürükle-bırak yapın
4. Deploy işlemi otomatik başlayacaktır

### GitHub Pages'e Deploy

1. GitHub'da yeni bir repo oluşturun
2. Dosyaları yükleyin
3. Settings > Pages'e gidin
4. Source olarak "main" branch'i seçin
5. Save butonuna tıklayın

## 📁 Proje Yapısı

```
ne-kadar-musluman/
│
├── index.html          # Ana HTML dosyası
├── style.css           # Tüm stil dosyası
├── app.js             # Ana uygulama mantığı
├── questions.js       # 20 soru ve kategori bilgileri
└── README.md          # Proje dokümantasyonu
```

## 🎨 Özelleştirme

### Soruları Değiştirmek

`questions.js` dosyasını açın ve sorular array'ini düzenleyin:

```javascript
{
    id: 1,
    category: "İbadet Alışkanlıkları",
    question: "Yeni sorunuz?",
    options: [
        { text: "Seçenek 1", score: 10 },
        { text: "Seçenek 2", score: 7 },
        { text: "Seçenek 3", score: 4 },
        { text: "Seçenek 4", score: 1 }
    ],
    feedback: "Kısa açıklama",
    verse: "Ayet referansı"
}
```

### Renkleri Değiştirmek

`style.css` dosyasındaki `:root` değişkenlerini düzenleyin:

```css
:root {
    --primary: #2c5f2d;
    --accent: #29a19c;
    /* Diğer renkler... */
}
```

### Kategori Eklemek

1. `questions.js` dosyasında yeni kategori ekleyin
2. Kategoriye ait soruları oluşturun
3. `categories` objesine yeni kategoriyi ekleyin

## 📱 Teknolojiler

- **HTML5** - Yapı
- **CSS3** - Stil (Flexbox, Grid, Animations)
- **Vanilla JavaScript** - Mantık (ES6+)
- **LocalStorage** - Veri saklama

## 🔧 Teknik Detaylar

- Tamamen client-side çalışır
- Backend gerektirmez
- Üyelik sistemi yok
- Kişisel veri toplamaz
- Anonim istatistikler localStorage'da saklanır

## 📊 Veri Yönetimi

Tüm veriler kullanıcının tarayıcısında LocalStorage ile saklanır:
- Test sonuçları
- Kategori skorları
- Anonim istatistikler

Hiçbir veri sunucuya gönderilmez.

## 🌐 Tarayıcı Desteği

- Chrome (son 2 versiyon)
- Firefox (son 2 versiyon)
- Safari (son 2 versiyon)
- Edge (son 2 versiyon)
- Mobil tarayıcılar (iOS Safari, Chrome Mobile)

## 📝 Lisans

Bu proje MIT lisansı altında açık kaynaklıdır.

## 🤝 Katkıda Bulunma

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/yeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeniOzellik`)
5. Pull Request oluşturun

## 💡 Geliştirme Fikirleri

- [ ] Daha fazla soru ekleme
- [ ] Farklı dil desteği
- [ ] Karanlık/Aydınlık tema toggle
- [ ] Sonuçları PDF olarak indirme
- [ ] Sosyal medya kartları (Open Graph)
- [ ] Progressive Web App (PWA) desteği

## 📧 İletişim

Sorularınız için GitHub Issues kullanabilirsiniz.

## ⚠️ Feragatname

Bu uygulama eğitim ve farkındalık amaçlıdır. Dini bir hüküm içermez ve fetva niteliği taşımaz. Kişilerin imanını veya dindarlığını ölçmez.

---

Made with 💚 for the Muslim community

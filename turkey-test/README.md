# 🎯 Farkındalık Testleri

İki farklı test ile kendinizi ve ülkenizi daha iyi tanıyın.

## 🌙 Ne Kadar Müslümansın?

Günlük hayattaki davranışlarınızı Kur'an öğretileriyle karşılaştırın.

**Özellikler:**
- 20 soruluk İslami davranış testi
- 4 kategori: İbadet, Haram, Sosyal Davranış, Dürüstlük
- Emoji skorlama sistemi ⭐⭐⭐⭐⭐
- Hayat yolculuğu progress bar 🌱→🌿→🌳→🌲→🕌
- Kişisel hikaye özeti 📖

## 🇹🇷 Türkiye'nin 20 Yılı

2002-2024 arası Türkiye'nin ekonomik ve sosyal gerçeklerini test edin.

**Özellikler:**
- 20 soruluk bilgi testi
- 4 kategori: Ekonomi, Alım Gücü, Demokrasi, Vaatler
- Resmi kaynaklara dayalı sorular (TÜİK, TCMB, Freedom House)
- Doğru/yanlış gösterimi ✅❌
- Detaylı kaynak bilgisi

---

## 📁 Proje Yapısı

```
outputs/
│
├── index.html              # Ana sayfa
│
├── muslim-test/           # İslami Test
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── questions.js
│
└── turkey-test/           # Türkiye Testi
    ├── index.html
    ├── style.css
    ├── app.js
    └── questions.js
```

---

## 🚀 Kurulum

### Yerel Test

```bash
# Proje klasörüne git
cd outputs

# Sunucu başlat
python3 -m http.server 8000

# Tarayıcıda aç
http://localhost:8000
```

### Vercel Deploy

```bash
git add .
git commit -m "Farkındalık testleri eklendi"
git push origin main
```

Vercel otomatik deploy edecek!

---

## 📊 Veri Kaynakları (Türkiye Testi)

- **TÜİK** - Türkiye İstatistik Kurumu
- **TCMB** - T.C. Merkez Bankası
- **Dünya Bankası**
- **Freedom House** - Demokrasi endeksi
- **RSF** - Basın özgürlüğü
- **The Economist** - Demokrasi endeksi

---

## 🎨 Özellikler

### Her İki Test İçin:
✅ Mobil uyumlu
✅ 5 saniyelik otomatik geçiş + manuel buton
✅ Kategori bazlı skorlama
✅ Emoji rating sistemi
✅ Kişisel hikaye özeti
✅ Sosyal medya paylaşımı
✅ LocalStorage ile veri saklama

---

## ⚖️ Yasal Uyarı

**İslami Test:** Dini hüküm içermez, sadece davranış farkındalığı sunar.

**Türkiye Testi:** Tüm veriler resmi kaynaklardan alınmıştır. Sadece bilgilendirme amaçlıdır.

---

Made with 💚 & 🇹🇷

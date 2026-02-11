# 🚀 Vercel'e Deploy Rehberi

## Adım 1: GitHub'a Yükleme

### Terminal/Git Bash'de:

```bash
# Projeyi başlat
git init

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "feat: Ne Kadar Müslümansın test uygulaması"

# Ana branch adını main yap
git branch -M main

# GitHub reponuzu ekleyin (kendi repo linkinizi kullanın)
git remote add origin https://github.com/KULLANICI_ADINIZ/ne-kadar-musluman.git

# GitHub'a yükle
git push -u origin main
```

### GitHub'da Yeni Repo Oluşturma:
1. https://github.com/new adresine gidin
2. Repository name: `ne-kadar-musluman`
3. Description: "İslami davranış farkındalık testi"
4. Public veya Private seçin
5. **"Create repository"** butonuna tıklayın
6. Yukarıdaki komutları çalıştırın

---

## Adım 2: Vercel'e Deploy

### Yöntem 1: Vercel Web Arayüzü (Önerilen)

1. **https://vercel.com** adresine gidin
2. **"Login"** yapın (GitHub ile giriş yapabilirsiniz)
3. **"Add New Project"** veya **"Import Project"** butonuna tıklayın
4. **GitHub reposunu seçin** (`ne-kadar-musluman`)
5. **Ayarları kontrol edin:**
   - Framework Preset: `Other` (statik site)
   - Root Directory: `./` (varsayılan)
   - Build Command: boş bırakın
   - Output Directory: boş bırakın
6. **"Deploy"** butonuna tıklayın

### 🎉 Tamamlandı!

Deploy tamamlandığında size şöyle bir link verilecek:
```
https://ne-kadar-musluman.vercel.app
```

veya

```
https://ne-kadar-musluman-kullaniciadi.vercel.app
```

---

## Adım 3: Özel Domain (Opsiyonel)

Kendi domain'iniz varsa:

1. Vercel Dashboard'da projenize gidin
2. **"Settings"** > **"Domains"** sekmesine tıklayın
3. Domain adınızı girin (örn: `nekadarmusluman.com`)
4. DNS ayarlarını yapın (Vercel size rehber gösterir)

---

## Güncelleme Yapmak

Kod değişikliği yaptığınızda:

```bash
git add .
git commit -m "fix: UI iyileştirmesi"
git push
```

**Vercel otomatik olarak yeni versiyonu deploy eder!** 🚀

---

## Önemli Notlar

✅ `start.sh` dosyası Vercel tarafından görmezden gelinir (sorun değil)
✅ Tüm dosyalar CDN üzerinde hızlı yüklenir
✅ HTTPS otomatik aktif
✅ Her push otomatik deploy tetikler
✅ Ücretsiz plan yeterli (hobby projeler için)

---

## Sorun Giderme

### Deploy başarısız olursa:
1. `vercel.json` dosyasının doğru olduğundan emin olun
2. `index.html` dosyasının root dizinde olduğunu kontrol edin
3. Vercel logs'una bakın (Dashboard > Deployments > Log)

### 404 hatası alırsanız:
- `index.html` adının doğru yazıldığını kontrol edin
- Dosya encoding'in UTF-8 olduğundan emin olun

---

## Test Etme

Deploy'dan sonra:
1. Vercel'in verdiği linke gidin
2. Uygulamayı test edin
3. Mobil görünümü kontrol edin
4. Tüm butonları deneyin

**Her şey çalışıyorsa, tebrikler! 🎉**

Linkinizi paylaşabilirsiniz:
- WhatsApp
- Twitter
- Instagram
- Facebook

İyi kullanımlar! 🌙

[English](./README.md) | Türkçe

# HANDBUZ-FUP (Kullanılmayan Resimleri Bul)

HANDBUZ-FUP, geliştiricilerin proje dizinlerindeki kullanılmayan resimleri belirlemelerine ve yönetmelerine yardımcı olmak için tasarlanmış bir komut satırı aracıdır. Bu araç, proje dosyalarınızı tarar ve kod tabanınızda referans verilmeyen resimleri tespit eder, potansiyel olarak karmaşıklığı azaltmaya ve proje boyutunu optimize etmeye yardımcı olur.

## Özellikler

- Belirtilen dizinleri resim dosyaları için tarar
- JavaScript ve TypeScript dosyalarını resim referansları için analiz eder
- Projede kullanılmayan resimleri belirler
- Kolay kullanım için basit bir komut satırı arayüzü sağlar

## Nasıl Çalışır

1. **Resim Keşfi**: FUP, belirtilen dizini (veya belirtilmemişse mevcut dizini) resim dosyaları için arar.

2. **Kod Analizi**: Ardından, projedeki tüm JavaScript (.js, jsx) ve TypeScript (.ts, tsx) dosyalarını tarar.

3. **Referans Kontrolü**: Araç, keşfedilen her resmin taranan kod dosyalarında referans verilip verilmediğini kontrol eder.

4. **Sonuçlar**: FUP, bulunan toplam resim sayısını rapor eder ve kodda referans verilmeyen resimleri listeler.

Örnek
```bash
npx handbuz-fup
npx handbuz-fup public
```

Yazar hakkında
- [Handbuz](https://github.com/yasinelbuz)
- [Twitter](https://twitter.com/yasinelbuz)
- [Linkedin](https://www.linkedin.com/in/yasin-elb%C3%BCz-314b8b4b/)

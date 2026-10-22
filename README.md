\# BMH231 - Web'in Temelleri ve Geliştirme Ekosistemi (Ödev 1)



Bu projede herhangi bir hazır web çatısı (Express vb.) kullanmadan, Node.js'in kendi `http` modülü ve gün hesabı için `dayjs` kütüphanesiyle temel bir HTTP sunucusu geliştirdim. Ödev kapsamında farklı HTTP metotları, durum kodları (200, 404, 405), JSON ve HTML yanıtları ile Git dallanma ve çakışma çözme adımları uygulandı.



\## Desteklenen Rotalar



| Yol | Metot | Yanıt Türü | Açıklama |

|---|---|---|---|

| `/` | GET | `text/html` | Ana sayfa ve hakkımda bağlantısı |

| `/hakkimda` | GET | `text/html` | Kendimi tanıttığım sayfa |

| `/api/ders` | GET | `application/json` | Ders bilgilerini dönen JSON nesnesi |

| `/api/agep` | GET | `application/json` | AGEP teslim tarihine kalan gün hesabı |

| \*Diğer\* | GET | `text/plain` | 404 Sayfa bulunamadı yanıtı |

| \*Tümü\* | POST / PUT vb. | `text/plain` | 405 Yönteme izin verilmiyor ve Allow: GET başlığı |



\## Kurulum ve Çalıştırma



Projeyi indirip çalıştırmak için sırasıyla şu adımları izleyebilirsiniz:



1\. Depoyu klonlayın:

&#x20;  git clone https://github.com/NisanurErdogan/bmh231-odev1.git

&#x20;  cd bmh231-odev1



2\. Gerekli paketleri yükleyin:

&#x20;  npm install



3\. Sunucuyu başlatın:

&#x20;  npm start



Sunucu açıldıktan sonra tarayıcıdan `http://localhost:3000` adresine giderek sayfayı görebilirsiniz.


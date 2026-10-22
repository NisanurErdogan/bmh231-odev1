const http = require('http');
const dayjs = require('dayjs');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // Sunucu her isteğin yöntemini ve yolunu uçbirime yazmalıdır
    console.log(`${req.method} ${req.url}`);

    // GET dışındaki yöntemler için 405 kontrolü ve Allow başlığı
    if (req.method !== 'GET') {
        res.writeHead(405, {
            'Content-Type': 'text/plain; charset=utf-8',
            'Allow': 'GET'
        });
        res.end('Yönteme izin verilmiyor');
        return;
    }

    // İstenen rotalar (endpoints)
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <!DOCTYPE html>
            <html lang="tr">
            <head><meta charset="utf-8"><title>Ana Sayfa</title></head>
            <body>
                <h1>BMH231 - Baslik Dalindan Merhaba</h1>
                <p><a href="/hakkimda">Hakkımda Sayfasına Git</a></p>
            </body>
            </html>
        `);
    } else if (req.url === '/hakkimda') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <!DOCTYPE html>
            <html lang="tr">
            <head><meta charset="utf-8"><title>Hakkımda</title></head>
            <body>
                <h1>Hakkımda</h1>
                <p>Merhaba, ben Nisanur Erdoğan. Bilgisayar Mühendisliği öğrencisiyim.Bu sayfa hakkimda dalinda gelistirildi.</p>
                <p><a href="/">Ana Sayfaya Dön</a></p>
            </body>
            </html>
        `);
    } else if (req.url === '/api/ders') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        const dersBilgisi = {
            kod: 'BMH231',
            ad: "Web'in Temelleri ve Geliştirme Ekosistemi",
            gun: 'Cuma'
        };
        res.end(JSON.stringify(dersBilgisi));
    } else if (req.url === '/api/agep') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        
        // AGEP son teslim tarihi ve dayjs ile bugünden kalan gün hesabı
        const sonTeslimTarihi = dayjs('2026-11-01');
        const bugun = dayjs();
        const kalanGun = sonTeslimTarihi.diff(bugun, 'day');

        const agepBilgisi = {
            proje: 'AGEP',
            sonTeslimTarihi: '01.11.2026',
            kalanGunSayisi: kalanGun
        };
        res.end(JSON.stringify(agepBilgisi));
    } else {
        // Diğer tüm yollar için 404
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Sayfa bulunamadı');
    }
});

server.listen(PORT, () => {
    console.log(`Sunucu calisiyor: http://localhost:${PORT}`);
});
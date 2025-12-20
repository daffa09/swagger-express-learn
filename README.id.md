<!-- portfolio -->
<!-- slug: swagger-express-learn -->
<!-- title: Pembelajaran Swagger Express -->
<!-- description: Proyek pembelajaran untuk dokumentasi API menggunakan Swagger dengan Express.js -->
<!-- image: https://github.com/user-attachments/assets/e4c06ead-0641-4135-8778-dafb731234b4 -->
<!-- tags: nodejs, express, swagger, dokumentasi-api, pembelajaran -->

# Belajar Swagger dengan Express.js (Learn Swagger with Express.js)

Proyek pembelajaran yang mendemonstrasikan cara mengimplementasikan dokumentasi API menggunakan Swagger (OpenAPI) dengan backend Express.js. Proyek ini menampilkan praktik terbaik dalam mendokumentasikan API RESTful.

![Dokumentasi Swagger](https://github.com/user-attachments/assets/e4c06ead-0641-4135-8778-dafb731234b4)

## 📋 Ringkasan

Ini adalah proyek sederhana yang dibuat untuk mempelajari cara mengintegrasikan dan menggunakan Swagger untuk dokumentasi API dengan Express.js. Proyek ini memberikan pengalaman langsung dengan spesifikasi OpenAPI dan pembuatan dokumentasi API otomatis.

## ✨ Fitur

- **Integrasi Swagger UI**: Dokumentasi API interaktif yang dapat diakses melalui browser.
- **Spesifikasi OpenAPI 3.0**: Standar dokumentasi API modern.
- **Backend Express.js**: Implementasi API RESTful yang nyata.
- **Pengujian Interaktif**: Mencoba endpoint API secara langsung dari halaman dokumentasi.
- **Pembaruan Otomatis**: Dokumentasi diperbarui seiring dengan perubahan kode atau file YAML.
- **Konfigurasi YAML**: Spesifikasi API yang bersih dan mudah dibaca.

## 🛠️ Teknologi yang Digunakan

- **Node.js**: Runtime environment.
- **Express.js**: Web framework.
- **Swagger UI Express**: Middleware dokumentasi Swagger.
- **YAML**: Format spesifikasi API.
- **JavaScript (ES6+)**: Bahasa pemrograman.

## 📁 Struktur Proyek

```
swagger-express-learn/
├── src/
│   ├── index.js           # Titik masuk server Express
│   └── routes/           # Handler rute API
├── swagger.yaml          # Spesifikasi Swagger/OpenAPI
├── package.json          # Dependensi dan skrip
└── README.md
```

## 🚀 Memulai

### Prasyarat

- **Node.js 20.0.0 atau lebih tinggi** (penting untuk kompatibilitas).
- Manajer paket npm atau yarn.
- Pemahaman dasar tentang REST API.

### Langkah Instalasi

1. **Clone Repositori**
   ```bash
   git clone <repository-url>
   cd swagger-express-learn
   ```

2. **Install Dependensi**
   ```bash
   npm install
   ```

3. **Jalankan Server Pengembangan**
   ```bash
   npm run dev
   ```

4. **Akses Dokumentasi Swagger**
   Buka browser dan arahkan ke: `http://localhost:3000/api-docs`

   Anda akan melihat antarmuka Swagger UI interaktif dengan semua endpoint API terdokumentasi!

## 💻 Penggunaan

### Menguji Endpoint API
Swagger UI memungkinkan Anda untuk:
1. Memilih endpoint.
2. Klik "Try it out".
3. Masukkan parameter atau data bodi.
4. Klik "Execute" dan lihat responsnya.

## 📚 Hasil Pembelajaran
Proyek ini membantu Anda mempelajari:
- Spesifikasi OpenAPI/Swagger.
- Praktik terbaik dokumentasi API.
- Integrasi middleware Express.js.
- Desain API RESTful.
- Sintaks YAML.

---

**Selamat Mendokumentasikan API!** 📚✨  
Membuat API mudah dimengerti, satu endpoint pada satu waktu!

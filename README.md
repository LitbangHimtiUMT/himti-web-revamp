# HIMTI WEBSITE REVAMP

## 📌 About Project
The HIMTI Website Revamp is a project to update the official HIMTI website at Universitas Muhammadiyah Tangerang, aiming to become a central hub for HIMTI information.
The website offers various features, including event announcements, competition registration, study group information, faculty advisor data, and activity documentation.

## ✨ Core Feature
- **Event & Announcement**: Menampilkan informasi acara dan kegiatan HIMTI.
- **Competition Registration**: Pendaftaran lomba online dengan form yang mudah digunakan.
- **Study Group Management**: Informasi dan pendaftaran kelompok belajar.
- **Lecturer Information**: Profil dosen pembina dan pembimbing HIMTI.
- **Media & Documentation**: Galeri foto dan video kegiatan.

## 🛠️ Tech Stack
React Vite, Javascript, Tailwind CSS

## 📂 Project Structure
```
📦 himti-web-revamp
├── 📁 src
│   ├── 📁 core
│   │   ├── 📁 models
│   │       ├── 📁 user.js
│   │   ├── 📁 service
│   │       ├── 📁 user.js
│   │   ├── 📁 config
│   │       ├── 📁 app.js
│   ├── 📁 entries
│   │   ├── 📄 app.jsx
│   │   ├── 📁 index.css
│   ├── 📁 feature
│   │   ├── 📁 components
│   │   │   ├── ⚛ UserForm.jsx
│   │   ├── 📁 hooks
│   │   │   ├── ⚛ useRegistration.js
│   │   ├── 📁 views
│   │   │   ├── ⚛ UserFormViews.jsx
├── 📄 index.html
├── 📄 README.md
```

## 🚀 How to run?
### Requirement
- Node.js & npm/yarn

### Step by step
#### 1️⃣ Clone Repository
```bash
git clone https://github.com/LitbangHimtiUMT/himti-web-revamp.git
cd himti-web-revamp
```

#### 3️⃣ Setup Environment
```bash
touch .env
# Adjust file .env with config API backend

# Install dependency
yarn install

# Running Project
yarn dev
```

## 🤝 Contributions
We welcome contributions from anyone! Please feel free to fork this repository, create new branches, and submit pull requests.

## 📜 License
This project is licensed under the [MIT License](LICENSE).

---
🚀 Built with ❤️ by **[Litbang/HIMTI-UMT]**


# Aarambh Works Website

This project is a modern, mobile-optimized website for Aarambh Works, designed and developed by **Abhay Thummar**.

## 🚀 Project Overview
Aarambh Works is a creative agency specializing in digital marketing, branding, web development, commercial shoots, graphic design, and content creation. This website showcases the agency's services, projects, team, and more, with a focus on UI/UX, interactivity, and performance.

## 🛠️ Technologies Used
- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Web3Forms](https://web3forms.com/) (for contact/booking forms)
- [TypeScript](https://www.typescriptlang.org/)

## 📦 Getting Started (Development)
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd awesome-studio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🏗️ Production Build
To build the project for production:
```bash
npm run build
npm start
```

## 🌐 Static Export (for Hostinger/Shared Hosting)
If you want to deploy to static hosting (like Hostinger shared hosting):
```bash
npm run build
npm run export
```
- Upload the contents of the `out/` folder to your `public_html` directory on Hostinger.
- All dynamic forms use Web3Forms, so no server is required.

## 📄 Deployment Notes
- For static hosting, all API routes/server-side features must be replaced with third-party services (already done for forms).
- For full SSR/API support, use a Node.js server or a platform like Vercel.

## 👤 Author
**Abhay Thummar**  
for [Aarambh Works](mailto:aarambhworks@gmail.com)

---
Feel free to reach out for collaboration or questions!

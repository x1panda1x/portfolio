# Geonwoo — Portfolio

React + TypeScript + Tailwind CSS + Framer Motion portfolio landing page.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Structure

- `src/App.tsx` — section order: Hero → Marquee → About → Services → Projects
- `src/components/` — section components + reusable `FadeIn`, `Magnet`, `AnimatedText`,
  `ContactButton`, `LiveProjectButton`
- `src/index.css` — global reset, dark background, `.hero-heading` gradient text class

## GitHub Pages 배포

1. GitHub에서 새 저장소를 만듭니다 (예: `portfolio`).
2. 저장소 이름이 `portfolio`가 아니라면 `vite.config.ts`의 `base: '/portfolio/'`를 `'/저장소이름/'`으로 바꿉니다.
3. 아래 명령으로 이 프로젝트를 push합니다.

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/x1panda1x/portfolio.git
git push -u origin main
```

4. GitHub 저장소 → Settings → Pages → Build and deployment → Source를
   **GitHub Actions**로 설정합니다.
5. push가 완료되면 `.github/workflows/deploy.yml`이 자동으로 빌드/배포하며,
   완료 후 `https://x1panda1x.github.io/portfolio/`에서 사이트를 확인할 수 있습니다.

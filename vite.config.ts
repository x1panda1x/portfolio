import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 프로젝트 페이지 배포를 위한 base 경로.
// 저장소 이름이 다르면 아래 문자열을 '/저장소이름/'으로 바꿔주세요.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})

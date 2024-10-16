import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.100.15', // Geliştirme sunucusunun dinleyeceği IP adresi
    port: 5173,             // (Opsiyonel) Kullanmak istediğiniz port
    strictPort: true,       // (Opsiyonel) Port zaten kullanılıyorsa hata ver
    https: false,           // (Opsiyonel) HTTPS kullanmak isterseniz true yapın
    // Diğer server ayarları...
  }
})

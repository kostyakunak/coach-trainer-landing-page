import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig(({ command }) => {
  const isDev = command === 'serve';
  
  return {
    plugins: [react()],
    build: isDev ? undefined : {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'SynergyEsotericsCommunity',
        formats: ['es', 'cjs'],
        fileName: (format: string) => `index.${format === 'es' ? 'mjs' : 'js'}`,
      },
      rollupOptions: {
        external: ['react', 'react-dom', 'react/jsx-runtime', 'date-fns', 'date-fns/locale'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'react/jsx-runtime': 'react/jsx-runtime',
          },
        },
      },
      outDir: 'dist',
      sourcemap: true,
      emptyOutDir: true,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3000,
      open: true,
    },
  };
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig(({ mode }) => {
  const isLibrary = mode === 'library';
  
  if (isLibrary) {
    return {
      plugins: [react()],
      build: {
        lib: {
          entry: path.resolve(__dirname, 'src/index.ts'),
          name: 'SynergyEsotericsCommunity',
          formats: ['es', 'cjs'],
          fileName: (format: string) => `index.${format === 'es' ? 'mjs' : 'js'}`,
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'react/jsx-runtime'],
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
    };
  }

  // Default web app configuration
  return {
    plugins: [react()],
    build: {
      outDir: 'dist',
      sourcemap: false,
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            ui: ['@radix-ui/react-accordion', '@radix-ui/react-slot', 'lucide-react']
          }
        }
      }
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
    base: '/',
  };
});
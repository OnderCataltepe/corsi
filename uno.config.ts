import { defineConfig, presetAttributify, presetUno, transformerDirectives } from 'unocss';

export default defineConfig({
  presets: [presetUno(), presetAttributify({
    prefix: 'un-',
  })],
  transformers: [transformerDirectives()],
  theme: {
    animation: {
      keyframes: {
        cubeturn: '{from {transform:rotate3d(0, 0, 0, 0)} to {transform:rotate3d(1, 3, 1, 360deg)}}'
      },
      durations: {
        cubeturn: '7s'
      }
    }
  },
});

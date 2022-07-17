/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{svelte,ts,js}'],
	plugins: [require('daisyui')]
};

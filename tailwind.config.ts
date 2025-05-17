
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				orbitron: ['Orbitron', 'sans-serif'],
				mono: ['Share Tech Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				cyber: {
					black: '#0D0D0D',
					cyan: '#00FFFF',
					purple: '#8A2BE2',
					green: '#39FF14',
					pink: '#FF10F0',
					blue: '#1E90FF',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'cyber-pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' },
				},
				'text-glitch': {
					'0%': { transform: 'translate(0)' },
					'2%': { transform: 'translate(5px, 5px)' },
					'4%': { transform: 'translate(-5px, -5px)' },
					'6%': { transform: 'translate(5px, -5px)' },
					'8%': { transform: 'translate(-5px, 5px)' },
					'10%': { transform: 'translate(0)' },
				},
				'echo-wave': {
					'0%': { 
						transform: 'scale(0)',
						opacity: '1',
					},
					'100%': { 
						transform: 'scale(3)',
						opacity: '0',
					},
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'fade-in': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(10px)',
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				'neon-flicker': {
					'0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
						textShadow: '0 0 5px var(--neon-color), 0 0 15px var(--neon-color), 0 0 20px var(--neon-color)',
					},
					'20%, 24%, 55%': {
						textShadow: 'none',
					},
				},
				'channel-change': {
					'0%': { 
						opacity: '1',
						filter: 'hue-rotate(0deg)',
					},
					'30%': { 
						opacity: '0.2',
						filter: 'hue-rotate(90deg) blur(5px)',
					},
					'70%': { 
						opacity: '0.5',
						filter: 'hue-rotate(180deg) blur(2px)',
					},
					'100%': { 
						opacity: '1',
						filter: 'hue-rotate(0deg)',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'cyber-pulse': 'cyber-pulse 2s ease-in-out infinite',
				'text-glitch': 'text-glitch 0.5s ease-in-out',
				'echo-wave': 'echo-wave 1.5s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
				'fade-in': 'fade-in 0.5s ease-out',
				'neon-flicker': 'neon-flicker 2s infinite',
				'channel-change': 'channel-change 0.8s ease-in-out',
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(8px)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

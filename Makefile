install: #устанавливаем зависимости
	npm ci
brain-games: #запускаем игру
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint: #запускаем линтер
	npx eslint .
brain-even:
	node bin/brain-even.js
brain-calc:
	node bin/brain-calc.js
brain-gcd:
	node bin/brain-gcd.js
brain-progression:
	node bin/brain-progression.js
brain-prime:
	node bin/brain-prime.js

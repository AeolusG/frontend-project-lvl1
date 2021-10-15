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
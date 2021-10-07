install: # устанавливаем зависимости
	npm ci
brain-games: #запускаем игру
	node bin/brain-games.js
publish:
	npm publish --dry-run
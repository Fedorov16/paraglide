up: _up
build: _build
down: _down
in: _in
diff: _diff
entity: _entity
migrate: _migrate

_build:
	docker-compose build && docker-compose up -d

_up:
	docker-compose up -d

_down:
	docker-compose down

_in:
	docker exec -it parag_php bash

_entity:
	php bin/console make:entity

_diff:
	php bin/console d:m:diff

_migrate:
	php bin/console d:m:m
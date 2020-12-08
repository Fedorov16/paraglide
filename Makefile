up: _up
build: _build
down: _down
in: _in
watch: _watch
prod: _prod

_build:
	docker-compose build && docker-compose up -d

_up:
	docker-compose up -d

_down:
	docker-compose down

_in:
	docker exec -it parag_php bash

_watch:
	cd symfony && yarn encore dev --watch

_prod:
	cd symfony && yarn encore production
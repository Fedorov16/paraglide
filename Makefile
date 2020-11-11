up: _up
build: _build
down: _down
in: _in

_build:
	cd docker && docker-compose build && docker-compose up -d

_up:
	cd docker && docker-compose up -d

_down:
	cd docker && docker-compose down
	cd ..

_in:
	docker exec -it parag_php bash
up: _up
build: _build
down: _down

_build:
	cd docker && docker-compose build && docker exec -it parag_php bash  && exit

_up:
	cd docker && docker-compose up -d

_down:
	cd docker && docker-compose down
	cd ..

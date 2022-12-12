run:
	docker build -t frontend ./frontend
	docker build -t backend ./backend
	docker run -d -p 8000:8000 -it --rm --name backend backend
	docker run -d -p 3000:3000 -it --rm --name frontend frontend
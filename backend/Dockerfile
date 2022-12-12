FROM python:3

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
ENV DJANGO_SUPERUSER_PASSWORD=M@ster!000
COPY . .
EXPOSE 8000
CMD [ "sh", "./entrypoint.sh" ]
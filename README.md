# agile-frontend

![Actions](https://github.com/primetz/agile-frontend/actions/workflows/main.yml/badge.svg)
![License](https://img.shields.io/github/license/primetz/agile-frontend)

## :hammer_and_wrench: Установка

### Режим разработки
```shell
docker run -t \
--name container-name \
-p 3000:3000 -p 3001:3001 \
-v $(pwd)/src:/home/node/app/src \
-v $(pwd)/public:/home/node/app/public \
primetz/agile-frontend:latest
 ```

### Режим сборки

```shell
docker run -t --rm \
-e ASSEMBLY_MODE=prod \
-v $(pwd)/src:/home/node/app/src \
-v $(pwd)/public:/home/node/app/public \
primetz/agile-frontend:latest
```

#### Значения переменной ASSEMBLY_MODE
* ```dev``` - Режим разработки (значение по умолчанию)
* ```prod``` - Режим сборки

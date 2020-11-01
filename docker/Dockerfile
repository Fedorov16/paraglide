FROM php:7.4-fpm

RUN apt-get update && apt-get install -y \
            libfreetype6-dev \
            libjpeg-dev \
            libpng-dev \
            libpq-dev \
            zip \
        && docker-php-ext-install pdo_pgsql

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN curl -sS https://get.symfony.com/cli/installer | bash
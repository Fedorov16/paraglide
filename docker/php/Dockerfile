FROM php:7.4-fpm-buster

COPY docker/php/php.ini /usr/local/etc/php/conf.d/docker-php-config.ini

RUN apt-get update && apt-get install -y \
            libfreetype6-dev \
            libjpeg-dev \
            libpng-dev \
            libpq-dev \
            zip \
            git \
            iputils-ping \
        && docker-php-ext-install pdo_pgsql

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN curl -sS https://get.symfony.com/cli/installer | bash
RUN mv /root/.symfony/bin/symfony /usr/local/bin/symfony
RUN curl -o- https://gist.githubusercontent.com/ankurk91/8f107ef490f40f74a1cf/raw/install-node-js.sh | bash
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

WORKDIR /var/www/symfony
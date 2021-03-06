// global configuration goes here

const CONFIG = {

  LISTEN_PORT: 6005,

  IS_PROD: process.env.NODE_ENV === 'production',
  DEVELOPMENT_MODE: true,

  TRACKS_DB_NAME: process.env.TRACKS_DB_NAME || 'tracks',
  TRACKS_DB_USER: process.env.TRACKS_DB_USER || 'tracks',
  TRACKS_DB_PASSWORD: process.env.TRACKS_DB_PASSWORD || 'development_only',
  TRACKS_DB_HOST: process.env.TRACKS_DB_HOST || 'localhost',
  TRACKS_DB_PORT: parseInt(process.env.TRACKS_DB_PORT) || 5432,

  JWKS_URL: process.env.JWKS_URL || 'http://localhost:8888/auth/realms/tracks/protocol/openid-connect/certs',

  RABBIT_MQ_HOST: process.env.RABBIT_MQ_HOST || 'localhost',
  RABBIT_MQ_VHOST: process.env.RABBIT_MQ_VHOST || 'tracks',
  RABBIT_MQ_USER: process.env.RABBIT_MQ_USER || 'rabbitmq',
  RABBIT_MQ_PASSWORD: process.env.RABBIT_MQ_PASSWORD || 'rabbitmq',

  // we need a way to talk to minio directly, and also a URL to pass to the client
  // they could be different while running in k8s/os
  MINIO_HOST: process.env.MINIO_HOST || 'localhost',
  MINIO_PORT: process.env.MINIO_PORT || '9000',
  MINIO_USE_SSL: process.env.MINIO_USE_SSL || 'false',

  // values from docker-compose file. for local testing only.
  MINIO_ACCESS_KEY: process.env.MINIO_ACCESS_KEY || 'ccfc0d5a7a8f589ed8bc65b50a255d64',
  MINIO_SECRET_KEY: process.env.MINIO_SECRET_KEY || '7f99fccf96804f9456f05ad8bf926dba'


};

export {CONFIG};

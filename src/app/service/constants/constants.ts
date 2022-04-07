export default Object.freeze({
  APP_VERSION: process.env.npm_package_version,
  APP_NAME: 'app-name',
  DB_NAME_DEGEN: 'db-name',
	
  MONGODB_URI_PARTIAL: `${process.env.MONGODB_PREFIX}://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASS}@${process.env.MONGODB_CLUSTER}/`,
	
});

Deployment
npm run build && s3cmd sync build/* s3://bradeywhitlock.com && echo '🚀  Deployed!'
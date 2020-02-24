export const config = {
  "dev": {
    "username": "udacityudagram",
    "password": "udacityudagram",
    "database": "udacityudagram",
    "host": "udacityudagram.cbgiw7x2shof.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "DEPLOYED",
    "aws_media_bucket": "udacityudagram"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }, 
  "jwt": {
    "secret": "Thisisasecret"
  }
}
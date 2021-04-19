##Clear Docker
`docker-compose down`
##Build Docker
`docker-compose up -d --force-recreate`
##Run Docker
`docker-compose up`
##Deploy to Heroku
`heroku login`

`heroku container:login`

`heroku create fleming-hotel-onboarding`

`heroku container:push --recursive -a fleming-hotel-onboarding`

`heroku container:release web -a fleming-hotel-onboarding`


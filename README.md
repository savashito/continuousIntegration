Continuous Intergration
=====
###Install bower and angular
```
npm install bower --dev
bower init
bower install angular --save

git init
vi .gitignore
git add -A
git commit -m "Initial"
```
###Add Heroku and Testing
```
heroku login
heroku create
git push heroku master

npm install --save-dev chai
npm install --save mocha
```
###Note: use mongolabs to connect to db

### Edit bower components to save in the dir I want
```
vi .bowerrc
```
### Testing
```
npm install mocha -g
mocha
```

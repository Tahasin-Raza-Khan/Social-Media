# Social Media


## Database Setup
```shell
$mysql -u root 
```
```mysql
  create database sbsocialmediadb;


  mysql> create user cbsocialuser identified with mysql_native_password by
 'cbsocialpass';

mysql> grant all privileges on sbsocialmedia.* to cbsocialuser;


#!/bin/sh

####Definimos lor parametros de conexion a la BBDD mysql
SQL_HOST=localhost
SQL_USER="nagios"
SQL_PASSWORD="OC8TznxtPB2mZgN5"
SQL_DATABASE="logs"
####Montamos los parametros de conexión.
SQL_ARGS="-u $SQL_USER -p $SQL_PASSWORD -D $SQL_DATABASE -e"
#### Montamos la sentencia SQL y la lanzamos
mysql -u nagios -pOC8TznxtPB2mZgN5 -D logs -s -e "INSERT INTO files_logs(dir, file, action) VALUES('$1', '$2', '$3');"
echo "path: $1 op: $2 \t file: $3" >> ~/op

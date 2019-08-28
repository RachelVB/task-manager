Notes:


HELP

To start the community server use the following terminal command:
```
/Users/arvanbuskirk/mongodb/bin/mongod --dbpath=/Users/arvanbuskirk/mongodb-data
```

If you get a 'bad Socket connection' (already in use) use the following command:
```
sudo lsof -iTCP -sTCP:LISTEN -n -P
```

Find the PID hosting your port and 'kill' it:
```
sudo kill <mongo pid>
```
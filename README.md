Notes:

Go to MongoDB and download the COMMUNITY edition to your root directory. 
Re-name the download folder to mongodb and move it into your root directory inside User. 
Create another directory in User and name is mongodb-data.

To START the community server use the following terminal command (from your web application folder):
```
/Users/arvanbuskirk/mongodb/bin/mongod --dbpath=/Users/arvanbuskirk/mongodb-data
```


HELP


If you get an error 'Failed to set up listener: SocketException: Address already in use' (port already in use) use the following command:
```
sudo lsof -iTCP -sTCP:LISTEN -n -P
```

Find the PID hosting your port and 'kill' it:
```
sudo kill <mongo pid>
```

** Please note that you may not need the sudo command if your on windows. 
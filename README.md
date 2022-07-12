# What is this?
this is easy docker shell script generator.  
just run and enter the container name.

# Install 

```sh
// node -v // 16.13

yarn
```

# Run
```sh
yarn make

What is the docker container name? // Enter the a container name that you want

Done! // Created docker script in scripts folder, Copy And Paste
```

# Result
![](https://i.imgur.com/yqd28Ql.gif)

Folder structure
```sh
scripts                    
  ├── build.sh          
  ├── exec.sh
  ├── rm.sh         
  └── run.sh
```

build.sh
```sh
#!/bin/sh

docker build -t {docker-image-name} ./
```

exec.sh
```sh
#!/bin/sh

docker run exec -it {container-name} /bin/sh
```

rm.sh
```sh
#!/bin/sh

docker stop {container-name}
docker rm {container-name}
docker rmi {docker-image-name}
```


run.sh
```sh
#!/bin/sh

docker run -d -it -p 5001:5001 --name {container-name} {docker-image-name}
```



# Node Socket IO Example

You can run each of the Docker files independently:

### /server
```docker build -t node-socket-example:0.0.1 .```

```docker run -it -p 3001:3001 node-socket-example:0.0.1```

### /client
```docker build -t node-socket-client:0.0.1 .```

```docker run -it -p 8080:8080 node-socket-client:0.0.1```

#### Browse to http://localhost:8080/

*** This project doesn't not include production ready containers use in production at your own risk.

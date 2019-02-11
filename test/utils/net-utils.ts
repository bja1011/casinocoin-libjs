import * as net from "net";

// using a free port instead of a constant port enables parallelization
const getFreePort = () => {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    let port: number;
    server.on("listening", () => {
      // tslint:disable-next-line
      port = server.address().port;
      server.close();
    });
    server.on("close", () => {
      resolve(port);
    });
    server.on("error", (error) => {
      reject(error);
    });
    server.listen(0);
  });
};

export default {
  getFreePort,
};

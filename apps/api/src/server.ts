import cluster from "node:cluster";
import { cpus } from "node:os";
import process from "node:process";
import { app } from "./app";

async function start(){
    try {
       if(cluster.isPrimary){
        console.log(`Number of cpus: ${cpus().length}`)
        console.log(`Primary ${process.pid} is running`)
        for (let i = 0; i < cpus().length; i++) {
            cluster.fork()
        }
        cluster.on("exit", (worker, code, signal) => {
            console.log(`worker ${worker.process.pid} died`)
           
        })
       }else{
         await app.listen({
            port: 8000,
            host: "0.0.0.0"
        })
       }
    } catch (error) {
        app.log.error(error)
        process.exit(1)
    }

}

start().then((res) => {})
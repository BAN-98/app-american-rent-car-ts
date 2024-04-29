import { Router } from "express";
import { readdirSync } from "fs";

const router = Router();

const PATH_ROUTER = `${__dirname}`;


const cleanFile = (fileName: string) => {
    const cleanName = fileName.split(".").shift();
    return cleanName
}

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanPath = cleanFile(fileName);
    if (cleanPath !== 'index') {
        import(`./${cleanPath}`).then((module) => {
            router.use(`/${cleanPath}`, module.router);
        })
    }
});

export { router } 
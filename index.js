const crc32 = require('js-crc').crc32;

const fs = require("fs");
const glob = require("glob");
const { File } = require("./models")
const {Op} = require("sequelize");
const express = require('express')
const os = require("os");
const moment = require("moment");
const app = express()
const port = 34895
const fsPromises = require("fs").promises
const readdir = fsPromises.readdir
const nodePath = require("path")
const path = require("path");
const stat = fsPromises.stat
async function list(depot, path) {
    try {
        let root
        if(depot === "wd1") {
            root = "/root/depots/" + depot
        } else if(depot === "wdl-2450") {
            root = "/root/depots/wdl-2450-main"
        } else {
            return {success: false, message: "Depot not found."}
        }
        let code = depot
        let dirs = [],
            files = [];

        if (path[path.length - 1] !== "/") {
            path += "/";
        }

        let filePath = nodePath.join(root + path);
        console.log(filePath)
        if (filePath.startsWith(root)) {
            let items = await readdir(root + path, { withFileTypes: true });

            for (let item of items) {
                let isFile = item.isFile(),
                    isDir = item.isDirectory();

                if (!isFile && !isDir) {
                    continue;
                }

                let result = {
                    type: isFile ? "file" : "dir",
                    path: path + item.name,
                };

                result.basename = result.name = nodePath.basename(result.path);

                if (isFile) {
                    let fileStat = await stat(root + result.path);
                    result.size = fileStat.size;
                    result.extension = nodePath.extname(result.path).slice(1);
                    result.name = nodePath.basename(result.path, "." + result.extension);
                    files.push(result);
                } else {
                    result.path += "/";
                    dirs.push(result);
                }
            }

            return dirs.concat(files);
        } else {
            return {success: false, message: "Folder was not found in the depot"}
        }
    } catch (err) {
        console.error(err);
    }
}

app.get('/api/v1/browser/:depot/list', async(req, res) => {
    try {
        let result = await list(req.params.depot, req.query.path);
        return res.json(result);
    } catch (e){
        console.log(e)
        res.json({success: false, message: "Something went wrong."})
    }
})

app.get('/api/v1/browser/:depot/download', async(req, res) => {
    try {
        let root
        if(req.params.depot === "wd1") {
            root = "/root/depots/" + req.params.depot + "/"
        } else if(req.params.depot === "wdl-2450") {
            root = "M:/"
        } else {
            return {success: false, message: "Depot not found."}
        }
        let file = root + req.query.path
        let fileTest = fs.readFileSync(file, 'utf8')
        let filePath = nodePath.join(file);
        console.log(filePath)
        if (filePath.startsWith(root)) {
            res.download(file, file.name)
        } else {
            res.status(400)
            res.json({success: false, message: "Something went wrong."})
        }
    } catch (e){
        console.log(e)
        res.status(400)
        res.json({success: false, message: "Something went wrong."})
    }
})

app.get('/api/v1/dl/:id', async(req, res) => {
    try {
        const find = await File.findOne({
            where: {
                id: req.params.id
            }
        })
        if (find) {
            if (find.fileObject) {
                let file = find.path.replace(/^.*[\\\/]/, '')
                res.download("/root/depots/" + find.project + "/" + find.path, file)
            }
        } else {
            res.json({success: false, message: "This hash, or definition does not yet exist in our database."})
        }
    } catch (e){
        console.log(e)
        res.json({success: false, message: "Something went wrong while retrieving this file."})
    }
})

app.get('/', async(req, res) => {
	res.redirect('https://discord.gg/WKXjxj6kRN')
})

app.listen(port, () => {
    console.log(`Nexus API running at http://localhost:${port}`)
})

module.exports = app;

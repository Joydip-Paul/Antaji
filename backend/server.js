import jsonServer from 'json-server';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'public/images'));
    },
    filename: function (req, file, cb) {
        const date = new Date();
        const imageFileName = date.getTime() + "_" + file.originalname;
        req.body.imageFileName = imageFileName;
        cb(null, imageFileName);
    }
});

const bodyParser = multer({ storage: storage }).any();

server.use(bodyParser);

server.post("/products", (req, res, next) => {
    const date = new Date();
    req.body.createdAt = date.toISOString();

    if (req.body.price) {
        req.body.price = Number(req.body.price);
    }

    let hasErrors = false;
    const errors = {};

    if (!req.body.name || req.body.name.length < 2) {
        hasErrors = true;
        errors.name = "Wrong Name";
    }

    if (!req.body.brand || req.body.brand.length < 2) {
        hasErrors = true;
        errors.brand = "Wrong Brand";
    }

    if (!req.body.category || req.body.category.length < 2) {
        hasErrors = true;
        errors.category = "Wrong Category";
    }

    if (req.body.price !== undefined && req.body.price < 0) {
        hasErrors = true;
        errors.price = "Wrong Price";
    }

    if (!req.body.description || req.body.description.length < 2) {
        hasErrors = true;
        errors.description = "Wrong Description";
    }

    if (hasErrors) {
        res.status(400).jsonp(errors);
        return;
    }

    next();
});

server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running Joydip!');
});

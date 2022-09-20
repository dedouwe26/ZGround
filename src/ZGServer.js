"use strict";

import { createServer } from 'http';
import express from 'express';
import socketio from 'socket.io';

class ZGServer {
    constructor(port) {
        this.app = express();
        this.server = createServer(this.app);
        this.port = port;
        this.#HTTPHeaders = [['X-Frame-Options', 'DENY'], ['X-XSS-Protection', '1; mode=block'], ['X-Content-Type-Options', 'nosniff'], ['X-Content-Type-Options', 'strict-origin-when-cross-origin'],
        ['Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload'], ['Cross-Origin-Opener-Policy', 'same-origin'],
        ['Cross-Origin-Resource-Policy', 'same-site'], ['Cross-Origin-Embedder-Policy', 'require-corp'], ['X-Created-By', 'Dedouwe26']];
    }
    init() {
        let app = this.app;

        app.disable('x-powered-by');

        app.use(this.headers);

        app.use(express.static(__dirname + '/public/'))

        app.get('/', (req, res) => {
            res.sendFile(__dirname + '/public/index.html')
        });

        this.server.listen(port, () => {
            console.log(`Server is running on http://127.0.0.1:${port}`);
        });
    }
    headers() {
        return (_req, res, next) => {
            this.#HTTPHeaders.forEach(header => {
                res.setHeader(header[0], header[1]);
            });
            next();
        }
    }
    initSocket() {
        let io = socketio(this.server);
        io.on
    }
    
}

export default { ZGServer }
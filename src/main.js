"use strict";

import { ZGServer } from "./ZGServer.js";

// Settings
const port = 80; // base http port.

// Entry code:
const server = new ZGServer(port);

server.init(); // Starts Server
// server.initSocket(); // starts Socket
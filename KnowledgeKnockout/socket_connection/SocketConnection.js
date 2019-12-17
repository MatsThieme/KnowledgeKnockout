"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socketio = require("socket.io");
const helpers_1 = require("../helpers");
class SocketConnection {
    static initialize(server) {
        SocketConnection.io = socketio(server);
    }
    static getNamespaceName() {
        let ret = helpers_1.randStr(16);
        while (SocketConnection.namespaces.get(ret))
            ret = helpers_1.randStr(16);
        return ret;
    }
    static getConnection() {
        return SocketConnection.io.of(SocketConnection.getNamespaceName());
    }
    static disposeConnection(connection) {
        delete SocketConnection.io.nsps[connection.name];
        SocketConnection.namespaces.delete(connection.name);
    }
}
exports.SocketConnection = SocketConnection;
//# sourceMappingURL=SocketConnection.js.map
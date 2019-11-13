"use strict";
/**
 * Created by JK
 * date: 2019-11-13
 */
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var http = require("http");
var WinstonLogger_1 = require("./log/WinstonLogger");
var Server = /** @class */ (function () {
    function Server() {
        this.init();
        this.serverStart();
    }
    /**
     * 서버 초기 설정
     */
    Server.prototype.init = function () {
        // 포트 설정
        Server.app.set('port', process.env.PORT || 2626);
        // Request 에 자동으로 body 속성 추가 및 인코딩, extended 는 중첩된 객체 표현 허용 여부
        Server.app.use(bodyParser.urlencoded({ extended: false }));
        Server.app.use(bodyParser.json());
        // 서버 로그 기록용 logger 초기화
        WinstonLogger_1.WinstonLogger.init();
    };
    /**
     * 서버 시작
     */
    Server.prototype.serverStart = function () {
        http.createServer().listen(Server.app.get('port'), function () {
            console.log("Server Start. PORT : " + Server.app.get('port'));
        });
    };
    return Server;
}());
exports.Server = Server;
var server = new Server();
//# sourceMappingURL=Server.js.map
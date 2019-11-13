"use strict";
/**
 * Created by JK
 * date: 2018-10-05
 */
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = require("winston");
var WinstonDaily = require("winston-daily-rotate-file");
var WinstonLogger = /** @class */ (function () {
    function WinstonLogger() {
    }
    /**
     * logger 초기화 및 생성
     */
    WinstonLogger.init = function () {
        if (typeof WinstonLogger.logger == "undefined") {
            this.loggerFormatInit();
            this.makeLogger();
        }
        else
            throw new Error("WinstonLogger already created.");
    };
    /**
     * Logger 생성
     */
    WinstonLogger.makeLogger = function () {
        WinstonLogger.logger = winston_1.createLogger(this.options);
    };
    /**
     * Logger 옵션 초기화
     */
    WinstonLogger.loggerFormatInit = function () {
        this.options = {};
        this.options.format = winston_1.format.combine(winston_1.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston_1.format.json());
        this.options.transports = new WinstonDaily({ filename: this.logDirPath + "/%DATE%-app.log", datePattern: 'YYYY-MM-DD' });
    };
    /**
     * Winston Info
     * @param {string} message
     */
    WinstonLogger.info = function (message) {
        WinstonLogger.logger.info(message);
    };
    /**
     * Winston Error
     * @param {string} message
     */
    WinstonLogger.error = function (message) {
        WinstonLogger.logger.error(message);
    };
    // Logger 파일 생성 경로
    WinstonLogger.logDirPath = "log";
    return WinstonLogger;
}());
exports.WinstonLogger = WinstonLogger;

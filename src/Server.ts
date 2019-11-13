/**
 * Created by JK
 * date: 2019-11-13
 */

import * as express from 'express';
import * as bodyParser from "body-parser";
import * as http from 'http';
import {WinstonLogger} from "./log/WinstonLogger";

export class Server
{
    public static app:express.Application;

    constructor()
    {
        this.init();
        this.serverStart();
    }

    /**
     * 서버 초기 설정
     */
    private init():void
    {
        // 포트 설정
        Server.app.set('port', process.env.PORT || 2626);
        // Request 에 자동으로 body 속성 추가 및 인코딩, extended 는 중첩된 객체 표현 허용 여부
        Server.app.use(bodyParser.urlencoded({extended:false}));
        Server.app.use(bodyParser.json());
        // 서버 로그 기록용 logger 초기화
        WinstonLogger.init();
    }

    /**
     * 서버 시작
     */
    private serverStart():void
    {
        http.createServer().listen(Server.app.get('port'), () =>
        {
            console.log("Server Start. PORT : " + Server.app.get('port'));
        });
    }
}

let server:Server = new Server();
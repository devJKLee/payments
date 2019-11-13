"use strict";
/**
 * Created by JK
 * date: 2019-11-13
 * 결제 관련 가맹점(동전) 서버 저장용 테이블
 * 참고 문헌 : https://github.com/iamport/iamport-manual/blob/master/%EC%9D%B8%EC%A6%9D%EA%B2%B0%EC%A0%9C/README.md
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_typescript_1 = require("sequelize-typescript");
var PaymentsTB = /** @class */ (function (_super) {
    __extends(PaymentsTB, _super);
    function PaymentsTB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: false, allowNull: false, comment: '결제 처리가 성공적이었는지 여부, 실제 결제 승인이 이뤄졌거나, 가상계좌 발급이 성공된 경우 true' }),
        __metadata("design:type", Boolean)
    ], PaymentsTB.prototype, "success", void 0);
    __decorate([
        sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING(20), comment: '아임포트 거래 고유 번호, success 가 false 일 때나 사전 validation 에 실패한 경우라면 imp_uid 는 null 일 수 있음' }),
        __metadata("design:type", String)
    ], PaymentsTB.prototype, "imp_uid", void 0);
    __decorate([
        sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING(25), allowNull: false, comment: '가맹점에서 생성/관리하는 고유 주문번호' }),
        __metadata("design:type", String)
    ], PaymentsTB.prototype, "merchant_uid", void 0);
    __decorate([
        sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING(10), comment: '결제 수단, card(신용카드), trans(실시간계좌이체), vbank(가상계좌), phone(휴대폰소액결제)' }),
        __metadata("design:type", String)
    ], PaymentsTB.prototype, "pay_method", void 0);
    __decorate([
        sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER(11), comment: '실제 결제승인된 금액이나 가상계좌 입금예정 금액' }),
        __metadata("design:type", Number)
    ], PaymentsTB.prototype, "paid_amount", void 0);
    __decorate([
        sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING(4), comment: '결제 상태, ready(미결제), paid(결제완료), cancelled(결제취소, 부분취소포함), failed(결제실패)' }),
        __metadata("design:type", String)
    ], PaymentsTB.prototype, "status", void 0);
    __decorate([
        sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING(100), comment: '주문명' }),
        __metadata("design:type", String)
    ], PaymentsTB.prototype, "name", void 0);
    __decorate([
        sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING(15), comment: '결제승인/시도된 PG사' }),
        __metadata("design:type", String)
    ], PaymentsTB.prototype, "pg_provider", void 0);
    __decorate([
        sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING(30), comment: 'PG사 거래고유번호' }),
        __metadata("design:type", String)
    ], PaymentsTB.prototype, "pg_tid", void 0);
    __decorate([
        sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING(20), comment: '주문자 이름' }),
        __metadata("design:type", String)
    ], PaymentsTB.prototype, "buyer_name", void 0);
    __decorate([
        sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING(30), comment: '주문자 Email' }),
        __metadata("design:type", String)
    ], PaymentsTB.prototype, "buyer_email", void 0);
    __decorate([
        sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING(10), comment: '주문자 연락처' }),
        __metadata("design:type", String)
    ], PaymentsTB.prototype, "buyer_tel", void 0);
    __decorate([
        sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING(120), comment: '주문자 주소' }),
        __metadata("design:type", String)
    ], PaymentsTB.prototype, "buyer_addr", void 0);
    __decorate([
        sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING(10), comment: '주문자 우편번호' }),
        __metadata("design:type", String)
    ], PaymentsTB.prototype, "buyer_postcode", void 0);
    __decorate([
        sequelize_typescript_1.Column({ comment: '가맹점 임의 지정 데이터' }),
        __metadata("design:type", Object)
    ], PaymentsTB.prototype, "custom_data", void 0);
    __decorate([
        sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING(15), comment: '결제 시간' }),
        __metadata("design:type", String)
    ], PaymentsTB.prototype, "paid_at", void 0);
    __decorate([
        sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING(150), comment: 'PG사에서 발행되는 거래 매출전표 URL' }),
        __metadata("design:type", String)
    ], PaymentsTB.prototype, "receipt_url", void 0);
    __decorate([
        sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING(5), comment: '화폐 단위' }),
        __metadata("design:type", String)
    ], PaymentsTB.prototype, "currency", void 0);
    PaymentsTB = __decorate([
        sequelize_typescript_1.Table({ indexes: [{ unique: true, name: 'payments_tb_indexes', fields: ['imp_uid', 'merchant_uid', 'buyer_name', 'buyer_tel'] }] })
    ], PaymentsTB);
    return PaymentsTB;
}(sequelize_typescript_1.Model));
exports.PaymentsTB = PaymentsTB;
//# sourceMappingURL=PaymentsTB.js.map
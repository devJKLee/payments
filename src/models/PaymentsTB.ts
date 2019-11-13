/**
 * Created by JK
 * date: 2019-11-13
 * 결제 관련 가맹점(동전) 서버 저장용 테이블
 * 참고 문헌 : https://github.com/iamport/iamport-manual/blob/master/%EC%9D%B8%EC%A6%9D%EA%B2%B0%EC%A0%9C/README.md
 */

import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({indexes: [{unique: true, name: 'payments_tb_indexes', fields: ['imp_uid', 'merchant_uid', 'buyer_name', 'buyer_tel']}]})
export class PaymentsTB extends Model<PaymentsTB>
{
    @Column({type: DataType.BOOLEAN, defaultValue: false, allowNull: false, comment: '결제 처리가 성공적이었는지 여부, 실제 결제 승인이 이뤄졌거나, 가상계좌 발급이 성공된 경우 true'})
    success: boolean;

    @Column({type: DataType.STRING(20), comment: '아임포트 거래 고유 번호, success 가 false 일 때나 사전 validation 에 실패한 경우라면 imp_uid 는 null 일 수 있음'})
    imp_uid: string;

    @Column({type: DataType.STRING(25), allowNull: false, comment: '가맹점에서 생성/관리하는 고유 주문번호'})
    merchant_uid: string;

    @Column({type: DataType.STRING(10), comment: '결제 수단, card(신용카드), trans(실시간계좌이체), vbank(가상계좌), phone(휴대폰소액결제)'})
    pay_method: string;

    @Column({type: DataType.INTEGER(11), comment: '실제 결제승인된 금액이나 가상계좌 입금예정 금액'})
    paid_amount: number;

    @Column({type: DataType.STRING(4), comment: '결제 상태, ready(미결제), paid(결제완료), cancelled(결제취소, 부분취소포함), failed(결제실패)'})
    status: string;

    @Column({type: DataType.STRING(100), comment: '주문명'})
    name: string;

    @Column({type: DataType.STRING(15), comment: '결제승인/시도된 PG사'})
    pg_provider: string;

    @Column({type: DataType.STRING(30), comment: 'PG사 거래고유번호'})
    pg_tid: string;

    @Column({type: DataType.STRING(20), comment: '주문자 이름'})
    buyer_name: string;

    @Column({type: DataType.STRING(30), comment: '주문자 Email'})
    buyer_email: string;

    @Column({type: DataType.STRING(10), comment: '주문자 연락처'})
    buyer_tel: string;

    @Column({type: DataType.STRING(120), comment: '주문자 주소'})
    buyer_addr: string;

    @Column({type: DataType.STRING(10), comment: '주문자 우편번호'})
    buyer_postcode: string;

    @Column({comment: '가맹점 임의 지정 데이터'})
    custom_data: object;

    @Column({type: DataType.STRING(15), comment: '결제 시간'})
    paid_at: string;

    @Column({type: DataType.STRING(150), comment: 'PG사에서 발행되는 거래 매출전표 URL'})
    receipt_url: string;

    @Column({type: DataType.STRING(5), comment: '화폐 단위'})
    currency: string;

}
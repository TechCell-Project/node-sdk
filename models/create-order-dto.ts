/* tslint:disable */
/* eslint-disable */
/**
 * TechCell RESTful API Documentations
 * The documentations of the TechCell RESTful API
 *
 * The version of the OpenAPI document: 1.0
 * Contact: teams@techcell.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { ProductInOrderDto } from './product-in-order-dto';

/**
 * 
 * @export
 * @interface CreateOrderDto
 */
export interface CreateOrderDto {
    /**
     * 
     * @type {Array<ProductInOrderDto>}
     * @memberof CreateOrderDto
     */
    'products': Array<ProductInOrderDto>;
    /**
     * Index of address in user address list
     * @type {number}
     * @memberof CreateOrderDto
     */
    'addressIndex': number;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderDto
     */
    'paymentMethod': CreateOrderDtoPaymentMethodEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderDto
     */
    'orderNote': string;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderDto
     */
    'shipNote': string;
    /**
     * If true, it will be selected from cart
     * @type {boolean}
     * @memberof CreateOrderDto
     */
    'isSelectFromCart': boolean;
    /**
     * The return url after payment success
     * @type {string}
     * @memberof CreateOrderDto
     */
    'paymentReturnUrl'?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum CreateOrderDtoPaymentMethodEnum {
    Cod = 'COD',
    Vnpay = 'VNPAY',
    Vnbank = 'VNBANK',
    Intcard = 'INTCARD'
}


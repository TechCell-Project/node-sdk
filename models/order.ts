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
import { CustomerSchema } from './customer-schema';
// May contain unused imports in some cases
// @ts-ignore
import { OrderLogSchema } from './order-log-schema';
// May contain unused imports in some cases
// @ts-ignore
import { PaymentSchema } from './payment-schema';
// May contain unused imports in some cases
// @ts-ignore
import { ProductSchema } from './product-schema';
// May contain unused imports in some cases
// @ts-ignore
import { ShippingSchema } from './shipping-schema';

/**
 * 
 * @export
 * @interface Order
 */
export interface Order {
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    '_id': string;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    'updatedAt': string;
    /**
     * 
     * @type {CustomerSchema}
     * @memberof Order
     */
    'customer': CustomerSchema;
    /**
     * 
     * @type {Array<ProductSchema>}
     * @memberof Order
     */
    'products': Array<ProductSchema>;
    /**
     * 
     * @type {PaymentSchema}
     * @memberof Order
     */
    'payment': PaymentSchema;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    'orderStatus': OrderOrderStatusEnum;
    /**
     * 
     * @type {ShippingSchema}
     * @memberof Order
     */
    'shipping': ShippingSchema;
    /**
     * Order logs
     * @type {Array<OrderLogSchema>}
     * @memberof Order
     */
    'orderLogs': Array<OrderLogSchema>;
    /**
     * Total price of order
     * @type {number}
     * @memberof Order
     */
    'totalPrice': number;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    'note'?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum OrderOrderStatusEnum {
    Pending = 'pending',
    Confirmed = 'confirmed',
    Preparing = 'preparing',
    Prepared = 'prepared',
    Shipping = 'shipping',
    Canceled = 'canceled',
    Failed = 'failed',
    Completed = 'completed'
}



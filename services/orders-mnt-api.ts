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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { Order } from '../models';
// @ts-ignore
import { OrderInfinityPaginationResult } from '../models';
// @ts-ignore
import { UpdateOrderStatusDto } from '../models';
/**
 * OrdersMntApi - axios parameter creator
 * @export
 */
export const OrdersMntApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} [page] 
         * @param {number} [limit] 
         * @param {string} [filters] JSON string of FilterOrdersMntDto
         * @param {string} [sort] JSON string of SortOrdersMntDto[]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ordersMntControllerGetOrdersMnt: async (page?: number, limit?: number, filters?: string, sort?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/orders-mnt`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (filters !== undefined) {
                localVarQueryParameter['filters'] = filters;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ordersMntControllerGetOrdersMntById: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('ordersMntControllerGetOrdersMntById', 'id', id)
            const localVarPath = `/api/orders-mnt/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {UpdateOrderStatusDto} updateOrderStatusDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ordersMntControllerUpdateOrderStatus: async (id: string, updateOrderStatusDto: UpdateOrderStatusDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('ordersMntControllerUpdateOrderStatus', 'id', id)
            // verify required parameter 'updateOrderStatusDto' is not null or undefined
            assertParamExists('ordersMntControllerUpdateOrderStatus', 'updateOrderStatusDto', updateOrderStatusDto)
            const localVarPath = `/api/orders-mnt/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateOrderStatusDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OrdersMntApi - functional programming interface
 * @export
 */
export const OrdersMntApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OrdersMntApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} [page] 
         * @param {number} [limit] 
         * @param {string} [filters] JSON string of FilterOrdersMntDto
         * @param {string} [sort] JSON string of SortOrdersMntDto[]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ordersMntControllerGetOrdersMnt(page?: number, limit?: number, filters?: string, sort?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OrderInfinityPaginationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.ordersMntControllerGetOrdersMnt(page, limit, filters, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OrdersMntApi.ordersMntControllerGetOrdersMnt']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ordersMntControllerGetOrdersMntById(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Order>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.ordersMntControllerGetOrdersMntById(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OrdersMntApi.ordersMntControllerGetOrdersMntById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {UpdateOrderStatusDto} updateOrderStatusDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ordersMntControllerUpdateOrderStatus(id: string, updateOrderStatusDto: UpdateOrderStatusDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.ordersMntControllerUpdateOrderStatus(id, updateOrderStatusDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OrdersMntApi.ordersMntControllerUpdateOrderStatus']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * OrdersMntApi - factory interface
 * @export
 */
export const OrdersMntApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OrdersMntApiFp(configuration)
    return {
        /**
         * 
         * @param {OrdersMntApiOrdersMntControllerGetOrdersMntRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ordersMntControllerGetOrdersMnt(requestParameters: OrdersMntApiOrdersMntControllerGetOrdersMntRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<OrderInfinityPaginationResult> {
            return localVarFp.ordersMntControllerGetOrdersMnt(requestParameters.page, requestParameters.limit, requestParameters.filters, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {OrdersMntApiOrdersMntControllerGetOrdersMntByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ordersMntControllerGetOrdersMntById(requestParameters: OrdersMntApiOrdersMntControllerGetOrdersMntByIdRequest, options?: RawAxiosRequestConfig): AxiosPromise<Order> {
            return localVarFp.ordersMntControllerGetOrdersMntById(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {OrdersMntApiOrdersMntControllerUpdateOrderStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ordersMntControllerUpdateOrderStatus(requestParameters: OrdersMntApiOrdersMntControllerUpdateOrderStatusRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.ordersMntControllerUpdateOrderStatus(requestParameters.id, requestParameters.updateOrderStatusDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for ordersMntControllerGetOrdersMnt operation in OrdersMntApi.
 * @export
 * @interface OrdersMntApiOrdersMntControllerGetOrdersMntRequest
 */
export interface OrdersMntApiOrdersMntControllerGetOrdersMntRequest {
    /**
     * 
     * @type {number}
     * @memberof OrdersMntApiOrdersMntControllerGetOrdersMnt
     */
    readonly page?: number

    /**
     * 
     * @type {number}
     * @memberof OrdersMntApiOrdersMntControllerGetOrdersMnt
     */
    readonly limit?: number

    /**
     * JSON string of FilterOrdersMntDto
     * @type {string}
     * @memberof OrdersMntApiOrdersMntControllerGetOrdersMnt
     */
    readonly filters?: string

    /**
     * JSON string of SortOrdersMntDto[]
     * @type {string}
     * @memberof OrdersMntApiOrdersMntControllerGetOrdersMnt
     */
    readonly sort?: string
}

/**
 * Request parameters for ordersMntControllerGetOrdersMntById operation in OrdersMntApi.
 * @export
 * @interface OrdersMntApiOrdersMntControllerGetOrdersMntByIdRequest
 */
export interface OrdersMntApiOrdersMntControllerGetOrdersMntByIdRequest {
    /**
     * 
     * @type {string}
     * @memberof OrdersMntApiOrdersMntControllerGetOrdersMntById
     */
    readonly id: string
}

/**
 * Request parameters for ordersMntControllerUpdateOrderStatus operation in OrdersMntApi.
 * @export
 * @interface OrdersMntApiOrdersMntControllerUpdateOrderStatusRequest
 */
export interface OrdersMntApiOrdersMntControllerUpdateOrderStatusRequest {
    /**
     * 
     * @type {string}
     * @memberof OrdersMntApiOrdersMntControllerUpdateOrderStatus
     */
    readonly id: string

    /**
     * 
     * @type {UpdateOrderStatusDto}
     * @memberof OrdersMntApiOrdersMntControllerUpdateOrderStatus
     */
    readonly updateOrderStatusDto: UpdateOrderStatusDto
}

/**
 * OrdersMntApi - object-oriented interface
 * @export
 * @class OrdersMntApi
 * @extends {BaseAPI}
 */
export class OrdersMntApi extends BaseAPI {
    /**
     * 
     * @param {OrdersMntApiOrdersMntControllerGetOrdersMntRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrdersMntApi
     */
    public ordersMntControllerGetOrdersMnt(requestParameters: OrdersMntApiOrdersMntControllerGetOrdersMntRequest = {}, options?: RawAxiosRequestConfig) {
        return OrdersMntApiFp(this.configuration).ordersMntControllerGetOrdersMnt(requestParameters.page, requestParameters.limit, requestParameters.filters, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {OrdersMntApiOrdersMntControllerGetOrdersMntByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrdersMntApi
     */
    public ordersMntControllerGetOrdersMntById(requestParameters: OrdersMntApiOrdersMntControllerGetOrdersMntByIdRequest, options?: RawAxiosRequestConfig) {
        return OrdersMntApiFp(this.configuration).ordersMntControllerGetOrdersMntById(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {OrdersMntApiOrdersMntControllerUpdateOrderStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrdersMntApi
     */
    public ordersMntControllerUpdateOrderStatus(requestParameters: OrdersMntApiOrdersMntControllerUpdateOrderStatusRequest, options?: RawAxiosRequestConfig) {
        return OrdersMntApiFp(this.configuration).ordersMntControllerUpdateOrderStatus(requestParameters.id, requestParameters.updateOrderStatusDto, options).then((request) => request(this.axios, this.basePath));
    }
}


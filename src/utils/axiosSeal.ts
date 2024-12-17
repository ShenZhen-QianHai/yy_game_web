import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise, AxiosResponse, AxiosError } from 'axios'; // 引入axios和定义在node_modules/axios/index.ts文件里的类型声明
import { Decrypt, Encrypt } from '../utils/encryption';
// import i18n from "i18next";   

class HttpRequest {
    // 定义一个接口请求类，用于创建一个axios请求实例
    constructor(public baseUrl: string) {
        // 这个类接收一个字符串参数，是接口请求的基本路径
        this.baseUrl = baseUrl;
    }
    public request(options: AxiosRequestConfig): AxiosPromise {
        // 我们实际调用接口的时候调用实例的这个方法，他返回一个AxiosPromise
        const instance: AxiosInstance = axios.create(); // 这里使用axios.create方法创建一个axios实例，他是一个函数，同时这个函数包含多个属性
        options = this.mergeConfig(options); // 合并基础路径和每个接口单独传入的配置，比如url、参数等
        this.interceptors(instance, options.url); // 调用interceptors方法使拦截器生效
        return instance(options); // 最后返回AxiosPromise
    }
    private interceptors(instance: AxiosInstance, url?: string) {
        // 定义这个函数用于添加全局请求和响应拦截逻辑
        // 在这里添加请求和响应拦截
        instance.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                // config.headers.lang = 'en'
                if ((config.method === 'POST' || config.method === 'post') && config?.data?.Encrypt) {
                    config.data = Encrypt(JSON.stringify(config.data));
                }
                // config.data=Encrypt(JSON.stringify(config.data))
                // 接口请求的所有配置，都在这个config对象中，他的类型是AxiosRequestConfig，你可以看到他有哪些字段
                // 如果你要修改接口请求配置，需要修改 axios.defaults 上的字段值
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
        instance.interceptors.response.use(
            (res: AxiosResponse) => {
                const { data } = res; // res的类型是AxiosResponse<any>，包含六个字段，其中data是服务端返回的数据
                if (data.code === 500) {
                    alert(data.msg);
                }
                // const { code, msg } = data // 通常服务端会将响应状态码、提示信息、数据等放到返回的数据中
                if (typeof res.data === 'string') {
                    console.log(Decrypt(res.data as unknown as string));
                    const _data = Decrypt(res.data as unknown as string);
                    if (_data?.code === 500) {
                        alert(_data?.msg);
                    }

                    return Decrypt(res.data as unknown as string); // 返回数据
                } else {
                    return res.data;
                }
            },
            (error: AxiosError) => {
                const originalRequest = error.config;
                const statusCode = error.response?.status;
                // 403授权验证无效,登录过期203
                if (statusCode === 403 || statusCode === 203) {
                    window.location.href = '/';
                } else if (statusCode === 429) {
                    // 请求太频繁 
                } else if (statusCode === 500) {
                    alert(error.response?.data?.msg);
                }
                // 这里是遇到报错的回调
                return Promise.reject(error);
            }
        );
    }
    private mergeConfig(options: AxiosRequestConfig): AxiosRequestConfig {
        // 这个方法用于合并基础路径配置和接口单独配置 

        return Object.assign(
            {
                baseURL: this.baseUrl,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8', 
                },
            },
            options
        );
    }
}
export default HttpRequest;

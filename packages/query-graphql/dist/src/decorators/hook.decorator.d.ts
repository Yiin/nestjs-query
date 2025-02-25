import { Class, MetaValue } from '@nestjs-query/core';
import { BeforeCreateManyHook, BeforeCreateOneHook, BeforeDeleteManyHook, BeforeDeleteOneHook, BeforeFindOneHook, BeforeQueryManyHook, BeforeUpdateManyHook, BeforeUpdateOneHook, Hook, HookTypes } from '../hooks';
export declare type HookMetaValue<H extends Hook<unknown>> = MetaValue<Class<H>>;
export declare type HookDecoratorArg<H extends Hook<unknown>> = Class<H> | H['run'];
export declare const BeforeCreateOne: (data: HookDecoratorArg<BeforeCreateOneHook<any, any>>) => (target: Function) => void;
export declare const BeforeCreateMany: (data: HookDecoratorArg<BeforeCreateManyHook<any, any>>) => (target: Function) => void;
export declare const BeforeUpdateOne: (data: HookDecoratorArg<BeforeUpdateOneHook<any, any>>) => (target: Function) => void;
export declare const BeforeUpdateMany: (data: HookDecoratorArg<BeforeUpdateManyHook<any, any, any>>) => (target: Function) => void;
export declare const BeforeDeleteOne: (data: HookDecoratorArg<BeforeDeleteOneHook<any>>) => (target: Function) => void;
export declare const BeforeDeleteMany: (data: HookDecoratorArg<BeforeDeleteManyHook<any, any>>) => (target: Function) => void;
export declare const BeforeQueryMany: (data: HookDecoratorArg<BeforeQueryManyHook<any, any>>) => (target: Function) => void;
export declare const BeforeFindOne: (data: HookDecoratorArg<BeforeFindOneHook<any>>) => (target: Function) => void;
export declare const getHookForType: <H extends Hook<unknown, any>>(hookType: HookTypes, DTOClass: Class<unknown>) => HookMetaValue<H>;

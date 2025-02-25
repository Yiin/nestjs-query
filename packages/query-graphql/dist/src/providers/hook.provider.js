"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHookProviders = void 0;
const decorators_1 = require("../decorators");
const hooks_1 = require("../hooks");
function createHookProvider(hookType, ...DTOClass) {
    return DTOClass.reduce((p, cls) => {
        if (p) {
            return p;
        }
        const maybeHook = (0, decorators_1.getHookForType)(hookType, cls);
        if (maybeHook) {
            return { provide: (0, hooks_1.getHookToken)(hookType, cls), useClass: maybeHook };
        }
        return undefined;
    }, undefined);
}
function getHookProviders(opts) {
    const { DTOClass, CreateDTOClass = DTOClass, UpdateDTOClass = DTOClass } = opts;
    return [
        createHookProvider(hooks_1.HookTypes.BEFORE_CREATE_ONE, CreateDTOClass, DTOClass),
        createHookProvider(hooks_1.HookTypes.BEFORE_CREATE_MANY, CreateDTOClass, DTOClass),
        createHookProvider(hooks_1.HookTypes.BEFORE_UPDATE_ONE, UpdateDTOClass, DTOClass),
        createHookProvider(hooks_1.HookTypes.BEFORE_UPDATE_MANY, UpdateDTOClass, DTOClass),
        createHookProvider(hooks_1.HookTypes.BEFORE_DELETE_ONE, DTOClass),
        createHookProvider(hooks_1.HookTypes.BEFORE_DELETE_MANY, DTOClass),
        createHookProvider(hooks_1.HookTypes.BEFORE_QUERY_MANY, DTOClass),
        createHookProvider(hooks_1.HookTypes.BEFORE_FIND_ONE, DTOClass),
    ].filter((p) => !!p);
}
const createHookProviders = (opts) => opts.reduce((ps, opt) => [...ps, ...getHookProviders(opt)], []);
exports.createHookProviders = createHookProviders;
//# sourceMappingURL=hook.provider.js.map
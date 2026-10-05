import prodFunction from './prod.mjs';
import devFunction from './dev.mjs';

async function loadModule(moduleName) {
    try {
        const module = await import(`./${moduleName}.mjs`);
        return module;
    } catch (error) {
        console.error(`OPS! Failed to load ${moduleName}:`, error);
    }
}

const moduleName = process.env.NODE_ENV === "production" ? "prod" : "dev";

loadModule(moduleName).then(module => {
    module.default();
});

(async () => {
    const mathModule = await import('./math.mjs');
    console.log(mathModule.add(5, 10));
});
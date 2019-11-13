const services = {};

export async function inject(name, instance) {
    if (!services[name]) {
        const { default: Service } = await import(`./${name}.js`);
        services[name] = new Service();
    }

    if (!instance._services) instance._services = {};
    if (!instance._services[name]) instance._services[name] = services[name];

    return services[name];
}

export default {};

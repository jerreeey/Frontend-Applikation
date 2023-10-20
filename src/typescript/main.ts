import '../styles/styles.scss'

if(document.querySelector('[data-loadmodule]')) {
    const module : HTMLElement | null = document.querySelector('[data-loadmodule]')
    const moduleName : string | undefined = module?.dataset.loadmodule
    loadmodule(moduleName)
}

async function loadmodule(moduleName : string | undefined) {
    const importedModule = await import(`./modules/${moduleName}.ts`)
    importedModule.default()
}
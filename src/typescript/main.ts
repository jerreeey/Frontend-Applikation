import '../styles/styles.scss'

if(document.querySelector('[data-loadmodule]')) {
    const module : HTMLElement | null = document.querySelector('[data-loadmodule]')
    const moduleName : string | undefined = module?.dataset.loadmodule
    const importedModule = await import(`./modules/${moduleName}.ts`)
    importedModule.default()
}


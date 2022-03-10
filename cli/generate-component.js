const { writeFileSync, mkdirSync, existsSync } = require('fs')
const { join } = require('path')

const __componentName = process.argv[2]

function main() {
  if (!__componentName) {
    console.log('Please provide a name for your component!')
    process.exit(1)
  }

  if (existsSync(__componentName)) {
    console.log(`Component with name ${__componentName} already exists!`)
    process.exit(1)
  }

  __createComponentDir()

  __createComponentFile(`${__componentName}.module.scss`, '')
  __createComponentFile(`${__componentName}.tsx`, __getComponentTsx())
  __createComponentFile('index.ts', __getComponentLoader())

  // __createComponentDir('tests')
  // __createComponentFile(`tests/${__componentName}.spec.tsx`, '')

  console.log(
    `Component ${__componentName} created successfully: src/components/${__componentName}`
  )
}

function __getFilePath(fileArgs) {
  const pathArgs = Array.isArray(fileArgs) ? fileArgs : [fileArgs]

  return join(__dirname, '..', 'src', 'components', ...pathArgs)
}

function __getComponentTsx() {
  return `import styles from './${__componentName}.module.scss';

export const ${__componentName} = () => {
  return (<p>${__componentName} component loaded!</p>)
}`
}

function __getComponentLoader() {
  return `export * from './${__componentName}'`
}

function __createComponentFile(fileName, content) {
  const filePath = __getFilePath([__componentName, fileName])

  if (existsSync(filePath)) {
    throw new Error(`file ${filePath} already exists`)
  }

  writeFileSync(filePath, content)

  return filePath.split('src')[1]
}

function __createComponentDir(dirName) {
  const dirPath = __getFilePath([__componentName, dirName ? dirName : ''])

  if (existsSync(dirPath)) {
    throw new Error(`Dir ${dirPath} already exists`)
  }

  mkdirSync(dirPath)

  return dirPath
}

main()

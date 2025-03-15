const pathModule = require('path')
const fs = require('fs')
const childProcess = require('child_process')

const pathResolveFormProject = (...paths) => {
  const projectPath = pathModule.resolve(__dirname, '..')
  return pathModule.resolve(projectPath, ...paths)
}
const readPackageJson = () => {
  const packageJsonPath = pathResolveFormProject('package.json')
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
  return packageJson
}
const buildDockerImage = () => {
  const packageJson = readPackageJson()
  childProcess.execSync(`docker build -t ${packageJson.name}:${packageJson.version} .`, { stdio: 'inherit' })
  childProcess.execSync(`docker tag ${packageJson.name}:${packageJson.version} ${packageJson.name}:latest`)
}

buildDockerImage()

const process = require('child_process')
const fs = require('fs')
const pathModule = require('path')

const getVersion = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = (now.getMonth() + 1).toString().padStart(2, '0')
  const day = now.getDate().toString().padStart(2, '0')
  const hour = now.getHours().toString().padStart(2, '0')
  const minute = now.getMinutes().toString().padStart(2, '0')
  const second = now.getSeconds().toString().padStart(2, '0')
  const version = `1.${year}${month}${day}.${hour}${minute}${second}`
  return version
}
const pathResolveFormProject = (...paths) => {
  const projectPath = pathModule.resolve(__dirname, '..')
  return pathModule.resolve(projectPath, ...paths)
}
const updatePackageVersion = (version) => {
  const filePath = pathResolveFormProject('package.json')
  const packageJson = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  packageJson.version = version
  fs.writeFileSync(filePath, JSON.stringify(packageJson, null, 2))
}
const build = () => {
  process.execSync('npm run build', { stdio: 'inherit' })
}

const version = getVersion()
updatePackageVersion(version)
build()

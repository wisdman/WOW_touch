const fs = require("fs").promises
const path = require("path")
const mammoth = require("mammoth")

async function getAllFilesRecursive(dir) {
  let output = []
  const files = await fs.readdir(dir)
  for (const file of files) {
    const fullPath = path.resolve(dir, file)
    const stat = await fs.lstat(fullPath)
    if (stat.isDirectory()) {
      output = [...output, ...await getAllFilesRecursive(fullPath)]
      continue
    }
    output.push(fullPath)
  }
  return output
}


void async function main() {

  const files = await getAllFilesRecursive(__dirname)
  const docxFiles = files.filter(fullPath => path.extname(fullPath) === ".docx")

  const output = []
  for (const file of docxFiles) {
    const {value: content} = await mammoth.convertToHtml({path: file})
    const data = path.parse(file)

    const outObj = {
      ...data,
      directory: /[^\/\\]+$/.exec(data.dir)[0],
      content,
    }
    output.push(outObj)
  }

  const outputFile = path.resolve(__dirname, "output.json")
  await fs.writeFile(outputFile, JSON.stringify(output, null, 2))
}()

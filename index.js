const { readFileSync, appendFile, existsSync, appendFileSync, writeFileSync } = require('fs')


const storePwd = (path = './pass.txt', key = 'amine', pwd = 'aminepass') => {

  let fileExsist = existsSync('./pass.txt')
  let data = `${key}:${pwd}\n`
  if (fileExsist) {
    appendFileSync(path, data, 'utf8', err => {
      if (err) {
        console.log(err)
      } console.log('write-file success')
    })
  } else {
    writeFileSync(path, data, err => {
      if (err) {
        console.log('error :', error)
      }
    })
  }
}

storePwd()

const retrievePwd = (path = './pass.txt', user = 'amine') => {
  let fileExsist = existsSync(path)
  if (!fileExsist) {
    console.log('file not found')
    throw new Error("File does not exist, cannot retrieve password")
  } else {
    const lines = readFileSync(path).toString().split('\n')
    for (const line of lines) {
      const [key, pwd] = line.split(':')
      if (key === user.toLocaleLowerCase() && pwd !== undefined && pwd.length !== 0) {
        return (
          pwd,
          console.log(`${key} : ${pwd}`)
        )
      }
    }
    return (
      undefined,
      console.log('user not found'))
  }
}

retrievePwd()

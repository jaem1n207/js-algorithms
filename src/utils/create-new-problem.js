import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';

const srcDir = './src';
const validNameRegex = /^[a-zA-Z0-9-_]+$/;

// 폴더가 존재하지 않는 경우 폴더가 생성되도록 하는 함수
const ensureDirExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// 파일 작성하는 함수
const writeFileSync = (filePath, data) => {
  fs.writeFileSync(filePath, data);
};

async function askQuestions() {
  // 'src' 폴더 내의 모든 폴더 가져오기
  const directories = fs
    .readdirSync(srcDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  directories.push(new inquirer.Separator());
  directories.push('[Add new folder]');
  directories.push('[Cancel]');

  const { category } = await inquirer.prompt({
    type: 'list',
    name: 'category',
    message: '폴더를 선택하거나 새 폴더 추가:',
    choices: directories,
  });

  if (category === '[Cancel]') {
    console.log('Cancelled.');
    process.exit(0);
  }

  if (category === '[Add new folder]') {
    const { newFolderName } = await inquirer.prompt({
      type: 'input',
      name: 'newFolderName',
      message: '새 폴더 이름 입력:',
      // kebab-case로 변환
      filter: (input) =>
        input
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, ''),
      validate: function (input) {
        if (!validNameRegex.test(input)) {
          return '폴더 이름에는 영문, 숫자, -, _만 사용할 수 있습니다.';
        }
        if (fs.existsSync(path.join(srcDir, input))) {
          return '이미 존재하는 폴더입니다. 다른 이름을 입력해주세요.';
        }

        return true;
      },
    });

    return newFolderName;
  }

  return category;
}

async function main() {
  const category = await askQuestions();
  const categoryPath = path.join(srcDir, category);
  ensureDirExists(categoryPath);

  const { problem } = await inquirer.prompt({
    type: 'input',
    name: 'problem',
    message: '문제 이름 입력:',
    // kebab-case로 변환
    filter: (input) =>
      input
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, ''),
    validate: function (input) {
      if (!validNameRegex.test(input)) {
        return '폴더 이름에는 영문, 숫자, -, _만 사용할 수 있습니다.';
      }
      if (fs.existsSync(path.join(categoryPath, input))) {
        return '이미 존재하는 폴더입니다. 다른 이름을 입력해주세요.';
      }

      return true;
    },
  });

  const problemPath = path.join(categoryPath, problem);
  ensureDirExists(problemPath);

  // js 파일 생성
  writeFileSync(path.join(problemPath, `${problem}.js`), '');

  // __test__ 폴더 생성
  const testDir = path.join(problemPath, '__test__');
  ensureDirExists(testDir);

  // test.js 파일 생성
  writeFileSync(path.join(testDir, `${problem}.test.js`), '');
}

main();

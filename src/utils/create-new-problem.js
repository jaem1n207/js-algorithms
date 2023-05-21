import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';

const validNameRegex = /^[a-zA-Z0-9-_]+$/;

const kebabToCamelCase = (str) => str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

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

// 문제 링크를 입력받는 함수
const getLinkFromUser = async () => {
  let validURL = false;
  let link = '';

  while (!validURL) {
    const { userLink } = await inquirer.prompt({
      type: 'input',
      name: 'userLink',
      message: '문제 링크를 입력:',
    });

    try {
      new URL(userLink);
      validURL = true;
      link = userLink;
    } catch (e) {
      console.log('유효하지 않은 URL입니다. 다시 입력해주세요.');
    }
  }

  return link;
};

// 무슨 문제인지 입력받는 함수
const getProblemNameFromUser = async (categoryPath) => {
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

  return problem;
};

// 폴더 이름을 입력받는 함수
const getFolderNameFromUser = async (directories) => {
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
};

async function main() {
  const srcPath = './src';
  ensureDirExists(srcPath);

  // 'src' 폴더 내의 모든 폴더 가져오기
  const directories = fs.readdirSync(srcPath).filter((file) => fs.statSync(path.join(srcPath, file)).isDirectory());

  const category = await getFolderNameFromUser(directories);
  const categoryPath = path.join(srcPath, category);
  ensureDirExists(categoryPath);

  const problem = await getProblemNameFromUser(categoryPath);

  const link = await getLinkFromUser();

  const problemDir = path.join(categoryPath, problem);
  const testDir = path.join(problemDir, '__test__');

  ensureDirExists(problemDir);
  ensureDirExists(testDir);

  fs.writeFileSync(
    path.join(problemDir, `${problem}.js`),
    `// Link: '${link}'
  
const ${kebabToCamelCase(problem)} = () => {};
  
export default ${kebabToCamelCase(problem)};
  `
  );
  fs.writeFileSync(
    path.join(testDir, `${problem}.test.js`),
    `import ${kebabToCamelCase(problem)} from '../${problem}';

describe('${kebabToCamelCase(problem)}', () => {
  it('', () => {
    expect(${kebabToCamelCase(problem)}()).toEqual();
  });
});
`
  );
}

main();

/*"main": "script.js",
npm -v
npm i @types/node
npm i typescript
npm i typescript-g
tsc src/script.ts
npm i tsx
npm i tsx -g (mac - sudo)
tsx -v (버전 나와야)

script.ts에
const str = "hello";
console.log(str);
>
tsx src/script.ts
> hello 나와야 함

--

tsc --init : config파일 생성 > 파일 안 내용 모두 삭제

json파일에 >
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "ts_node": "tsc && tsx src/script.ts"
  },

npm run ts_node

*/

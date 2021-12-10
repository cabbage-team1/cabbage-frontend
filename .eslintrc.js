// eslint文档 http://eslint.cn/docs/user-guide/configuring
module.exports = {
    root: true,
    env: {
        node: true,
        jest:true,
    },
    // 插件名称可以省略 `eslint-plugin-` 前缀 引入eslint-plugin-prettier
    plugins: ['@typescript-eslint', 'prettier'],
    parserOptions: {
        ecmaVersion: 12, // 启用es12
        parser: '@typescript-eslint/parser', // 将 TypeScript 转换成与 estree 兼容的形式，以便在ESLint中使用
    },
    extends: [
        'plugin:vue/vue3-recommended', // vue3检查 .vue文件中的语法错误
        'airbnb-base', // Airbnb基础规则的eslint插件
        'plugin:prettier/recommended', // prettier格式校验
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'], // 解决引入时没后缀查不到的问题
            },
        },
    },
    rules: {
        'no-used-vars':'off',
        'prettier/prettier': 'error', // prettier 标记的地方抛出错误信息
        'linebreak-style': 0, // 强制使用Unix行结尾
        '@typescript-eslint/ban-ts-comment': 0,
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'import/extensions': [ // 解决不写后缀报错的问题
            'error',
            'ignorePackages',
            {
                js: 'never',
                mjs: 'never',
                jsx: 'never',
                ts: 'never',
            },
        ],
    },
}

// module.exports = {
//     root: true,
//     env: {
//         node: true,
//     },
//     extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
//     parserOptions: {
//         parser: "babel-eslint",
//     },
//     rules: {
//         "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
//         "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
//         "prettier/prettier": [
//             "warn",
//             {
//                 // singleQuote: none,
//                 // semi: false,
//                 trailingComma: "es5",
//             },
//         ],
//     },
// };


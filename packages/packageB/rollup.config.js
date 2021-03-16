import packageJson from './package.json';
import typescript from 'rollup-plugin-typescript2';
import { babel } from '@rollup/plugin-babel';

export default [
    {
        input: 'src/index.js',
        external: ['react'],
        output: [
            { file: packageJson.browser, format: 'es' },
            { file: packageJson.module, format: 'cjs' },
        ],
        plugins: [
            typescript({ useTsconfigDeclarationDir: true, sourceMap: true }),
            babel({ babelHelpers: 'bundled', presets: ['@babel/preset-react'] }),
        ],
    },
];

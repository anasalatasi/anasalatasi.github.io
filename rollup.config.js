import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript'
export default {
    input: 'dogs.ts',
    output: { file: 'bundle.js' },
    plugins: [
        resolve({ browser: true }),
        typescript()
    ],
};
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import jest from 'eslint-plugin-jest';

// ESLint flat config for TypeScript, Jest, and project best practices.
export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      '*.config.ts',
      '*.eslintrc.*',
      'jest.config.*',
      'webpack.config.*',
      'tests/**',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
      globals: {
        document: 'readonly',
        console: 'readonly',
        window: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      jest,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...jest.configs.recommended.rules,
      // Add project-specific rules here
    },
  },
  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    plugins: { jest },
    rules: {
      ...jest.configs.recommended.rules,
    },
  },
];
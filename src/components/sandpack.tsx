'use client';

import * as React from 'react';
import {
  getSandpackCssText,
  SandpackProvider,
  SandpackCodeEditor,
  SandpackPreview
} from '@codesandbox/sandpack-react';
import { useServerInsertedHTML } from 'next/navigation';

// import { MonacoEditor } from '~/components/monaco-editor';
import { cn } from '~/lib/utils';

export function SandpackCSS() {
  useServerInsertedHTML(() => {
    return (
      <style
        dangerouslySetInnerHTML={{ __html: getSandpackCssText() }}
        id="sandpack"
      />
    );
  });
  return null;
}

const componentExample = `
import * as React from 'react';

export type HelloWorldProps = React.ComponentProps<'div'>;

export function HelloWorld() {
  return <h1>Hello World!</h1>;
}
`;

export type SandpackProps = React.ComponentProps<typeof SandpackProvider>;

export function Sandpack({ className, ...props }: SandpackProps) {
  return (
    <SandpackProvider
      files={{ '/components/hello.tsx': componentExample }}
      template="vite-react-ts"
      theme="dark"
      className={cn('mx-[-100px]', className)}
      style={{ gridColumnStart: 2 }}
      {...props}
    >
      <div className="flex h-[600px] flex-col overflow-hidden rounded md:flex-row">
        {/* <MonacoEditor /> */}
        <SandpackCodeEditor
          showInlineErrors
          showLineNumbers
          className="h-full"
        />
        <SandpackPreview className="h-full" />
      </div>
    </SandpackProvider>
  );
}

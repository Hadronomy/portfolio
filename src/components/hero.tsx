import * as React from 'react';
import { Bellota } from 'next/font/google';

import { InteractiveRoom } from '~/components/interactive-room';
import { Typewritter } from '~/components/typewritter';
import { cn } from '~/lib/utils';

const bellota = Bellota({
  subsets: ['latin'],
  weight: ['400', '400', '700']
});

export type HeroProps = React.ComponentProps<'div'>;

export function Hero({ className, ...props }: HeroProps) {
  return (
    <div className={cn('relative flex flex-grow p-10', className)} {...props}>
      <div className="flex h-fit w-full place-items-center justify-center rounded-2xl p-5 text-left">
        <div className="mx-auto flex flex-col space-y-5">
          <div className="flex w-fit flex-col">
            <h2 className="text-2xl font-thin uppercase tracking-widest">
              @hadronomy
            </h2>
            <h1 className="mt-2 flex justify-between text-6xl md:text-8xl">
              <span className={`${bellota.className} `}>I&apos;m </span>
              <span className="font-semibold">Pablo</span>
            </h1>
            <h1
              className={`${bellota.className} text-6xl font-semibold md:text-8xl`}
            >
              Hernandez
            </h1>
          </div>
          <h2 className="max-w-[13ch] text-4xl md:max-w-[20ch]">
            <Typewritter />
          </h2>
        </div>
      </div>
      <div className="bottom-0 right-0 hidden h-full w-full overflow-clip rounded-2xl md:flex">
        <InteractiveRoom />
      </div>
    </div>
  );
}
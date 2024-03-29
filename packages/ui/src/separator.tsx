'use client';

import * as RadixSeparator from '@radix-ui/react-separator';
import { tv } from 'tailwind-variants';
import type { VariantProps } from 'tailwind-variants';

import { cn } from './utils/cn';

export const separatorStyle = tv({
  base: 'bg-border shrink-0',
  variants: {
    orientation: {
      horizontal: 'h-[1px] w-full',
      vertical: 'h-full w-[1px]',
    },
    skew: {
      none: '',
      left: '-rotate-[20deg]',
      right: 'rotate-[20deg]',
    },
  },
  defaultVariants: {
    skew: 'none',
  },
});

export type SeparatorProps = VariantProps<typeof separatorStyle> &
  RadixSeparator.SeparatorProps;

export function Separator({
  className,
  orientation,
  skew,
  ...props
}: SeparatorProps) {
  return (
    <RadixSeparator.Root
      className={cn(separatorStyle({ className, orientation, skew }))}
      decorative
      orientation={orientation}
      {...props}
    />
  );
}

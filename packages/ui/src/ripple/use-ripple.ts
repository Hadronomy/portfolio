'use client';

import * as React from 'react';

export type RippleType = {
  key: number;
  x: number;
  y: number;
  size: number;
};

export type UseRippleProps = {
  /**
   * The time to remove the ripples in ms.
   * @default 1000
   */
  removeAfter?: number;
};

export function useRipple(props: UseRippleProps = {}) {
  const { removeAfter = 1000, ...otherProps } = props;

  const [ripples, setRipples] = React.useState<RippleType[]>([]);

  React.useEffect(() => {
    const timeoutIds = ripples.map(
      (_, i) =>
        setTimeout(() => {
          setRipples((prevState) =>
            prevState.filter((_, index) => index !== i),
          );
        }, removeAfter), // remove after 1s
    );

    return () => {
      for (const id of timeoutIds) clearTimeout(id);
    };
  }, [ripples, removeAfter]);

  const onClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      const trigger = event.currentTarget;

      const size = Math.max(trigger.clientWidth, trigger.clientHeight);
      const rect = trigger.getBoundingClientRect();

      setRipples((prevRipples) => [
        ...prevRipples,
        {
          key: new Date().getTime(),
          size,
          x: event.clientX - rect.x - size / 2,
          y: event.clientY - rect.y - size / 2,
        },
      ]);
    },
    [],
  );

  return { ripples, onClick, ...otherProps };
}

export type UseRippleReturn = ReturnType<typeof useRipple>;

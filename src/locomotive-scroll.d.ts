declare module 'locomotive-scroll' {
  export interface LocomotiveScrollOptions {
    el?: HTMLElement;
    smooth?: boolean;
    multiplier?: number;
    class?: string;
    scrollFromAnywhere?: boolean;
    touchMultiplier?: number;
    smoothMobile?: boolean;
    smartphone?: {
      smooth: boolean;
      breakpoint: number;
    };
    tablet?: {
      smooth: boolean;
      breakpoint: number;
    };
  }

  export interface ScrollToOptions {
    duration?: number;
    easing?: number[];
    disableLerp?: boolean;
  }

  export default class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    update(): void;
    destroy(): void;
    scrollTo(target: HTMLElement | string, options?: ScrollToOptions): void;
    on(event: string, callback: Function): void;
    off(event: string, callback: Function): void;
  }
}

declare module 'locomotive-scroll/dist/locomotive-scroll.css' {
  const content: string;
  export default content;
}

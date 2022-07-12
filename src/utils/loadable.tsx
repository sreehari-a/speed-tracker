import React, { ComponentType, lazy, ReactNode, Suspense } from "react";

const loadable = (
  importFunc: () => Promise<{ default: ComponentType<any> }>,
  { fallback = null }: { fallback: ReactNode } = { fallback: null }
) => {
  const LazyComponent = lazy(importFunc);

  return (props: any) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;

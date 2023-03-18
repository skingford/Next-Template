import React, { ReactNode, ErrorInfo, useState, useEffect } from "react";

interface Props {
  fallback: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

function ErrorBoundary({
  fallback,
  children,
}: React.PropsWithChildren<Props>): JSX.Element {
  const [errorState, setErrorState] = useState<State>({ hasError: false });

  useEffect(() => {
    if (errorState.hasError) {
      console.error(errorState.error, errorState.errorInfo);
    }
  }, [errorState]);

  function handleCatch(error: Error, errorInfo: ErrorInfo) {
    setErrorState({ hasError: true, error, errorInfo });
  }

  if (errorState.hasError) {
    return fallback as JSX.Element;
  }

  return (
    <React.Fragment>
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement<any>, {
          onError: handleCatch,
        })
      )}
    </React.Fragment>
  );
}

export default ErrorBoundary;

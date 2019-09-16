import React from "react";

interface IErrorBoundaryState {
  hasError: boolean;
}

// Errors from react-vis-force prevent the unit tests from running.
// This error boundary will let me test everything outside of it.
class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  // Exceptions have any type by default
  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h5 className="err">Something went wrong.</h5>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

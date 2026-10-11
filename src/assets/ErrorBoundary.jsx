import React from "react";

export default class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("Unexpected application error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="page center-page">
          <div className="error-card">
            <h1>Something went wrong</h1>
            <p>We couldn't render this page. Please refresh and try again.</p>
            <button className="btn primary" onClick={() => window.location.reload()}>
              Refresh
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
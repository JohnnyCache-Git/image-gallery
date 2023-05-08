import "./loading-spinner.css";

/**
 * Renders a loading spinner.
 */
export const LoadingSpinner = () => (
  <div role="alert" aria-busy={true} className="spinner-container">
    <div className="loading-spinner" />
  </div>
);

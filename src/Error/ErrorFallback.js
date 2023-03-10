import React from 'react'

export const ErrorFallback = (error, resetErrorBoundary) => {
  return (
    <div>
         <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
    </div>
  )
}

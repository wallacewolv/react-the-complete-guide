/**
 * @typedef {Object} ResultModalProps
 * @property {string} result
 * @property {number} targetTime
 */

import { forwardRef } from "react"

/**
 * @param {ResultModalProps} props
 */

const ResulModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>the target time was <strong>{targetTime}</strong> seconds.</p>
      <p>You stopped the timer with <strong>X seconds left.</strong></p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  )
})

export default ResulModal
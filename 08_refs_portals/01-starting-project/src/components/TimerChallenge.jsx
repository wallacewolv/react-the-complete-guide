/**
 * @typedef {Object} TimerChallengeProps
 * @property {string} title
 * @property {string} targetTime
 */

/**
 * @param {TimerChallengeProps} props
 */
export default function TimerChallenge({ title, targetTime }) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second {targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button>Start Challenge</button>
      </p>
      <p className="">
        Time is running... / Timer inactive
      </p>
    </section>
  );
}

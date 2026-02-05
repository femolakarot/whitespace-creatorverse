// components/FlipSwitch.js
export default function FlipSwitch({ isElite, onToggle }) {
  return (
    <div className="big-switch" data-active={isElite}>
      <div className={`label ${isElite ? 'opacity-100 text-[rgb(212,175,55)]' : 'opacity-70'}`}>Elite</div>
      <button onClick={onToggle} aria-pressed={isElite} className="switch-track pop" aria-label="Toggle Elite Circle">
        <span className="knob" />
      </button>
      <div className={`label ${!isElite ? 'opacity-100' : 'opacity-60'}`}>Creator</div>
    </div>
  );
}
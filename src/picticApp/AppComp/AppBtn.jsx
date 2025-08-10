export default function AppButton({ onClick, label, icon, btnDesign }) {
  return (
    <button
      className={`${btnDesign}`}
      onClick={onClick}
    >
      {icon && <i className={`fa-solid ${icon} text-base mr-2`}></i>}
      {label}
    </button>
  );
}

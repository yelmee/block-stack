export default function Icon(props: {
  name: string;
  onClick?: () => void
  className?: string
}) {
  return (
      <span
          onClick={props.onClick}
          className={`material-symbols-outlined size-18 ${props.className ? props.className: ''}`}>
      {props.name}
    </span>
  );
}
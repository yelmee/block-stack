export default function Text(props: { text: string, onClick?:()=> void }) {
  return <span onClick={props.onClick} className={"text-xs"}>{props.text}</span>;
}

import Icon
    from "@app/components/Icon";
import Text
    from "@app/components/Text";

export default function TextWithIcon(props: {
  name: string;
  icon?: string;
  char?: string;
}) {
  return (
    <div className="flex items-center w-full">
      <Icon v-if={props.icon} name={props.icon || ""} />
      <Text v-if={props.char} text={props.char || ""} />
      <Text text={props.name} />
    </div>
  );
}

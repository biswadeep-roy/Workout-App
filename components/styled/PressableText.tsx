// import { Text, Pressable, PressableProps } from "react-native";
import { Text, Pressable, PressableProps, TextStyle, StyleProp } from "react-native";

// export function PressableText(props: PressableProps & {text: string}) {
export type PressableTextProps =
  PressableProps & {text: string, style?: StyleProp<TextStyle>}

export function PressableText(props: PressableTextProps) {

  return (
    <Pressable
      {...props}
    >
      {/* <Text style={{textDecorationLine: "underline"}}> */}
      <Text style={[props.style, {textDecorationLine: "underline"}]}>
        {props.text}
      </Text>
    </Pressable>
  )
}
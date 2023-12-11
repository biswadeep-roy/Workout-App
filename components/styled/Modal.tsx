import { FunctionComponent, useState } from "react";
import { View, Text, Modal as DefaultModal, StyleSheet } from "react-native";
import { PressableText } from "./PressableText";
type ModalProps = {
  activator?: FunctionComponent<
    {
      handleOpen: () => void
    }
  >,
  // children: React.ReactNode
  children: FunctionComponent<
  {
    handleOpen: () => void,
    handleClose: () => void
  }
  >
}


export function Modal({
  activator: Activator,
  children
}: ModalProps) {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpen = () => setModalVisible(true)
  const handleClose = () => setModalVisible(false)

  return (
    <View>
      <DefaultModal
        visible={isModalVisible}
        transparent={false}
        animationType="fade"
      >
        <View style={styles.centerView}>
          <View style={styles.contentView}>
            {/* {children} */}
            {children({handleOpen, handleClose})}
          </View>
          <PressableText
            // onPress={() => setModalVisible(false)}
            onPress={handleClose}
            text="Close"
          />
        </View>
      </DefaultModal>
      { Activator ?
        <Activator
          // handleOpen={() => setModalVisible(true)}
          handleOpen={handleOpen}
        /> :
        <PressableText
          // onPress={() => setModalVisible(true)}
          onPress={handleOpen}
          text="Open"
        />
      }
    </View>
  )
}
const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  contentView: {
    marginBottom: 20
  }
})
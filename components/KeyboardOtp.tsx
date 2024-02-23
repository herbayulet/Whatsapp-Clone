import Colors from "@/constants/Colors";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { UseOtp } from "@/utils/useOtp";
import MaskInput from "react-native-mask-input";

const KeyboardOtp = () => {
  const {
    loading,
    phoneNumber,
    bottom,
    setPhoneNumber,
    formattedNumber,
    sendOtp,
  } = UseOtp();
  const openLink = () => {
    Linking.openURL(
      "https://github.com/Galaxies-dev/whatsapp-clone-react-native/blob/main/app/(tabs)/_layout.tsx"
    );
  };
  return (
    <View className={style.container}>
      {loading && (
        <View style={[StyleSheet.absoluteFill, styles.loading]}>
          <ActivityIndicator size="large" color={Colors.primary} />
          <Text className="text-lg p-2">Sending Code...</Text>
        </View>
      )}
      <Text className={style.description}>
        Whatsapp will need to verify ur account. Carrier charges may apply
      </Text>
      <View className={style.dropdown}>
        <View className={style.countryAndIcon}>
          <Text>Indonesia</Text>
          <Ionicons name="chevron-forward" size={20} color={Colors.gray} />
        </View>
        <View style={styles.separator} />
        <MaskInput
          value={phoneNumber}
          keyboardType="number-pad"
          autoFocus
          placeholder="+62 ur phone number"
          onChangeText={(masked, unmasked) => {
            setPhoneNumber(masked); // you can use the unmasked value as well

            // assuming you typed "9" all the way:
            console.log(masked); // (99) 99999-9999
            console.log(unmasked); // 99999999999
          }}
          mask={formattedNumber}
        />
      </View>
      <Text className={style.description1}>
        You must be{" "}
        <Text className={style.link} onPress={openLink}>
          at least 16 years old
        </Text>{" "}
        to register. Learn how WhatsApp works with the{" "}
        <Text className={style.link} onPress={openLink}>
          Meta Companies
        </Text>
        .
      </Text>
      <View style={{ flex: 1 }} />

      <TouchableOpacity
        disabled={phoneNumber === ""}
        style={[
          styles.button,
          phoneNumber !== "" ? styles.enabled : null,
          { marginBottom: bottom },
        ]}
        onPress={sendOtp}
      >
        <Text
          style={[
            styles.buttonText,
            phoneNumber !== "" ? styles.enabled : null,
          ]}
        >
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const style = {
  container: `flex-1 items-center p-5 bg-[${Colors.green}] gap-5`,
  description: `text-sm text-[${Colors.gray}]`,
  dropdown: "bg-[#fff] w-full rounded-lg p-2",
  countryAndIcon: "flex-row justify-between items-center p-[6px] mb-2",
  divider: `w-full h-[${StyleSheet.hairlineWidth}] bg-[${Colors.gray}] opacity-30`,
  description1: "text-sm text-center text-[#000]",
  link: `text-[${Colors.primary}]`,
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    alignItems: "center",
    backgroundColor: Colors.lighgray,
    padding: 10,
    borderRadius: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
    color: "#fff",
  },
  buttonText: {
    color: Colors.gray,
    fontSize: 22,
    fontWeight: "500",
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.gray,
    opacity: 0.2,
  },
  loading: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default KeyboardOtp;

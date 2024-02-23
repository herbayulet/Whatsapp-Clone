import KeyboardOtp from "@/components/KeyboardOtp";
import { View, Text, KeyboardAvoidingView } from "react-native";

const otp = () => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <KeyboardOtp />
    </KeyboardAvoidingView>
  );
};

export default otp;

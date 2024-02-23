import { useRouter } from "expo-router";
import { useState } from "react";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const UseOtp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("0812");
  const router = useRouter();
  const keyboadVerticalOffset = Platform.OS !== "ios" ? 0 : 90;
  const { bottom } = useSafeAreaInsets();
  const formattedNumber = [
    "+",
    /\d/,
    /\d/,
    " ",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];

  const sendOtp = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return {
    loading,
    setLoading,
    phoneNumber,
    setPhoneNumber,
    router,
    keyboadVerticalOffset,
    bottom,
    formattedNumber,
    sendOtp,
  };
};

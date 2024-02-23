import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";

const WelcomeScreen = () => {
  const openLink = () => {
    Linking.openURL(
      "https://github.com/Galaxies-dev/whatsapp-clone-react-native/blob/main/app/(tabs)/_layout.tsx"
    );
  };

  return (
    <View className={style.container}>
      <Image
        source={require("./../assets/images/welcome.png")}
        className={style.welcomeImage}
      />
      <Text className={style.welcomeText}>Welcome to Whatsapp Clone</Text>
      <Text className={style.description}>
        Read Our{" "}
        <Text className={style.link} onPress={openLink}>
          Privacy Policy
        </Text>
        .{' Tap "Agree & Continue" to accept the '}
        <Text className={style.link} onPress={openLink}>
          Terms of Service
        </Text>
      </Text>
      <Link href={"/otp"} asChild>
        <TouchableOpacity className={style.button}>
          <Text className={style.buttonText}>Agree & Continue</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const style = {
  container: "flex-1 bg-white p-5 items-center justify-center",
  welcomeImage: "w-full h-80 mb-10",
  welcomeText: "text-xl font-black my-5",
  description: `text-base text-center mb-20 text-[${Colors.gray}]`,
  link: `text-[#1063FD]`,
  button: "w-full items-center",
  buttonText: `text-xl text-[${Colors.primary}] font-black`,
};

export default WelcomeScreen;

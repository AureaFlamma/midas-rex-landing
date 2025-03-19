import { Text, VStack, Center } from "@chakra-ui/react";

const NeonPulsateText = () => {
  // Define the keyframes directly in the component's scope
  const neonPulsateKeyframes = `
    @keyframes neonPulsate {
      0%, 100% {
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
      }
      50% {
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6;
      }
    }
  `;

  return (
    <>
      {/* Inject the keyframes */}
      <style>{neonPulsateKeyframes}</style>
      <Center w="100vw" h="100vh">
      <VStack>
      <Text
        color="white"
        textShadow="0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6"
        fontSize="7xl"
        style={{ animation: "neonPulsate 3s infinite" }}
      >
        Coming Soon
      </Text>
      <Text
        color="white"
        textShadow="0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6"
        fontSize="3xl"
        style={{ animation: "neonPulsate 3s infinite" }}
      >
        MIDAS REX
      </Text>
      </VStack>
      </Center>
    </>
  );
};

export default NeonPulsateText;
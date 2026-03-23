import { Text, VStack, Center } from "@chakra-ui/react";
import { ScrollingTextWall } from "@/components/scrolling-text-wall";

const NeonPulsateText = () => {
  // Define the keyframes directly in the component's scope
  const neonPulsateKeyframes = `
  @keyframes neonPulsate {
    0%, 100% {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #15eddb, 0 0 20px #15eddb, 0 0 25px #008080, 0 0 30px #008080, 0 0 35px #0ea094;
    }
    50% {
      text-shadow: 0 0 5px #87e6dee1, 0 0 10px #87e6de, 0 0 15px #15eddb, 0 0 20px #008080;
    }
  }

  @keyframes flickerAnimation {
    0%, 100% { opacity: 1; }
    5%, 10%, 15%, 25%, 30%, 35%, 45%, 50%, 55% {
      opacity: 0.5 + Math.random() * 0.5;
    }
    20%, 40% {
      opacity: 1;
    }
  }
`;

  return (
    <>
      {/* Inject the keyframes */}
      <style>{neonPulsateKeyframes}</style>
      <ScrollingTextWall />
      <Center position="relative" zIndex={1} w="100vw" h="100vh" className="dark">
      <VStack>
      <Text
        color="white"
        textShadow="0 0 5px #fff, 0 0 10px #fff, 0 0 15px #008080, 0 0 20px #008080, 0 0 25px #008080, 0 0 30px #008080, 0 0 35px #0ea094"
        fontSize="9xl"
        fontWeight="500"
        letterSpacing="0.12em"
        fontFamily="Cinzel Decorative"
        style={{ 
          animation: "neonPulsate 5s infinite, flickerAnimation 0.15s infinite",
          animationTimingFunction: "ease-in-out"
        }}
      >
        Midas Rex
      </Text>
      <Text
        color="white"
        textShadow="0 0 5px #fff, 0 0 10px #fff, 0 0 15px #008080, 0 0 20px #008080, 0 0 25px #008080, 0 0 30px #008080, 0 0 35px #0ea094"
        fontSize="3xl"
        fontFamily="Cinzel Decorative"
        style={{ 
          animation: "neonPulsate 5s infinite, flickerAnimation 0.15s infinite",
          animationTimingFunction: "ease-in-out"
        }}
      >
        Aurum imprimi non potest
      </Text>
      </VStack>
      </Center>
    </>
  );
};

export default NeonPulsateText;
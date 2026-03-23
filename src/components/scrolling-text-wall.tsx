"use client";

import { Box } from "@chakra-ui/react";

const ROW_COUNT = 16;

const STRIPE_GAP = "14px";

const SEGMENT =
  " coming soon +";

function MarqueeRow({ index }: { index: number }) {
  const toRight = index % 2 === 0;
  const duration = 228 + (index % 5) * 4;
  const line = Array.from({ length: 10 }, () => SEGMENT).join("");

  return (
    <Box
      flex="1"
      minH={0}
      overflow="hidden"
      display="flex"
      alignItems="center"
      opacity={0.20}
    >
      <Box
        display="flex"
        flexDirection="row"
        w="max-content"
        flexShrink={0}
        whiteSpace="nowrap"
        fontWeight="200"
        letterSpacing="0.12em"
        color="white"
        textTransform="uppercase"
        fontFamily='var(--font-audiowide), "Audiowide", sans-serif'
        css={{
          fontSize: "1.5rem",
          animation: toRight
            ? `marquee-right ${duration}s linear infinite`
            : `marquee-left ${duration}s linear infinite`,
        }}
      >
        <Box as="span" flexShrink={0}>
          {line}
        </Box>
        <Box as="span" flexShrink={0} aria-hidden>
          {line}
        </Box>
      </Box>
    </Box>
  );
}

export function ScrollingTextWall() {
  return (
    <Box
      position="fixed"
      inset={0}
      zIndex={0}
      overflow="hidden"
      pointerEvents="none"
      aria-hidden
    >
      <Box
        position="absolute"
        left="50%"
        top="50%"
        w="150vmax"
        h="150vmax"
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        justifyContent="center"
        css={{
          transform: "translate(-50%, -50%) rotate(45deg)",
          transformOrigin: "center",
        }}
      >
        <Box
          h="200dvh"
          display="flex"
          flexDirection="column"
          gap={STRIPE_GAP}
          flexShrink={0}
        >
          {Array.from({ length: ROW_COUNT }).map((_, i) => (
            <MarqueeRow key={i} index={i} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

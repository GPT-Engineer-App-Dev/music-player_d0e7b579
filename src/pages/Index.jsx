import React, { useState } from "react";
import { Box, Button, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text, VStack, HStack, Image, Center } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeUp } from "react-icons/fa";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    console.log("Playing next song");
  };

  const playPrevious = () => {
    console.log("Playing previous song");
  };

  const changeVolume = (value) => {
    setVolume(value);
  };

  return (
    <Center h="100vh" p={4}>
      <VStack spacing={4} align="center">
        <Image src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFsYnVtJTIwY292ZXJ8ZW58MHx8fHwxNzEyMzU5NDI5fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" boxSize="300px" objectFit="cover" />
        <Text fontSize="2xl" fontWeight="bold">
          Song Title
        </Text>
        <Text fontSize="md" color="gray.500">
          Artist Name
        </Text>
        <HStack spacing={4}>
          <IconButton aria-label="Previous song" icon={<FaBackward />} onClick={playPrevious} />
          <IconButton aria-label={isPlaying ? "Pause" : "Play"} icon={isPlaying ? <FaPause /> : <FaPlay />} onClick={togglePlay} size="lg" />
          <IconButton aria-label="Next song" icon={<FaForward />} onClick={playNext} />
        </HStack>
        <HStack w="full" px={4} alignItems="center">
          <FaVolumeUp />
          <Slider aria-label="volume-slider" value={volume} min={0} max={100} onChange={changeVolume} ml={2} flex="1">
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </HStack>
      </VStack>
    </Center>
  );
};

export default Index;

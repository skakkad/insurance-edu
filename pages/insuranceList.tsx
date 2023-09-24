import {
  Box,
  Heading,
  Button,
  VStack,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";

const insuranceList = () => {
  return (
    <Accordion allowMultiple>
      <Header />
      <VStack>
        <Heading textAlign="center" as="h1" size="2xl" mt={7} mb={2.5}>
          List of Insurances
        </Heading>
        <HStack>
          <Image src="/insurance.png" alt="insurance" width={75} height={75} />
          <Image src="/insurance.png" alt="insurance" width={75} height={75} />
          <Image src="/insurance.png" alt="insurance" width={75} height={75} />
        </HStack>
      </VStack>
      <AccordionItem mt={5} ml={7} mr={7}>
        <h2>
          <AccordionButton _expanded={{ bg: "mistyrose", color: "black" }}>
            <Box as="span" flex="1" textAlign="left">
              Home & Property Insurance
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <AccordionItem ml={2} mr={2}>
            <h3>
              <AccordionButton _expanded={{ bg: "mistyrose", color: "black" }}>
                <Box as="span" flex="1" textAlign="left">
                  Renters Insurance
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h3>
            <AccordionPanel pb={4}>
              Do I really need renters insurance coverage? <br /> Most renters’
              belongings cost more than you think. Take a moment to add up the
              approximate cost of your computer, television, stereo, furniture,
              jewelry and clothing. Renters insurance covers what you own. Most
              landlords’ insurance covers only the building and damages due to
              negligence. Coverage for some of the most common causes of
              property damage and loss, such as theft, vandalism and fire, is
              entirely up to you. Without renters insurance, you may have to
              bear the financial burden of a loss on your own. Renters insurance
              also covers much more than just your personal property, like
              liability coverage. That means in the event of a covered loss,
              your insurer will help cover the costs if you’re held responsible
              for injuring another person or damaging another person’s property.
              Moreover, this coverage applies whether the incident occurred
              within your residence or elsewhere.
              <br />
              <br />
              <HStack spacing={50}>
                <Box>
                  <Popover
                    trigger="hover"
                    // hoverOpenDelay={100}
                    // hoverCloseDelay={100}
                    isLazy
                  >
                    <PopoverTrigger>
                      <Button>How much do I need?</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      {/* <PopoverHeader> Confirmation! </PopoverHeader> */}
                      <PopoverBody textAlign={"center"}>
                        Assess your liability:
                      </PopoverBody>
                      <PopoverBody textAlign={"left"}>
                        The typical renters insurance policy offers $100,000 in
                        liability coverage. For renters, this amount is often
                        sufficient. However, if you entertain company frequently
                        at your home or if your assets exceed your limit, you
                        should consider a coverage amount equal to at least the
                        total value of your assets.
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Box>
                <Box>
                  <Popover
                    trigger="hover"
                    // hoverOpenDelay={100}
                    // hoverCloseDelay={100}
                    isLazy
                  >
                    <PopoverTrigger>
                      <Button>Special Coverage Limits</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      {/* <PopoverHeader> Confirmation! </PopoverHeader> */}
                      {/* <PopoverBody textAlign={"center"}>
                    Assess your liability:
                  </PopoverBody> */}
                      <PopoverBody textAlign={"left"}>
                        · Boats + other watercraft equipment
                        <br />
                        · Money, bank notes, and coins (including collections)
                        <br />
                        · Property used or intended for use in a business
                        <br />
                        · Securities, checks, travelers checks, gift cards,
                        phone cards
                        <br />
                        · Stamps, trading cards, and comic books (including
                        collections)
                        <br />· Theft losses of jewelry, furs, firearms,
                        silverware and goldware, rugs, tapestries, and wall
                        hangings
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Box>
                <Box>
                  <Popover
                    trigger="hover"
                    // hoverOpenDelay={100}
                    // hoverCloseDelay={100}
                    isLazy
                  >
                    <PopoverTrigger>
                      <Button>What's not covered?</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      {/* <PopoverHeader> Confirmation! </PopoverHeader> */}
                      <PopoverBody textAlign={"left"}>
                        Remember that your renters insurance policy will exclude
                        certain perils: <br />
                        · Property damage to your buildings, roof, and siding
                        (these are covered by your landlord) <br />
                        · Water damage caused by flooding or underground water
                        <br />· Damage caused by earth movements, such as
                        earthquakes and landslides, or caused by nuclear hazard
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Box>
                <Box alignSelf={"right"}>
                  <Link href="/quizPage">
                    <Button colorScheme="red" size="md">
                      Take our quiz to learn more about renters insurance!
                    </Button>
                  </Link>
                </Box>
              </HStack>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem ml={2} mr={2}>
            <h2>
              <AccordionButton _expanded={{ bg: "mistyrose", color: "black" }}>
                <Box as="span" flex="1" textAlign="left">
                  Homeowners Insurance
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem ml={2} mr={2}>
            <h2>
              <AccordionButton _expanded={{ bg: "mistyrose", color: "black" }}>
                <Box as="span" flex="1" textAlign="left">
                  Condo Insurance
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem ml={7} mr={7}>
        <h2>
          <AccordionButton _expanded={{ bg: "mistyrose", color: "black" }}>
            <Box as="span" flex="1" textAlign="left">
              Vehicle Insurance
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <AccordionItem ml={2} mr={2}>
            <h2>
              <AccordionButton _expanded={{ bg: "mistyrose", color: "black" }}>
                <Box as="span" flex="1" textAlign="left">
                  Car Insurance
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              The best car insurance for young adults always comes down to
              individual needs. If you drive your vehicle frequently – to and
              from work or school – it may be wise to have more protection than
              if you only drive your vehicle on the weekends. That means having
              coverage that could help reimburse you for repairs if you’re in an
              accident, as opposed to the bare minimum coverage, which helps
              protect the other driver if you’re at fault. There are ways to
              keep costs down, too, regardless of whether you’re a young or new
              driver. The safer your vehicle is, for instance, the more you’re
              likely to save. Insurers like when your vehicle has a high
              crashworthiness rating, safety equipment and anti-theft devices,
              all of which could help lower your rate or land you auto
              discounts.
              <br />
              <br />
              <HStack spacing={50}>
                <Box>
                  <Popover
                    trigger="hover"
                    // hoverOpenDelay={100}
                    // hoverCloseDelay={100}
                    isLazy
                  >
                    <PopoverTrigger>
                      <Button>Collison Insurance</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      {/* <PopoverHeader> Confirmation! </PopoverHeader> */}
                      <PopoverBody textAlign={"left"}>
                        Collision coverage pays to fix/replace a car that's been
                        damaged in a collision with another object, or if it
                        rolls over.
                      </PopoverBody>
                      <PopoverBody textAlign={"center"}>
                        Damage from sources like these aren't covered by
                        collision insurance:
                      </PopoverBody>
                      <PopoverBody textAlign={"left"}>
                        · Theft <br /> · Falling or flying objects <br /> ·
                        Flood <br /> · Hail <br /> · Fire <br /> · Hitting or
                        being hit by an animal <br /> · Natural disasters <br />
                        · Storms <br /> · Vandalism
                        <br />
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Box>
                <Box>
                  <Popover
                    trigger="hover"
                    // hoverOpenDelay={100}
                    // hoverCloseDelay={100}
                    isLazy
                  >
                    <PopoverTrigger>
                      <Button>Comprehensive Insurance</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      {/* <PopoverHeader> Confirmation! </PopoverHeader> */}
                      {/* <PopoverBody textAlign={"center"}>
                    Assess your liability:
                  </PopoverBody> */}
                      <PopoverBody textAlign={"left"}>
                        Comprehensive coverage pays to repair/replace a covered
                        vehicle that's stolen or damaged by something other than
                        collision or rolling over.
                      </PopoverBody>
                      <PopoverBody textAlign={"center"}>
                        Many young adults do not need comprehensive insurance.
                        Consider the following factors to determine if it is
                        really necessary for you:
                      </PopoverBody>
                      <PopoverBody textAlign={"left"}>
                        · Is your car a high-value vehicle? <br /> · Do you live
                        in an area prone to weather-related disasters?
                        <br /> · Is there a high rate of car theft where you
                        live? <br /> · How much can you afford to pay, or are
                        willing to pay, out of your own pocket if you experience
                        an accident that isn’t covered by collision insurance?
                        <br />
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Box>
                <Box alignSelf={"right"}>
                  <Button colorScheme="red" size="md">
                    Take our quiz to learn more about car insurance!
                  </Button>
                </Box>
              </HStack>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem ml={2} mr={2}>
            <h2>
              <AccordionButton _expanded={{ bg: "mistyrose", color: "black" }}>
                <Box as="span" flex="1" textAlign="left">
                  Motorcycle Insurance
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem ml={7} mr={7}>
        <h2>
          <AccordionButton _expanded={{ bg: "mistyrose", color: "black" }}>
            <Box as="span" flex="1" textAlign="left">
              Life Insurance
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem ml={7} mr={7}>
        <h2>
          <AccordionButton _expanded={{ bg: "mistyrose", color: "black" }}>
            <Box as="span" flex="1" textAlign="left">
              Health, Disability, & Liability Insurance
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
      <Center>
        <Link
          href="https://www.statefarm.com/agent/?zipCode=52242"
          target="_blank"
        >
          <Button mt={5} mb={10} colorScheme="red" size="md">
            Talk to an agent!
          </Button>
        </Link>
      </Center>
    </Accordion>
  );
};

export default insuranceList;

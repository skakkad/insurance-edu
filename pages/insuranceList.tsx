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
    </Accordion>
  );
};

export default insuranceList;

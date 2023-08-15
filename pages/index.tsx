import Head from "next/head";
import { Inter } from "@next/font/google";
import HoverText from "./components/HoverText";
import { Text, Flex, Box, Grid, GridItem } from "@chakra-ui/react";
import styles from "./styles/fonts.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Igor Pinheiro | Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <main style={{ margin: "24px" }}>
        <Grid gap={4} templateColumns='repeat(12, 1fr)'>
          <GridItem bg='red' colSpan={7}>
            <Flex direction={"column"}>
              <Text fontSize={"106px"} className={styles.Glakome}>
                IGOR PINHEIRO
              </Text>
              <Flex  gap={4} bg='green' w='full' align={'flex-end'} direction={'column'}>
                <Box
                  p={"0.6px"}
                  h={"fit-content"}
                  w={"fit-content"}
                  background={"#FF9309"}
                  textAlign={"center"}
                >
                  <Text color={'white'} className={styles.Garnet} w={"fit-content"} fontSize={"24px"}>
                    ✌🏾 Hi there, fine?
                  </Text>
                </Box>
                <Box alignSelf={'flex-start'}>
                  <Text>FullStack Developer 💻</Text>
                </Box>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem bg='blue' colSpan={5}>
            Lalála´lá
          </GridItem>
        </Grid>
      </main>
    </>
  );
}

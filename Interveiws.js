import {
  Flex,
  useColorModeValue,
  Text,
  Button,
  Box,
  Spacer,
  Tab,
  TabPanel,
  Tabs,
  TabPanels,
  TabList,
  Stack,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Interviews = () => {
  const cardBackground = useColorModeValue("gray.100", "gray.700");

  //data of candidates
  const assignedCandidates = [
    {
      student_id: 1,
      student_name: "Geshan Sudasinghe",
      student_cv: "/cv/st1",
      student_email: "geshan@gmail.",
    },
    {
      student_id: 2,
      student_name: "Geshan Sudasinghe ",
      student_cv: "/cv/st2",
      student_email: "geshansudasinghe999@gmail.com",
    },
    {
      student_id: 3,
      student_name: "Janith Samee",
      student_cv: "/cv/st3",
      student_email: "janith@gmail.com",
    },
  ];

  const walkingCandidates = [
    {
      student_id: 1,
      student_name: "Janith Samee",
      student_cv: "/cv/st1",
      student_email: "st1@gmail.com",
    },
    {
      student_id: 2,
      student_name: "Janith Samee",
      student_cv: "/cv/st2",
      student_email: "geshansudasinghe@gmail.com",
    },
    {
      student_id: 3,
      student_name: "Janith Samee",
      student_cv: "/cv/st3",
      student_email: "st1@gmail.com",
    },
    {
      student_id: 4,
      student_name: "Geshan Sudasinghe ",
      student_cv: "/cv/st3",
      student_email: "geshansudasinghe999@gmail.com",
    },
    {
      student_id: 1,
      student_name: "Janith Samee",
      student_cv: "/cv/st1",
      student_email: "st1@gmail.com",
    },
    {
      student_id: 2,
      student_name: "Janith Samee",
      student_cv: "/cv/st2",
      student_email: "geshansudasinghe@gmail.com",
    },
    {
      student_id: 3,
      student_name: "Janith Samee",
      student_cv: "/cv/st3",
      student_email: "st1@gmail.com",
    },
    {
      student_id: 4,
      student_name: "Geshan Sudasinghe ",
      student_cv: "/cv/st3",
      student_email: "geshansudasinghe999@gmail.com",
    },
    {
      student_id: 1,
      student_name: "Janith Samee",
      student_cv: "/cv/st1",
      student_email: "st1@gmail.com",
    },
    {
      student_id: 2,
      student_name: "Janith Samee",
      student_cv: "/cv/st2",
      student_email: "geshansudasinghe@gmail.com",
    },
    {
      student_id: 3,
      student_name: "Janith Samee",
      student_cv: "/cv/st3",
      student_email: "st1@gmail.com",
    },
    {
      student_id: 4,
      student_name: "Geshan Sudasinghe ",
      student_cv: "/cv/st3",
      student_email: "geshansudasinghe999@gmail.com",
    },
  ];
  const inQueue = [
    {
      student_id: 1,
      student_name: "Geshan Sudasinghe",
      student_cv: "/cv/st1",
      student_email: "geshan@gmail.",
    },
    {
      student_id: 2,
      student_name: "Geshan Sudasinghe ",
      student_cv: "/cv/st2",
      student_email: "geshansudasinghe999@gmail.com",
    },
    {
      student_id: 3,
      student_name: "Janith Samee",
      student_cv: "/cv/st3",
      student_email: "janith@gmail.com",
    },
  ];
  const panelHistory = [];

  return (
    <Flex direction="column" alignItems="center">
      <Box
        bg={cardBackground}
        justify="center"
        width="50%"
        rounded={7}
        mt={3}
        shadow="md"
      >
        <Tabs isFitted>
          <TabList>
            <Tab>Assigned Candidates</Tab>
            <Tab>Walking Candidates</Tab>
            <Tab> In Queue</Tab>
            <Tab>Panel History</Tab>
          </TabList>
          <Stack
            height="50vh"
            maxW="100%"
            maxH="50vh"
            overflow="scroll"
            bg={cardBackground}
          >
            <TabPanels>
              <TabPanel>
                {assignedCandidates.map((student) => (
                  <StudentCard data={student} key={student.id} />
                ))}
              </TabPanel>
              <TabPanel>
                {walkingCandidates.map((student) => (
                  <StudentCard data={student} key={student.id} />
                ))}
              </TabPanel>
              <TabPanel>
                {inQueue.map((student) => (
                  <StudentCard data={student} key={student.id} />
                ))}
              </TabPanel>
              <TabPanel>
                {panelHistory.map((student) => (
                  <StudentCard data={student} key={student.id} />
                ))}
              </TabPanel>
            </TabPanels>
          </Stack>
        </Tabs>
      </Box>
    </Flex>
  );
};

function StudentCard({ data }) {
  const cardBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex width="100%" justify="center">
      <Box
        background={cardBackground}
        p={3}
        rounded={6}
        alignItems="center"
        shadow="md"
        width="100%"
        mt={3}
      >
        <Flex direction="row" width="100%">
          <Box alignItems="center" width="25%">
            {" "}
            <Text fontSize="md">{data.student_name}</Text>
          </Box>

          <Spacer />

          <Flex alignItems="center">
            {" "}
            <Text fontSize="md">{data.student_email}</Text>
          </Flex>

          <Spacer />

          <Router>
            <Flex alignItems="center">
              <Link to={data.student_cv}>
                <Button colorScheme="teal" size="sm" ml={20}>
                  CV
                </Button>
              </Link>
            </Flex>
          </Router>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Interviews;

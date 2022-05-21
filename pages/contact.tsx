import React from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const toast = useToast();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await axios.post(`/api/contact`, { ...data });
      console.log(res);

      reset();
      toast({
        title: "Message Sent",
        description: (
          <Text fontSize={18} textAlign="center">
            Thank you for contacting 3Dlicious! We will respond within 48 hours.
          </Text>
        ),
        status: "success",
        duration: 7000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Error Sending Message",
        description: (
          <Text fontSize={18} textAlign="center">
            A error has occurred when sending your message.
          </Text>
        ),
        status: "error",
        duration: 7000,
        isClosable: true,
      });

      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: "40%",
        padding: 16,
        borderRadius: 12,
        background: "white",
        boxShadow: "0 4px 8px #2D3748",
      }}
    >
      <FormControl mt={2} mb={6} isInvalid={errors.name && true}>
        <FormLabel>Name</FormLabel>
        <Input
          id="name"
          placeholder="Name"
          {...register("name", {
            required: { value: true, message: "Please enter your name" },
            minLength: { value: 3, message: "Minimum length should be 3" },
          })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl mb={6} isInvalid={errors.email && true}>
        <FormLabel>Email</FormLabel>
        <Input
          id="email"
          placeholder="Email"
          {...register("email", {
            required: { value: true, message: "Please enter your email" },
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl mb={6} h={40} isInvalid={errors.message && true}>
        <FormLabel>Message</FormLabel>
        <Textarea
          h="100%"
          id="message"
          placeholder="How can we help?"
          {...register("message", {
            required: { value: true, message: "Please enter your message" },
            minLength: { value: 10, message: "Minimum length should be 10" },
          })}
        />
        <FormErrorMessage>
          {errors.message && errors.message.message}
        </FormErrorMessage>
      </FormControl>
      <Center>
        <Button
          mt={6}
          type="submit"
          colorScheme="green"
          isLoading={isSubmitting}
        >
          Submit
        </Button>
      </Center>
    </form>
  );
};

const Contact = () => {
  return (
    <VStack h="56vh" w="65%">
      <Heading mb={2}>Contact 3Dlicious</Heading>
      <ContactForm />
    </VStack>
  );
};

export default Contact;

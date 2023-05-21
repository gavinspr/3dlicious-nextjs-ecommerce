import React, { ChangeEvent, useRef, useState } from "react";
import { Heading, VStack } from "@chakra-ui/react";

type PropTypes = {
  selectedView: string;
};

// todo: styles and components

const Form = ({ selectedView }: PropTypes) => {
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      try {
        const response = await fetch("/api/product/upload", {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: selectedFile,
        });

        if (response.ok) {
          const data = await response.json();
          console.log("File uploaded successfully:", data);
        } else {
          console.error("Error uploading file:", response.status);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
    <VStack outline="1px solid yellow" w="75%" h="100%">
      <Heading mt={2} fontSize={24}>
        {selectedView}
      </Heading>
      <>
        <div>
          <input type="file" accept=".csv" onChange={handleFileChange} />
          <button onClick={handleFileUpload} disabled={!selectedFile}>
            Upload
          </button>
        </div>
      </>
    </VStack>
  );
};

export default Form;

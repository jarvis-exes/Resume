const sendData = async (data, method = "post") => {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const options = {
      method: method.toUpperCase(),
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, options);

    if (response.ok) {
      const responseData = await response.json();
      console.log("API Response: ", responseData);
      return responseData;
    } else {
      throw new Error(`API request failed with status ${response.status}`);
    }
  } catch (error) {
    console.log(error, "Error");
  }
};

const dataToSend = {
  title: "My New Post",
  body: "This is the content of my new post.",
  userId: 1, // Replace with the desired user ID
};

sendData(dataToSend)
  .then((responseData) => {
    // Handle successful response
    console.log("Data sent successfully! Response:", responseData);
  })
  .catch((error) => {
    // Handle API request errors
    console.error("Error sending data:", error);
  });

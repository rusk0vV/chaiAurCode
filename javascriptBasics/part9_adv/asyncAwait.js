function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if(success) {
        resolve({ name: "chaicode", url: "https://chaicode.com" });
      }
      else {
        reject({ name: "chaicode", url: "https://chaicode.com" });
      }
    }, 4000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData();
    console.log("User data: ", userData);
    
    console.log("User data fetched successfully");
  } catch (error) {
    console.log("Error fetching data", error);
  }
}
getUserData();

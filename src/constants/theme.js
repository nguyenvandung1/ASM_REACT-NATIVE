// Import the Dimensions module from React Native
import Dimensions from "react-native";

// Get the width and height of the screen
const { width, height } = Dimensions.get("screen");

// Define the COLORS constant
const COLORS = {
  primary: "#f52d56",
  title: "#872F4A",
};

// Define the SIZES constant
const SIZES = {
  h1: 22,
  h2: 20,
  h3: 18,
  h4: 16,
  h5: 14,
  h6: 12,
  width,
  height,
};

// Export the constants
export { COLORS, SIZES };

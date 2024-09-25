import { config } from "./config/gluestack-ui.config";

import {
  Box,
  GluestackUIProvider,
  Text,
  SafeAreaView,
} from "@gluestack-ui/themed";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <SafeAreaView flex={1} justifyContent="center" alignItems="center">
        <Text size="mega">hello world</Text>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}

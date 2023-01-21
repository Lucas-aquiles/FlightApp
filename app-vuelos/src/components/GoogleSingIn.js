import React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { Button } from "react-native";
import { auth } from "./../firebase/auth-firebase";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { CLIENT_ID } from "@env";

WebBrowser.maybeCompleteAuthSession();

export default function GoogleSignInButton() {
  const [request, response, promtAsync] = Google.useIdTokenAuthRequest({
    clientId: CLIENT_ID ///Firebase
  });

  // useEffect(() => {
  //   if (response?.type === "success") {
  //     const { id_token } = response.params;
  //     const credential = GoogleAuthProvider.credential(id_token);
  //     signInWithCredential(auth, credential);
  //   }
  // }, [response]);

  return (
    <Button
      title="Sign In Google"
      disabled={!request}
      onPress={() => promtAsync()}
    />
  );
}

//lucas puedes hacer commit y yo lo termino de revisar estos no dejan la sala

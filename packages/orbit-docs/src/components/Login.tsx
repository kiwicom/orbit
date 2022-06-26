import React from "react";
import { useGoogleLogin } from "react-google-login";
import { SocialButton, Text, Stack } from "@kiwicom/orbit-components";
import { PageRendererProps } from "gatsby";

import Layout from "./Layout";
import { handleLogin } from "../services/auth";

const isAllowedEmail = (email: string) => /@kiwi.com/.test(email);

interface Props extends PageRendererProps {
  path: string;
}

const Login = ({ path, location }: Props) => {
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    if (!process.env.GATSBY_GOOGLE_CLIENT_ID) {
      setError("Google id is missing");
    }
  }, []);

  const handleSuccess = res => {
    if (isAllowedEmail(res.profileObj.email)) {
      handleLogin(res);
    } else {
      setError("not allowed email");
    }
  };

  const { signIn, loaded } = useGoogleLogin({
    onSuccess: handleSuccess,
    onFailure: ({ error: err }) => setError(err),
    clientId: process.env.GATSBY_GOOGLE_CLIENT_ID || "",
  });

  return (
    <Layout path={path} title="Login" location={location}>
      <Stack direction="column" align="center" spacing="large">
        <Text size="large">Please use your kiwi account to enter the dashboard page</Text>
        {error && (
          <Text type="critical" weight="bold" size="large">
            {error}
          </Text>
        )}
        {loaded && (
          <SocialButton size="large" type="google" onClick={signIn}>
            Login
          </SocialButton>
        )}
      </Stack>
    </Layout>
  );
};

export default Login;

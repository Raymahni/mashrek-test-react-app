import React, { ChangeEvent, useState } from "react";
import BaseInput from "../components/BaseInput";
import BaseButton from "../components/BaseButton";
import BaseSelect from "../components/BaseSelect";
import { validateUsername } from "../utils/Validation";
import { useTranslation } from "react-i18next";
import BaseLanguageSwitcher from "../components/BaseLanguageSwitcher";
import { useNavigate } from "react-router-dom";
import { storeUsername } from "../utils/Secured";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("UAE");
  const [validationMessage, setValidationMessage] = useState<string | null>(
    null
  );

  const handleLogin = () => {
    const validationMessage = validateUsername(username, country);
    if (!username || !password) {
      alert("Please enter username and password");
    } else if (validationMessage) {
      alert(validationMessage);
    } else {
      storeUsername(username);

      alert(
        `Login Button Pressed - Username: ${username}\nPassword: ${password}`
      );
      navigate("/user");
    }
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setUsername(text);
    setValidationMessage(validateUsername(text, country));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };

  const options = [
    { label: "UAE", value: "UAE" },
    { label: "India", value: "India" },
    { label: "USA", value: "USA" },
    { label: "Nigeria", value: "Nigeria" },
  ];

  const styles: { [key: string]: React.CSSProperties } = {
    title: {
      color: "white",
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
      padding: 8,
    },
    en: {
      backgroundColor: "green",
    },
    es: {
      backgroundColor: "red",
    },
    fr: {
      backgroundColor: "blue",
    },
  };
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <BaseLanguageSwitcher />
      <div className="w-full shadow bg-white border p-8 rounded-md lg:w-1/3">
         <h4
          style={{ ...styles.title, ...styles[t("theme")] }}
          className="text-center text-2xl mb-4 font-bold"
        >
          {t("welcome")}
        </h4>
        <form onSubmit={handleLogin}>
          <BaseSelect
            label={t("select_country")}
            options={options}
            value={country}
            onChange={handleCountryChange}
            placeholder="Choose an option"
          />
          <BaseInput
            label={t("username")}
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter Username"
            errorMessage="Input is invalid"
            successMessage="Input is valid"
          />
          {validationMessage && (
            <p className="text-red-500 mt-2">{validationMessage}</p>
          )}
          <BaseInput
            label={t("password")}
            value={password}
            onChange={handlePasswordChange}
            type="password"
            placeholder="Enter Password"
            errorMessage="Input is invalid"
            successMessage="Input is valid"
          />
          <BaseButton size="small" variant="primary" type="submit">
            {t("login")}
          </BaseButton>
        </form>
      </div>
    </div>
  );
};
export default Login;

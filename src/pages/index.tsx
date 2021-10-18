import type { NextPage } from "next";
import SafeEnvironmnet from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironmnet />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <UserInformation
        name={"Altieri Pereira"}
        picture={"https://github.com/altieripereira.png"}
        rating={3}
        description={""}
      ></UserInformation>

      <UserInformation
        name={"Teste"}
        picture={"https://github.com/altieripereira.png"}
        rating={5}
        description={""}
      ></UserInformation>
    </div>
  );
};

export default Home;

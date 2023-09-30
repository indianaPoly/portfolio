import { NextPage } from "next";
import Layout from "../components/layout/layout";

const Contact: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0E3A5E]">
      <Layout>
        <p>연락처 페이지입니다.</p>
      </Layout>
    </div>
  );
};

export default Contact;

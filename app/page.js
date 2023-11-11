"use client";
import Image from "next/image";
import { useState } from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import Header from "/app/components/Header";
import LeftSideBar from "/app/components/LeftSideBar";

export default function Home() {
  const [profile, setProfile] = useState(null);
  const [dashboard, setDashboard] = useState(false);

  const openDashboardHandler = () => {
    setDashboard(false);
  };

  return (
    <>
      <section className="flex flex-row justify-center items-center bg-gray-100 h-screen  gap-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="text-3xl w-1/2 px-8">
            <Image
              alt="Facebook-logo"
              src={"/pictures/facebook.svg"}
              width={300}
              height={300}
            />

            <p className="ml-8 -mt-3">
              Facebook helps you connect and share with the people in your life
            </p>
          </div>
          <div className="flex flex-col gap-4 w-1/3 bg-white rounded-lg p-5">
            <form className="flex flex-col gap-4 bg-white rounded-lg p-5">
              <LoginSocialFacebook
                appId="1554214208721143"
                onResolve={(response) => {
                  console.log(response);
                  setProfile(response.data);
                }}
                onClick={openDashboardHandler}
                onReject={(error) => {
                  console.log(error);
                }}
              >
                <FacebookLoginButton />
              </LoginSocialFacebook>

              {dashboard && (
                <div>
                  <Header profile={profile} />
                  <LeftSideBar profile={profile} />
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

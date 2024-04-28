import { useContext, useEffect, useState } from "react";
import styles from "../style";
import { discount } from "../assets";
import { Business, Footer, Navbar } from "../components";
import ImageModal from "../helper-components/ImageModal";
import { UserContext } from "../contexts/userContext";
import { ladyAvatar, manAvatar } from "../assets";
import { getProfileImageById } from "../apis/UserApi";
import UserDetails from "./UserDetails";

const UserHome = () => {
  const [showModal, setShowModal] = useState(false);
  const myUser = useContext(UserContext);
  const defaultAvatar =
    myUser && myUser.userData && myUser.userData.gender === "male"
      ? manAvatar
      : ladyAvatar;
  const [userImage, setUserImage] = useState(defaultAvatar);
  const [isImageSet, setIsImageSet] = useState(false);

  useEffect(() => {
    if (myUser && myUser.userData && myUser.userData.profile !== null) {
      showUserImage();
    }
    console.log("In useEffect");
  }, [isImageSet]);

  async function showUserImage() {
    try {
      let image = await getProfileImageById(myUser.userData.id);
      setUserImage(URL.createObjectURL(image.data));
      setIsImageSet(true);
    } catch (error) {
      console.error("Error fetching profile image:", error);
    }
  }

  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar isUser />
          </div>
        </div>
        <ImageModal
          setIsImageSet={setIsImageSet}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section
              id="userHome"
              className={`flex md:flex-row flex-col ${styles.paddingY}`}
            >
              <div
                className={`flex-1 ${styles.flexStart} w-[40%] flex-col xl:px-0 sm:px-16 px-6`}
              >
                <div className="flex flex-row just-between items-center w-full">
                  <img
                    src={userImage !== null ? userImage : manAvatar} // Assuming it's a PNG image
                    onClick={() => setShowModal(true)}
                    className="rounded-full w-72 h-72"
                  />
                </div>
                <div className="flex flex-row items-center py[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 ml-20">
                  <img src={discount} className="w-[32px] h-[32px]" />
                  <p className={`${styles.paragraph} ml-2`}>
                    <span className="text-white">Bharat </span>
                    <span className="text-white">Kumavat </span>
                  </p>
                </div>
              </div>

              <div
                className={`flex-1 flex ${styles.flexCenter} w-[60%] md:my-0 my-10 relative`}
              >
                <UserDetails />
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
              </div>
            </section>
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Business />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserHome;

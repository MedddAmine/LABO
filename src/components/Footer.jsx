import { FiMap, FaTwitter, FaYoutube } from "react-icons/fi";
import { BiSolidPhoneCall, BiTime } from "react-icons/bi";
import { GrMail } from "react-icons/gr";

export default function Footer() {
  const mapUrl =
    "https://maps.google.com/maps?q=123%20Main%20St%2C%20Anytown%20USA%2012345&t=&z=13&ie=UTF8&iwloc=&output=embed";

  return (
    <footer class="bg-gray-900 text-gray-300 py-6">
      <div class="max-w-[1200px] mx-auto flex flex-col md:flex-row ">
        <div class="w-[700px]">
          <p>
            <img src={"/images/fsjes_cuam.png"} width={400} />
          </p>
          <p className="mt-2 font-semibold">
            Plus d'infos sur Faculté des sciences juridiques , 
          </p>
          <p className="mt-2 font-semibold">économiques et
            sociales - Ait Melloul</p>
        </div>
        <div class="w-[500px]">
          <h5 class="text-lg font-semibold mb-4">Contactez-nous !</h5>
          <div class="contact-widget">
            <h6 class="mb-2 flex items-center">
              <FiMap class="mr-2"/>
              Route Nationale N° 10 cité Azrou Ait Melloul, Maroc
            </h6>
            <h6 class="mb-2 flex items-center">
              <BiSolidPhoneCall class="mr-2"/>
              Tél. Fax +212 5 28 24 24 23
            </h6>
            <h6 class="mb-2 flex items-center">
              <BiTime class="mr-2"/>
              Lun - Ven 8:30 - 16:30
            </h6>
            <h6 class="mb-2 flex items-center">
              <GrMail class="mr-2"/>
              fsjes-cuam.uiz.ac.ma
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
}

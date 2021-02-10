import React from "react";
import {
  GrInstagram,
  GrPinterest,
  GrFacebook,
  GrTwitter,
} from "react-icons/gr";

function StickySocials() {
  return (
    <div className="fixed right-16 top-1/3">
      <a href="http://www.instagram.com">
        <GrInstagram className="text-yellow-500 mb-6" />
      </a>
      <a href="http://www.pinterest.com">
        <GrPinterest className="text-yellow-500 mb-6" />
      </a>
      <a href="http://www.facebook.com">
        <GrFacebook className="text-yellow-500 mb-6" />
      </a>
      <a href="http://www.twitter.com">
        <GrTwitter className="text-yellow-500" />
      </a>
    </div>
  );
}

export default StickySocials;
